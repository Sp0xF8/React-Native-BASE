import React, { useEffect, useState, useRef, useContext} from 'react';

import { StyleSheet, View } from 'react-native';

import { Appbar, Text, TouchableRipple, Icon } from 'react-native-paper';

import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';



import { ThemeContext, ThemeSwitcher } from '../contexts/ThemeManager';
import { ColourSchemes } from '../stylesheets/ColourSchemes';

export default function CustomNavigationBar(props:MaterialTopTabBarProps): React.JSX.Element  {

  const { theme } = useContext(ThemeContext);

  //console.log(props) // sanity print
  //getHeaderTitle(props.descriptors[props.state.index].options , props.state.routes[props.state.index].key);
 
  const title = props.descriptors[props.state.routes[props.state.index].key].route.name


  // create refs to allow for style changes
  const appbarRef = useRef(null);

  const meetTextRef = useRef(null);
  const [meetIconSize, setMeetIconSize] = useState<number>(20);
  const chatTextRef = useRef(null);
  const [chatIconSize, setChatIconSize] = useState<number>(20);
  const profileTextRef = useRef(null);
  const [profileIconSize, setProfileIconSize] = useState<number>(20);


  //create use effect to allow the different members of the app bar to increase the text size and change color based on the title
  useEffect(() => {
    if (!appbarRef.current) {return}

    if (!meetTextRef.current) {return};
    if (!chatTextRef.current) {return};
    if (!profileTextRef.current) {return};

    if (title === 'Meet') {
      // console.log('Meet1')
      
      appbarRef.current.setNativeProps({style: {backgroundColor: '#63B4D1'}});


      meetTextRef.current.setNativeProps({style: {fontSize: 30}});
      setMeetIconSize(30);
      chatTextRef.current.setNativeProps({style: {fontSize: 20}});
      setChatIconSize(20);
      profileTextRef.current.setNativeProps({style: {fontSize: 20}});
      setProfileIconSize(20);

    } else if (title === 'Chat') {
      // console.log('Chat1')
      appbarRef.current.setNativeProps({style: {backgroundColor: '#9448BC'}});

      meetTextRef.current.setNativeProps({style: {fontSize: 20}});
      setMeetIconSize(20);
      chatTextRef.current.setNativeProps({style: {fontSize: 30}});
      setChatIconSize(30);
      profileTextRef.current.setNativeProps({style: {fontSize: 20}});
      setProfileIconSize(20);

    } else if (title === 'Profile') {
      // console.log('Profile1')
      appbarRef.current.setNativeProps({style: {backgroundColor: '#743795'}});

      meetTextRef.current.setNativeProps({style: {fontSize: 20}});
      setMeetIconSize(20);
      chatTextRef.current.setNativeProps({style: {fontSize: 20}});
      setChatIconSize(20);
      profileTextRef.current.setNativeProps({style: {fontSize: 30}});
      setProfileIconSize(30);
    }
    
  }, [title]);



  console.log(props.descriptors[props.state.routes[props.state.index].key].route.name)
  return (
      <View style={styles.appbar} ref={appbarRef}>
        <TouchableRipple
          style={[styles.touchable_ripple, {borderTopLeftRadius:10}]}
          onPress={() => {
            props.navigation.navigate('Meet');
          }}
          
        >
          <View style={styles.view}>
            <Text style={[styles.text ,{color: ThemeSwitcher("text", theme)}]} ref={meetTextRef}>
              Meet
            </Text>
            <Icon source="account-heart" size={meetIconSize} color={ThemeSwitcher("text", theme)} />
          </View>
        </TouchableRipple>

        <TouchableRipple
          style={styles.touchable_ripple}
          onPress={() => {
            props.navigation.navigate('Chat');
          }}
        >
          <View style={styles.view}>
            <Text style={[styles.text ,{color: ThemeSwitcher("text", theme)}]} ref={chatTextRef} >
              Chat
            </Text>
            <Icon source="comment"  size={chatIconSize} color={ThemeSwitcher("text", theme)} />
          </View>
        </TouchableRipple>

        <TouchableRipple
          style={[styles.touchable_ripple, {borderTopRightRadius:10}]}
          onPress={() => {
            props.navigation.navigate('Profile');
          }}
        >
          <View  style={styles.view}>
            <Text style={[styles.text ,{color: ThemeSwitcher("text", theme)}]} ref={profileTextRef}>
              Profile
            </Text>
            <Icon source="account-edit" size={profileIconSize} color={ThemeSwitcher("text", theme)} />
          </View>
        </TouchableRipple>
        
      </View>
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
    fontWeight: 'bold',
    textAlign:'center',
    textAlignVertical:'center',
    marginRight: 5,
  },
  appbar: {
    width:'100%',
    flexDirection: 'row',
    flex:0,
    height:50,
    borderTopLeftRadius: 10,
    borderTopRightRadius:10,
  },
  view: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  }
});

