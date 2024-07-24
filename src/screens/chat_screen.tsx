import React from 'react';
import {Text, View} from 'react-native';

import { Button } from 'react-native-paper';


function ChatScreen(): React.JSX.Element {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button>
            <Text>Chat</Text>
        </Button>
      </View>
    );
  }

export default ChatScreen;