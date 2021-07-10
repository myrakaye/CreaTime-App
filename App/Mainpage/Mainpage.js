//
//  Design01
//  Creatime-screens
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import Statistics from "../../App/Statistics/Statistics"

import React from "react"
import { Image, StyleSheet, Text, View, AppState } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { TouchableOpacity } from 'react-native-gesture-handler'
import Constants from 'expo-constants';
import { ProgressCircle } from 'react-native-svg-charts'
import * as SecureStore from 'expo-secure-store'
import { useRef } from "react"



const keyForDate = 'Date'
const keyForTime = 'Time'
const keyForLength = 'Length'
const expKey = 'experiment6'

export default class Mainpage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hour: 0,
			minute: 0,
			second: 0,
			//used for calculating progress circle
			total: 0,
			//the number of times users complete the time counting down
			complete: 0,
			//length of time user focus on the screen before clear or exit
			length: 0,
			appstate: AppState.currentState,
			test: "nothing",
			date: [],
			time: [],
		}
	}


	


	handle0(num) {
		if(num < 10)
			return String(0) + String(num)
		else
			return num
	}

	minusOneSecond() {
		this.setState({
			length: this.state.length+1
		})
		let h = this.state.hour
		let m = this.state.minute
		let s = this.state.second

		if(h == 0 & m == 0 & s == 1) {
			this.setState({
				complete: this.state.complete+1
			})
		}

		if(s == 0) {
			if(m == 0) {
				if(h != 0) {
					this.setState({
						hour: h - 1,
						minute: 59,
						second: 59,
					})
				}
				else {
					this.setState({
						total: 0,
					})
				}
			}
			else{
				this.setState({
					minute: m - 1,
					second: 59
				})
			}
		}
		else {
			this.setState({
				second: s - 1
			}) 
		}
	}

	completePortion() {
		let inTotal = this.state.total
		let remain = this.state.hour * 3600 + this.state.minute * 60 + this.state.second
		if(inTotal == 0)
			return 0
		else
			return 1-remain/inTotal
	}

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	componentDidMount() {
		setInterval(()=>{this.minusOneSecond()}, 1000)
		AppState.addEventListener("change", this._handleAppStateChange);
	}

	componentWillUnmount() {
		AppState.removeEventListener("change", this._handleAppStateChange);
	}

	sliceArray(array) {
		let newArray = []
		if(array.length > 7) {
			for(let i=6; i >= 0; i--){
				newArray.push(array[array.length-1-i])
				//console.log("array index:" +array[i])
			
			}
			return newArray
		}
		else
			return array	
		
	}

		// Secure Storage 
		async saveDate(key, value) {
			let stringValue = JSON.stringify(value)
			await SecureStore.setItemAsync(key, stringValue);
			console.log("_handleComplete saved to Storage: " + stringValue )
		}
		  
		async getValueDate() {
			let value = await SecureStore.getItemAsync(keyForDate);
			console.log("Retreived Values: " + value )
			return JSON.parse(value);
		}

	_handleAppStateChange = nextAppState => {
		//3 state: background, inactive, active
		//inactive is ios specific state (when multiple screen between page)
		if(nextAppState !== "active"){
			console.log("Background / inactive")
      		let obj = new Date()
			let date = obj.getMonth()+"."+obj.getDate()
			
      		this.getValueDate().then((dateArray) => {
				//console.log("length of array:" + dateArray.length)
        		if (!Array.isArray(dateArray)) {
          			dateArray = [date]
          			this.saveDate(keyForDate, dateArray)

        		} else {
          			dateArray.push(date)
					  //console.log("length of array after insert:" + dateArray.length)
					
					this.setState({
						test: dateArray
					})

					dateArray = this.sliceArray(dateArray)

					this.setState({
						date: dateArray
					})

					this.saveDate(keyForDate, dateArray)
          			
        		}
			})
			
		}
		else {
		  console.log("Foreground!");
		}
		this.setState({ appState: nextAppState });
	  };
	  
	

	render() {
	
		return <View
				style={styles.design01View}>
					
				<View
					pointerEvents="box-none"
					style={{
						height: 336,
						marginLeft: 20,
						marginRight: 40,
						marginTop: 61,
					}}>
						<ProgressCircle style={{ height: 340, marginTop: 10, marginRight: 2 }}
						 progress={this.completePortion()} progressColor={'rgb(109, 212, 0)'} >
							</ProgressCircle>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							width: 276,
							top: 0,
							height: 192,
							alignItems: "flex-start",
						}}>
						
						<TouchableOpacity
							hitSlop={{ top: 30, bottom: 150, left: 0, right: 80 }}
							onPress = {()=>{
								this.setState({
									hour: 0,
									minute: 0,
									second: 0,
									length: 0,
									total: 0,
								})
							}}
						>
							<View style={styles.cancelView}>
							<Text
								style={styles.labelTwoText}> Clear </Text>
							</View>
						</TouchableOpacity>
						
					
						<View
							style={styles.groupView}>
							<Text
								style={styles.titleText}> Time Left: </Text>
							<View
								style={{
									flex: 1,
								}}/>
							
								<Text style={styles.titleText}> 
								{this.handle0(this.state.hour)}h : {this.handle0(this.state.minute)}m : {this.handle0(this.state.second)}s </Text>
							
						</View>
						
					</View>
					
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 35,
							right: 18,
							top: 19,
							height: 240,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<LinearGradient
							start={{
								x: 1.35,
								y: 1.17,
							}}
							end={{
								x: -0.47,
								y: 0,
							}}
							locations={[0, 1]}
							colors={["rgb(109, 212, 0)", "white"]}
							style={styles.ovalCopyViewLinearGradient}>
							<View
								style={styles.ovalCopyView}/>
						</LinearGradient>
						<View
							style={{
								flex: 1,
							}}/>
						<LinearGradient
							start={{
								x: -0.52,
								y: -0.05,
							}}
							end={{
								x: 1.25,
								y: 1.16,
							}}
							locations={[0, 1]}
							colors={["rgb(93, 145, 247)", "rgb(158, 197, 250)"]}
							style={styles.ovalTwoViewLinearGradient}>
							<View
								style={styles.ovalTwoView}/>
						</LinearGradient>
						<LinearGradient
							start={{
								x: -0,
								y: 1.29,
							}}
							end={{
								x: 1.21,
								y: -0.34,
							}}
							locations={[0, 1]}
							colors={["rgb(239, 142, 106)", "rgb(241, 184, 150)"]}
							style={styles.ovalCopy2ViewLinearGradient}>
							<View
								style={styles.ovalCopy2View}/>
						</LinearGradient>
					</View>
				</View>
				
				<View
					pointerEvents="box-none"
					style={{
						height: 56,
						marginLeft: 20,
						marginRight: 18,
						marginTop: 31,
						flexDirection: 'row',
						justifyContent: 'space-around',
					}}>
						
					<TouchableOpacity
						hitSlop={{ top: 10, bottom: 50, left: 100, right: 90 }}
						onPress = {()=>{
							this.setState({
								hour: this.state.hour+1,
								total: this.state.total+3600
							})
						}}
					>
					<View
						style={styles.group7View}>
						<Text
							style={styles.nameCopyText}>Add 1 Hour</Text>
					</View>
					</TouchableOpacity>

					<TouchableOpacity
						hitSlop={{ top: 10, bottom: 50, left: 80, right: 90 }}
						onPress = {()=>{
							if(this.state.minute == 59) {
								this.setState({
									minute: 0,
									hour: this.state.hour+1,
									total: this.state.total+60
								})
							}
							else {
								this.setState({
									minute: this.state.minute+1,
									total: this.state.total+60
								})
							}
						}}
					>
					<View
						style={styles.group7Right}>										
							<Text
								style={styles.nameText}>Add 1 Minute</Text>
	
					</View>
					</TouchableOpacity>
			
				</View>

				<TouchableOpacity
					onPress = {()=>this.props.navigation.navigate('Statistics', 
					{
						hour: this.state.hour,
						minute: this.state.minute,
						second: this.state.second,
						total: this.state.total,
						complete: this.state.complete
					})}
				> 
				<View
					style={styles.group2View}>
					<Text
						style={styles.labelText}> See Statistics </Text>
				</View>
				</TouchableOpacity>

				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.homeIndicatorView}/>
					<View>
	
		  </View>
			</View>

		
	}
}

const styles = StyleSheet.create({
	design01View: {
		backgroundColor: "rgb(98, 54, 255)",
		flex: 1,
	},
	cancelView: {
		marginTop: -35,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		borderRadius: 12.83,
		position: "absolute",
		marginLeft: 0,
		width: 70,
		top: 0,
		height: 40,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	labelTwoText: {
		
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		backgroundColor: "transparent",
		marginLeft: 8,
	},
	groupView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 400,
		height: 105,
		marginTop: 63,
		marginLeft: 60,
		alignItems: "center",
	},
	titleText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 37,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 45,
		letterSpacing: 0.41,
		alignSelf: "stretch",
		marginLeft: 10,
		marginRight: 1,
		marginTop: 32,
	},
	rectangleView: {
		backgroundColor: "white",
		opacity: 0.3,
		width: 108,
		height: 2,
		
	},
	ovalView: {
		backgroundColor: "transparent",
		opacity: 0.45,
		borderRadius: 166.5,
		borderWidth: 1,
		borderColor: "rgba(228, 228, 228, 0.5)",
		borderStyle: "solid",
		position: "absolute",
		alignSelf: "center",
		width: 333,
		top: 3,
		height: 333,
	},
	ovalCopyViewLinearGradient: {
		borderRadius: 4,
		width: 8,
		height: 8,
		marginTop: 222,
	},
	ovalCopyView: {
		width: "100%",
		height: "100%",
	},
	ovalTwoView: {
		width: "100%",
		height: "100%",
	},
	ovalTwoViewLinearGradient: {
		borderRadius: 7.5,
		width: 15,
		height: 15,
		marginRight: 48,
	},
	ovalCopy2ViewLinearGradient: {
		borderRadius: 5.5,
		width: 11,
		height: 11,
		marginTop: 229,
	},
	ovalCopy2View: {
		width: "100%",
		height: "100%",
	},
	group7View: {
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		borderRadius: 12.83,
		position: "absolute",
		marginLeft: -100,
		width: 170,
		top: 0,
		height: 55,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	group7Right: {
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		borderRadius: 12.83,
		position: "absolute",
		marginLeft: -80,
		marginRight: 30,
		width: 170,
		top: 0,
		height: 55,
		justifyContent: "center",
		alignItems: "flex-end",
	},
	nameCopyText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		marginLeft: 42,
	},
	group6View: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 356,
		top: 1,
		height: 55,
	},
	group5Image: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 55,
	},
	nameText: {
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		backgroundColor: "transparent",
		marginRight: 30,
	},
	group2View: {
		backgroundColor: "white",
		borderRadius: 12.83,
		height: 55,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 19,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	labelText: {
		backgroundColor: "transparent",
		color: "rgb(31, 31, 55)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		marginLeft: 120,
	},
	homeIndicatorView: {
		backgroundColor: "black",
		opacity: 0.2,
		borderRadius: 2.76,
		alignSelf: "center",
		width: 148,
		height: 6,
		marginBottom: 8,
	},
})
