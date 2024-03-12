import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



function CustomHeader({ navigation }) {


    const handleTextClick = (screenName) => {
        navigation.navigate(screenName);
    };
    // const handleforproduct = (Screen) => {
    //     navigation.navigate(Screen);
    // }


    return (
        <LinearGradient
            colors={[
                'rgba(67,9,121,1)',
                'rgba(0,212,255,1)',
            ]}
            style={{ borderRadius: 20, position: 'relative' }}>
            <View style={{
                flexDirection: 'row',
                borderRadius: 50
                , justifyContent: 'center', alignItems: 'center', padding: 5, gap: 30
            }}>

                <TouchableOpacity
                    onPress={() => handleTextClick("Detail")}
                >
                    <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', fontSize: 15 }}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleTextClick("Products")}>
                    <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', fontSize: 15 }}>Products</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleTextClick("ShoppingCart")}
                >
                    <Text style={{ padding: 10, color: 'black', fontWeight: 'bold', fontSize: 15 }}>Shopping Cart</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default CustomHeader


