import { IUserProfile } from "../../../../models/IUserProfile";

export default interface IUser {
  accessToken?: string;
  userId: string;
  currentUser?: IUserProfile;
}
