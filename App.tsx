import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Landing from './src/screens/Landing';
import Card from './src/screens/Card';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#E5E5E5'} />
      <View style={{flex: 1, display: 'flex'}}>
        <Card />
        <Landing />
      </View>
    </SafeAreaView>
  )
}

export default App;
