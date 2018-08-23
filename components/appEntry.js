import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import StateList from './stateList';
import StateMap from './stateMap';



let list = [
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
    name: 'Illinois',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Indiana',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Iowa',
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
  {
    name: 'Michigan',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
  {
    name: 'Minnesota',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  },
];
let stateCount = 0;

export default class AppEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      count: 0
    };
    this._retrieveList();
    this._retrieveCount();
  }

  _retrieveList = async () => {
    try {
      const value = await AsyncStorage.getItem('stateList')
      .then(req => JSON.parse(req))
      .then(json => {
        if (json) {
          list = json;
        }
        this.setState({
          refresh: !this.state.refresh
        });
        this.setState({
          refresh: !this.state.refresh
        });
      });
     } catch (error) {
       console.log('error', error);
     }
   }
  _retrieveCount = async () => {
    try {
      const count = await AsyncStorage.getItem('stateCount');
      this.setState({
        count: parseInt(count)
      });
     } catch (error) {
       console.log('error', error);
     }
   }
  selectedState(stateName){
    let selectedState = list.find(state => state.name === stateName);
    selectedState.selected = !selectedState.selected;
    this.setState({
      refresh: !this.state.refresh,
      count: this.state.count + (selectedState.selected ? 1: -1)
    }, () => {
      this._storeListData();
      this._storeCountData();
    });
  }
  _storeListData = async () => {
    try {
      await AsyncStorage.setItem('stateList', JSON.stringify(list));
    } catch (error) {
      console.log('error', error);
    }
  }
  _storeCountData = async () => {
    try {
      await AsyncStorage.setItem('stateCount', JSON.stringify(this.state.count));
    } catch (error) {
      console.log('error', error);
    }
  }
  render() {
    return (
        <View style={styles.containerBig}>
          <View style={styles.container}>
                <Text style={styles.titleText}>50 States</Text>
                <StateMap list={list}/>
                <Text style={styles.normalText}>How many have you been to?</Text>
                <Text style={styles.normalText}>{this.state.count + '/50'}</Text>
          </View>
          <StateList selectedState={this.selectedState.bind(this)} list={list}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: '#043ea7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerBig: {
    flex: 1,
    backgroundColor: '#baefee'
  },
  titleText: {
    fontSize: 50,
    paddingTop: 14,
    color: '#2abbec',
    // fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  normalText: {
    fontSize: 25,
    color: '#043ea7',
    // fontFamily: 'Cochin'
  }
});
