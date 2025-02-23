import { IUserAwardScholarship } from './IUserAwardScholarship';
import { IUserCertification } from './IUserCertification';
import { IUserEducation } from './IUserEducation';
import { IUserExperience } from './IUserExperience';
import { IUserInvolvement } from './IUserInvolvement';
import { IUserPage } from './IUserPage';
import { IUserPublicationPresentation } from './IUserPublicationPresentation';
import { IUserRotation } from './IUserRotation';

export interface IUserProfile {
  userId: string;
  userType: string;
  name: string;
  email: string;
  connections: number;
  mentors: number;
  mentees: number;
  state: string;
  city: string;
  headline: string;
  bio?: string;
  accountCreationDate?: string; // Timestamp in string format
  lastLoginDate?: string; // Timestamp in string format
  verificationStatus?: string;
  medicalInterests: string[];
  subscriptionTier?: string;
  education: IUserEducation[];
  experience: IUserExperience[];
  involvements: IUserInvolvement[];
  pages?: IUserPage[];
  publicationsPresentations: IUserPublicationPresentation[];
  certifications: IUserCertification[];
  rotations: IUserRotation[];
  awardsScholarships: IUserAwardScholarship[];
  profilePicture: string;
  profileBanner: string;

  /// Local props
  /**
   * getStream Token from userId
   */
  getStreamToken?: string;
}
