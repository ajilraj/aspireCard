import React, {useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {images, styles} from './styles';
import globals from '../../utilities/globals';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: globals.COLOR.darkBlue}}>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
}

export default App;
