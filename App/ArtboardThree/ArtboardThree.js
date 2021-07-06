//
//  ArtboardThree
//  Creatime-screens (1)
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class ArtboardThree extends React.Component {

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
					style={styles.group22View}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							right: -0,
							top: 0,
							height: 1476,
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
							<View
								style={styles.group2CopyView}>
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
											source={require("./../../assets/images/oval-6.png")}
											style={styles.ovalImage}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 81,
											right: 81,
											top: 70,
											bottom: 47,
										}}>
										<View
											pointerEvents="box-none"
											style={{
												height: 87,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<Image
												source={require("./../../assets/images/oval-2.png")}
												style={styles.ovalTwoImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/oval-copy.png")}
												style={styles.ovalCopyImage}/>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												height: 54,
												marginLeft: 44,
												marginRight: 45,
												marginBottom: 37,
												flexDirection: "row",
												alignItems: "flex-end",
											}}>
											<Image
												source={require("./../../assets/images/alarm.png")}
												style={styles.alarmImage}/>
											<View
												style={{
													flex: 1,
												}}/>
											<Image
												source={require("./../../assets/images/settings.png")}
												style={styles.settingsImage}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												height: 22,
												marginLeft: 22,
												marginRight: 38,
												marginBottom: 37,
												flexDirection: "row",
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.clockText}>CLOCK</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.analyticsText}>ANALYTICS</Text>
											<Text
												style={styles.settingsText}>SETTINGS</Text>
										</View>
										<View
											style={styles.lineView}/>
									</View>
									<Text
										style={styles.textText}>+</Text>
									<Image
										source={require("./../../assets/images/shape.png")}
										style={styles.shapeImage}/>
								</View>
								<Image
									source={require("./../../assets/images/list.png")}
									style={styles.listImage}/>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 83,
								right: 0,
								top: 259,
								height: 820,
								alignItems: "flex-end",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 107,
									marginLeft: 1,
									marginRight: 150,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
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
											source={require("./../../assets/images/oval-5.png")}
											style={styles.ovalThreeImage}/>
									</View>
									<Image
										source={require("./../../assets/images/group-4.png")}
										style={styles.group4Image}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										width: 169,
										height: 92,
										marginLeft: 39,
										marginTop: 12,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.studyFrenchText}>Study French</Text>
									<Text
										style={styles.hText}>4.5h</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.todayText}>Today</Text>
							</View>
							<View
								style={styles.line2View}/>
							<View
								style={styles.group5View}>
								<View
									pointerEvents="box-none"
									style={{
										height: 108,
										marginRight: 111,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 134,
											height: 108,
										}}>
										<Image
											source={require("./../../assets/images/oval-copy-2.png")}
											style={styles.ovalCopy2Image}/>
										<Image
											source={require("./../../assets/images/group-4-copy.png")}
											style={styles.group4CopyImage}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											width: 113,
											height: 92,
											marginLeft: 38,
											marginTop: 12,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.calcHwText}>Calc HW</Text>
										<Text
											style={styles.mText}>37m</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.yesterdayText}>Yesterday</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.line2CopyView}/>
							</View>
							<View
								style={styles.group5CopyView}>
								<View
									pointerEvents="box-none"
									style={{
										height: 34,
										marginLeft: 173,
										marginRight: 111,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.morningWorkoutText}>Morning Workout</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.textTwoText}>6/23/2021</Text>
								</View>
								<Text
									style={styles.copyText}>- 9:30</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.line2CopyTwoView}/>
							</View>
							<View
								style={styles.group5Copy2View}>
								<View
									pointerEvents="box-none"
									style={{
										height: 33,
										marginLeft: 173,
										marginRight: 89,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.tokyoText}>Tokyo</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.tomorrowText}>Tomorrow</Text>
								</View>
								<Text
									style={styles.copyTwoText}>- 9:30</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.line2CopyThreeView}/>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 83,
								width: 133,
								top: 697,
								height: 325,
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/oval-copy-4.png")}
								style={styles.ovalCopy4Image}/>
							<Image
								source={require("./../../assets/images/oval-5.png")}
								style={styles.ovalCopy3Image}/>
						</View>
						<Image
							source={require("./../../assets/images/group-4-copy-2.png")}
							style={styles.group4Copy2Image}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/group-4-copy-3.png")}
							style={styles.group4Copy3Image}/>
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
	group22View: {
		backgroundColor: "transparent",
		height: 1477,
	},
	group2CopyView: {
		backgroundColor: "transparent",
		height: 1476,
	},
	ovalImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1476,
	},
	ovalTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(217, 45, 123, 0.49)",
		shadowRadius: 13,
		shadowOpacity: 1,
		width: 107,
		height: 87,
	},
	ovalCopyImage: {
		backgroundColor: "transparent",
		shadowColor: "rgb(209, 220, 238)",
		shadowRadius: 13,
		shadowOpacity: 1,
		resizeMode: "center",
		width: 107,
		height: 87,
	},
	alarmImage: {
		backgroundColor: "transparent",
		opacity: 0.25,
		resizeMode: "center",
		width: 66,
		height: 54,
	},
	settingsImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		opacity: 0.25,
		width: 60,
		height: 50,
	},
	clockText: {
		backgroundColor: "transparent",
		opacity: 0.24,
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 1.78,
	},
	analyticsText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 1.78,
		marginRight: 160,
	},
	settingsText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 1.78,
		backgroundColor: "transparent",
		opacity: 0.25,
		marginBottom: 4,
	},
	lineView: {
		backgroundColor: "rgb(50, 197, 255)",
		alignSelf: "flex-end",
		width: 87,
		height: 4,
		marginRight: 290,
	},
	textText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 37,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 4.31,
		position: "absolute",
		left: 124,
		top: 88,
	},
	shapeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 113,
		width: 39,
		top: 96,
		height: 32,
	},
	listImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		alignSelf: "center",
		width: 49,
		bottom: 155,
		height: 38,
	},
	group6View: {
		backgroundColor: "transparent",
		width: 132,
		height: 107,
	},
	ovalThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 108,
	},
	group4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 42,
		width: 35,
		top: 37,
		height: 63,
	},
	studyFrenchText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 28.6,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 2,
	},
	hText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 32,
	},
	todayText: {
		backgroundColor: "transparent",
		color: "rgb(176, 180, 189)",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 13,
	},
	line2View: {
		backgroundColor: "transparent",
		borderWidth: 1.1,
		borderColor: "rgb(204, 209, 218)",
		borderStyle: "solid",
		width: 760,
		height: 1,
		marginTop: 53,
	},
	group5View: {
		backgroundColor: "transparent",
		width: 761,
		height: 163,
		marginTop: 57,
	},
	ovalCopy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 134,
		top: 0,
		height: 108,
	},
	group4CopyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 52,
		width: 37,
		top: 14,
		height: 55,
	},
	calcHwText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 28.6,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 2,
	},
	mText: {
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginTop: 32,
	},
	yesterdayText: {
		backgroundColor: "transparent",
		color: "rgb(176, 180, 189)",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 14,
	},
	line2CopyView: {
		backgroundColor: "transparent",
		borderWidth: 1.1,
		borderColor: "rgb(204, 209, 218)",
		borderStyle: "solid",
		height: 1,
		marginBottom: 2,
	},
	group5CopyView: {
		backgroundColor: "transparent",
		width: 761,
		height: 151,
		marginTop: 68,
	},
	morningWorkoutText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 28.6,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(176, 180, 189)",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginTop: 1,
	},
	copyText: {
		backgroundColor: "transparent",
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		marginLeft: 171,
		marginTop: 31,
	},
	line2CopyTwoView: {
		backgroundColor: "transparent",
		borderWidth: 1.1,
		borderColor: "rgb(204, 209, 218)",
		borderStyle: "solid",
		height: 1,
		marginBottom: 2,
	},
	group5Copy2View: {
		backgroundColor: "transparent",
		width: 761,
		height: 151,
		marginTop: 69,
	},
	tokyoText: {
		color: "black",
		fontSize: 28.6,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	tomorrowText: {
		color: "rgb(176, 180, 189)",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		marginTop: 2,
	},
	copyTwoText: {
		color: "black",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		marginLeft: 171,
		marginTop: 33,
	},
	line2CopyThreeView: {
		backgroundColor: "transparent",
		borderWidth: 1.1,
		borderColor: "rgb(204, 209, 218)",
		borderStyle: "solid",
		height: 1,
		marginBottom: 2,
	},
	ovalCopy4Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 133,
		height: 108,
	},
	ovalCopy3Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 133,
		height: 108,
		marginTop: 109,
	},
	group4Copy2Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 140,
		width: 41,
		top: 929,
		height: 54,
	},
	group4Copy3Image: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 35,
		height: 54,
		marginLeft: 141,
	},
})
