import {
    CommonActions,
    createNavigationContainerRef,
    DrawerActions,
    NavigationAction,
    NavigationState,
    StackActions,
  } from '@react-navigation/native';
  import {
    CareerNavBottomTabParamListKeys,
    HomeBottomTabParamListKeys,
    MessagesNavBottomTabParamListKeys,
    NavigationParamList,
    NetworkNavParamListKeys,
    NotificationsNavBottomTabParamListKeys,
    UserNavParamListKeys,
  } from './types/MainTabNavigator.types';
  import { MainScreens } from '../constants/Screens';
  
  export class CNavigationHelper {
    navigationRef = createNavigationContainerRef<NavigationParamList>();
  
    navigate = <N extends keyof NavigationParamList>(
      name: N,
      params?: NavigationParamList[N],
    ) => {
      if (HomeBottomTabParamListKeys.includes(name)) {
        this.navigationRef.current?.navigate(
          MainScreens.Home,
          {
            screen: name,
            params,
          } as any,
        );
      } else if (CareerNavBottomTabParamListKeys.includes(name)) {
        this.navigationRef.current?.navigate(
          MainScreens.CareerNav,
          {
            screen: name,
            params,
          } as any,
        );
      } else if (NotificationsNavBottomTabParamListKeys.includes(name)) {
        this.navigationRef.current?.navigate(
          MainScreens.NotificationsNav,
          {
            screen: name,
            params,
          } as any,
        );
      } else if (MessagesNavBottomTabParamListKeys.includes(name)) {
        this.navigationRef.current?.navigate(
          MainScreens.MessagesNav,
          {
            screen: name,
            params,
          } as any,
        );
      } else if (UserNavParamListKeys.includes(name)) {
        this.navigationRef.current?.navigate(
          MainScreens.UserStack,
          {
            screen: name,
            params,
          } as any,
        );
      } if (NetworkNavParamListKeys.includes(name)) {
        this.navigationRef.current?.navigate(
          MainScreens.Network,
          {
            screen: name,
            params,
          } as any,
        );
      } else {
        this.navigationRef.current?.navigate(name as any, params ?? {});
      }
    };
  
    navigateAndReset = <N extends keyof NavigationParamList>(
      name: N,
      params?: NavigationParamList[N],
    ) => {
      try {
        this.navigationRef.current?.reset({
          routes: [{name: name, params: params}],
          index: 0,
        });
      } catch (e) {
        console.log(e);
      }
    };
  
    goBack = () => {
      this.navigationRef.current?.goBack();
    };
  
    popAndPush = <N extends keyof NavigationParamList>(
      pushScreen: N,
      params?: NavigationParamList[N],
    ) => {
      this.goBack();
      if (pushScreen) {
        this.navigate(pushScreen, params);
      }
    };
  
    pop = () => {
      this.navigationRef.current?.dispatch(StackActions.pop());
    };
    popToTop = () => {
      this.navigationRef.current?.dispatch(StackActions.popToTop());
    };
  
    push = <N extends keyof NavigationParamList>(
      name: N,
      params?: NavigationParamList[N],
    ) => {
      this.navigationRef.current?.dispatch(StackActions.push(name, params));
    };
  
    replace = <N extends keyof NavigationParamList>(
      name: N,
      params?: NavigationParamList[N],
    ) => {
      this.navigationRef.current?.dispatch(StackActions.replace(name, params));
    };
  
    resetAction = <N extends keyof NavigationParamList>(
      name: N,
      params?: NavigationParamList[N],
    ): CommonActions.Action => {
      return CommonActions.reset({
        index: 0,
        routes: [{name: name as string, params: params}],
      });
    };
  
    dispatch = (
      action: NavigationAction | ((state: NavigationState) => NavigationAction),
    ) => {
      this.navigationRef.current?.dispatch(action);
    };
  
    openDrawer = () => {
      this.navigationRef?.current?.dispatch(DrawerActions.openDrawer());
    };
  
    closeDrawer = () => {
      this.navigationRef?.current?.dispatch(DrawerActions.closeDrawer());
    };
  
    toggleDrawer = () => {
      this.navigationRef?.current?.dispatch(DrawerActions.toggleDrawer());
    };
  
    getCurrentRoute = () => {
      return this.navigationRef?.current?.getCurrentRoute?.();
    };
  }
  
  export const NavigationHelper = new CNavigationHelper();
  