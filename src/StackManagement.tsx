import React, { useContext } from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

const RootNav = createNativeStackNavigator();
const MainNav = createMaterialTopTabNavigator();

import LoginScreen from './screens/login_screen';

import MeetScreen from './screens/meet_screen';
import ChatScreen from './screens/chat_screen';
import ProfileScreen from './screens/profile_screen';


import { UserContext } from './contexts/LoginManager'
import { ThemeContext } from './contexts/ThemeManager'

import { ColourSchemes } from './stylesheets/ColourSchemes';

import CustomHeadder from './components/appbar'
import { View } from 'react-native';


function LoggedInNavigation(): React.JSX.Element  {

    return (
        
        
        <MainNav.Navigator 
            initialRouteName='Meet'
            tabBarPosition='bottom'
            tabBar={(props: MaterialTopTabBarProps) => {
    
                return <CustomHeadder {...props} />;
            }}
        >
            <MainNav.Screen name="Meet" component={MeetScreen} />
            <MainNav.Screen name="Chat" component={ChatScreen} />
            <MainNav.Screen name="Profile" component={ProfileScreen} />
        </MainNav.Navigator>
    );
}


function RootStackNavigation(): React.JSX.Element  {
    return (
        <RootNav.Navigator initialRouteName='Login'>
            <RootNav.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </RootNav.Navigator>
    );
}


//default function with login provider and a check if the user element is null, if it is display the root stack, otherwise display logged in
function StackManagement(): React.JSX.Element {
    const { user } = useContext(UserContext);

    const { theme } = useContext(ThemeContext);
	// pass theme to all pages so they can also assume a dynamic theme

	// const MyLightTheme = {
    //     ...DefaultTheme,
    //     colors: {
    //     ...DefaultTheme.colors,
    //     background: ColourSchemes.light.background,
    //     text: ColourSchemes.light.text,
    //     },
    // };

    // const MyDarkTheme = {
    //     ...DarkTheme,
    //     colors: {
    //     ...DarkTheme.colors,
    //     background: ColourSchemes.dark.background,
    //     text: ColourSchemes.dark.text,
    //     },
    // }; theme={theme === 'dark' ? MyDarkTheme : MyLightTheme}

    return (
        <View style={{flex:1, backgroundColor: theme === 'dark' ? ColourSchemes.dark.background : ColourSchemes.light.background}}>
            <NavigationContainer >
                {user ? <LoggedInNavigation /> : <RootStackNavigation />}
            </NavigationContainer>
        </View>
    );
}

export default StackManagement;