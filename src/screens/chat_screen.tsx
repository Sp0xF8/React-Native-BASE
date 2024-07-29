import React, { useContext } from 'react';
import {Text, View} from 'react-native';

import { Button } from 'react-native-paper';

import { ThemeContext, ThemeSwitcher } from '../contexts/ThemeManager';


function ChatScreen(): React.JSX.Element {
  const { theme } = useContext(ThemeContext);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: ThemeSwitcher('background', theme)
        }}>
        <Button>
            <Text>Chat</Text>
        </Button>
      </View>
    );
  }

export default ChatScreen;