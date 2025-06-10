import React, { useState } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Icon, Input } from '@ui-kitten/components'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthScreens } from '@/app/constants/Screens';

type ForgotPasswordNavigationProp = NavigationProp<Record<string, object | undefined>>;

const ForgotPasswordScreen = () => {

    const navigation = useNavigation<ForgotPasswordNavigationProp>();
    const [email, setEmail] = useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
    };
    const emailIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon
                {...props}
                name={'email'}
            />
        </TouchableWithoutFeedback>
    );

    return (
        <ScrollView style={{ backgroundColor: '#8174a0', height: '100%', flex: 1 }}>
            <View style={{ backgroundColor: '#FFFFFF', height: 'auto', marginTop: '30%', marginHorizontal: 20, borderRadius: 30, padding: 20 }}>
                <Image source={require("../../assets/icon1.png")} style={{ width: '25%', height: 85, marginBottom: 30, marginTop: 30, alignSelf: 'center' }} />
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 18, fontWeight: 700 }}>Welcome</Text>
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 14, marginBottom: 10, marginTop: 10 }}>By signing in you are agreeinng our</Text>
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 14, color: '#8174a0' }}>Terms and Privacy Policy</Text>
                <Input
                    style={styles.input}
                    value={email}
                    label='Email'
                    placeholder='Email Address'
                    onChangeText={(text) => setEmail(text)}
                    accessoryRight={emailIcon}
                />
                <TouchableOpacity style={{
                    borderWidth: 1, borderColor: '#8174a0', borderRadius: 20, backgroundColor: '#8174a0', width: '100%', alignItems: 'center', marginTop: 20
                }} onPress={() => {
                    navigation.navigate(AuthScreens.VerificationCode)
                    console.log("Verify Email")
                }}>
                    <Text style={{ margin: 12, padding: 10, color: '#FFF' }}> Verfiy Email
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    input: {
        height: 47,
        margin: 12,
        marginBottom: 25,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#F9F9F9',
        borderRadius: 9
    },
});

export default ForgotPasswordScreen;