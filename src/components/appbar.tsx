import React from 'react';

import { StyleSheet } from 'react-native';

import { Appbar, Text, TouchableRipple } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';


import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

export default function CustomNavigationBar(props:MaterialTopTabBarProps): React.JSX.Element  {
  //getHeaderTitle(props.descriptors[props.state.index].options , props.state.routes[props.state.index].key);
 
  const title = props.descriptors[props.state.routes[props.state.index].key].route.name

  console.log(props.descriptors[props.state.routes[props.state.index].key].route.name)
  return (
    <Appbar style={styles.appbar}>
        <TouchableRipple
          style={styles.touchable_ripple}
          onPress={() => {
            props.navigation.navigate('Meet');
          }}
          
        >
          <Text style={styles.text}>Meet</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.touchable_ripple}
          onPress={() => {
            props.navigation.navigate('Chat');
          }}
        >
          <Text style={styles.text}>Chat</Text>
        </TouchableRipple>

        <TouchableRipple
          style={styles.touchable_ripple}
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
        >
          <Text style={styles.text}>Profile</Text>
        </TouchableRipple>
        
        
    </Appbar>
  );
}


const styles = StyleSheet.create({
  touchable_ripple: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    height:'100%',
    fontSize: 16,
    textAlign:'center',
    textAlignVertical:'center',
  },
  appbar: {
    borderTopLeftRadius: 10,
    borderTopRightRadius:10,
  },
});

