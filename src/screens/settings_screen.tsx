import React from 'react';
import { View, StyleSheet} from 'react-native';

import { Text, Button, Switch, ButtonProps } from 'react-native-paper';

import { ThemeContext, ThemeSwitcher } from '../contexts/ThemeManager';
import { UserContext } from '../contexts/LoginManager';

import { ColourSchemes } from '../stylesheets/ColourSchemes';

import SettingsHeadder from '../components/settings_headder';


//create an interface for props consisting of a setting title, and function for the onValueChange
interface SettingToggleProps {
  title: string,
  theme: 'light' | 'dark',
  value: any,
  vMargin: number,
  onVal: () => void
}


//create a functional component that takes in the props interface
function SettingToggle(props: SettingToggleProps): React.JSX.Element {
  return (
    <View style={[styles.settingsItemContainer, {backgroundColor: ThemeSwitcher('foreground', props.theme), marginVertical: props.vMargin}]}>
      <Text style={[styles.settingsItem, { color: ThemeSwitcher('text', props.theme) }]}>{props.title}</Text>
      <Switch 
        id={props.title}
        value={props.value} 
        onValueChange={props.onVal}  
        trackColor={{false: ColourSchemes.light.accent_secondary, true: ColourSchemes.dark.accent_secondary}}
        thumbColor={ThemeSwitcher('accent', props.theme)}
      />
    </View>
  )
}


interface SettingsButtonProps {
  title: string,
  theme: string,
  type: ButtonProps['mode'],
  width: any,
  fontSize: any,
  bgColor: [string, string],
  rippleColor: [string, string],
  textColor: [string, string],
  vMargin: number,
  onPress_: () => void
}

function SettingsButton(props: SettingsButtonProps): React.JSX.Element {
  return (
    <Button 
      mode={props.type}
      style={{width: props.width, backgroundColor: props.theme === 'dark' ? props.bgColor[0] : props.bgColor[1], marginVertical:props.vMargin}}
      rippleColor={props.theme === 'dark' ? props.rippleColor[0] : props.rippleColor[1]}
      onPress={props.onPress_}
    >
      <Text style={{fontSize: props.fontSize, color: props.theme === 'dark' ? props.textColor[0] : props.textColor[1]}}>{props.title}</Text>

    </Button>
  )
}





function SettingsScreen(): React.JSX.Element {
  const {theme, toggleTheme} = React.useContext(ThemeContext)
  const {user, Logout} = React.useContext(UserContext)


  const handle_logout = () => {
    console.log('Logging out')
    //logout with callback
    Logout((message:string) => {
      console.log(message);
    })
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme === 'dark' ? ColourSchemes.dark.background : ColourSchemes.light.background}}>
      <SettingsHeadder />

      <View style={[styles.settingsContainer, {backgroundColor: theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground}]}>


        <Text style={{fontSize:40, marginVertical:20, color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text}} >
          Settings
        </Text>


        <SettingToggle title="Dark Mode" theme={theme} onVal={toggleTheme} value={theme === 'dark' ? true : false} vMargin={20}/>

        <View style={{
          flexDirection: 'row',
          flex:1,
          flexGrow: 1,
        }} />

        <SettingsButton 
          title="Logout" 
          theme={theme} 
          type="contained" 
          width='80%' 
          fontSize={20} 
          bgColor={[ColourSchemes.dark.accent_secondary, ColourSchemes.light.accent]} 
          rippleColor={[ColourSchemes.dark.accent, ColourSchemes.light.accent_secondary]}
          textColor={[ColourSchemes.dark.text, ColourSchemes.light.text]} 
          vMargin={20}
          onPress_={handle_logout}
        />
        

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    margin: 20,
    borderRadius: 5
  },
  settingsItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:20,
    borderRadius:5,
    width: '80%'
  },
  settingsItem: {
    fontSize: 20,
  }
})


export default SettingsScreen;