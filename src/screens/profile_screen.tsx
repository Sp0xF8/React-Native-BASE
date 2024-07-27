import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import { Button } from 'react-native-paper';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext  } from '../contexts/ThemeManager';
import { ColourSchemes } from '../stylesheets/ColourSchemes';

import ProfileHeadder from '../components/profile_headder'

import SettingsScreen from './settings_screen';

function ProfileScreen(): React.JSX.Element {
  const { theme } = React.useContext(ThemeContext)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme === 'dark' ? ColourSchemes.dark.background : ColourSchemes.light.background }}>

      <ProfileHeadder />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme === 'dark' ? ColourSchemes.dark.background : ColourSchemes.light.background }}>
        <	Text style={{ color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text }}>Profile Screen</Text>
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
  },
  swipe_to_chat: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '66%',
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  circle: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 500,
  },
})





function ProfileNavigatorStack(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator initialRouteName='Profile' >
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='SettingsScreen' component={SettingsScreen} />
      </Stack.Navigator>
  );
}



export default ProfileNavigatorStack;