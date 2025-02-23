import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './app/store/store';
import App from './App';

function Root() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<View />}>
                    <App />
                </Suspense>
            </PersistGate>
        </Provider>
    );
}

export default Root;
