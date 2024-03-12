
// App.js
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LoginScreen from './screens/LoginScreen';
import SignInScreen from './screens/signinScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/Home/HomeScreen';
import DrawerContents from './drawer/customedrwar';
import UserProfileScreen from './Userfolder/UserProfileScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import CustomTabBar from './drawer/CustomTabBar';
import CustomHeader from './drawer/TopTabBar/CustomHeader';
import Details from './drawer/TopTabBar/Details';
import Product from './drawer/TopTabBar/ProductScreen';
import Detailspage from './drawer/TopTabBar/Details';
import ProductScreen from './drawer/TopTabBar/ProductScreen';
import DetailScreen from './drawer/TopTabBar/Details';
import ShoppinCartScreen from './drawer/TopTabBar/ShoppingCartScreen';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TopTabNavigator = () => (
    <TopTab.Navigator
        screenOptions={{
            header: () => <CustomHeader />,
        }}>
        <TopTab.Screen name="Detail" component={DetailScreen} />
        <TopTab.Screen name="Products" component={ProductScreen} />
        <TopTab.Screen name="ShoppiCart" component={ShoppinCartScreen} />
    </TopTab.Navigator>
);

const HomeStackNavigator = () => (
    <Stack.Navigator
    >
        <Stack.Screen name="TopTab" component={TopTabNavigator} options={{ headerShown: false }} />


    </Stack.Navigator>
);


const AuthStack = () => (
    <Drawer.Navigator initialRouteName='Homescreen'
        drawerContent={(props) => <DrawerContents {...props} />}
    >
        <Drawer.Screen
            name="Homescreen"
            component={TabNavigator}
            options={{
                headerRight: () => (
                    <View style={{ flexDirection: 'row', marginRight: 10 }}>
                        {/* Add your logo or any other content on the right side */}
                        <TouchableOpacity>
                            <Image
                                source={require('./images/welcomeimage.png')}
                                style={{ width: 50, height: 50, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                ),
            }}
        />
        <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
        <Drawer.Screen name="UserProfile" component={UserProfileScreen} />
    </Drawer.Navigator>

);



const TabNavigator = () => (
    <Tab.Navigator initialRouteName='Home'
        tabBar={(props) => <CustomTabBar {...props} />}
    >
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="UserProfile" component={UserProfileScreen} options={{ headerShown: false }} />
        <Tab.Screen name="ContactUs" component={ContactUsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
);

const AppNavigator = () => (
    <Stack.Navigator
        initialRouteName="welcom"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#3498db',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="welcom" component={WelcomeScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Homescreen" component={AuthStack} options={{ headerShown: false }} />

    </Stack.Navigator>

);
const App = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

export default App;