import React from 'react';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet } from 'react-native';
import { ThemeProvider } from './app/core/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import branch, { BranchParams } from 'react-native-branch';
// import branch from 'react-native-branch';
// const { BranchParams } = branch;

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import ContextsProvider from './app/context/ContextsProvider';
import { NavigationHelper } from './app/navigation/NavigationHelper';
import { store, persistor } from './app/store/store';
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';
import { LogBox } from 'react-native';
import { MainScreens } from './app/constants/Screens';


const App = () => {
  const [isEventExist, setIsEventExist] = React.useState(false);
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // const getDeepLinkParams = (params: BranchParams) => {
  //   let deeplinkPath;
  //   if (params?.$deeplink_path) {
  //     if (
  //       typeof params?.$deeplink_path === 'string' &&
  //       params?.$deeplink_path.includes('eventId=')
  //     ) {
  //       setIsEventExist(true);
  //     } else {
  //       setIsEventExist(false);
  //     }
  //     deeplinkPath = params.$deeplink_path;
  //   }
  //   return { deeplinkPath };
  // };

  const linking = {
    prefixes: ['pinggss://'],
    initialRouteName: 'Main',
    config: {
      screens: {
        Main: {
          path: 'main',
          screens: {
            Home: {
              path: 'home',
              initialRouteName: MainScreens.HomeFeed,
              screens: {
                [MainScreens.ActivityDetails]: 'activity/:activityId',
                [MainScreens.PageDetails]: isEventExist
                  ? 'PageDetails/:pageId/:eventId?'
                  : 'PageDetails/:pageId',
              },
            },

            userProfile: {
              path: 'userProfile/:userId',
              initialRouteName: MainScreens.UserProfile,
              screens: {
                [MainScreens.UserProfile]: 'userProfile/:userId',
              },
            },
          },
        },
      },
    },
    // async getInitialURL() {
    //   let initial = '';
    //   const branchData = await branch.getLatestReferringParams();
    //   const { deeplinkPath } = getDeepLinkParams(branchData);
    //   initial = `pinggss://${deeplinkPath}`;

    //   return initial;
    // },
    // subscribe(listener: any) {
    //   const unsubscribeFromBranch = branch.subscribe(({ error, params }) => {
    //     let linkUrl = '';
    //     if (error) {
    //     }

    //     if (params) {
    //       const { deeplinkPath } = getDeepLinkParams(params);
    //       linkUrl = `pinggss://${deeplinkPath}`;
    //     }

    //     listener(linkUrl);
    //   });

    //   return () => {
    //     unsubscribeFromBranch();
    //   };
    // },
  };

  return (
    <GluestackUIProvider mode="light"><Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={styles.flexOne}>
            <ApplicationProvider {...eva} theme={eva.light}>
              <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <IconRegistry icons={EvaIconsPack} />
                <ThemeProvider>
                    <ContextsProvider>
                      <NavigationContainer
                        // linking={linking}
                        ref={NavigationHelper.navigationRef}
                        onStateChange={(_state) => {
                          // TODO: Trigger when State change (Screen changed, options changed,...)
                        }}
                      >
                        <AppNavigator />
                      </NavigationContainer>
                    </ContextsProvider>
                </ThemeProvider>
              </SafeAreaProvider>
            </ApplicationProvider>
          </GestureHandlerRootView>
        </PersistGate>
      </Provider></GluestackUIProvider>
  );
}

export default App

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});