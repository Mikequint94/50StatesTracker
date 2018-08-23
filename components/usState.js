import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Button, TouchableHighlight,
         Image, SectionList, ScrollView } from 'react-native';
import { SearchBar, List, ListItem, Avatar } from 'react-native-elements';
import Svg,{
    Polygon
} from 'react-native-svg';

export default class USState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: '#baefee',
      svgHeight: 0,
      svgWidth: 0
    };
  }

  componentWillReceiveProps() {
    if (this.props.usState.selected) {
      this.setState({
        backgroundColor: '#74adb1'
      });
    } else {
      this.setState({
        backgroundColor: '#baefee'
      });
    }
  }

  selectState() {
    if (this.state.backgroundColor === '#baefee') {
      this.setState({
        backgroundColor: '#74adb1'
      });
    } else {
      this.setState({
        backgroundColor: '#baefee'
      });
    }
    this.props.selectedState(this.props.usState.name);
  }



  render() {
    return (
      <View>
        <ListItem containerStyle={{backgroundColor: this.state.backgroundColor}}
            // roundAvatar
            avatar={this.props.usState.avatar_url}
            title={this.props.usState.name}
            onPress={() => this.selectState()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
