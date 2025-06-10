import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Button, Icon, IconElement } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthScreens } from '@/app/constants/Screens';

type WelcomeNavigationProp = NavigationProp<Record<string, object | undefined>>;

const WelcomeScreen = () => {

    const ArrowIcon = (props: any): IconElement => (
        <Icon
          {...props}
          name='arrow-forward'
          fill='#FFF'
        />
      );
     const navigation = useNavigation<WelcomeNavigationProp>();

    return (
        <ScrollView style={{ backgroundColor: '#70f8ff25', height: '100%', flex: 1 }}>
            <View style={{ backgroundColor: '#FFFFFF', height: 'auto', marginTop: '50%', marginHorizontal: 20, borderRadius: 30, padding: 20 }}>
                <Image source={require("../../assets/icon1.png")} style={{ width: '25%', height: 85, marginBottom: 30, marginTop: 30, alignSelf: 'center' }} />
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 20, fontWeight: 900, color: '#2C3E50' }}>Welcome to Pinggss</Text>
                <Text style={{ fontFamily: 'Trebuchet MS', textAlign: 'center', fontSize: 14, color: '#2C3E50', padding: 10 }}>Stay Ahead, Anytime, Anywhere</Text>
                <Text style={{ fontFamily: 'Trebuchet MS', fontSize: 14, color: '#2C3E50', paddingTop: '10%' }}>Pinggss delivers the latest news in concise audio bites, perfect for your busy lifestyle. Get the headlines you need in under 160 words—fast, clear, and on-the-go.</Text>
                <Button
                    style={styles.button}
                    accessoryRight={ArrowIcon}
                    onPress={() => 
                        navigation.navigate(AuthScreens.Category)
                    }>
                </Button>
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    button: {
        width: '10%',
        height: '10%',
        marginTop: 20,
        borderRadius: '50%',
        alignSelf: 'flex-end',
        margin: 15,
    },
 })

export default WelcomeScreen;