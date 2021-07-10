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
			complete: this.props.route.params.complete,
			//length of time user focus on the screen before clear or exit
			length: this.props.route.params.complete,

			test: ""
		}
	}


	// Access Secure Storage
	componentDidMount() {
		SecureStore.getItemAsync('timesComplete').then( storedValue => {
			this.setState({ test: JSON.stringify(storedValue) });
		  });
	}

	

	render() {
	
		return <View
				style={styles.design00View}>
				<View
					pointerEvents="box-none"
					style={{
						height: 55,
						marginLeft: 22,
						marginRight: 63,
						marginTop: 65,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.titleText}> {this.state.test} </Text>
					<View
						style={{
							flex: 1,
						}}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 59,
						marginLeft: 20,
						marginRight: 20,
						marginTop: 12,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							width: 197,
							height: 59,
						}}>
						<Text
							style={styles.averageProductivityText}>AVERAGE PRODUCTIVITY</Text>
						<Text
							style={styles.hPerWeekText}>5H per WEEK</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.componentsButtonCoffePlaceView}>
						<Text
							style={styles.coffePlaceText}>Week</Text>
						<Image
							source={require("./../../assets/images/ic-drop-normal.png")}
							style={styles.icDropNormalImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						height: 287,
						marginLeft: 20,
						marginRight: 20,
						marginTop: 15,
					}}>
					<View
						style={styles.group19View}>
						<View
							style={styles.rectangleCopy42View}/>
						<View
							style={styles.rectangleView}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 18,
								top: 16,
								height: 247,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.group10View}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: -1,
										top: 0,
										bottom: 0,
									}}>
									<Text
										style={styles.textText}>7</Text>
									<Text
										style={styles.textTwoText}>6</Text>
									<Text
										style={styles.textThreeText}>5</Text>
									<Text
										style={styles.textFiveText}>3</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.textSixText}>2</Text>
									<Text
										style={styles.textSevenText}>1</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Text
										style={styles.textFourText}>4</Text>
								</View>
							</View>
							<View
								style={styles.group9View}>
								<LinearGradient
									start={{
										x: 3.44,
										y: 3.72,
									}}
									end={{
										x: 3.44,
										y: -2.17,
									}}
									locations={[0, 1]}
									colors={["rgb(98, 54, 255)", "rgb(184, 148, 242)"]}
									style={styles.rectangleTwoViewLinearGradient}>
									<View
										style={styles.rectangleTwoView}/>
								</LinearGradient>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.monText}> 7.10 </Text>
							</View>
							<View
								style={styles.group9Copy7View}>
								<LinearGradient
									start={{
										x: 3.44,
										y: 3.72,
									}}
									end={{
										x: 3.44,
										y: -2.17,
									}}
									locations={[0, 1]}
									colors={["rgb(98, 54, 255)", "rgb(184, 148, 242)"]}
									style={styles.rectangleThreeViewLinearGradient}>
									<View
										style={styles.rectangleThreeView}/>
								</LinearGradient>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.tueText}>7.11</Text>
							</View>
							<View
								style={styles.group9Copy8View}>
								<LinearGradient
									start={{
										x: 3.44,
										y: 3.72,
									}}
									end={{
										x: 3.44,
										y: -2.17,
									}}
									locations={[0, 1]}
									colors={["rgb(98, 54, 255)", "rgb(184, 148, 242)"]}
									style={styles.rectangleFourViewLinearGradient}>
									<View
										style={styles.rectangleFourView}/>
								</LinearGradient>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.wedText}> 7.12 </Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.group9Copy9View}>
								<LinearGradient
									start={{
										x: 3.44,
										y: 3.72,
									}}
									end={{
										x: 3.44,
										y: -2.17,
									}}
									locations={[0, 1]}
									colors={["rgb(98, 54, 255)", "rgb(184, 148, 242)"]}
									style={styles.rectangleFiveViewLinearGradient}>
									<View
										style={styles.rectangleFiveView}/>
								</LinearGradient>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.thuText}> 7.13 </Text>
							</View>
							<View
								style={styles.group9Copy10View}>
								<LinearGradient
									start={{
										x: 3.44,
										y: 3.72,
									}}
									end={{
										x: 3.44,
										y: -2.17,
									}}
									locations={[0, 1]}
									colors={["rgb(98, 54, 255)", "rgb(184, 148, 242)"]}
									style={styles.rectangleSixViewLinearGradient}>
									<View
										style={styles.rectangleSixView}/>
								</LinearGradient>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.friText}> 7.14 </Text>
							</View>
							<View
								style={styles.group9Copy11View}>
								<LinearGradient
									start={{
										x: 3.44,
										y: 3.72,
									}}
									end={{
										x: 3.44,
										y: -2.17,
									}}
									locations={[0, 1]}
									colors={["rgb(98, 54, 255)", "rgb(184, 148, 242)"]}
									style={styles.rectangleSevenViewLinearGradient}>
									<View
										style={styles.rectangleSevenView}/>
								</LinearGradient>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.satText}>7.15</Text>
							</View>
							<View
								style={styles.group9Copy12View}>
								<LinearGradient
									start={{
										x: 3.44,
										y: 3.72,
									}}
									end={{
										x: 3.44,
										y: -2.17,
									}}
									locations={[0, 1]}
									colors={["rgb(98, 54, 255)", "rgb(184, 148, 242)"]}
									style={styles.rectangleEightViewLinearGradient}>
									<View
										style={styles.rectangleEightView}/>
								</LinearGradient>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.sunText}>7.16</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.path2View}/>
				</View>
				<View
					style={styles.group18View}>
					<View
						style={styles.group15View}>
						<Text
							style={styles.yourConcentrationText}>YOUR CONCENTRATION</Text>
						<View
							pointerEvents="box-none"
							style={{
								width: 68,
								height: 24,
								marginLeft: 3,
								marginTop: 1,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.textEightText}>80%</Text>
							<Text
								style={styles.highText}>High</Text>
						</View>
						<Image
							source={require("./../../assets/images/group-13.png")}
							style={styles.group13Image}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 20,
								marginRight: 4,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.textNineText}>100</Text>
							<Text
								style={styles.textTenText}>80</Text>
							<Text
								style={styles.textElevenText}>50</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.textTwelveText}>20</Text>
							<Text
								style={styles.textThirteenText}>0</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<TouchableOpacity
					onPress = {()=>this.props.navigation.navigate('Mainpage')}
				>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "center",
						width: 68,
						height: 68,
						marginBottom: 30,
					}}>
					
				
					<View
						style={styles.group6View}/>
					<Text
						style={styles.backText}>BACK</Text>
				</View>
				</TouchableOpacity>


				<View
					style={styles.homeIndicatorView}/>
			</View>
	}
}

const styles = StyleSheet.create({
	design00View: {
		backgroundColor: "white",
		flex: 1,
	},
	titleText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 37,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 45,
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
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		position: "absolute",
		left: 2,
		top: 0,
	},
	hPerWeekText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 33,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 40,
		position: "absolute",
		left: 0,
		top: 18,
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
		fontSize: 16,
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
		left: 0,
		right: 0,
		top: 0,
		height: 287,
	},
	rectangleCopy42View: {
		backgroundColor: "white",
		borderRadius: 22.27,
		borderWidth: 1,
		borderColor: "rgba(228, 228, 228, 0.5)",
		borderStyle: "solid",
		position: "absolute",
		left: 20,
		right: 16,
		top: 41,
		height: 246,
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
		height: 279,
	},
	group10View: {
		backgroundColor: "transparent",
		width: 8,
		height: 215,
	},
	textText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
	},
	textTwoText: {
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		backgroundColor: "transparent",
		marginRight: 1,
		marginTop: 12,
	},
	textThreeText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginTop: 13,
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
		marginTop: 45,
	},
	textSixText: {
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		backgroundColor: "transparent",
		marginRight: 1,
		marginBottom: 13,
	},
	textSevenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginRight: 1,
	},
	textFourText: {
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		backgroundColor: "transparent",
	},
	group9View: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 30,
		height: 251,
		marginLeft: 20,
		marginRight: -7,
	},
	rectangleTwoView: {
		width: "100%",
		height: "100%",
	},
	rectangleTwoViewLinearGradient: {
		borderRadius: 7,
		height: 218,
		marginLeft: 7,
		marginRight: 6,
		alignItems: "flex-end",
	},
	monText: {
		backgroundColor: "transparent",
		opacity: 0.3,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		alignItems: "baseline",
		lineHeight: 13,
		marginBottom: 1,
	},
	group9Copy7View: {
		backgroundColor: "transparent",
		width: 27,
		height: 225,
		marginLeft: 25,
		marginRight: -8,
		marginTop: 24,
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
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 13,
		marginBottom: 1,
	},
	group9Copy8View: {
		backgroundColor: "transparent",
		width: 30,
		height: 203,
		marginLeft: 26,
		marginTop: 46,
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
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 13,
		marginBottom: 1,
	},
	group9Copy9View: {
		backgroundColor: "transparent",
		width: 28,
		height: 209,
		marginRight: 20,
		marginTop: 40,
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
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 13,
		marginBottom: 1,
	},
	group9Copy10View: {
		backgroundColor: "transparent",
		width: 21,
		height: 201,
		marginRight: 22,
		marginTop: 46,
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
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 13,
		marginBottom: 1,
	},
	group9Copy11View: {
		backgroundColor: "transparent",
		width: 27,
		height: 201,
		marginRight: 20,
		marginTop: 49,
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
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 13,
		marginBottom: 1,
	},
	group9Copy12View: {
		backgroundColor: "transparent",
		width: 28,
		height: 215,
		marginTop: 34,
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
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 13,
		backgroundColor: "transparent",
		opacity: 0.3,
		marginBottom: 1,
	},
	path2View: {
		backgroundColor: "rgb(87, 79, 173)",
		position: "absolute",
		right: 8,
		width: 319,
		top: 90,
		height: 2,
	},
	group18View: {
		backgroundColor: "rgb(235, 248, 231)",
		borderRadius: 25,
		alignSelf: "flex-end",
		width: 374,
		height: 119,
		marginRight: 14,
		marginTop: 86,
		justifyContent: "center",
	},
	group15View: {
		backgroundColor: "transparent",
		height: 91,
		marginLeft: 13,
		marginRight: 16,
		alignItems: "flex-start",
	},
	yourConcentrationText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 20,
		marginLeft: 3,
	},
	textEightText: {
		color: "black",
		fontSize: 19,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 22,
		paddingTop: 1,
		backgroundColor: "transparent",
	},
	highText: {
		color: "rgba(0, 0, 0, 0.5)",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 11,
		paddingTop: 2,
		backgroundColor: "transparent",
		marginLeft: 7,
		marginTop: 9,
	},
	group13Image: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 14,
		marginLeft: 4,
		marginTop: 6,
	},
	textNineText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
	},
	textTenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginLeft: 44,
	},
	textElevenText: {
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		backgroundColor: "transparent",
		marginLeft: 85,
	},
	textTwelveText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
		marginRight: 81,
	},
	textThirteenText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 19,
	},
	group6View: {
		backgroundColor: "rgb(98, 54, 255)",
		borderRadius: 33.9,
		shadowColor: "rgba(110, 98, 226, 0.62)",
		shadowRadius: 9,
		shadowOpacity: 1,
		position: "absolute",
		alignSelf: "center",
		width: 68,
		bottom: 0,
		height: 68,
	},
	backText: {
		color: "rgb(252, 249, 249)",
		fontSize: 11,
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
