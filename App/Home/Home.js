//
//  Home
//  Creatime-screens (1)
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

import { TouchableOpacity } from 'react-native-gesture-handler'
import Mainpage from "../../App/Mainpage/Mainpage"
import { Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;
let adjustHeight = (size)=> size*screenHeight/896
let adjustFont = (size)=> {
	if(screenHeight < 844) {
		return adjustHeight(size)
	}
	else {
		return adjustHeight(size)*adjustHeight(1)
	}
}

export default class Home extends React.Component {

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
				style={styles.homeView}>
				<View
					style={styles.home2View}>
					<View
						style={styles.homeTwoView}>
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
								source={require("./../../assets/images/mask-2.png")}
								style={styles.maskImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								margin: -15,
								position: "absolute",
								width: '70%',
								top: '12%',
								height: 80,
								alignItems: "center",
							}}>
							<Text
								style={styles.creatimeText}>CreaTIME</Text>
							<Text
								style={styles.keepYourFocusText}>Keep Your Focus</Text>
						</View>

						<View 
							style={{
								flex: 1,
								position: "absolute",
								width: '80%',
								top: '67%',
								height: 100,
								alignItems: "center",
			
							}}>
								<TouchableOpacity
									onPress = {()=>this.props.navigation.navigate('Mainpage')}
								> 
							<Text style={styles.startText}> Start! </Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	homeView: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
	},
	home2View: {
		flexDirection: "column",
		backgroundColor: "transparent",
		height: "100%",
		justifyContent: "center",
	},
	homeTwoView: {
		flex: 1,
		backgroundColor: "transparent",
		height: "100%",
		flexDirection: 'column',
		alignItems: 'center',
	},
	maskImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: "100%",
	},
	creatimeText: {
		backgroundColor: "transparent",
		color: "white",
		fontSize: adjustFont(38.4),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	startText: {
		fontFamily: "Gill Sans",
		fontStyle: "normal",
		backgroundColor: "transparent",
		color: "white",
		fontSize: adjustFont(55),
		fontWeight: "bold",
		textAlign: "center",
	},
	keepYourFocusText: {
		color: "white",
		fontSize: adjustFont(13),
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 3.44,
		backgroundColor: "transparent",
		marginTop: '7%',
	},
})
