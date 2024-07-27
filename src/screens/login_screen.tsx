import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

import { Button, Text } from 'react-native-paper';

import { ColourSchemes } from '../stylesheets/ColourSchemes';

import { ThemeContext } from '../contexts/ThemeManager';
import { UserContext } from '../contexts/LoginManager'

// import Login from '../scripts/login';




function LoginScreen(): React.JSX.Element {
		const { theme } = useContext(ThemeContext);
		const { user, Login } = useContext(UserContext);

		const [ activeInput, setActiveInput ] = 	useState(0);
		const [ username, setUsername ] 			= 	React.useState("");
		const [ password, setPassword ] 			= 	React.useState("");
	

		//handle login button onclick
		const handleLogin = () => {

			//call login function from login script
			Login(username, password, (message:string) => {
				console.log(message);
			})
			
		}

		return (
			<View
				style={[
					styles.container, 
					{backgroundColor: theme === 'dark' ? ColourSchemes.dark.background : ColourSchemes.light.background}
				]}
			>



				<Text style={{ color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text, fontSize:24 }}>
					Welcome to the Login Screen!
				</Text>

				
				<TextInput
					style={[
						styles.textInput,
						{
							backgroundColor: theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground,
							color: theme === 'dark' ? ColourSchemes.dark.success : ColourSchemes.light.success,
							borderColor: activeInput === 1 ? theme === 'dark' ? ColourSchemes.dark.accent_secondary : ColourSchemes.light.accent_secondary : theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground,
							borderWidth: activeInput === 1 ? 1 : 0,
						}
					]}
					placeholder="JohnDoe@gmail.com"
					onFocus={
						() => {
							setActiveInput(1)
						}
					}

					onEndEditing={
						() => {
							setActiveInput(0)
						}
					}
				/>

				<TextInput
					style={[
						styles.textInput,
						{
							backgroundColor: theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground,
							color: theme === 'dark' ? ColourSchemes.dark.success : ColourSchemes.light.success,
							borderColor: activeInput === 2 ? theme === 'dark' ? ColourSchemes.dark.accent_secondary : ColourSchemes.light.accent_secondary : theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground,
							borderWidth: activeInput === 2 ? 1 : 0,
						}
					]}
					placeholder="Password"
					secureTextEntry={true}
					onFocus={
						() => {
							setActiveInput(2)
						}
					}

					onEndEditing={
						() => {
							setActiveInput(0)
						}
					}
				/>


				<Button
					mode="contained"
					rippleColor={theme === 'dark' ? ColourSchemes.dark.foreground : ColourSchemes.light.foreground}
					onPress={handleLogin}
					style={[
						styles.button,
						{
							backgroundColor: theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground,
						}
					]}
				>
					<Text style={[ { color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text, fontSize: 20, fontWeight:'bold' }]}>
						Login
					</Text>
				</Button>

				<Button
					mode="contained"
					rippleColor={theme === 'dark' ? ColourSchemes.dark.foreground : ColourSchemes.light.foreground}
					onPress={() => console.log('SignUp')}
					style={[
						styles.button,
						{
							backgroundColor: theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground,
						}
					]}
				>
					<Text style={[ { color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text, fontSize: 20, fontWeight:'bold' }]}>
						Sign-Up
					</Text>
				</Button>
			</View>
		);
	}


const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		textInput: {
			width: '80%',
			height: 50,
			margin: 10,
			padding: 10,
			borderRadius: 10,
		},
		button: {
			width: '80%',
			margin:10,
			borderRadius: 10,
		},
})


export default LoginScreen;