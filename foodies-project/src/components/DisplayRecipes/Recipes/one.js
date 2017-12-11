import React from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native'; 
import { StackNavigator, SafeAreaView } from 'react-navigation'; 

const one = ({ navigation }) => {
	<View>
		<Text>One</Text>
	</View>
};


const oneScreen = StackNavigator({
	one: {
		screen: one, 
	}, 
},
	{
		headerMode: 'none', 
	}
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});

export default one; 