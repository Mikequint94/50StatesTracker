import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Button, TouchableHighlight,
         Image, SectionList, ScrollView } from 'react-native';
import Svg,{Polygon} from 'react-native-svg';

export default class stateMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     // California: false,
     // Alabama: false,
     // Arizona: false,
     // Arkansas: false,
     // Alaska: false,
     // Colorado: false,
     // Connecticut: false,
     // Delaware: false,
     // Florida: false,
     // Georgia: false,
     // Hawaii: false,
     // Idaho: false,
     // Illinois: false,
     // Indiana: false,
     // Iowa: false,
     // Kansas: false,
     // Kentucky: false,

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
      this.state[state.name] = state.selected;
    });
  }

  _renderCalifornia () {
      if (this.state.California) {
          return (
            <Polygon points="91,57,85,77,109,113,110,119,108,122,106,125,108,128,106,130,102,129,92,128,91,124,89,119,85,115,82,113,77,109,73,110,75,103,71,94,72,91,69,88,71,84,67,80,68,78,66,75,65,68,66,65,64,63,69,56,70,53,70,50"
            fill="aqua"
            stroke="#74adb1"
            strokeWidth="1"/>
          );
      }
  }
  _renderAlabama () {
    if (this.state.Alabama) {
        return (
          <Polygon points="272,123,286,123,290,136,291,140,292,143,291,145,293,150,277,153,278,156,276,157,273,156,272,145"
          fill="aquamarine"
          stroke="#2abbec"
          strokeWidth="1"/>
        );
    }
  }
  _renderArizona () {
    if (this.state.Arizona) {
        return (
          <Polygon points="118,100,114,107,112,105,111,108,111,117,112,120,108,126,108,128,106,131,126,143,138,145,144,105"
          fill="blue"
          stroke="#2abbec"
          strokeWidth="1"/>
        );
    }
  }
  _renderArkansas () {
    if (this.state.Arkansas) {
        return (
          <Polygon points="235,134,232,133,231,114,257,112,257,115,260,114,259,122,255,127,251,133,253,139,236,139"
          fill="blueviolet"
          stroke="#2abbec"
          strokeWidth="1"/>
        );
    }
  }
  _renderAlaska () {
    if (this.state.Alaska) {
        return (
          <Polygon points="111,158,104,155,98,152,93,153,90,156,87,156,88,159,90,161,89,164,86,162,83,162,83,165,85,166,89,166,89,170,85,170,82,171,80,177,83,179,84,181,87,183,85,188,78,190,87,189,96,182,99,180,98,183,101,184,104,180,107,182,112,182,115,187,123,195,127,196,127,192,120,184,117,185,114,184,111,180"
          fill="cadetblue"
          stroke="#2abbec"
          strokeWidth="1"/>
        );
    }
  }
  _renderColorado () {
    if (this.state.Colorado) {
        return (
          <Polygon points="146,104,150,75,188,79,186,108"
          fill="brown"
          stroke="#2abbec"
          strokeWidth="1"/>
        );
    }
  }
  _renderConnecticut () {
    if (this.state.Connecticut) {
        return (
          <Polygon points="348,59,356,57,357,60,349,65"
          fill="chartreuse"
          stroke="#2abbec"
          strokeWidth="1"/>
        );
    }
  }
  _renderDelaware () {
    if (this.state.Delaware) {
        return (
          <Polygon points="338,81,340,87,344,87,343,84,340,81"
          fill="coral"
          stroke="#2abbec"
          strokeWidth="1"/>
        );
    }
  }
  _renderFlorida () {
    if (this.state.Florida) {
        return (
          <Polygon points="278,153,293,151,295,153,311,153,313,150,316,150,318,158,323,163,324,167,327,172,329,177,330,182,330,186,327,189,324,188,323,185,320,183,318,179,313,174,314,171,311,172,312,165,304,158,299,156,294,161,290,157,286,156,283,156,278,156"
          fill="cornflowerblue"
          stroke="#2abbec"
          strokeWidth="1"/>
        );
    }
  }
  _renderGeorgia () {
    if (this.state.Georgia) {
      return (
        <Polygon points="287,123,299,121,301,124,304,124,314,135,317,139,317,145,315,146,315,150,313,149,312,152,296,152,294,150,293,147,293,145,294,141,291,138,291,133,289,129"
        fill="cyan"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderHawaii () {
    if (this.state.Hawaii) {
      return (
        <Polygon points="49,130,52,132,54,132,59,137,55,139,51,142,49,142,50,138,48,137,50,134"
        fill="crimson"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderHawaii2() {
    if (this.state.Hawaii) {
      return (
        <Polygon points="34,121,36,120,38,121,40,121,41,123,45,123,47,125,45,126,41,126,38,124"
        fill="crimson"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderHawaii3() {
    if (this.state.Hawaii) {
      return (
        <Polygon points="27,117,29,116,31,119,29,119"
        fill="crimson"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderHawaii4() {
    if (this.state.Hawaii) {
      return (
        <Polygon points="6,115,9,112,13,111,14,113,14,115,11,112"
        fill="crimson"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderIdaho() {
    if (this.state.Idaho) {
      return (
        <Polygon points="106,61,110,47,109,44,115,36,114,32,118,12,121,12,120,17,120,22,122,25,124,28,127,30,125,35,124,38,125,40,128,38,131,47,139,48,141,49,139,67"
        fill="darkgoldenrod"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderIllinois() {
    if (this.state.Illinois) {
      return (
        <Polygon points="253,68,267,68,268,72,270,84,271,95,269,98,268,102,268,105,266,107,264,106,262,107,261,105,258,101,256,100,257,95,255,95,254,92,249,88,249,84,251,80,250,77,256,72"
        fill="darkgreen"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderIndiana() {
    if (this.state.Indiana) {
      return (
        <Polygon points="270,74,276,73,283,72,285,81,286,90,287,92,282,97,281,99,279,100,277,101,275,101,272,101,270,102,270,100,273,95,271,90,271,83"
        fill="darkmagenta"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderIowa() {
    if (this.state.Iowa) {
      return (
        <Polygon points="246,82,248,83,250,80,249,77,251,76,255,72,248,66,249,63,248,60,246,61,223,61,220,61,220,63,219,68,220,70,223,76,223,78,224,82,225,84,242,83"
        fill="darkviolet"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderKansas() {
    if (this.state.Kansas) {
      return (
        <Polygon points="187,109,188,87,225,87,227,88,227,91,230,94,230,109,228,110,226,110,223,111"
        fill="deeppink"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderKentucky() {
    if (this.state.Kentucky) {
      return (
        <Polygon points="299,106,310,106,320,104,332,102,341,100,340,98,337,97,338,94,337,92,335,91,332,90,330,89,331,87,327,83,326,85,324,84,323,87,322,89,320,90,320,92,318,92,317,95,316,98,315,100,313,100,311,101,310,103,308,102,307,104,304,102,302,104"
        fill="deepskyblue"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderLouisiana() {
    if (this.state.Louisiana) {
      return (
        <Polygon points="234,140,251,140,253,142,253,146,251,148,250,152,250,155,261,154,262,156,263,158,260,158,258,160,260,160,262,161,266,160,264,163,267,167,263,165,261,166,257,167,253,165,249,162,247,165,245,165,242,164,239,163,236,164,236,162,237,158,239,157,238,153,237,151,236,148,234,146"
        fill="forestgreen"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderMaine() {
    if (this.state.Maine) {
      return (
        <Polygon points="353,32,355,29,356,22,355,20,357,19,357,16,359,15,363,14,365,15,367,20,368,24,370,26,372,27,373,30,370,34,368,33,367,36,365,37,363,39,360,41,359,45,357,44,356,41"
        fill="fuchsia"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderMaryland() {
    if (this.state.Maryland) {
      return (
        <Polygon points="317,86,317,82,320,82,333,80,336,79,340,88,342,87,342,91,338,88,337,82,335,84,335,87,335,90,331,90,332,87,328,84,326,85,323,83"
        fill="gold"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderMassachusetts() {
    if (this.state.Massachusetts) {
      return (
        <Polygon points="364,53,365,56,363,56,359,53,359,48,356,51,350,52,346,53,346,58,355,55,357,55,360,58"
        fill="green"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderMichigan() {
    if (this.state.Michigan) {
      return (
        <Polygon points="252,38,263,30,261,34,264,35,266,37,269,37,274,36,278,35,281,36,284,38,281,40,284,42,286,43,288,44,288,47,289,50,287,55,291,54,293,53,296,61,294,63,293,65,292,69,290,71,275,71,276,68,276,62,275,59,274,55,274,50,278,48,280,45,281,42,279,39,275,40,272,42,269,43,268,45,269,47,266,46,265,42,260,42,258,39,254,40"
        fill="greenyellow"
        stroke="#2abbec"
        strokeWidth="1"/>
      );
    }
  }
  _renderMinnesota() {
    if (this.state.Minnesota) {
      return (
        <Polygon points="299,106,310,106,320,104,332,102,341,100,340,98,337,97,338,94,337,92,335,91,332,90,330,89,331,87,327,83,326,85,324,84,323,87,322,89,320,90,320,92,318,92,317,95,316,98,315,100,313,100,311,101,310,103,308,102,307,104,304,102,302,104"
        fill="hotpink"
        stroke="#2abbec"
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
        {this._renderAlaska()}
        {this._renderArizona()}
        {this._renderArkansas()}
        {this._renderColorado()}
        {this._renderConnecticut()}
        {this._renderDelaware()}
        {this._renderFlorida()}
        {this._renderGeorgia()}
        {this._renderHawaii()}
        {this._renderHawaii2()}
        {this._renderHawaii3()}
        {this._renderHawaii4()}
        {this._renderIdaho()}
        {this._renderIllinois()}
        {this._renderIndiana()}
        {this._renderIowa()}
        {this._renderKansas()}
        {this._renderKentucky()}
        {this._renderLouisiana()}
        {this._renderMaine()}
        {this._renderMaryland()}
        {this._renderMassachusetts()}
        {this._renderMichigan()}
        {this._renderMinnesota()}
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
