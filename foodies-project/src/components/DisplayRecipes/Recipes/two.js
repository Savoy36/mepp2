import React from 'react'; 
import { StyleSheet, View, Text, Image } from 'react-native'; 
import { StackNavigator, SafeAreaView } from 'react-navigation'; 

const two = ({ navigation }) => {
	<View>
		<Text>Two</Text>
	</View>
};


const twoScreen = StackNavigator({
	two: {
		screen: two, 
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

export default two; 