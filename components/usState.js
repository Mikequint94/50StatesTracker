import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Button, TouchableHighlight,
         Image, SectionList, ScrollView } from 'react-native';
import { SearchBar, List, ListItem, Avatar } from 'react-native-elements';


export default class USState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'pink'
    };
  }
  
  selectState() {
    if (this.state.backgroundColor === 'pink') {
      this.setState({
        backgroundColor: 'yellow'
      });
    } else {
      this.setState({
        backgroundColor: 'pink'
      });
    }
  }

  render() {
    return (
      <ListItem containerStyle={{backgroundColor: this.state.backgroundColor}}
          // roundAvatar
          avatar={this.props.usState.avatar_url}
          key={this.props.idx + 'hi' + Date.now()}
          title={this.props.usState.name}
          onPress={() => this.selectState()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
