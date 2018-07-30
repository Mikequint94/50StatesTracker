import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Button, TouchableHighlight,
         Image, SectionList, ScrollView } from 'react-native';
import { SearchBar, List, ListItem, Avatar } from 'react-native-elements';
import USState from './usState';


export default class stateList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <List containerStyle={styles.container}>
          {
            this.props.list.map((usState, idx) => (
              <USState selectedState={this.props.selectedState} usState={usState} idx={idx} key={idx}/>
            ))
          }
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#74adb1',
  }
});
