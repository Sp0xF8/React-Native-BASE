import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { ThemeContext, ThemeSwitcher } from '../contexts/ThemeManager'

import { TouchableRipple, Text } from 'react-native-paper';

import Animated from 'react-native-reanimated';


const ProfileCardActionBar = () => {
	const navigation = useNavigation();

	const { theme } = React.useContext(ThemeContext);

	return (
		<View style={[styles.ProfileCardActionBarContainer, { backgroundColor: ThemeSwitcher('middleground', theme) }]}>
			<TouchableRipple
				style={[styles.actionButton, { backgroundColor: ThemeSwitcher('error', theme), borderBottomLeftRadius:10 }]}
				onPress={() => navigation.goBack()}
			>

				<Icon name="remove" size={24} color={ThemeSwitcher('text', theme)} style={{ padding: 10 }} />

			</TouchableRipple>

			<TouchableRipple
				style={[styles.actionButton, { backgroundColor: ThemeSwitcher('accent', theme) }]}
				onPress={() => navigation.goBack()}
			>

				<Icon name="undo" size={24} color={ThemeSwitcher('text', theme)} style={{ padding: 10 }} />

			</TouchableRipple>

			<TouchableRipple
				style={[styles.actionButton, { backgroundColor: ThemeSwitcher('success', theme), borderBottomRightRadius:10 }]}
				onPress={() => navigation.goBack()}
			>
				
				<Icon name="heart" size={24} color={ThemeSwitcher('text', theme)} style={{ padding: 10 }} />
			</TouchableRipple>
		</View>
	);
};


const ProfileCard = () => {
	const navigation = useNavigation();

	const { theme } = React.useContext(ThemeContext);

	return (
		<View style={[styles.CardContainer, { backgroundColor: ThemeSwitcher('middleground', theme) }]}>
			<Animated.ScrollView>

				
			</Animated.ScrollView>
			<ProfileCardActionBar />
		</View>
	);
};

const styles = StyleSheet.create({
	CardContainer: {
		width: '95%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginVertical:10,
		borderRadius:10,
	},
	ProfileCardActionBarContainer: {
		width: '100%',
		flex: 0,
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomLeftRadius:10,
		borderBottomRightRadius:10,
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
	},
	actionButton: {
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		flex:1,
		flexDirection: 'row',
		padding: 2,
	}
});

export default ProfileCard;