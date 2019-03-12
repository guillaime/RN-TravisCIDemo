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
  generateArray = () => [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

  state = {
    data: this.generateArray()
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
