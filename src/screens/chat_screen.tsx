import React, { useContext, useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Button, Icon, TouchableRipple } from 'react-native-paper';

import { ThemeContext, ThemeSwitcher } from '../contexts/ThemeManager';
import Animated, { interpolate } from 'react-native-reanimated';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/Colors';


interface ChatSectionProps {
  name: string;
  message: string;
}

function ChatSection(props: ChatSectionProps): React.JSX.Element {
  const { theme } = useContext(ThemeContext);

  const rightActionSection = (progress: any, dragX: any) => {

    return (

          
      <TouchableRipple
        style={{
          backgroundColor: ThemeSwitcher('error', theme),
          height: 100
        }}

        onPress={() => {
          console.log('Unmatch');
        }}
      >
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 'auto',
            marginHorizontal: 10,
          }}>

          <Text style={{fontSize:30, color:ThemeSwitcher('text', theme)}}>
            Unmatch {props.name} ?
          </Text>

          <Animated.View >
            <Icon source='delete' size={40} color={ThemeSwitcher('text', theme)} />
          </Animated.View>

          
        </Animated.View>
      </TouchableRipple>
    );
  }


    return (
      <Swipeable
        renderRightActions={rightActionSection}
        friction={2}
        rightThreshold={40}
        overshootRight={false}
        overshootLeft={false}
        containerStyle={{
          width: '100%',
        }}
      >

        <TouchableRipple
          style={{
            backgroundColor: ThemeSwitcher('foreground', theme),
            height: 100
          }}

          onPress={() => {
            console.log('Chat');
          }}
        >
          <Animated.View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 'auto',
              marginHorizontal: 10,
            }}>

            <TouchableRipple
              style={{
                width:50,
                aspectRatio:1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                console.log('Profile');
              }}
            >
              <Icon source='account' size={40} color={ThemeSwitcher('text', theme)} />
            </TouchableRipple>

            <Animated.View
              style={{
                flex: 1,
                marginHorizontal: 10,
              }}
            >
              <Text style={{fontSize: 30, color: ThemeSwitcher('text', theme)}}>{props.name}</Text>
              <Animated.View style={{overflow:'hidden'}}>
                <Text style={{fontSize: 20, color: ThemeSwitcher('accent_secondary', theme), marginLeft:15}}>{props.message}</Text>
              </Animated.View>
            </Animated.View>

            <Animated.View>
              <Icon source='comment' size={40} color={ThemeSwitcher('text', theme)} />
            </Animated.View>

            
          </Animated.View>
        </TouchableRipple>
      </Swipeable>
    );
  }



function ChatScreen(): React.JSX.Element {
  const { theme } = useContext(ThemeContext);
    return (
      <View style={{backgroundColor: ThemeSwitcher('background', theme), padding:20, height: '100%'}}>
        <View style={{padding:10, borderRadius:10, backgroundColor: ThemeSwitcher("middleground", theme), flex:1}}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize: 30, color: ThemeSwitcher('text', theme)}}>Chats</Text>
          </View>
          <ScrollView style={{flex:1}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: ThemeSwitcher('background', theme),
              }}>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
                <ChatSection name='__Billy__' message='__27 Char Long Msg__'/>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

export default ChatScreen;