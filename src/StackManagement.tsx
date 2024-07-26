import React, { useContext } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const RootNav = createNativeStackNavigator();
const MainNav = createMaterialTopTabNavigator();

import LoginScreen from './screens/login_screen';

import MeetScreen from './screens/meet_screen';
import ChatScreen from './screens/chat_screen';
import ProfileScreen from './screens/profile_screen';


import { UserProvider, UserContext } from './contexts/LoginManager'


function LoggedInNavigation(): React.JSX.Element  {
    return (
        <MainNav.Navigator initialRouteName='Meet'>
            <MainNav.Screen name="Meet" component={MeetScreen} />
            <MainNav.Screen name="Chat" component={ChatScreen} />
            <MainNav.Screen name="Profile" component={ProfileScreen} />
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


//default function with login provider and a check if the user element is null, if it is display the root stack, otherwise display logged in
function StackManagement(): React.JSX.Element {
    const { user } = useContext(UserContext);
    return (
        <UserProvider>
            <NavigationContainer>
                {user ? <LoggedInNavigation /> : <RootStackNavigation />}
            </NavigationContainer>
        </UserProvider>
    );
}

export default StackManagement;