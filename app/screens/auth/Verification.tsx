import React, { memo, useState, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput } from "react-native";
import { Icon, Input, CheckBox, TabView, Tab, Layout } from '@ui-kitten/components'

const VerificationCodeScreen = () => {

    // Initialize state for 6-digit OTP
    const [otp, setOTP] = useState<string[]>(Array(6).fill(''));
    // Create refs for each Input; explicitly typed as TextInput or null
    const inputRefs = useRef<Array<TextInput | null>>([]);

    // Update OTP digit and auto-focus next input when a digit is entered
    const handleOTPChange = (index: number, text: string) => {
        const newOTP = [...otp];
        newOTP[index] = text;
        setOTP(newOTP);

        // If a digit is entered (text length 1)
        if (text.length === 1) {
            if (index < 5) {
                // Focus the next input if not the last one
                inputRefs.current[index + 1]?.focus();
            } else {
                // If it's the last input, remove focus
                inputRefs.current[index]?.blur();
            }
        }
    };

    // Handle backspace key press to move focus to previous input if needed
    const handleKeyPress = (index: number, nativeEvent: any) => {
        if (nativeEvent.key === 'Backspace') {
            // If the current input is already empty, move focus to previous input
            if (otp[index] === '') {
                if (index > 0) {
                    // Focus previous input and clear its value
                    inputRefs.current[index - 1]?.focus();
                    const newOTP = [...otp];
                    newOTP[index - 1] = '';
                    setOTP(newOTP);
                } else {
                    // For the first input, if it's empty, remove focus
                    inputRefs.current[index]?.blur();
                }
            }
        }
    };

    return (
        <ScrollView style={{ backgroundColor: '#8174a0', height: '100%', flex: 1 }}>
            <View style={{ backgroundColor: '#FFFFFF', height: 'auto', marginTop: '30%', marginHorizontal: 20, borderRadius: 30, padding: 10 }}>
                <Image source={require("../../assets/icon1.png")} style={{ width: '25%', height: 85, marginBottom: 30, marginTop: 30, alignSelf: 'center' }} />
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 18, fontWeight: 700 }}>Welcome</Text>
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 14, marginBottom: 10, marginTop: 10 }}>By signing in you are agreeinng our</Text>
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 14, color: '#8174a0' }}>Terms and Privacy Policy</Text>
                <View style={styles.container}>
                    {otp.map((digit, index) => (
                        <Input
                            key={index}
                            ref={(ref) =>
                                (inputRefs.current[index] = ref as unknown as TextInput | null)
                            }
                            style={styles.input}
                            value={digit}
                            placeholder="0"
                            keyboardType="number-pad"
                            maxLength={1}
                            onChangeText={(text) => handleOTPChange(index, text)}
                            onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent)}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Display inputs in a row
        justifyContent: 'space-between',
        margin: 10,
        gap: 5,
        
    },
    input: {
        // width: 50,
        textAlign: 'center',
        // marginHorizontal: 5,
    },
});

export default VerificationCodeScreen;
