// //
// //  App.js
// //  Creatime-screens
// //
// //  Created by [Author].
// //  Copyright © 2018 [Company]. All rights reserved.
// //

// import * as Font from "expo-font"
// import Design00 from "./App/Design00/Design00"
// import Design01 from "./App/Design01/Design01"
// import React from "react"
// import { AppLoading, DangerZone } from "expo"
// import { createAppContainer, createStackNavigator } from "react-navigation"

// const PushRouteOne = createStackNavigator({
// 	Design01: {
// 		screen: Design01,
// 	},
// }, {
// 	initialRouteName: "Design01",
// })

// const RootNavigator = createStackNavigator({
// 	PushRouteOne: {
// 		screen: PushRouteOne,
// 	},
// }, {
// 	mode: "modal",
// 	headerMode: "none",
// 	initialRouteName: "PushRouteOne",
// })

// const AppContainer = createAppContainer(RootNavigator)



// export default class App extends React.Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			fontsReady: false,
// 		}
// 	}

// 	componentDidMount() {
	
// 		this.initProjectFonts()
// 	}

// 	async initProjectFonts() {
	
// 		await Font.loadAsync({
// 			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
// 		})
// 		this.setState({
// 			fontsReady: true,
// 		})
// 	}

// 	render() {
	
// 		//if (!this.state.fontsReady) { return (<AppLoading />); }
// 		return <AppContainer/>
// 	}
// }

//
//  App.js
//  Creatime-screens
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
import Design00 from "./App/Design00/Design00"
import Design01 from "./App/Design01/Design01"
import Home from "./App/Home/Home"
import React from "react"
import { AppLoading } from "expo"

//add navigation here

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
			
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
		return <Home/>;
	}
}