import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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


export default function Graph(props) {
  function calculateDate(i) {
    let d = props.data.date;
    let t = props.data.time;
    if (!Array.isArray(d) || !Array.isArray(t)) {
      return '';
    } else {
      if (i >= d.length) {
        return '';
      } else {
        //console.log("d:" + d[i] + " t: " + t[i])
        return d[i] + '\n' + t[i];
      }
    }
  }

  function calculateHeight(item) {
    if(item > 225)
      return 225
    else
      return item
  }

  console.log(props)

  return (
    <View style={styles.graphContainer}>
      <View style={styles.graphTopLevelView}>
        <View style={styles.yaxis}>
          
          <Text style={styles.textYaxis}>15</Text>
          <Text style={styles.textYaxis}></Text>
          <Text style={styles.textYaxis}>12</Text>
          <Text style={styles.textYaxis}>10</Text>
          <Text style={styles.textYaxis}>8</Text>
          <Text style={styles.textYaxis}></Text>
          <Text style={styles.textYaxis}>5</Text>
          <Text style={styles.textYaxis}></Text>
          <Text style={styles.textYaxis}>2</Text>
          <Text style={styles.textYaxis}>0</Text>
          <Text style={styles.textYaxis}></Text>
          <Text style={styles.textYaxis}> </Text>
        </View>
        <View style={styles.graphBackground}>
          <View style={styles.barHolder}>
            { props.data.lengthList.map((item, index) => {
              return (<View style={styles.barAndLabelContainer}>
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
                  colors={['rgb(98, 54, 255)', 'rgb(184, 148, 242)']}
                  style={[styles.bar, {height: adjustHeight(calculateHeight(item/4))}]}
                />
                <View />
                <Text style={styles.monText}> {calculateDate(index)} </Text>
              </View>)
            })}
          </View>
        </View>
      </View>
      <View style={styles.path2View} />
    </View>
  );
}

const styles = StyleSheet.create({
  graphContainer: {
    flex: 1,
    minHeight: 300,
    maxHeight: 350,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    padding: 10,
    zIndex: -1,
  },
  graphTopLevelView: {
    backgroundColor: 'transparent',
    padding: 10,
    height: '100%',
    width: '100%',
    borderWidth: 5,
    borderColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  graphBackground: {
    backgroundColor: 'white',
    borderRadius: 22.27,
    borderWidth: 2,
    borderColor: 'rgba(228, 228, 228, 0.5)',
    borderStyle: 'solid',
    height: '100%',
    width: '90%',
  },

  yaxis: {
    backgroundColor: 'transparent',
    minWidth: 40,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  barHolder: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  textYaxis: {
    color: 'black',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    marginTop: 18,
  },

  barAndLabelContainer: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    marginLeft: 4,
    marginRight: 4,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bar: {
    borderRadius: 7,
    width: "100%",
    marginLeft: 7,
    marginRight: 6,
    marginBottom: 10,
  },

  monText: {
    backgroundColor: 'transparent',
    opacity: 0.3,
    color: 'black',
    fontFamily: '.AppleSystemUIFont',
    fontSize: adjustFont(8),
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'center',
    //alignItems: "baseline",
    lineHeight: 15,
    marginBottom: 1,
    // position: "absolute",
    // bottom: 0
  },

});
