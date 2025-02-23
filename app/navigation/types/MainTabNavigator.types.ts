import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { IUserProfile } from '../../models/IUserProfile';
import { RootStackParamList } from '../AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabParamList } from '@react-navigation/bottom-tabs';

export const BottomTabParamListKeys = [
  'Home',
  'Network',
  'CareerNav',
  'NotificationsNav',
  'MessagesNav',
];
export const HomeBottomTabParamListKeys = [
  'HomeFeed',
  'ActivityDetails',
  'UserStack',
  'NewPost',
  'Search',
];
export const CareerNavBottomTabParamListKeys = ['CareerNav'];
export const NotificationsNavBottomTabParamListKeys = ['Notifications', 'NotificationDetails'];
export const MessagesNavBottomTabParamListKeys = ['Messages', 'MessageChat'];
export const UserNavParamListKeys = [
  'UserProfile',
  'UserConnections',
  'SettingsScreen',
  'EditProfile',
  'AddItem',
  'EditItem',
  'ChangePassword',
];

export const NetworkNavParamListKeys = [
  'MyNetwork',
  'Mentorship',
  'MyMentorship',
  'MyMentorship',
  'CreateMentorshipProfile',
  'UserStack',
];

export type BottomTabParamList = {
  Home: {
    userId: string;
    item: string;
    headerTitle: string;
  };
  Network: undefined;
  CareerNav: {
    s3Path?: string;
  };
  NotificationsNav: {
    userId: string;
  };
  MessagesNav: undefined;
};

export type SettingsStackParamList = {
  Settings: {
    userId: string;
  };
};

export type CareerStackParamList = {
  CareerNav: {
    s3Path?: string;
  };
  AIAdvisor: undefined;
  AIAdvisorSetGoals: undefined;
  AIAdvisorAnswerQuestions: undefined;
  AIAdvisorQuestionSteps: undefined;
  AIAdvisorGenerate: undefined;
};

export type HomeNavigatorParamList = {
  CreateEvent: {
    userId: string;
    item: string;
    pageId: string;
    eventId: string;
    headerTitle: string;
    getPageDetails?: void;
  };
  CreatePage: {
    userId: string;
    pageId: string;
    item: string;
    headerTitle: string;
  };
  PageDetails: {
    userId: string;
    item: string;
    headerTitle: string;
    pageId: string;
    eventId: string;
    isNewCreated?: boolean;
  };

  PageListScreen: {
    type: string;
    userId: string;
  };
  UserListScreen: {
    connectionList: undefined;
    pageId: string;
  };
  ActivityDetails: {
    activityId: string;
    shouldFocusComment?: boolean;
  };
  EditPost: {
    activityId: string;
    shouldFocusComment?: boolean;
  };
};

export type UserNavigatorParamList = {
  UserProfile: {
    userId: string;
    currentUserProfile?: IUserProfile;
  };
  ReportOrBlockUser: {
    userId: string;
  };
  ReportUser: {
    userId: string;
  };
  Success: {
    title: string;
  };
  UserConnections: {
    userId: string;
  };
  EditProfile: {
    userId: string;
    currentUserProfile: IUserProfile;
  };
  Settings: {
    userId: string;
  };
  Tour: undefined;
  AddItem: {
    AddSectionType: string;
    userId: string;
  };
  EditItem: {
    userId: string;
    type: string;
    item: any;
    id: string;
  };
  ChangePassword: {
    username: string;
  };
  ManageAccount: {
    username: string;
  };
  InvitePeople: undefined;
  CreateMentorshipProfile: {
    userId: string;
    currentUserProfile: IUserProfile;
  };
  MentorMenteeProfile: {};
};

export type NotificationsStackParamList = {
  Notifications: {
    userId: string;
  };
};
export type MessagesStackParamList = {
  Messages: undefined;
  MessageChat: undefined;
  NewChat: undefined;
};

export type MainTabParamList = BottomTabParamList &
  NotificationsStackParamList &
  MessagesStackParamList &
  CareerStackParamList & {
    HomeFeed: undefined;
    MyNetwork: undefined;
    MyConnections: undefined;
    ConnectionRequests: undefined;
    Mentorship: {
      userId: string;
    };
    ActivityDetails: {
      activityId: string;
      shouldFocusComment?: boolean;
      scrollToCommentId?: string;
    };
    InviteYourPeers: undefined;
    UserProfile: {
      userId: string;
    };
    SearchLandingScreen: { query: string };
  };

export type NavigationParamList = RootStackParamList & MainTabParamList;

export type AppNavigationScreenProps<
  T extends ParamListBase,
  S extends keyof T,
> = NativeStackScreenProps<T, S>; //FIXME: should be more specific
export type CommonNavigationProp = NavigationProp<Record<string, object | undefined>>;
