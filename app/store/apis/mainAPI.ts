import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as queryString from 'query-string';

import { APIGatewayConsts } from '../../constants/mainAPI';

import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/dist/query/react';

const authBaseQuery = fetchBaseQuery({
  baseUrl: APIGatewayConsts.Endpoint,
  prepareHeaders: (headers, { getState }) => {
    // some logic with headers
    return headers;
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

export const appBaseQueryWithReauthenticate: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await authBaseQuery(args, api, extraOptions);
  if (result.error) {
    // some logic with error
  }
  return result;
};

const mainApi = createApi({
  reducerPath: 'mainApi',
  tagTypes: [],
  baseQuery: appBaseQueryWithReauthenticate as BaseQueryFn<
    string | FetchArgs,
    unknown,
    unknown,
    object
  >,
  endpoints: () => ({}),
});

export default mainApi;
