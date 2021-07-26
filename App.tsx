import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bckGroundView}>

        <Text style={{ color: 'white' }}>React Native app with typescript</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFBB3C',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomEndRadius: 500,
  },
  bckGroundView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#35332C',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 500,

  }
});

export default App;
