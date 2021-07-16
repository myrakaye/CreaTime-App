//
//  Design00
//  Creatime-screens
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import Mainpage from "../../App/Mainpage/Mainpage"

import React from "react"
import { Image, StyleSheet, Text, View, AppState } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRef, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Dimensions} from 'react-native';
import Graph from '../components/Graph'

const keyForDate = 'Date'
const keyForTime = 'Time'
const keyForLength = 'Length'
const keyForComplete = 'Complete'
const keyForExit = 'Exit'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

let adjustHeight = (size)=> size*screenHeight/896
let adjustWidth = (size)=> size*screenWidth/414
let adjustFont = (size)=> adjustHeight(size)*adjustHeight(1)

export default class Design00 extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}


	constructor(props) {
		super(props)
		this.state = {
			hour: this.props.route.params.hour,
			minute: this.props.route.params.minute,
			second: this.props.route.params.second,
			//used for calculating progress circle
			total: this.props.route.params.total,
			//the number of times users complete the time counting down
			//complete: this.props.route.params.complete,
			//length of time user focus on the screen before clear or exit
			length: this.props.route.params.complete,
			test: "test",
			date: [],
			time: [],
			//the length is stored in seconds!!
			lengthList: [0,0,0,0,0,0,0],
			//update number of times of complete from secure storage (previous sum of complete times)
			complete: 0,
			//update number of times of exit the app (only count when the time is not 0)
			exit: 0,

			concentration: 1,
			
		}
	}

	async getValueDate() {
		let value = await SecureStore.getItemAsync(keyForDate);
		if(value == null) {
			value = ["","","","","","",""]
		}
		console.log("Retreived Values: " + value )
		return JSON.parse(value);
	}
	async getValueTime() {
		let value = await SecureStore.getItemAsync(keyForTime);
		if(value == null) {
			value = ["","","","","","",""]
		}
		console.log("Retreived Values: " + value )
		return JSON.parse(value);
	}
	async getValueLength() {
		let value = await SecureStore.getItemAsync(keyForLength);
		if(value == null) {
			value = [0,0,0,0,0,0,0]
			console.log("empty lengthlist")	
		}

		console.log("Retreived Values: " + value )
		return JSON.parse(value);
	}
	async getValueComplete() {
		let value = await SecureStore.getItemAsync(keyForComplete);
		console.log("Retreived Values: " + value )
		return JSON.parse(value);
	}
	async getValueExit() {
		let value = await SecureStore.getItemAsync(keyForExit);
		console.log("Retreived Values: " + value )
		return JSON.parse(value);
	}

	// Access Secure Storage
	componentDidMount() {
		this.getValueDate().then((dateArray) => {
			this.setState({
				date: dateArray
			})
		})
		this.getValueTime().then((timeArray) => {
			this.setState({
				time: timeArray
			})
		})
		this.getValueLength().then((lengthArray) => {
			this.setState({
				lengthList: lengthArray
			})
		})
		this.getValueComplete().then((completeTimes) => {
			if(completeTimes!=null){
				this.setState({
					complete: completeTimes
				})
			}
		})
		this.getValueExit().then((exitTimes) => {
			if(exitTimes!=null){
				this.setState({
					exit: exitTimes
					
				})
			}
			
		
		})

		
	}

	averageLengthMin() {
		let arr = this.state.lengthList
		console.log("here is list; "+this.state.lengthList)
		if(!Array.isArray(arr)){
			return 0
		}
		else {
			let sum = 0
			for(let i = 0; i < arr.length; i++) {
			 	sum += arr[i]
			 }
			 //console.log("sum: "+sum)
			 //turn into mins
			 return (sum /7/60).toPrecision(2)
		}
	}

	progressBarView(){
		return {
			flex: 1,
			backgroundColor: "transparent",
			width: screenWidth*0.85*this.calculateConcentration(),
			height: 50,
			marginLeft: 0,
			marginRight: -8,
			marginTop: "2.5%",
				
		}
	}

	calculateDate(i) {
		let d = this.state.date
		let t = this.state.time
		if(!Array.isArray(d) || !Array.isArray(t)) {
			return ""
		}

		else{
			if(i >= d.length) {
				return ""
			}
			else {
				//console.log("d:" + d[i] + " t: " + t[i])
				return d[i] + " " + t[i]
			}
		}
	}

	calculateHeight(i) {
		let h = this.state.lengthList
		if(!Array.isArray(h)) {
			return 0
		}	
		else{
			if(i >= h.length) {
				return 0
			}
			else {
				//console.log(h[i])
				return parseInt(h[i])
			}
		}
	}
	

	calculateConcentration() {
		let newConcentration = 1
		//let distractions = () => this.getValueExit()
		//console.log("Distraction: "+distractions)

		newConcentration += (this.state.complete/100*5)
		newConcentration -= (this.state.exit/100*2)		
		
		if (newConcentration < 0){newConcentration = 0}
		if (newConcentration > 1){newConcentration = 1}
		
		//newConcentration = (newConcentration + this.state.concentration) / 2

		return newConcentration
	}

	calculateLevel() {
		let concentration = this.calculateConcentration()
		if(concentration < 0.33) {
			return "Low"
		}
		else if(concentration < 0.66) {
			return "Medium"
		}
		else {
			return "High"
		}
	}
	
	barGraphView(i){
		let j = this.calculateHeight(i)

		if(j > 250)
			j = 250

		return{
			position: "absolute",
			bottom: 30,
			borderRadius: 7,
			//pass in calculateHeight(i) and calculate for screen height, like progressBarView
			//maximum height in the screen should be 250
			//current maximum time length shown is 1000s (16.6min)
			//the range could be larger, but as we test, it is simpler to show
			//with smaller range
			//height: j/4, 
			height: j,
			marginLeft: 7,
			marginRight: 6,
			marginBottom: 10,
			alignItems: "flex-end",
		}
	}

	render() {

		return <View
				style={styles.design00View}>
				<View
					pointerEvents="box-none"
					style={{
						flex: 4,
						height: 100,
						marginLeft: "4%",
						marginTop: "4%",
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.titleText}> {"Statistics"} </Text>
				</View>

				

				<View
					pointerEvents="box-none"
					style={{
						flex: 1,
						height: 59,
						marginLeft: 20,
						marginRight: 20,
						marginTop: "1%",
						marginBottom: "5%",
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							flex: 2,
							width: 230,
							height: 70
						}}>
						<Text
							style={styles.averageProductivityText}> Average Focus Length </Text>
						<Text
							style={styles.hPerWeekText}> {this.averageLengthMin() + "min"} </Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.componentsButtonCoffePlaceView}>
						<Text
							style={styles.coffePlaceText}>Recent 7</Text>
						<Image
							source={require("./../../assets/images/ic-drop-normal.png")}
							style={styles.icDropNormalImage}/>
					</View>
				</View>

				<View
					style={{
						flex: 1,
					}}/>

				{/* Make sure to validate empty arrays (so sessions)*/}
				<Graph data= {{date: this.state.date, time: this.state.time, lengthList: this.state.lengthList}}/>

				{/* Add blank view to seperate graphs */}
				<View
					style={{
						flex: 1,
					}}/>

				<View
					style={styles.group18View}>
					<View
						style={styles.group15View}>
						<View style={{flex: 2}}>
						<Text
							style={styles.yourConcentrationText}>YOUR CONCENTRATION</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								backgroundColor:'transparent',
								flex: 2,
								width: 68,
								height: 20,
								marginLeft: 3,
								marginTop: 1,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Text
								style={styles.textEightText}>{(this.calculateConcentration()*100).toPrecision(3)}%</Text>
							<Text
								style={styles.highText}> {this.calculateLevel()} </Text>
						</View>
						{/* <Image
							source={require("./../../assets/images/group-13.png")}
							style={styles.group13Image}/> */}
							
						<View
								style={this.progressBarView()}>
								<LinearGradient
									start={{
										x: 3.44,
										y: -2.17,
									}}
									end={{
										x: 3.44,
										y: 3.72,
									}}
									locations={[0, 1]}
									colors={["rgb(98, 54, 255)", "rgb(184, 148, 242)"]}
									style={styles.progressBarViewLinearGradient}>
									<View
										style={this.progressBarView()}/>
								</LinearGradient>
								
							</View>


						
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								alignSelf: "stretch",
								height: 20,
								marginRight: 4,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.textNineText}>0</Text>
							<Text
								style={styles.textTenText}>20</Text>
							<Text
								style={styles.textElevenText}>50</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textTwelveText}>80</Text>
							<Text
								style={styles.textThirteenText}>100</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 3,
					}}/>
			
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "center",
						width: 68,
						height: 68,
						bottom: 30,
					}}>

					<TouchableOpacity
					hitSlop={{ top: 0, bottom: "70%", left: 0, right: "10%" }}
					onPress = {()=>this.props.navigation.navigate('Mainpage')}
				>
					<View
						style={styles.group6View}>
					<Text
						style={styles.backText}>BACK</Text>
					</View>
							</TouchableOpacity>
				</View>
			


				<View
					style={styles.homeIndicatorView}/>
			</View>
	}
}

const styles = StyleSheet.create({
	design00View: {
		backgroundColor: "white",
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	titleText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: adjustFont(37),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 80,
		letterSpacing: 0.41,
	},
	group12Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 44,
		height: 44,
		marginTop: 11,
	},
	averageProductivityText: {
		flex: 1,
		backgroundColor: "transparent",
		color: "black",
		fontSize: adjustFont(11),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
	
		left: 2,
		top: 0,
	},
	hPerWeekText: {
		flex: 2.8,
		backgroundColor: "transparent",
		color: "black",
		fontSize: adjustFont(25),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 60,
		left: '8%',

	},
	componentsButtonCoffePlaceView: {
		backgroundColor: "white",
		borderRadius: 16,
		shadowColor: "rgba(0, 0, 0, 0.08)",
		shadowRadius: 8,
		shadowOpacity: 1,
		width: 113,
		height: 32,
		marginTop: 22,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	coffePlaceText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: adjustFont(16),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 27,
		backgroundColor: "transparent",
		marginRight: 8,
	},
	icDropNormalImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 5,
		marginRight: 18,
	},
	group19View: {
		backgroundColor: "transparent",
		position: "absolute",
		left: -5,
		right: 0,
		top: 0,
		height: 280,
	},
	rectangleCopy42View: {
		backgroundColor: "white",
		borderRadius: 22.27,
		borderWidth: 2,
		borderColor: "rgba(228, 228, 228, 0.5)",
		borderStyle: "solid",
		position: "absolute",
		left: 25,
		right: 16,
		top: 20,
		height: 280,
	},
	rectangleView: {
		backgroundColor: "white",
		borderRadius: 25,
		borderWidth: 1,
		borderColor: "rgba(228, 228, 228, 0.5)",
		borderStyle: "solid",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 79,
	},
	group10View: {
		backgroundColor: "transparent",
		width: 8,
		height: 215,
		justifyContent: "space-evenly"
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginLeft: -20,
		marginTop: 18,
	},
	textTwoText: {
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		backgroundColor: "transparent",
		marginLeft: -10,
		marginTop: 7,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginLeft: -10,
		marginTop: 52,
	},
	textFiveText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginRight: 1,
		marginLeft: -10,
		marginTop: 36,
	},
	textSixText: {
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		backgroundColor: "transparent",
		marginLeft: -10,
		marginRight: 1,
		marginTop: 23,
	},
	textSevenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginLeft: -10,
		marginRight: 1,
		marginTop: 5,
	},
	textFourText: {
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginLeft: -10,
		backgroundColor: "transparent",
		marginTop: 7,
	},
	group9View: {
		position: "relative",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 32,
		height: 330,
		marginLeft: 20,
		marginRight: 8,
		
	},
	rectangleTwoView: {
		width: "100%",
		height: "100%",
	},
	
	monText: {
		backgroundColor: "transparent",
		opacity: 0.3,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		//alignItems: "baseline",
		lineHeight: 15,
		marginBottom: 1,
		// position: "absolute",
		// bottom: 0
	},
	rectangleTwoViewLinearGradient: {
		position: "absolute",
		bottom: 30,
		borderRadius: 7,
		height: 100,
		marginLeft: 7,
		marginRight: 6,
		marginBottom: 10,
		alignItems: "flex-end",
	},
	group9Copy1View: {
		position: "relative",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 32,
		height: 330,
		marginLeft: 5,
		marginRight: 10,
	},
	rectangleThreeViewLinearGradient: {
		borderRadius: 7,
		height: 198,
		marginLeft: 5,
		marginRight: 4,
	},
	rectangleThreeView: {
		width: "100%",
		height: "100%",
	},
	tueText: {
		backgroundColor: "transparent",
		opacity: 0.3,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 15,
		marginBottom: 1,
	},
	group9Copy2View: {
		position: "relative",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 32,
		height: 330,
		marginLeft: 5,
		marginRight: 10,
	},
	rectangleFourView: {
		width: "100%",
		height: "100%",
	},
	rectangleFourViewLinearGradient: {
		borderRadius: 7,
		height: 176,
		marginLeft: 7,
		marginRight: 6,
	},
	wedText: {
		backgroundColor: "transparent",
		opacity: 0.3,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 15,
		marginBottom: 1,
	},
	group9Copy3View: {
		position: "relative",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 32,
		height: 330,
		marginLeft: 5,
		marginRight: 10,
	},
	rectangleFiveViewLinearGradient: {
		borderRadius: 7,
		height: 182,
		marginLeft: 6,
		marginRight: 5,
	},
	rectangleFiveView: {
		width: "100%",
		height: "100%",
	},
	thuText: {
		backgroundColor: "transparent",
		opacity: 0.3,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 15,
		marginBottom: 1,
	},
	group9Copy5View: {
		position: "relative",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 32,
		height: 330,
		marginLeft: 5,
		marginRight: 10,
	},
	rectangleSixView: {
		width: "100%",
		height: "100%",
	},
	rectangleSixViewLinearGradient: {
		borderRadius: 7,
		height: 176,
		marginLeft: 2,
		marginRight: 1,
	},
	friText: {
		backgroundColor: "transparent",
		opacity: 0.3,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 9,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 15,
		marginBottom: 1,
	},
	group9Copy6View: {
		position: "relative",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 32,
		height: 330,
		marginLeft: 5,
		marginRight: 10,
	},
	rectangleSevenViewLinearGradient: {
		borderRadius: 7,
		height: 173,
		marginLeft: 5,
		marginRight: 4,
	},
	rectangleSevenView: {
		width: "100%",
		height: "100%",
	},
	satText: {
		backgroundColor: "transparent",
		opacity: 0.3,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 15,
		marginBottom: 1,
	},
	group9Copy7View: {
		position: "relative",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 32,
		height: 330,
		marginLeft: 5,
		marginRight: 5,
	},
	rectangleEightView: {
		width: "100%",
		height: "100%",
	},
	rectangleEightViewLinearGradient: {
		borderRadius: 7,
		height: 188,
		marginLeft: 6,
		marginRight: 5,
	},
	sunText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 15,
		backgroundColor: "transparent",
		opacity: 0.3,
		marginBottom: 1,
	},
	path2View: {
		backgroundColor: "rgb(87, 79, 173)",
		position: "absolute",
		right: 20,
		width: 319,
		top: 165,
		height: 2,
	},
	group18View: {
		backgroundColor: "rgb(235, 248, 231)",
		borderRadius: 25,
		alignSelf: "flex-end",
		width: adjustWidth(374),
		height: adjustHeight(119)*1,
		marginRight: 14,
		
		justifyContent: "center",
	},
	group15View: {
		flex: 1,
		backgroundColor: "transparent",
		height: adjustHeight(91),
		marginLeft: 13,
		marginRight: 16,
		alignItems: "flex-start",
	},
	yourConcentrationText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: adjustFont(11),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: 50,
		marginLeft: "1%",
		marginTop: "1%",
	},
	textEightText: {
		color: "black",
		fontSize: adjustFont(17),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: "100%",
		width: "150%",
		paddingTop: 1,
		backgroundColor: "transparent",
	},
	highText: {
		color: "rgba(0, 0, 0, 0.5)",
		fontSize: adjustFont(11),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		height: "100%",
		width: "100%",
		paddingTop: 2,
		backgroundColor: "transparent",
		marginLeft: 7,
		marginTop: 9,
	},
	// group13Image: {
	// 	backgroundColor: "transparent",
	// 	resizeMode: "cover",
	// 	alignSelf: "stretch",
	// 	width: null,
	// 	height: 14,
	// 	marginLeft: 4,
	// 	marginTop: 6,
	// },
	progressBarViewLinearGradient: {
		borderRadius: 7,
		height: adjustHeight(15),
		alignItems: "flex-end",
		marginTop: "-1%",
	},
	// progressBarView: {
	// 	backgroundColor: "transparent",
	// 	width: 360*{this.state.concentration},
	// 	marginLeft: 0,
	// 	marginRight: -8,
	// 	marginTop: 12,
	// },

	
	textNineText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: adjustFont(11),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: "100%",
	},
	textTenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: adjustFont(11),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: "100%",
		marginLeft: "16%",
	},
	textElevenText: {
		color: "black",
		fontSize: adjustFont(11),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: "100%",
		backgroundColor: "transparent",
		marginLeft: "26%",
	},
	textTwelveText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: adjustFont(11),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: "100%",
		marginRight: "13%",
	},
	textThirteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: adjustFont(11),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		height: "100%",
		marginRight: "-1%",
	},
	group6View: {
		flex: 1,
		backgroundColor: "rgb(98, 54, 255)",
		borderRadius: 33.9,
		shadowColor: "rgba(110, 98, 226, 0.62)",
		shadowRadius: 9,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 68,
		height: 68,
	},
	backText: {
		color: "rgb(252, 249, 249)",
		fontSize: adjustFont(12),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		bottom: 27,
	},
	homeIndicatorView: {
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		borderRadius: 2.76,
		alignSelf: "center",
		width: 149,
		height: 6,
		marginBottom: 8,
	},
})
