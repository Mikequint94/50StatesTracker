import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StateList from './components/stateList';
import { Provider } from 'react-redux';
import configureStore from './store/store';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={styles.containerBig}>
          <View style={styles.container}>
            <Image  style={styles.image}
              source={require('./pics/USA.png')}
            />
            <Text style={styles.titleText}>50 States</Text>
            <Text style={styles.normalText}>How many have you been to?</Text>
          </View>
          <StateList/>
        </View>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 380,
    height: 200
  },
  containerBig: {
    flex: 1,
  },
  titleText: {
    fontSize: 50,
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  normalText: {
    fontSize: 25,
    fontFamily: 'Cochin'
  }
});
