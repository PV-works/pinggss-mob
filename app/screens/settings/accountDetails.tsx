import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Icon, Input, CheckBox, TabView, Tab, Layout } from '@ui-kitten/components';
import * as ImagePicker from 'expo-image-picker';

const AccountDetailScreen = () => {

    const [image, setImage] = useState<string | null>(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const [email, setEmail] = useState('');
    const [value, setValue] = useState('');
    const [name, setName] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

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

    return (
        <ScrollView style={{ backgroundColor: '#70f8ff10', flex: 1, margin: 10 }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.image} />
                    ) : (
                        <Icon name="person-outline" fill="#aaa" style={styles.userIcon} />
                    )}
                </TouchableOpacity>
            </View>
            <Text style={styles.userName}>
                Purvang
            </Text>
            <Text style={styles.subText}>
                Log in with email
            </Text>
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
            <View style={{ justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={() => { console.log("Save") }}
                >
                    <Text style={{ margin: 12, padding: 10, color: '#fff', fontWeight: '700' }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start', // Aligns content at the top
        paddingTop: 80,
    },
    imagePicker: {
        width: 100,
        height: 100,
        borderRadius: 75, // creates a circular shape
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 75, // ensures the image is circular
    },
    userIcon: {
        width: 70,
        height: 70,
    },
    userName: {
        fontFamily: 'Trebuchet MS',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        color: '#2C3E50',
        paddingTop: 20,
    },
    subText: {
        fontFamily: 'Trebuchet MS',
        textAlign: 'center',
        fontSize: 14,
        color: '#2C3E50',
        paddingTop: 10,
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
        // borderWidth: 1,
        margin:20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'blue',
    },
})

export default AccountDetailScreen;