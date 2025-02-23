import { Platform } from 'react-native';
import * as Application from 'expo-application';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const DELAY_SAFE_SHOW_MODAL_IOS = 900;
export const applicationId = Application.applicationId ?? '';