import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeContext, ThemeSwitcher } from '../contexts/ThemeManager'
import { ColourSchemes } from '../stylesheets/ColourSchemes';

const SettingsHeadder = () => {
	const navigation = useNavigation();

	const { theme } = React.useContext(ThemeContext);

	return (
		<View style={[styles.taskbarContainer, { backgroundColor: ThemeSwitcher('middleground', theme) }]}>

			<TouchableOpacity
				style={[styles.button, { backgroundColor: ThemeSwitcher('foreground', theme) }]}
				onPress={() => navigation.goBack()}
			>

				{/* <Text style={[styles.textText, { color: theme === 'dark' ? ColourSchemes.dark.text : ColourSchemes.light.text }]}>
					Settings
				</Text> */}
				<Icon name="arrow-left" size={24} color={ThemeSwitcher('text', theme)} style={{ padding: 10 }} />

			</TouchableOpacity>


			<Text style={[styles.textText, { color: ThemeSwitcher('text', theme), paddingLeft:5 }]}>
				Settings
			</Text>


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

export default SettingsHeadder;