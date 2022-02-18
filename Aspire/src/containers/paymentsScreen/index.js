/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import globals from '../../utilities/globals';
const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: globals.COLOR.darkBlue}}>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
};

export default App;
