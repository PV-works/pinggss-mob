import {
    View,
    Text,
    SafeAreaView,
  } from 'react-native';
  import React, { useLayoutEffect } from 'react';
  import { useNavigation, NavigationProp } from '@react-navigation/native';
  
//   import styles from './styles';
//   import Colors from '../../../constants/Colors';
//   import DateTimeHelper from '../../../utils/helpers/DateTimeHelper';
  import { useAppDispatch, useAppSelector } from '../../store/hooks/useApp';
  import { userSelector } from '../../store/slices/user/selectors';
//   import { commonStyles } from '../../../core/styles';

  
  const HomeFeedScreen = () => {
    //#region Hook
    type HomeFeedScreenNavigationProp = NavigationProp<Record<string, object | undefined>>;
    const navigation = useNavigation<HomeFeedScreenNavigationProp>();
    const { userId, currentUser } = useAppSelector(userSelector);
    const dispatch = useAppDispatch();
  
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerLeft: () => null, // Removes the left element (back button)
        headerTitle: () => null, // Removes the title
        headerRight: () => null, // Removes the right element
        headerShadowVisible: false, // Removes the shadow/underline below the header
        header: () => (
          <View
            style={{
              height: 30,
            //   backgroundColor: commonStyles.bgMain.backgroundColor,
              justifyContent: 'center',
            }}
          ></View>
        ),
      });
    }, [navigation]);
  
    return (
      <SafeAreaView>
        <Text>HOME SCREEN</Text>
      </SafeAreaView>
    );
  };
  
  export default HomeFeedScreen;
  