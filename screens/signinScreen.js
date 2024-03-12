import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const navigation = useNavigation();
    const handleLogin = async () => {
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        // Validate email, password, and confirm password
        let hasError = false;

        if (!username.trim()) {
            setEmailError('Email is required');
            hasError = true;
        } else if (!isValidEmail(username)) {
            setEmailError('Invalid email format');
            hasError = true;
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            hasError = true;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            hasError = true;
        }

        if (!confirmPassword.trim()) {
            setConfirmPasswordError('Confirm Password is required');
            hasError = true;
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            hasError = true;
        }

        // If any error occurred, return without further processing
        if (hasError) {
            return;
        }

        try {
            const existingUserData = await AsyncStorage.getItem('userData');
            let userList = existingUserData ? JSON.parse(existingUserData) : [];

            const isUsernameExists = userList.some(user => user.username === username);
            if (isUsernameExists) {
                alert('Username is already taken. Please choose a different username.');
                return;
            }

            const newUser = { username, password };

            userList.push(newUser);

            await AsyncStorage.setItem('userData', JSON.stringify(userList));
            console.log('User data stored successfully:', userList);
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error saving user data to AsyncStorage:', error);
        }

    };


    useEffect(() => {
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
    }, [navigation]);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Updated functions to clear error messages when typing
    const handleUsernameChange = (text) => {
        setUsername(text);
        setEmailError('');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setPasswordError('');
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        setConfirmPasswordError('');
    };

    const hanldelogn = () => {
        navigation.navigate('Login');
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.innerContainer}>
                <View style={styles.whiteBox}></View>
            </View>

            {/* Create Account */}

            <View style={styles.logintitle}>
                <Text style={styles.loginHeaderText}>Create Account</Text>
                <Text style={styles.welcomeText}>
                    Create an account so you can explore all the existing jobs
                </Text>
            </View>

            {/* Form Input field */}
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1 }}
                >
                    <View
                        style={{
                            padding: 10,
                            alignItems: 'center',
                            gap: 10,
                            justifyContent: 'flex-start',
                            height: '100%',
                        }}
                    >
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#626262"
                                onChangeText={handleUsernameChange}
                            />
                        </View>
                        <Text style={{ color: 'red', width: '90%' }}>{emailError}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#626262"
                                secureTextEntry={true}
                                onChangeText={handlePasswordChange}
                            />
                        </View>
                        <Text style={{ color: 'red', width: '90%' }}>{passwordError}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                placeholderTextColor="#626262"
                                secureTextEntry={true}
                                onChangeText={handleConfirmPasswordChange}
                            />
                        </View>
                        <Text style={{ color: 'red', width: '90%' }}>{confirmPasswordError}</Text>

                        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
                            <Text style={styles.signInButtonText}>Sign up</Text>
                        </TouchableOpacity>

                        <View
                            style={{
                                width: '90%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '10%',
                            }}
                        >
                            <TouchableOpacity onPress={hanldelogn}>
                                <Text style={styles.CreatAccount}  >
                                    Already have an account
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
            {/* Social Meidia BUttons  */}
            {/* <View
                style={{
                    padding: 20,
                    height: '25%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    position: 'relative',
                }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.symbol}>or Continue with</Text>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            padding: 10,
                            gap: 10,
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <View
                                style={{
                                    backgroundColor: 'lightgray',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 5,
                                    borderRadius: 50,
                                }}>
                                <Image
                                    source={require('../images/ph_google-logo-bold.png')}
                                    style={styles.imagesy}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <View
                                style={{
                                    backgroundColor: 'lightgray',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 5,
                                    borderRadius: 50,
                                }}>
                                <Image
                                    source={require('../images/ic_sharp-facebook.png')}
                                    style={styles.imagesy}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <View
                                style={{
                                    backgroundColor: 'lightgray', // Set your desired background color
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 5,
                                    borderRadius: 50,
                                }}>
                                <Image
                                    source={require('../images/ic_baseline-apple.png')}
                                    style={styles.imagesy}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    imagesy: {
        width: 40,
        height: 40,
    },
    innerContainer: {
        width: 1113.3,
        height: 1431.3,
        left: -364.3,
        top: -356,
        position: 'absolute',
    },

    whiteBox: {
        width: 635,
        height: 635,
        left: 478.3,
        top: 0,
        position: 'absolute',
        backgroundColor: '#B5C0E7',
        borderRadius: 9999,
    },
    logintitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginHeaderText: {
        padding: 10,
        color: '#1F41BB',
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    welcomeText: {
        padding: 10,
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontFamily: 'Poppins',
    },
    inputContainer: {
        width: '90%',
        backgroundColor: '#F1F4FF',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1F41BB',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 10,
    },
    input: {
        paddingLeft: 20,

        color: '#626262',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '500',
    },
    forgotPasswordText: {
        color: '#1F41BB',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    CreatAccount: {
        color: '#494949',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    signInButton: {
        width: '90%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#1F41BB',
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    signInButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
});

export default SignUpScreen;
