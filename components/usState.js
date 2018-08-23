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
    this.setState({
      backgroundColor: (this.props.usState.selected ? '#74adb1': '#baefee')
    });
  }

  selectState() {
    this.setState({
      backgroundColor: (this.state.backgroundColor === '#baefee' ? '#74adb1' : '#baefee')
    });
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
