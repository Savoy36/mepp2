import React, { Component } from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Picker } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';

//const database = firebase.database();
import Login from '../../components/Login/Login'

export default class recipeSettings extends React.Component {

	constructor(){
		super()
		this.state={
		username: '',
		veg: false,
		vegText: 'No',
		lactInt: false,
		lactText: 'No',
		price: false,
		priceText: 'More Expensive',
		time: false,
		timeText: 'Longer',
		spicy: false,
		spicyText: 'Mild',
		saveSettings: 'Save settings?'
		};
		this.onPressVeg=this.onPressVeg.bind(this)
		this.onPressLact=this.onPressLact.bind(this)
		this.onPressPrice=this.onPressPrice.bind(this)
		this.onPressTime=this.onPressTime.bind(this)
		this.onPressSpicy=this.onPressSpicy.bind(this)
	}

	onPressVeg = () => {
		if (!this.state.veg) {
			this.setState({veg: true})
			this.setState({vegText: 'Yes!'})
		}
		else {
			this.setState({veg: false})
			this.setState({vegText: 'No'})
		}
	}

	onPressLact = () => {
		if (!this.state.lactInt) {
			this.setState({lactInt: true})
			this.setState({lactText: 'Yes'})
		}
		else {
			this.setState({lactInt: false})
			this.setState({lactText: 'No'})
		}
	}

	onPressPrice = () => {
		if (!this.state.price) {
			this.setState({price: true})
			this.setState({priceText: 'Cheaper'})
		}
		else {
			this.setState({price: false})
			this.setState({priceText: 'More Expensive'})
		}
	}

	onPressTime = () => {
		if (!this.state.time) {
			this.setState({time: true})
			this.setState({timeText: 'Shorter'})
		}
		else {
			this.setState({time: false})
			this.setState({timeText: 'Longer'})
		}
	}

	onPressSpicy = () => {
		if (!this.state.spicy) {
			this.setState({spicy: true})
			this.setState({spicyText: 'Hot!'})
		}
		else {
			this.setState({spicy: false})
			this.setState({spicyText: 'Mild'})
		}
	}

	settingsSaver = () => {
			this.setState({username: this.props.navigation.state.params.username})
			this.setState({saveSettings: 'Settings Saved for user: '})
	}

	render() {
		const { navigate } = this.props.navigation;
		const { goBack } = this.props.navigation;
		return(
			<View style={styles.container}>
			<View>
    		<TouchableOpacity 
    			style={styles.goBack}
    			onPress={() => goBack()}>
    			<Text style={styles.goBackText}>Back</Text>
    		</TouchableOpacity>

    		<Text style={styles.pageTitle}>Recipe Options</Text>
    		</View>
			<TouchableOpacity //vegetarian button
    			style={[styles.optionButton, this.state.veg && styles.pressedButton || styles.unpressedButton]}
    			onPress={() => {
    				this.onPressVeg()
    				}
    			}>
    			<Text style={styles.optionButtonText}>Vegetarian?: {this.state.vegText}</Text>
    		</TouchableOpacity>

    		<TouchableOpacity //Lactose Intolerant button
    			style={[styles.optionButton, this.state.lactInt && styles.pressedButton || styles.unpressedButton]}
    			onPress={() => {
    				this.onPressLact()
    				}
    			}>
    			<Text style={styles.optionButtonText}>Lactose Intolerant?: {this.state.lactText}</Text>
    		</TouchableOpacity>

    		<TouchableOpacity //Price Button
    			style={[styles.optionButton, this.state.price && styles.pressedButton || styles.unpressedButton]}
    			onPress={() => {
    				this.onPressPrice()
    				}
    			}>
    			<Text style={styles.optionButtonText}>Meal Price?: {this.state.priceText}</Text>
    		</TouchableOpacity>

    		<TouchableOpacity //Prep Time Button
    			style={[styles.optionButton, this.state.time && styles.pressedButton || styles.unpressedButton]}
    			onPress={() => {
    				this.onPressTime()
    				}
    			}>
    			<Text style={styles.optionButtonText}>Prep Time?: {this.state.timeText}</Text>
    		</TouchableOpacity>

    		<TouchableOpacity //Spiciness Button
    			style={[styles.optionButton, this.state.spicy && styles.pressedButton || styles.unpressedButton]}
    			onPress={() => {
    				this.onPressSpicy()
    				}
    			}>
    			<Text style={styles.optionButtonText}>Spiciness?: {this.state.spicyText}</Text>
    		</TouchableOpacity>

    		<TouchableOpacity//save settings button
    			style={[styles.optionButton, styles.normalButtons]}
    			onPress={() => {
    					this.settingsSaver()
    				}
    			}>
    			<Text style={styles.optionButtonText}>{this.state.saveSettings}{this.state.username}</Text>
    		</TouchableOpacity>
    		</View>
		)
	}
}



recipeSettings.navigationOptions = {
	title: 'Recipe Selection Settings',
}; 


const recipeSettingsScreen = StackNavigator({
	recipeSettings: {
		screen: recipeSettings,
	}, 
},
	{
		headerMode: 'none',
	}
);

const styles = StyleSheet.create({
	container:{
		marginBottom: 10, 
		padding:10,
		backgroundColor: '#E4F1FE'
	},
	goBack: {
    	marginTop: 25,
		marginBottom: 10,
		paddingLeft: 10
	},
	goBackText: {
		color: '#013243',
    	fontWeight: '100',
    	fontSize: 16
	},
	pageTitle: {
		textAlign: 'center',
		color: 'black',
		fontSize: 20, 
		fontWeight: '400',		
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.4)',
		marginBottom: 20,
		color: 'black',
		paddingHorizontal: 10		
	},
	optionButton: {
		backgroundColor: 'red',
    	marginBottom: 20, 
    	alignItems: 'center',
    	justifyContent: 'center',
    	borderRadius:10,
    	borderWidth: 0,
    	width: 180,
    	borderColor: 'black',
    	paddingTop:15,
    	paddingLeft: 10,
    	paddingRight: 10,
  	},
  	pressedButton: {
  		backgroundColor: 'green'
  	},
  	unpressedButton: {
  		backgroundColor: 'red'
  	},
  	normalButtons: {
  		backgroundColor: '#60AFFE',
  	},
  	optionButtonText:{
    	textAlign: 'center',
    	color: 'white',
    	fontWeight: '700',
    	fontSize: 22
    },
}); 

//export default recipeSettings; 