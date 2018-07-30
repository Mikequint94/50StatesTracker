import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Button, TouchableHighlight,
         Image, SectionList, ScrollView } from 'react-native';
import Svg,{Polygon} from 'react-native-svg';

export default class stateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     California: false,
     Alabama: false,
     Arizona: false,
     Arkansas: false
   };
  }
  
  componentDidMount() {
    this.drawStates();
  }
  componentWillReceiveProps() {
    this.drawStates();
  }
  
  drawStates() {
    this.props.list.map(state => {
        this.state[state.name] = state.selected
    })
  };
  
  _renderCalifornia () {
      if (this.state.California) {
          return (
            <Polygon points="71,50,90,57,85,78,109,113,111,119,108,125,107,130,93,129,91,122,86,116,82,110,75,111,71,95,72,89,69,84,68,78,65,70,67,65,67,55"
            fill="yellow"
            stroke="purple"
            strokeWidth="1"/>
          );
      }
  }
  _renderAlabama () {
    if (this.state.Alabama) {
        return (
          <Polygon points="272,126,288,123,295,148,279,152,272,155"
          fill="lime"
          stroke="black"
          strokeWidth="1"/>
        );
    }
  }
  _renderArizona () {
    if (this.state.Arizona) {
        return (
          <Polygon points="106,132,111,121,110,108,115,106,116,101,145,105,138,146,125,144"
          fill="orange"
          stroke="navy"
          strokeWidth="1"/>
        );
    }
  }
  _renderArkansas () {
    if (this.state.Arkansas) {
        return (
          <Polygon points="235,134,232,133,231,114,257,112,257,115,260,114,259,122,255,127,251,133,253,139,236,139"
          fill="blue"
          stroke="red"
          strokeWidth="1"/>
        );
    }
  }
  render() {
    return (
      <View style={{width: 380, height: 200}}>
        <View style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
          <Image  style={styles.image}
            source={require('../pics/USAsmall2.png')}
          />
        </View>
        <Svg height="200" width="380">
        {this._renderCalifornia()}
        {this._renderAlabama()}
        {this._renderArizona()}
        {this._renderArkansas()}
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    zIndex: -21, 
    width: 380,
    height: 200
  }
});
