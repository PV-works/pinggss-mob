import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIGatewayConsts } from '../../constants/mainAPI';
import TokenManager from '../../utils/tokenManager';
import { IUserProfile } from '../../models/IUserProfile';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${APIGatewayConsts.Endpoint}`,
    prepareHeaders: async (headers) => {
      // Fetch token dynamically
      const token = await TokenManager.getInstance().getToken();
      if (token) headers.set('Authorization', `Bearer ${token}`);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: [ 'Users' ], // ✅ Define tag for cache management
  endpoints: (builder) => ({
    // ✅ Update Page API (Invalidates Cache)
    deleteUserProfile: builder.mutation<void, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [ 'Users' ],
    }),
    updateUser: builder.mutation<any, { userId: string; updateRequest: any }>({
      query: ({ userId, updateRequest }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: updateRequest,
      }),
      invalidatesTags: [ 'Users' ], // ✅ Clear cache and refetch listPages on success
    }),
    userDetails: builder.query<IUserProfile, { userId: string }>({
      query: ({ userId }) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
    }),
    getProfileImagePresignedUrl: builder.query({
      query: ({ userId, imageType, profileUploadType }) => ({
        url: `/users/${userId}/s3/upload?profileUploadType=${profileUploadType}&imageType=${imageType}`,
      }),
    }),
    uploadImageUsingPresignedUrl: builder.mutation({
      query: ({ presignedS3Url, image }) => ({
        url: `/${presignedS3Url}`,
        method: 'PUT',
        body: image,
        headers: new Headers({
          'Content-Type': 'image/*',
        }),
      }),
      invalidatesTags: [ 'Users' ]
    }),

    getUserConnections: builder.query({
      query: ({ userId, connectedUserId }) => ({
        url: `/connections/status?userId=${userId}&connectedUserId=${connectedUserId}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 1
    }),

    deleteDeviceToken: builder.mutation<string, { userId: string; fcmToken: string }>({
      query: ({ userId, fcmToken }) => ({
        url: `/users/${userId}/deviceTokens?token=${fcmToken}`,
        method: 'DELETE',
      }),
    }),

    getUserConnectionsList: builder.query({
      query: ({ userId, lastEvaluatedKey }) => {
        let url = `/users/${userId}/connections`;
        if (lastEvaluatedKey) {
          url += url.includes('?') ? '&' : '?';
          url += `lastEvaluatedKey=${lastEvaluatedKey}`;
        }
        return {
          url,
          method: 'GET',
        };
      },
      keepUnusedDataFor: 1,
    }),
    // this is used for lazy user details 
    userLazyDetails: builder.query<IUserProfile, { userId: string }>({
      query: ({ userId }) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
    }),

  }),
});

export const {
  useDeleteUserProfileMutation,
  useUserDetailsQuery,
  useUpdateUserMutation,
  useLazyGetProfileImagePresignedUrlQuery,
  useUploadImageUsingPresignedUrlMutation,
  useLazyGetUserConnectionsQuery,
  useDeleteDeviceTokenMutation,
  useLazyGetUserConnectionsListQuery,
  useLazyUserLazyDetailsQuery
} = userApi; // Ensure this export exists
