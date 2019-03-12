/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

class App extends Component {
  state = {
    data: this.generateArray()
  };

  generateArray = () => {
    const ratings = [11];
    while (ratings.length !== 11) {
      const value = Math.floor(Math.random() * 10) + 1;
      if (value === ratings[ratings.length - 1] - 1) {
        ratings.push(value);
      }
    }
    ratings.shift();
    return ratings;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          renderItem={({ item }) => <Text style={styles.instructions}>{item}</Text>}
          data={this.state.data}
          key={({ item }) => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;