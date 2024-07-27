import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation, useNavigationState } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';
import { ThemeContext } from '../contexts/ThemeManager';
import { ColourSchemes } from '../stylesheets/ColourSchemes';

const Taskbar = () => {
	
	const navigation = useNavigation();
	
	const { theme } = React.useContext(ThemeContext);
	const routes = useNavigationState(state => state?.routes || []);


	return (
		<View style={[styles.menuContainerbg, { backgroundColor: theme === 'dark' ? ColourSchemes.dark.background : ColourSchemes.light.background }]}>
			<View style={[styles.taskbarContainer, { backgroundColor: theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground }]}>

				<TouchableOpacity
					style={[styles.button, { backgroundColor: theme === 'dark' ? ColourSchemes.dark.foreground : ColourSchemes.light.foreground }]}
					onPress={() => {
						if (routes.length > 1) {
							navigation.dispatch(StackActions.popToTop());
						}
					}}
				>
					<Text style={[styles.textText, { color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text }]}>

						Meet
					</Text>
					<Icon name="group" size={24} color={theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text} style={{ padding: 10 }} />

				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.button, { backgroundColor: theme === 'dark' ? ColourSchemes.dark.foreground : ColourSchemes.light.foreground }]}
					onPress={() => navigation.navigate('Chat')}
				>
					<Text style={[styles.textText, { color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text }]}>

						Chat
					</Text>
					<Icon name="comment" size={24} color={theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text} style={{ padding: 10 }} />

				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.button, { backgroundColor: theme === 'dark' ? ColourSchemes.dark.foreground : ColourSchemes.light.foreground }]}
					onPress={() => navigation.navigate('Profile')}
				>
					<Text style={[styles.textText, { color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text }]}>

						Profile
					</Text>
					<Icon name="user" size={24} color={theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text} style={{ padding: 10 }} />

				</TouchableOpacity>


				</View>
		</View>
		
	);
};

const styles = StyleSheet.create({
	taskbarContainer: {
		flex: 0,
		padding: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		borderTopLeftRadius:10,
		borderTopRightRadius:10,
	},
	textText: {
		fontSize: 24,
		fontWeight: 'bold',
	},

	button: {
		width: '30%',
		height: 50,
		borderRadius: 2,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 2,

	},
	menuContainerbg: {
		width: '100%',
	}
});

export default Taskbar;