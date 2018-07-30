import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StateList from './stateList';
import StateMap from './stateMap';

let list = [
  {
    name: 'Alabama',
    avatar_url: require('../pics/alabama-outline-pattern.png'),
    coords: "578,268,578,337,590,337,588,329,618,321,618,299,608,264",
    selected: false
  },
  {
    name: 'Alaska',
    avatar_url: require('../pics/alaska-outline-pattern.png'),
  },
  {
    name: 'Arizona',
    avatar_url: require('../pics/arizona-outline-pattern.png'),
  },
  {
    name: 'Arkansas',
    avatar_url: require('../pics/arkansas-outline-pattern.png'),
  },
  {
    name: 'California',
    avatar_url: require('../pics/california-outline-pattern.png'),
    coords: "146,113,193,126,181,171,234,247,234,254,237,262,231,264,229,269,226,278,196,279,192,261,181,253,173,244,158,236,162,222,150,207,152,194,145,184,147,176,143,170,142,161,141,148,137,134,143,131",
    selected: false
  },
  {
    name: 'Colorado',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Connecticut',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Delaware',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Florida',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Georgia',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Hawaii',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Idaho',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Kansas',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Kentucky',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Louisiana',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Maine',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Maryland',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  },
  {
    name: 'Massachusetts',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
];

  
export default class AppEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: false
      //add something so that it refreshes statemap when selectedstate is called
    };
  }
  selectedState(stateName){
    let selectedState = list.find(state => state.name === stateName);
    selectedState.selected = !selectedState.selected;
    this.setState({
      hello: !this.state.hello
    })
    console.log(list, this.state.hello);
  }
  render() {
    return (
        <View style={styles.containerBig}>
          <View style={styles.container}>
                <Text style={styles.titleText}>50 States</Text>
                <StateMap list={list}/>
                <Text style={styles.normalText}>How many have you been to?</Text>
          </View>
          <StateList selectedState={this.selectedState.bind(this)} list={list}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .7,
    backgroundColor: '#baefee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerBig: {
    flex: 1,
  },
  titleText: {
    fontSize: 50,
    color: '#2abbec',
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  normalText: {
    fontSize: 25,
    color: '#043ea7',
    fontFamily: 'Cochin'
  }
});
