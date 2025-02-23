import React, { createContext, useContext } from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';
import SuccessToast from '../assets/icons/toastSucces.svg';

interface ToastContextType {
  showToast: (message: string, type?: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    Toast.show({
      type,
      text1: message,
      position: 'bottom',
      visibilityTime: 3000,
    });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
    {children}
    <Toast
      config={{
        success: (props) => (
          <BaseToast
            {...props}
            style={{
              borderLeftWidth: 0,
              backgroundColor: 'white',
              borderRadius: 20,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 5,
              width: '95%',
              alignSelf: 'center', 
            }}
            contentContainerStyle={{
              paddingHorizontal: 15,
            }}
            text1Style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'black',
            }}
            renderLeadingIcon={() => (
              <SuccessToast />
            )}
          />
        ),
      }}
    />
  </ToastContext.Provider>
  
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
