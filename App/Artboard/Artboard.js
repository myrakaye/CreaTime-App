//
//  Artboard
//  Creatime-screens (1)
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class Artboard extends React.Component {

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
				style={styles.artboardView}>
				<View
					style={styles.group20View}>
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
						<View
							style={styles.group2View}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
								}}>
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
										source={require("./../../assets/images/oval.png")}
										style={styles.ovalImage}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 90,
										width: 409,
										top: 1010,
										bottom: 42,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.timeRemainingText}>Time Remaining:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.h12m00sText}>02h:12m:00s</Text>
									<Image
										source={require("./../../assets/images/menu---focus.png")}
										style={styles.menuFocusImage}/>
									<Text
										style={styles.focusText}>FOCUS</Text>
									<View
										style={styles.lineView}/>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									alignSelf: "center",
									width: 93,
									bottom: 76,
									height: 84,
									justifyContent: "flex-end",
									alignItems: "center",
								}}>
								<Image
									source={require("./../../assets/images/list-2.png")}
									style={styles.listImage}/>
								<Text
									style={styles.analyticsText}>ANALYTICS</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 139,
							right: 138,
							top: 194,
							bottom: 314,
							alignItems: "flex-start",
						}}>
						<Image
							source={require("./../../assets/images/triangle-3.png")}
							style={styles.triangleTwoImage}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 64,
								marginLeft: 73,
								marginRight: 112,
								marginTop: 184,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/triangle-5.png")}
								style={styles.triangleImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.rectangleView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/oval-8.png")}
							style={styles.ovalTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 156,
							right: 180,
							bottom: 314,
							height: 49,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.textTwoText}>+</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/oval-8.png")}
							style={styles.ovalThreeImage}/>
					</View>
					<Text
						style={styles.textThreeText}>-</Text>
					<Image
						source={require("./../../assets/images/triangle.png")}
						style={styles.triangleThreeImage}/>
					<Image
						source={require("./../../assets/images/triangle-4.png")}
						style={styles.triangleFourImage}/>
					<Image
						source={require("./../../assets/images/triangle-2.png")}
						style={styles.triangleFiveImage}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	artboardView: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "flex-end",
	},
	group20View: {
		backgroundColor: "transparent",
		height: 1477,
	},
	group2View: {
		backgroundColor: "transparent",
		height: 1477,
	},
	ovalImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1477,
	},
	timeRemainingText: {
		color: "rgb(182, 32, 224)",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 161,
	},
	h12m00sText: {
		color: "black",
		fontSize: 47,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 4,
		shadowOpacity: 1,
		marginLeft: 138,
		marginBottom: 140,
	},
	menuFocusImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 56,
		height: 52,
		marginLeft: 14,
		marginBottom: 24,
	},
	focusText: {
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 1.61,
		backgroundColor: "transparent",
		marginLeft: 13,
		marginBottom: 37,
	},
	lineView: {
		backgroundColor: "rgb(50, 197, 255)",
		width: 78,
		height: 4,
	},
	listImage: {
		backgroundColor: "transparent",
		opacity: 0.25,
		resizeMode: "center",
		width: 44,
		height: 38,
		marginBottom: 30,
	},
	analyticsText: {
		backgroundColor: "transparent",
		opacity: 0.25,
		color: "black",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 1.61,
	},
	triangleTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "flex-end",
		width: 246,
		height: 432,
	},
	triangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 56,
		height: 64,
	},
	rectangleView: {
		backgroundColor: "rgb(224, 32, 32)",
		borderRadius: 9,
		borderWidth: 1,
		borderColor: "rgb(255, 0, 0)",
		borderStyle: "solid",
		width: 62,
		height: 56,
		marginTop: 4,
	},
	ovalTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(217, 45, 123, 0.49)",
		shadowRadius: 12,
		shadowOpacity: 1,
		width: 54,
		height: 49,
	},
	textTwoText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 3.92,
		backgroundColor: "transparent",
		marginBottom: 9,
	},
	ovalThreeImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(217, 45, 123, 0.49)",
		shadowRadius: 12,
		shadowOpacity: 1,
		resizeMode: "center",
		width: 54,
		height: 49,
	},
	textThreeText: {
		color: "white",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 3.92,
		backgroundColor: "transparent",
		position: "absolute",
		right: 196,
		bottom: 321,
	},
	triangleThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 303,
		width: 67,
		top: 518,
		height: 114,
	},
	triangleFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 323,
		width: 54,
		top: 424,
		height: 198,
	},
	triangleFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 279,
		width: 72,
		top: 516,
		height: 102,
	},
})
