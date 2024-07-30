import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import { Button } from 'react-native-paper';

import { ThemeContext, ThemeSwitcher } from '../contexts/ThemeManager';
import ProfileCard from '../components/profile_card'

function MeetScreen(): React.JSX.Element {

    const { theme } = useContext(ThemeContext)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: ThemeSwitcher('background', theme),
          padding:20

        }}>
        <ProfileCard />
      </View>
    );
  }

export default MeetScreen;