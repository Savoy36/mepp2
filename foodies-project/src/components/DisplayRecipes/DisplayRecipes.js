import React from 'react'; 
import * as firebase from 'firebase'; 
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Button } from 'react-native'; 
import { StackNavigator, SafeAreaView } from 'react-navigation'; 

import one from './Recipes/one/';
import two from './Recipes/two/';
/*import three from './Recipes/three/';
import four from './Recipes/four/';
import five from './Recipes/five/';
import six from './Recipes/six/';
import seven from './Recipes/seven/';
import eight from './Recipes/eight/';
import nine from './Recipes/nine/';
import ten from './Recipes/ten/';
import eleven from './Recipes/eleven/';
import twelve from './Recipes/twelve/';
import thirteen from './Recipes/thirteen/';
import fourteen from './Recipes/fourteen/';
*/
const DisplayRecipes = ({ navigation }) => (
	<ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">
		<TouchableOpacity onPress={() => navigation.navigate("one")}>
			<View style={styles.item}>
				<Text style={styles.itemText}>Cajun Chicken Pasta</Text>
			</View>
		</TouchableOpacity>

		<TouchableOpacity onPress={() => navigation.navigate("two")}>
			<View style={styles.item}>
				<Text style={styles.itemText}>Prawn Pasta</Text>
			</View>
		</TouchableOpacity>

	</ScrollView>
); 


const DisplayRecipesScreen = StackNavigator({
	DisplayRecipes: {
		screen: DisplayRecipes,
	},
	one: {
		screen: one,
	},
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
		flex: 1,
		paddingTop: 22 
	}, 
	 goBackButton: {
	    marginTop: 25,
	    marginBottom: 10,
	    paddingLeft: 10
	 },
	 goBackButtonText: {
	    color: '#013243',
	    fontWeight: '100',
	    fontSize: 16
	 },
	item: {
		padding: 10, 
		height: 44,
	},
	itemText: {
		marginLeft: 12,
		fontSize: 18,
	},
	separator: {
	    flex: 1,
	    height: StyleSheet.hairlineWidth,
	    backgroundColor: '#8E8E8E',
	}, 
}); 

export default DisplayRecipes; 