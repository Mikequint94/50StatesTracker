import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Button, TouchableHighlight,
         Image, SectionList, ScrollView } from 'react-native';
import { SearchBar, List, ListItem, Avatar } from 'react-native-elements';
import USState from './usState';


export default class stateList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.list);
    this.state = {
      refresh: false
      //add something so that it refreshes statemap when selectedstate is called
    };
  }

  componentWillReceiveProps() {
    this.setState({
      refresh: !this.state.refresh
    });
    // console.log(this.props.list);
  }

  render() {
    return (
      <ScrollView>
          {
            this.props.list.map((usState, idx) => (
              <USState selectedState={this.props.selectedState} usState={usState} idx={idx} key={idx}/>
            ))
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74adb1'
  }
});
