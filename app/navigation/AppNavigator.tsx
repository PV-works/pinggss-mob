import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
// import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import { UserProfileProvider } from '../context/UserProfileContext';
import { useAppDispatch, useAppSelector } from '../store/hooks/useApp';
import { accessTokenSelector } from '../store/slices/user/selectors';
import { appSelector } from '../store/slices/general/selectors';
import useInitApp from '../utils/hooks/useInitApp';
import { setGeneralState } from '../store/slices/general/slice';
import { AppScreens } from '../constants/Screens';
import AuthNavigator from './AuthNavigator';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Modal: undefined;
  PageDetails: { pageId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const AppNavigator = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(accessTokenSelector);
  const { isBootSplashPassed } = useAppSelector(appSelector);

  const initApp = useInitApp();

  useEffect(() => {
    if (!isBootSplashPassed) {
      initApp().then(() => {
        dispatch(setGeneralState({ isBootSplashPassed: true }));
        SplashScreen.hideAsync();
      });
    }
  }, [isBootSplashPassed]);

  return isBootSplashPassed ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {accessToken ? (
        <>
          <Stack.Screen name={AppScreens.Main}>
            {() => (
              <UserProfileProvider>
                <MainTabNavigator />
              </UserProfileProvider>
            )}
          </Stack.Screen>
        </>
      ) : (
        <Stack.Screen name={AppScreens.Auth} component={AuthNavigator} />
      )}
    </Stack.Navigator>
  ) : null;
};

export default AppNavigator;
