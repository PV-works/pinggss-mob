import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import React, { memo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { AuthScreens, MainScreens } from '../../constants/Screens';
import { themes } from '../../core/theme';
import { useAppDispatch } from '../../store/hooks/useApp';
import { Icon, Input, CheckBox, TabView, Tab, Layout } from '@ui-kitten/components';

type LoginScreenNavigationProp = NavigationProp<
    Record<string, object | undefined>,
    MainScreens.HomeFeed
>;

const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // States for email, password, and name
    const [email, setEmail] = useState('');
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [checked, setChecked] = useState(false);

    // Helper to validate email (trimming spaces)
    const isValidEmail = (email: string): boolean => {
        const trimmedEmail = email.trim();
        const re = /\S+@\S+\.\S+/;
        return re.test(trimmedEmail);
    };

    // For login: email must not be empty, be valid and password >=6 characters.
    const isLoginValid = email.trim() !== '' && isValidEmail(email) && value.trim().length >= 6;
    // For register: name must be non-empty in addition to login criteria.
    const isRegisterValid = name.trim() !== '' && email.trim() !== '' && isValidEmail(email) && value.trim().length >= 6;

    const disableButton = isLoading || (selectedIndex === 0 ? !isLoginValid : !isRegisterValid);

    const onLoginPressed = async (form: any) => {
        const { email, password } = form;
        setIsLoading(true);
        try {
            console.log("LOGIN");
            // Proceed with login
        } catch (error) {
            setIsLoading(false);
            const errorMessage = (error as Error).message || 'An unknown error occurred';
            console.error('Error during login:', errorMessage);
            Alert.alert(errorMessage);
        }
    };

    const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );
    const emailIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={'email'} />
        </TouchableWithoutFeedback>
    );
    const nameIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={'person'} />
        </TouchableWithoutFeedback>
    );

    const renderTitle = (title: any, index: number) => (
        <Text style={{
            color: selectedIndex === index ? '#9B59B6' : '#7F8C8D',
            fontWeight: 'bold',
            fontSize: 16,
        }}>
            {title}
        </Text>
    );

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            contentContainerStyle={{ backgroundColor: '#70f8ff25', height: '100%', flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100} // adjust as needed
        >
            <View style={{ backgroundColor: '#FFFFFF', marginTop: '20%', marginHorizontal: 20, borderRadius: 30, padding: 20 }}>
                <Image source={require("../../assets/icon1.png")} style={{ width: '25%', height: 85, marginBottom: 30, marginTop: 30, alignSelf: 'center' }} />
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 20, fontWeight: '900', color: '#2C3E50' }}>
                    Welcome to Pinggss
                </Text>
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 14, marginBottom: 10, marginTop: 10, color: '#7F8C8D' }}>
                    By signing in you are agreeing our
                </Text>
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 14, color: '#2C3E50' }}>
                    Terms and Privacy Policy
                </Text>

                <TabView
                    indicatorStyle={{ backgroundColor: '#9B59B6' }}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}
                    style={{ marginTop: 20 }}
                >
                    <Tab selected={selectedIndex === 0} title={() => renderTitle('LOGIN', 0)}>
                        <Layout style={styles.tabContainer}>
                            <Input
                                style={styles.input}
                                value={email}
                                label='Email'
                                placeholder='Email Address'
                                onChangeText={(text) => setEmail(text)}
                                accessoryRight={emailIcon}
                            />
                            <Input
                                value={value}
                                style={styles.input}
                                label='Password'
                                placeholder='Password'
                                accessoryRight={renderIcon}
                                secureTextEntry={secureTextEntry}
                                onChangeText={nextValue => setValue(nextValue)}
                            />
                            <View style={{ alignItems: 'flex-end', width: '100%' }}>
                                <TouchableOpacity onPress={() => {
                                    console.log("Forgot Password");
                                    navigation.navigate(AuthScreens.ForgotPassword);
                                }}>
                                    <Text style={{ textDecorationLine: 'underline', color: '#8174a0', margin: 12, padding: 10 }}>
                                        Forgot Password?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: disableButton ? '#ccc' : '#707aff' }]}
                                onPress={() => { console.log("Login") }}
                                disabled={disableButton}
                            >
                                <Text style={{ margin: 12, padding: 10, color: '#fff', fontWeight: '700' }}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                            <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 14, marginBottom: 10, marginTop: 10, color: '#7F8C8D' }}>
                                or
                            </Text>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    backgroundColor: '#fff',
                                    width: '100%',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    navigation.navigate(AuthScreens.Welcome);
                                    console.log("Guest");
                                }}
                            >
                                <Text style={{ margin: 12, padding: 10, color: '#000', fontWeight: '700' }}>
                                    Continue as Guest
                                </Text>
                            </TouchableOpacity>
                        </Layout>
                    </Tab>
                    <Tab selected={selectedIndex === 1} title={() => renderTitle('REGISTER', 1)}>
                        <Layout style={styles.tabContainer}>
                            <Input
                                style={styles.input}
                                value={name}
                                label='Name'
                                placeholder='Full Name'
                                onChangeText={(text) => setName(text)}
                                accessoryRight={nameIcon}
                            />
                            <Input
                                style={styles.input}
                                value={email}
                                label='Email'
                                placeholder='Email Address'
                                onChangeText={(text) => setEmail(text)}
                                accessoryRight={emailIcon}
                            />
                            <Input
                                value={value}
                                style={styles.input}
                                label='Password'
                                placeholder='Password'
                                accessoryRight={renderIcon}
                                secureTextEntry={secureTextEntry}
                                onChangeText={nextValue => setValue(nextValue)}
                            />
                            <CheckBox
                                style={{ margin: 12, padding: 10 }}
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            >
                                Remember Password
                            </CheckBox>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: disableButton ? '#ccc' : '#707aff' }]}
                                onPress={() => { console.log("Register") }}
                                disabled={disableButton}
                            >
                                <Text style={{ margin: 12, padding: 10, color: '#fff', fontWeight: '700' }}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </Layout>
                    </Tab>
                </TabView>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 47,
        margin: 12,
        marginBottom: 25,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#F9F9F9',
        borderRadius: 9,
    },
    button: {
        borderWidth: 1,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
    },
    // ... other styles remain unchanged
});

export default LoginScreen;