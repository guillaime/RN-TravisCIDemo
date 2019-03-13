/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image
} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/travislogo.png')} style={styles.image} />
      <Text style={styles.title}>
        Welcome to this TravisCIDemo
      </Text>
      <Text style={styles.instructions}>
        This app is full automatically deployed with TravisCI and Fastlane!
        For more information, please contact me!
      </Text>
      <Text
        style={[styles.instructions, { color: 'blue', marginTop: 20 }]}
        onPress={() => Linking.openURL('https://github.com/guillaime')}
      >
        Open GitHub
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50
  },
  title: {
    textAlign: 'center',
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 22
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 16
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50
  }
});

export default App;
