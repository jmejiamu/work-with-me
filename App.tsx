
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bckGroundView}>
        <Text style={{ color: '#DFBB3C', marginTop: 40, fontSize: 20 }}>Welcome to</Text>
        <Image style={styles.logoStyle} source={require('./assets/Logo.png')} />
        <Text style={{ color: '#DFBB3C' }}>Work with Me</Text>
        <Text style={{ color: '#DFBB3C', marginTop: 30, }}>A place to collaborate or find a job</Text>
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

  },
  logoStyle: {
    marginTop: 30
  }
});

export default App;
