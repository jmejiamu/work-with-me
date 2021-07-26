import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bckGroundView}>
        <Image source={require('./assets/Logo.png')} />
        <Text style={{ color: '#DFBB3C' }}>Work with Me</Text>
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

  },
  bckGroundView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#35332C',
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomEndRadius: 500,

  }
});

export default App;
