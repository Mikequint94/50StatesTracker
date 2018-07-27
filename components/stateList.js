import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, Button, TouchableHighlight,
         Image, SectionList, ScrollView } from 'react-native';
import { SearchBar, List, ListItem, Avatar } from 'react-native-elements';
import USState from './usState';

// import moment from 'moment'
const list = [
  {
    name: 'Alabama',
    avatar_url: require('../pics/alabama-outline-pattern.png'),
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

export default class stateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      padding: 3
    };
  }

  render() {
    return (
      <ScrollView>
        <List containerStyle={styles.container}>
          {
            list.map((usState, idx) => (
              <USState usState={usState} idx={idx}/>
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
  sectionHeader: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3B264A',
  },
  listItem: {
    backgroundColor: 'pink',
  },
  emptyList: {
    backgroundColor: '#E9E9EF',
    padding: 10
  },
  emptyListText: {
    color: '#3B264A',
    fontSize: 20,
  }
});
