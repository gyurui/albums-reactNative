import React from 'react';
import { AppRegistry, Text, View } from 'react-native';


// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Text>Hello</Text>
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);