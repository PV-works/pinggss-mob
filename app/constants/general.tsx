import { Platform } from 'react-native';

export const APP_STATE_STATUS_ACTIVE = 'active';

export const IN_APP_BROWSER_OPEN_TIMEOUT = 800;

export const SOMETHING_WENT_WRONG = 'Something went wrong';

export const IS_IOS = Platform.OS === 'ios';

export const BUTTON_TYPE = {
  PRIMARY: 'primary',
  RED: 'red',
  OUTLINE: 'outline',
  SECONDARY: 'secondary',
} as const;

export const REPORT_REASON = {
  SPAM_ADVERTISEMENT: 'Spam or Advertisement',
  BULLYING_HARASSMENT: 'Bullying or Harassment',
  FAKE_PROFILE_MISINFORMATION: 'Fake Profile / Misinformation',
  INAPPROPRIATE_CONTENT: 'Inappropriate Content',
  OTHER: 'Other',
} as const;

export const AUTO_COMPLETE_VARIANTS = {
  TEL: 'tel',
  TEL_DEVICE: 'tel-device',
  EMAIL: 'email',
} as const;

export const NETWORK_TABS = {
  CONNECTIONS: 'Connections',
  MENTORSHIP: 'Mentorship',
} as const;

export type TAutoCompleteTypes =
  (typeof AUTO_COMPLETE_VARIANTS)[keyof typeof AUTO_COMPLETE_VARIANTS];
export type TReportReason = (typeof REPORT_REASON)[keyof typeof REPORT_REASON];
export type TButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];
export type TNetworkTabsType = (typeof NETWORK_TABS)[keyof typeof NETWORK_TABS];

export const USER_TYPE ={
  PRE_MED_STUDENT: 'Pre-Med Student',
  MEDICAL_STUDENT:'Medical Student',
  RESIDENT_PHYSICIAN: 'Resident Physician',
  FELLOW_PHYSICIAN:'Fellow Physician',
  ATTENDING_PHYSICIAN:'Attending Physician'
}