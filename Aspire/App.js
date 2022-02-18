/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {HomeStackNavigator} from './src/utilities/navigationRoutes';

const App: () => Node = () => {
  return <HomeStackNavigator />;
};

export default App;
