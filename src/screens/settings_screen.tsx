import React from 'react';
import {Text, View} from 'react-native';

import { Button } from 'react-native-paper';


function SettingsScreen(): React.JSX.Element {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button>
            <Text>Settings</Text>
        </Button>
      </View>
    );
  }

export default SettingsScreen;