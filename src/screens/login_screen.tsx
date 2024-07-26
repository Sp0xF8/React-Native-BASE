import React, { useContext } from 'react';
import {Text, View} from 'react-native';

import { Button } from 'react-native-paper';

import { ColourSchemes } from '../stylesheets/ColourSchemes';

import { ThemeContext } from '../contexts/ThemeManager';


function LoginScreen(): React.JSX.Element {
    const { theme } = useContext(ThemeContext);

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme === 'dark' ? ColourSchemes.dark.background : ColourSchemes.light.background,
        }}>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{
            backgroundColor: theme === 'dark' ? ColourSchemes.dark.foreground : ColourSchemes.light.foreground,
          }}>
          <Text style={{ color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text }}>
            Login
          </Text>
        </Button>
      </View>
    );
  }

export default LoginScreen;