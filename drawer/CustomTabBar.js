import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <LinearGradient
            colors={[
                'rgba(67,9,121,1)',
                'rgba(0,212,255,1)',
            ]}
            style={{ borderRadius: 20, position: 'relative' }}>
            <View style={{ flexDirection: 'row', }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={onPress}
                            style={{ flex: 1, alignItems: 'center', padding: 16 }}
                        >
                            <Text style={{ color: isFocused ? '#ffffff' : 'black', }}>{label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </LinearGradient>

    )
};

export default CustomTabBar;
