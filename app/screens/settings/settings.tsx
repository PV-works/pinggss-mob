import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Platform, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Icon, Card, Modal, Button } from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AuthScreens } from '@/app/constants/Screens';

type SettingNavigationProp = NavigationProp<Record<string, object | undefined>>;

const SettingScreen = () => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

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

    const navigation = useNavigation<SettingNavigationProp>();
    const [visible, setVisible] = React.useState(false);


    return (
        <ScrollView style={{ backgroundColor: '#70f8ff10', flex: 1 }}>
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
            <Card style={styles.card} onPress={() => 
                                    navigation.navigate(AuthScreens.AccountDetail)
                                }>
                <View style={styles.cardContent}>
                    <Image source={require("../../assets/account_details.png")} style={styles.cardImage} />
                    <Text style={styles.cardText}>
                        Account Details
                    </Text>
                </View>
            </Card>
            <Card style={styles.card} onPress={() => 
                                    navigation.navigate(AuthScreens.Category)
                                }>
                <View style={styles.cardContent}>
                    <Image source={require("../../assets/content_preferences.png")} style={styles.cardImage} />
                    <Text style={styles.cardText}>
                        Content Preferences
                    </Text>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={require("../../assets/playback.png")} style={styles.cardImage} />
                    <Text style={styles.cardText}>
                        Playback
                    </Text>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={require("../../assets/notification.png")} style={styles.cardImage} />
                    <Text style={styles.cardText}>
                        Notifications
                    </Text>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={require("../../assets/media_quality.png")} style={styles.cardImage} />
                    <Text style={styles.cardText}>
                        Media Quality
                    </Text>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={styles.cardContent}>
                    <Image source={require("../../assets/about.png")} style={styles.cardImage} />
                    <Text style={styles.cardText}>
                        About
                    </Text>
                </View>
            </Card>
            <Card style={styles.card} onPress={() =>
                navigation.navigate(AuthScreens.Login)
            }>
                <View style={styles.cardContent}>
                    <Image source={require("../../assets/logout.png")} style={styles.cardImage} />
                    <Text style={styles.cardText}>
                        Logout
                    </Text>
                </View>
            </Card>
            <Card style={styles.card} onPress={() => setVisible(true)} >
                <View style={styles.cardContent}>
                    <Image source={require("../../assets/delete_profile.png")} style={styles.cardImage} />
                    <Text style={styles.cardText}>
                        Delete Profile
                    </Text>
                </View>
            </Card>
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
            >
                <Card disabled style={styles.card}>
                    {/* Large icon in a circular background */}
                    <View style={styles.iconContainer}>
                        <Icon
                            name="close-circle-outline"
                            fill="#E74C3C"
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.heading}>Are you sure?</Text>
                    <Text style={styles.subtext}>
                        Do you really want to delete your profile? This process cannot be undone.
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={[styles.button, styles.cancelButton]}
                            onPress={() => setVisible(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            style={[styles.button, styles.deleteButton]}
                            onPress={() =>
                                navigation.navigate(AuthScreens.Login)
                            }>
                            Delete
                        </Button>
                    </View>
                </Card>
            </Modal>
        </ScrollView>
    );
};

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
    card: {
        marginHorizontal: 30,
        marginTop: 15,
        borderRadius: 20,
        // padding: 10,
    },
    cardContent: {
        flexDirection: 'row',  // Arrange image and text in a row
        alignItems: 'center',  // Vertically center the items
    },
    cardImage: {
        width: 25,
        height: 25,
        marginRight: 15,       // Add space between the image and the text
    },
    cardText: {
        fontSize: 16,
        color: '#333',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    iconContainer: {
        borderRadius: 50,
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
    },
    heading: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtext: {
        fontSize: 14,
        color: '#7F8C8D',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
    cancelButton: {
        borderColor: '#ccc',
        backgroundColor: '#ccc',
    },
    deleteButton: {
        backgroundColor: '#E74C3C',
        borderColor: '#E74C3C',
    },
});

export default SettingScreen;
