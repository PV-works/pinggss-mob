import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    StyleSheet,
    Image,
    View,
    ImageSourcePropType,
    Text,
    Dimensions,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreens } from '../constants/Screens';

import HomeFeedScreen from '../screens/HomeScreen/HomeScreen';
import {
    MainTabParamList,
    SettingsStackParamList,
    UserNavigatorParamList,
} from './types/MainTabNavigator.types';
// import { themes } from '../core/theme';
import Images from '../constants/Images';

import { commonStyles } from '../core/styles';
import { userSelector } from '../store/slices/user/selectors';
import { useAppSelector } from '../store/hooks/useApp';
import { isIOS, isAndroid } from '../constants/UI';

function TabBarIcon(props: {
    source: React.ComponentProps<typeof Image>['source'] | string;
    color: string;
    isImage?: boolean;
}) {
    return (
        <Image
            source={typeof props.source !== 'string' ? props.source : { uri: props.source }}
            style={[styles.iconStyle, { tintColor: props.color, borderRadius: props.isImage ? 100 : 0 }]}
        />
    );
}

const Tab = createBottomTabNavigator<MainTabParamList>();
const HomeStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator<UserNavigatorParamList>();
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();
const { width, height } = Dimensions.get('window'); // Get device width for styling

// function SettingsStackNavigator() {
//     return (
//         <SettingsStack.Navigator>
//             <SettingsStack.Screen
//                 name="Settings"
//                 component={SettingsScreen}
//                 options={{ headerBackTitleVisible: false }}
//             />
//         </SettingsStack.Navigator>
//     );
// }

// function UserStackNavigator({ route }: { route: { params: { userId: string } } }) {
//     const { userId } = route.params || {}; // Extract userId

//     return (
//         <UserStack.Navigator>
//             <UserStack.Screen
//                 name={MainScreens.UserProfile}
//                 component={UserProfileScreen}
//                 options={{
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//                 initialParams={{ userId }} // Pass it down to the screen
//             />
//             <UserStack.Screen
//                 name={MainScreens.UserConnections}
//                 component={UserConnections}
//                 options={{
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.ReportOrBlockUser}
//                 component={ReportOrBlockUserScreen}
//                 options={{
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.ReportUser}
//                 component={ReportUserScreen}
//                 options={{
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.Success}
//                 component={SuccessScreen}
//                 options={{
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.SettingsScreen}
//                 component={SettingsStackNavigator}
//                 options={{ headerBackTitleVisible: false, headerShown: false }}
//             />
//             <UserStack.Screen
//                 name="EditProfile"
//                 component={EditProfileScreen}
//                 options={{ headerBackTitleVisible: false, headerShown: false }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.AddItem}
//                 component={AddItemScreen}
//                 options={{ headerBackTitleVisible: false }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.EditItem}
//                 component={EditItemScreen}
//                 options={{ headerBackTitleVisible: false }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.ManageAccount}
//                 component={ManageAccountScreen}
//                 options={{ headerBackTitleVisible: false, headerBackVisible: false }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.ChangePassword}
//                 component={ChangePasswordScreen}
//                 options={{ headerBackTitleVisible: false, headerBackVisible: false }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.InvitePeople}
//                 component={InvitePeopleScreen}
//                 options={{
//                     headerShown: true,
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.CreateMentorshipProfile}
//                 component={CreateMentorshipProfileScreen}
//                 options={{
//                     headerShown: true,
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.BecomeMentorMentee}
//                 component={BecomeMentorMentee}
//                 options={{
//                     headerShown: false,
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//             />
//             <UserStack.Screen
//                 name={MainScreens.BlockUserScreen}
//                 component={BlockUserScreen}
//                 options={{
//                     headerShown: false,
//                     headerBackTitleVisible: false,
//                     headerBackVisible: false,
//                 }}
//             />
//         </UserStack.Navigator>
//     );
// }

function HomeStackNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={MainScreens.HomeFeed} component={HomeFeedScreen} />
        </HomeStack.Navigator>
    );
}

const MainTabNavigator = () => {
    const { currentUser } = useAppSelector(userSelector);

    const TabBarIconComponent = ({
        focused,
        imageSource,
        title,
        isImage = false,
    }: {
        isImage?: boolean;
        focused: boolean;
        imageSource: ImageSourcePropType | string;
        title: string;
        style?: any;
    }) => {
        const color = focused ? commonStyles.textAccent.color : commonStyles.textTabNoneActive.color;
        return (
            <>
                <View style={[styles.iconContainer, focused && styles.focusedView]}>
                    <TabBarIcon
                        source={imageSource}
                        color={isImage === true ? '' : color}
                        isImage={isImage}
                    />
                    <Text style={[styles.tabLabel, { color }]}>{title}</Text>
                </View>
            </>
        );
    };

    const getTabBarHeight = () => {
        // Use a more responsive approach by considering both width and height for dynamic scaling
        const isLargeScreen = width > 400;
        const isTallScreen = height > 700;

        if (isIOS) {
            // For iOS, adjust based on screen size
            return isLargeScreen && isTallScreen ? 110 : width > 390 ? 95 : width < 400 ? 70 : 100;
        } else if (isAndroid) {
            // For Android, we might want to adjust differently based on screen width
            return isLargeScreen && isTallScreen ? 70 : 70;
        }
        return 70; // Default height
    };

    return (
        <Tab.Navigator
            initialRouteName={MainScreens.Home}
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: 'rgba(0, 0, 0, 0.06)',
                    height: getTabBarHeight(),
                },
            }}
        >
            <Tab.Screen
                name={MainScreens.Home}
                component={HomeStackNavigator}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: (props: any) => (
                        <TabBarIconComponent {...props} imageSource={Images.homeTabIcon} title={'Feed'} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name={MainScreens.UserProfile}
                component={UserStackNavigator}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: (props) => (
                        <TabBarIconComponent
                            {...props}
                            imageSource={currentUser ? currentUser?.profilePicture : ''}
                            title={'Profile'}
                            isImage={true}
                        />
                    ),
                }}
                initialParams={{ userId: currentUser?.userId }} // Pass user ID
            /> */}
        </Tab.Navigator>
    );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
    notificationAlert: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(143 194 189)',
        position: 'absolute',
        top: -2,
        right: -2,
        width: 15,
        height: 15,
        borderRadius: 20,
    },
    notificationText: {
        color: 'black',
        fontSize: 8,
    },
    iconStyle: {
        width: 30,
        height: 30,
        marginBottom: -15,
    },
    badgeStyle: {
        backgroundColor: 'rgb(143 194 189)', // Set your desired background color here
        color: 'black', // Text color
        fontSize: 8, // Font size for the badge text
        textAlign: 'center', // Center-align the badge text
        lineHeight: 16, // Vertically align the text within the badge
    },
    focusedView: {
        backgroundColor: 'rgba(23, 123, 238, 0.08)',
        borderRadius: 8,
    },
    iconContainer: {
        paddingVertical: width > 400 ? 6 : 4,
        paddingHorizontal: width > 400 ? 16.4 : 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: 11,
        marginTop: 15, // Adds space between icon and text
        fontFamily: 'Menrope_600SemiBold',
        lineHeight: 16,
    },
});
