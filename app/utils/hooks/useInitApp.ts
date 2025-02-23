import { useAppDispatch } from '../../store/hooks/useApp';
import { logout, setToken, setUserState } from '../../store/slices/user/slice';
// import { getCurrentUser as awsGetCurrentUser } from 'aws-amplify/auth';
// import { getUserProfile } from '../userUtils';
// import IAuthEvent from './interfaces/IAuthEvent';
// import { AuthScreens } from '../../constants/Screens';
// import { NavigationHelper } from '../../navigation/NavigationHelper';

const useInitApp = (withListener = true) => {
  const auth = null;
//   const auth = new AmplifyAuth();

  const dispatch = useAppDispatch();

//   const handleLogout = () => {
//     dispatch(logout());
//     auth.signOut();
//   };

//   const handleNavigate = (email: string, userId: string) => {
//     if (NavigationHelper.navigationRef.isReady()) {
//       NavigationHelper.navigateAndReset(AuthScreens.Welcome, { email, userId });
//     } else {
//       handleLogout();
//     }
//   };

  const initApp = async () => {
    try {
    //   const token = await auth.getSessionAccessToken();
    //   const amplifyUser = await getCurrentAmplifyUser();
    //   const currentUser = await getCurrentUser(amplifyUser.userId);
    //   if (amplifyUser && !currentUser) {
    //     handleNavigate(amplifyUser?.signInDetails?.loginId || '', amplifyUser.userId);
    //   }
    //   dispatch(setToken(token?.toString()));
    //   dispatch(setUserState({ currentUser, userId: amplifyUser.userId }));
        return true
    } catch (error) {
        return false;
    //   handleLogout();
    }
  };

//   const getCurrentAmplifyUser = async () => {
//     try {
//       return await awsGetCurrentUser();
//     } catch (error) {
//       console.error('Error getting current user:', error);
//       throw error;
//     }
//   };

//   const handleAuthEvent = ({ event }: IAuthEvent) => {
//     switch (event) {
//       case 'signedOut': {
//         dispatch(logout());
//         break;
//       }
//       case 'signedIn': {
//         break;
//       }
//       default: {
//         break;
//       }
//     }
//   };

//   const getCurrentUser = async (userId: string) => {
//     const practitionetApiAccessor = new PractitionetAPIAccessor();
//     try {
//       let [lCurrentUser, userToken] = await Promise.all([
//         getUserProfile(practitionetApiAccessor, userId),
//         practitionetApiAccessor.getUserFeedToken(userId),
//       ]);

//       // Merge getstream token to IUserProfile object, this will help user changed only in 1 state
//       lCurrentUser = {
//         ...lCurrentUser,
//         getStreamToken: userToken,
//       };

//       return lCurrentUser;
//     } catch (e) {
//       console.log('getCurrentUser failed --,>', e);
//     }
//   };


  return initApp;
};

export default useInitApp;
