import React, { useEffect, useState, useRef, useContext} from 'react';

import { StyleSheet, View } from 'react-native';

import { Appbar, Text, TouchableRipple, Icon } from 'react-native-paper';

import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import { ThemeContext, ThemeSwitcher } from '../contexts/ThemeManager';
import { ColourSchemes } from '../stylesheets/ColourSchemes';
import Animated, { runOnJS, useSharedValue } from 'react-native-reanimated';

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

  const startPositon = useSharedValue<[number,number]>([0,0])


  const navigateOnSwipe = (direction: 'left' | 'right') => {
    switch (title) {
      case 'Meet':
        if (direction === 'right') {
          props.navigation.navigate('Chat');
        }
        break;
      case 'Chat':
        if (direction === 'right') {
          props.navigation.navigate('Profile');
        } else if (direction === 'left') {
          props.navigation.navigate('Meet');
        }
        break;
      case 'Profile':
        if (direction === 'left') {
          props.navigation.navigate('Chat');
        }
        break;
    }
  };

  const swiper = Gesture.Pan()
    .onStart(({ x, y }) => {
      'worklet';
      startPositon.value = [x, y];
    })
    .onEnd(({ x, y }) => {
      'worklet';
      let swipeDirection = 'none';

      if (x < startPositon.value[0]) {
        runOnJS(navigateOnSwipe)('right');
      } else if (x > startPositon.value[0]) {
        runOnJS(navigateOnSwipe)('left');
      }

      startPositon.value = [0, 0];
    });

  return (
      <View style={styles.appbar} ref={appbarRef}>
        <GestureDetector gesture={swiper}>
          <Animated.View style={styles.gestureBox}>
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
          </Animated.View>
        </GestureDetector>
        

        
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
  },
  gestureBox:{
    position: 'absolute',
    width: '100%',
    height:50,
    flexDirection:'row'

  }
});

