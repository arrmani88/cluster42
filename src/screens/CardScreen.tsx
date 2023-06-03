import React, {StatusBar, View, SafeAreaView} from 'react-native';
import {styles} from './styles/Card';

const CardScreen = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#E5E5E5'} />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, display: 'flex'}}>

        </View>
      </SafeAreaView>
    </>
  );
};

export default CardScreen;
