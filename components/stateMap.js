import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Button, TouchableHighlight,
         Image, SectionList, ScrollView } from 'react-native';
import Svg,{Polygon} from 'react-native-svg';

export default class stateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     drawCali: false
   };
  }
  
  componentDidMount() {
    this.drawStates();
  }
  
  drawStates() {
    console.log(this.props.list);
    let california = this.props.list.find(state => state.name === 'California');
    console.log(california)
    
    if (california.selected) {
      this.setState({
        drawCali: true
      })
    }
  };
  
  _renderCali () {
      if (this.state.drawCali) {
          return (
            <Polygon points="146,113,193,126,181,171,234,247,234,254,237,262,231,264,229,269,226,278,196,279,192,261,181,253,173,244,158,236,162,222,150,207,152,194,145,184,147,176,143,170,142,161,141,148,137,134,143,131" x="0" y="-100"
            fill="yellow"
            stroke="purple"
            strokeWidth="1"/>
          );
      }
  }
  // <Svg height="100" width="100"  >
  // <Polygon points="0,30,0,50,20,60" x="10" y="-40"
  // fill="lime"
  // stroke="purple"
  // strokeWidth="1"/>
  // </Svg>
  render() {
    return (
      <View style={{width: 380, height: 200}}>
        <View style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
          <Image  style={styles.image}
            source={require('../pics/USA.png')}
          />
        </View>
        <Svg height="200" width="380"  >
        {this._renderCali()}
        
        <Polygon points="0,30,0,50,20,60" x="10" y="40"
        fill="lime"
        stroke="purple"
        strokeWidth="1"/>
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
