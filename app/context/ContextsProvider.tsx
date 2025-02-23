import React from 'react';
import { ViewProps } from 'react-native';
// import { CurrentUserProvider } from './CurrentUserContext';

const ContextsProvider: React.FC<ViewProps> = ({ children }) => {
    return (
        // <CurrentUserProvider> // TODO: needs to be removed after testing
        <>{ children }</>
        // </CurrentUserProvider>
    );
};

export default ContextsProvider;
