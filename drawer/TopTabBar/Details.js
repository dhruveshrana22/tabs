
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const DetailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Detail Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },

});

export default DetailScreen;