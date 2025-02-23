import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';
// import SignUpScreen from '../screens/auth/SignUpScreen';
// import VerificationCodeScreen from '../screens/auth/VerificationCodeScreen';
// import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
// import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import { AuthScreens } from '../constants/Screens';
// import WelcomeScreen from '../screens/auth/WelcomeScreen';
// import AuthNavHeaderBackButton from '../components/AuthNavHeaderBackButton';
// import SetPasswordScreen from '../screens/auth/SetPasswordScreen';
// import ForgotPassCodeScreen from '../screens/auth/ForgotPassCodeScreen';
// import PasswordResetSuccessScreen from '../screens/auth/PasswordResetSuccessScreen';
// import InviteYourPeersComponent from '../screens/auth/InviteYourPeersComponent';

export type AuthStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  SetPasswordScreen: {
    email: string;
  };
  ForgotPassCodeScreen: {
    email: string;
  };
  PasswordResetSuccessScreen: {
    email: string;
  };
  VerificationCode: {
    username: string;
    userId: string;
  };
  ForgotPassword: undefined;
  ResetPassword: {
    username: string;
  };
  Welcome: {
    email: string;
    userId: string;
  };
  InviteFriends: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptionsWithBackButton = {
  headerTransparent: true,
  headerShadowVisible: false,
  title: '',
  headerLeft: () => null,
};

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={AuthScreens.Login}
      component={LoginScreen}
      options={{
        ...screenOptionsWithBackButton,
        headerShown: false, // Hides the back arrow and the header
      }}
    />
    {/* <Stack.Screen
      name={AuthScreens.SignUp}
      component={SignUpScreen}
      options={{
        ...screenOptionsWithBackButton,
        headerShown: false, // Hides the header for this screen
      }}
    />
    <Stack.Screen
      name={AuthScreens.SetPasswordScreen}
      component={SetPasswordScreen}
      options={{
        ...screenOptionsWithBackButton,
        headerShown: false,
      }} // Show header with back button
    />
    <Stack.Screen
      name={AuthScreens.VerificationCode}
      component={VerificationCodeScreen}
      options={{
        ...screenOptionsWithBackButton,
        headerShown: false, // Hides the header for this screen
      }}
    />
    <Stack.Screen
      name={AuthScreens.ForgotPassword}
      component={ForgotPasswordScreen}
      options={{
        ...screenOptionsWithBackButton,
        headerShown: false, // Hides the header
      }}
    />
    <Stack.Screen
      name={AuthScreens.ForgotPassCodeScreen}
      component={ForgotPassCodeScreen}
      options={{
        ...screenOptionsWithBackButton,
        headerShown: false, // Hides the header
      }}
    />
    <Stack.Screen
      name={AuthScreens.PasswordResetSuccessScreen}
      component={PasswordResetSuccessScreen}
      options={{
        ...screenOptionsWithBackButton,
        headerShown: false, // Hides the header
      }}
    />
    <Stack.Screen
      name={AuthScreens.ResetPassword}
      component={ResetPasswordScreen}
      options={{
        ...screenOptionsWithBackButton,
        headerShown: false, // Hides the header
      }}
    />

    <Stack.Screen
      name={AuthScreens.Welcome}
      component={WelcomeScreen}
      options={{ headerShown: false }} // Hides the header
    />

    <Stack.Screen
      name={AuthScreens.InviteFriends}
      component={InviteYourPeersComponent}
      options={{
        headerShown: false, // Hides the header
      }}
    /> */}
  </Stack.Navigator>
);

export default AuthNavigator;
