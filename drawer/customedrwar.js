import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const DrawerContent = ({ navigation }) => {

    const handleuserscreen = () => {
        navigation.navigate("Userprofile")
    }
    const handleTextClick = (screenName) => {
        navigation.navigate(screenName);
    };



    return (
        <View style={{ flex: 1, gap: 10 }}>
            <LinearGradient
                colors={[
                    'rgba(67,9,121,1)',
                    'rgba(0,212,255,1)',
                ]}
                style={{ height: "30%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, position: 'relative' }}>
                <View style={{ flex: 1, marginBottom: 0, height: "100%", width: '100%' }}>
                    <View
                        style={{
                            alignItems: 'flex-start',
                            position: "absolute",
                            padding: 10,
                            bottom: 30,
                            left: 0,
                        }}>
                        <View>
                            <TouchableOpacity
                                onPress={() => handleTextClick('UserProfile')}
                            >
                                <Image
                                    style={styles.img}
                                    source={require('../images/swaminarayan.jpg')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.profilename}>Dhruvesh Rana</Text>
                            <Text style={styles.gmail}>dhru@gmail.com</Text>

                        </View>
                    </View>
                </View>
            </LinearGradient>
            <View style={{ flex: 1, flexDirection: 'column', gap: 20, alignItems: 'center' }}>

                <View style={{}}>
                    <TouchableOpacity onPress={() => handleTextClick('Homescreen')}><Text style={{ color: 'black' }}>Home</Text></TouchableOpacity>
                </View>
                <View style={{}}>
                    <TouchableOpacity onPress={() => handleTextClick('ContactUs')}><Text style={{ color: 'black' }}>ContenctUs</Text></TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        borderRadius: 100,
        width: 100,
        height: 100,
        borderWidth: 5,
        borderColor: 'white',
    },
    profilename: {
        fontSize: 20,
        color: 'white',
        fontFamily: "sans-serif"

    },
    gmail: {
        fontSize: 15,
        color: 'white',
        fontFamily: "sans-serif"

    }
});

export default DrawerContent;
