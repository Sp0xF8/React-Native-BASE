import React from 'react';
import {Text, View} from 'react-native';

import { Button } from 'react-native-paper';


function MeetScreen(): React.JSX.Element {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button>
            <Text>Meet Someoen</Text>
        </Button>
      </View>
    );
  }

export default MeetScreen;