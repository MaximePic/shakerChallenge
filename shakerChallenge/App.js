import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
export default class App extends React.Component {

  componentWillMount(){
    this._animatedValue = new Animated.Value(0);
  }
  
  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this._animatedValue, {
            toValue: 300,
            duration: 10000
        }),
        Animated.timing(this._animatedValue, {
          toValue: 0,
          duration: 10000
        })
      ]),
    ).start(); 
  }


  render() {

  var interpolatedColorAnimation = this._animatedValue.interpolate({
    inputRange: [0, 100, 200, 300],
    outputRange: ['#312a6c', '#852d91','#3a3897', '#a3a1ff']
  });

    return (
      <Animated.View style={[styles.container, {backgroundColor: interpolatedColorAnimation}]}>
        <Text style={[styles.text, styles.title]}>Welcome to shakerChallenge !</Text>

        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Changes you make will automatically reload.</Text>
        <Text style={styles.text}>Shake your phone to open the developer menu.</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    },
  text: {
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
    }

});
