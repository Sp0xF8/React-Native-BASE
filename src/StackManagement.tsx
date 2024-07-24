import React, { useContext } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const RootNav = createNativeStackNavigator();
const MainNav = createMaterialTopTabNavigator();

import LoginScreen from '@src/screens/login_screen';

import MeetScreen from '@src/screens/meet_screen';
import ChatScreen from '@src/screens/chat_screen';
import ProfileScreen from '@src/screens/profile_screen';



function LoggedInNavigation(): React.JSX.Element  {
    return (
        <MainNav.Navigator initialRouteName='Login'>
            <MainNav.Screen name="Login" component={LoginScreen} />
        </MainNav.Navigator>
    );
}


function RootStackNavigation(): React.JSX.Element  {
    return (
        <RootNav.Navigator initialRouteName='Login'>
            <RootNav.Screen name="Login" component={LoginScreen} />
        </RootNav.Navigator>
    );
}
