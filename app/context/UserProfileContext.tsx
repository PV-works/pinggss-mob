import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IUserProfile } from '../models/IUserProfile';

type UserProfileContextType = {
  userProfileCache: Map<string, IUserProfile>;
  setUserCache: (userId: string, profile: IUserProfile) => void;
  clearUserProfileCache: () => void; // Function to clear the cache
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

interface UserProfileProviderProps {
  children: ReactNode;
}

export const UserProfileProvider: React.FC<UserProfileProviderProps> = ({ children }) => {
  //#region State
  const [userProfileCache, setUserProfileCache] = useState<Map<string, IUserProfile>>(new Map());

  const setUserCache = (userId: string, profile: IUserProfile) => {
    setUserProfileCache((prevCache) => new Map(prevCache.set(userId, profile)));
  };

  const clearUserProfileCache = () => {
    setUserProfileCache(new Map());
  };

  return (
    <UserProfileContext.Provider value={{ userProfileCache, setUserCache, clearUserProfileCache }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = (): UserProfileContextType => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};
