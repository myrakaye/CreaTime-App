//
//  ArtboardTwo
//  Creatime-screens (1)
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class ArtboardTwo extends React.Component {

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
					style={styles.group21View}>
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
										source={require("./../../assets/images/oval-7.png")}
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
										style={styles.h00m00sText}>00h:00m:00s</Text>
									<Image
										source={require("./../../assets/images/menu---focus-2.png")}
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
									source={require("./../../assets/images/list-3.png")}
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
							left: 153,
							right: 184,
							top: 810,
							bottom: 318,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/oval-8.png")}
							style={styles.ovalThreeImage}/>
						<Image
							source={require("./../../assets/images/triangle-5.png")}
							style={styles.triangleImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.rectangleView}/>
						<Image
							source={require("./../../assets/images/oval-3.png")}
							style={styles.ovalTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 169,
							right: 200,
							bottom: 324,
							height: 43,
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.textText}>+</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textTwoText}>-</Text>
					</View>
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
	group21View: {
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
		backgroundColor: "transparent",
		color: "rgb(182, 32, 224)",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 161,
	},
	h00m00sText: {
		color: "rgb(236, 241, 253)",
		fontSize: 47,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(255, 255, 255, 0.75)",
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
		color: "rgb(236, 241, 253)",
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
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.25,
		width: 44,
		height: 38,
		marginBottom: 30,
	},
	analyticsText: {
		backgroundColor: "transparent",
		opacity: 0.25,
		color: "rgb(236, 241, 253)",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 1.61,
	},
	ovalThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(217, 45, 123, 0.49)",
		shadowRadius: 12,
		shadowOpacity: 1,
		width: 54,
		height: 49,
		marginBottom: 3,
	},
	triangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 56,
		height: 64,
		marginLeft: 16,
	},
	rectangleView: {
		backgroundColor: "rgb(224, 32, 32)",
		borderRadius: 9,
		borderWidth: 1,
		borderColor: "rgb(255, 0, 0)",
		borderStyle: "solid",
		alignSelf: "flex-start",
		width: 62,
		height: 56,
		marginRight: 2,
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
	textText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 3.92,
		backgroundColor: "transparent",
		marginBottom: 3,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 3.92,
	},
})
