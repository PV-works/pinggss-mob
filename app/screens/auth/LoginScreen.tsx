import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import React, { memo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthScreens, MainScreens } from '../../constants/Screens';
import { themes } from '../../core/theme';
import { useAppDispatch } from '../../store/hooks/useApp';

type LoginScreenNavigationProp = NavigationProp<
    Record<string, object | undefined>,
    MainScreens.HomeFeed
>;

const LoginScreen = () => {
    // Set up Navigator
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Handles the login process when the login button is pressed.
     * @param {TLoginSchema} form - The login form data containing email and password.
     * @returns None
     */
    const onLoginPressed = async (form: any) => {
        const { email, password } = form;

        setIsLoading(true);

        try {
            console.log("LOGIN")
        } catch (error) {
            setIsLoading(false);
            const errorMessage = (error as Error).message || 'An unknown error occurred';
            console.error('Error during login:', errorMessage);
            Alert.alert(errorMessage);
        }
    };

    const disableButton = isLoading;

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#F89AEE', height: '50%', borderRadius: 50, borderWidth: 1, borderColor: '#FFF', marginVertical: 30  }}>

            </View>
            <View style={{flex:1,justifyContent: 'center'}}>
                <Text style={{color: '#464444', fontSize: 35}}> Discover Your</Text>
                <Text style={{color: '#464444'}}>Own Dream</Text>
            </View>
                <View style={{flex: 1}}>

                    <View style={[{ backgroundColor: '#FFF', marginVertical: 80, marginHorizontal: 20, borderColor: '#FFF', borderWidth: 1, borderRadius: 20}]}>

                        <View style={styles.mainSection}>
                            <View style={styles.logoContainer}>
                                <Text style={styles.logoText}>Pinggss</Text>
                            </View>
                            <Text style={styles.signInText}>Log In</Text>

                            <View
                                style={{
                                    flexDirection: 'column',
                                    gap: 12,
                                    alignItems: 'flex-end',
                                    marginBottom: 12,
                                }}
                            >

                                <View style={styles.forgotPassword}>
                                    <TouchableOpacity onPress={() => navigation.navigate(AuthScreens.ForgotPassword)}>
                                        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={onLoginPressed}
                                disabled={disableButton}
                                style={styles.loginButton}>
                                <Text>Log In with Email</Text>
                            </TouchableOpacity>
                            <View style={styles.separatorContainer}>
                                <View style={styles.separatorLine} />
                                <Text style={styles.separatorText}>or</Text>
                                <View style={styles.separatorLine} />
                            </View>

                            <View style={styles.dontHaveAccContainer}>
                                <Text style={styles.dontHaveAccText}>Don’t have an account?</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate(AuthScreens.SignUp);
                                    }}
                                >
                                    <Text style={styles.dontHaveAccLink}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainSection: {
        height: '100%',
        paddingHorizontal: 20,
        marginVertical: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 8,
    },
    logoText: {
        fontSize: 22,
        fontWeight: '600',
        color: themes.light.primary,
        display: 'flex',
    },
    signInText: {
        fontSize: 32,
        color: themes.light.black,
        width: '100%',
        fontWeight: '500',
        marginVertical: 24,
    },
    // Forgot password
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgotPasswordText: {
        fontSize: 16,
        fontWeight: '700',
        color: themes.light.primary,
        textDecorationLine: 'underline',
    },
    // Separator styles
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16, // Adjust this value as needed
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc', // Line color
    },
    separatorText: {
        marginHorizontal: 8,
        fontSize: 16,
        color: '#666', // Text color
        fontWeight: 'bold',
    },
    // Extra styles
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {
        color: themes.light.secondary,
    },

    loginButton: {
        height: 45,
    },
    // Don't have account
    dontHaveAccContainer: {
        display: 'flex',
        marginTop: 24,
        flexDirection: 'row',
        width: '100%',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    dontHaveAccText: {
        fontSize: 18,
        color: '#596C80',
    },
    dontHaveAccLink: {
        color: themes.light.primary,
        fontWeight: '600',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
});

export default memo(LoginScreen);
