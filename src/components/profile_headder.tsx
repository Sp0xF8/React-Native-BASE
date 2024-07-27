import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeContext } from '../contexts/ThemeManager'
import { ColourSchemes } from '../stylesheets/ColourSchemes';

const ProfileHeadder = () => {
	const navigation = useNavigation();

	const { theme } = React.useContext(ThemeContext);

	return (
		<View style={[styles.taskbarContainer, { backgroundColor: theme === 'dark' ? ColourSchemes.dark.middleground : ColourSchemes.light.middleground }]}>

			<Text style={[styles.textText, { color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text, paddingLeft:5 }]}>
				Profile
			</Text>

			<TouchableOpacity
				style={[styles.button, { backgroundColor: theme === 'dark' ? ColourSchemes.dark.foreground : ColourSchemes.light.foreground }]}
				onPress={() => navigation.navigate('SettingsScreen')}>

				{/* <Text style={[styles.textText, { color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text }]}>
					Settings
				</Text> */}
				<Icon name="cogs" size={24} color={theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text} style={{ padding: 10 }} />

			</TouchableOpacity>

		</View>
	);
};

const styles = StyleSheet.create({
	taskbarContainer: {
		width: '100%',
		flex: 0,
		padding: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	textText: {
		fontSize: 24,
		fontWeight: 'bold',
	},

	button: {
		width: 50,
		height: 50,
		borderRadius: 2,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 2,

	}
});

export default ProfileHeadder;