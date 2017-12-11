import React from 'react'; 
import * as firebase from 'firebase'; 
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView, Button } from 'react-native'; 
import { StackNavigator, SafeAreaView } from 'react-navigation'; 

import one from './Recipes/one/';
import two from './Recipes/two/';
/* port three from './Recipes/three/';
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
	<View style={styles.TitleHeader}>
		<Text style={styles.TitleText}>Recipes:</Text>
		
		
		<ScrollView style={{ flex: 1 }} contentInsetAdjustmentBehavior="automatic">

		<TouchableOpacity onPress={() => navigation.navigate("one")}>
			<View style={styles.item}>
				<Text style={styles.itemText}>Cajun Chicken Pasta</Text>
			</View>
		</TouchableOpacity>

		<View style={styles.separator}></View>

		<TouchableOpacity onPress={() => navigation.navigate("two")}>
			<View style={styles.item}>
				<Text style={styles.itemText}>Prawn Pasta</Text>
			</View>
		</TouchableOpacity>

		<View style={styles.separator}></View>

		<TouchableOpacity>
			<View style={styles.item}>
				<Text style={styles.itemText}>Easy Lasagna II</Text>
			</View>
		</TouchableOpacity>

		<View style={styles.separator}></View>

		<TouchableOpacity>
			<View style={styles.item}>
				<Text style={styles.itemText}>Hamburger Cheese Bake</Text>
			</View>
		</TouchableOpacity>

		<View style={styles.separator}></View>

		<TouchableOpacity>
			<View style={styles.item}>
				<Text style={styles.itemText}>Mom's Spaghetti Sauce</Text>
			</View>
		</TouchableOpacity>

		<View style={styles.separator}></View>

		<TouchableOpacity>
			<View style={styles.item}>
				<Text style={styles.itemText}>California Primavera</Text>
			</View>
		</TouchableOpacity>

		<View style={styles.separator}></View>

		<TouchableOpacity>
			<View style={styles.item}>
				<Text style={styles.itemText}>Layered Egg Noodle Bake</Text>
			</View>
		</TouchableOpacity>

		<View style={styles.separator}></View>

		<TouchableOpacity>
			<View style={styles.item}>
				<Text style={styles.itemText}>Fettuccini Alfredo</Text>
			</View>
		</TouchableOpacity>

		<View style={styles.separator}></View>

		<TouchableOpacity>
			<View style={styles.item}>
				<Text style={styles.itemText}>Asian Carryout Noodles</Text>
			</View>
		</TouchableOpacity>	

		<View style={styles.separator}></View>


	</ScrollView>
	</View>
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
	TitleHeader: {
		flex: 1,
		paddingTop: 20,
	},
	TitleText: {
		marginLeft: 10,
		fontSize: 28,
	},
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
		marginLeft: 10,
		padding: 10, 
		height: 44,
	},
	foodImageStyle: {
		height: 65,
		width: 65,
	},
	itemText: {
		marginLeft: 12,
		fontSize: 22,
	},
	separator: {
	    flex: 1,
	    height: StyleSheet.hairlineWidth,
	    backgroundColor: '#8E8E8E',
	}, 
}); 

export default DisplayRecipes; 