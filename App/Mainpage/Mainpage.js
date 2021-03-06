//
//  Design01
//  Creatime-screens
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import Statistics from "../../App/Statistics/Statistics"

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Mainpage extends React.Component {


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
	}

	componentDidMount() {
	
	}

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
						<Text
							style={styles.labelTwoText}>Cancel</Text>
						<View
							style={styles.groupView}>
							<Text
								style={styles.titleText}>Enter Time</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangleView}/>
						</View>
					</View>
					<View
						style={styles.ovalView}/>
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
					}}>
					<View
						style={styles.group7View}>
						<Text
							style={styles.nameCopyText}>Add Hours</Text>
					</View>
					<View
						style={styles.group6View}>
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
							<Image
								source={require("./../../assets/images/group-5.png")}
								style={styles.group5Image}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Text
								style={styles.nameText}>Add Minutes</Text>
						</View>
					</View>
				</View>

				<TouchableOpacity
					onPress = {()=>this.props.navigation.navigate('Statistics')}
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
			</View>
	}
}

const styles = StyleSheet.create({
	design01View: {
		backgroundColor: "rgb(98, 54, 255)",
		flex: 1,
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
	},
	groupView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 179,
		height: 105,
		marginTop: 63,
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
		marginLeft: 1,
		marginRight: 1,
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
		left: 0,
		width: 179,
		top: 0,
		height: 55,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	nameCopyText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24,
		marginLeft: 46,
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
		marginRight: 50,
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
