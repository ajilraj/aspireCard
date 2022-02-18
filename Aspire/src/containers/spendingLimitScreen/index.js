/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {images, styles} from './styles';
import globals from '../../utilities/globals';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../../redux/actions/cardAction';
const SpendingLimitScreen = props => {
  const [amount, setSetAmount] = useState(null);

  const onPressSetAmount = id => {
    if (id === 1) {
      setSetAmount('5000');
    } else if (id === 2) {
      setSetAmount('10000');
    } else {
      setSetAmount('20000');
    }
  };
  const onPressSave = () => {
    if (amount) {
      props.setLimit(amount);
      props.navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.mainView}>
        <View style={styles.logoview}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.backBtnView}>
            <Image
              style={styles.backBtn}
              resizeMode="contain"
              source={images.backBtn}
            />
          </TouchableOpacity>

          <Image
            style={styles.logo}
            resizeMode="contain"
            source={images.logo}
          />
        </View>

        <Text style={styles.screenName}>{globals.SCREEN_TITLE.spendLimit}</Text>
        <View style={styles.contentView}>
          <View style={styles.menuView}>
            <Image resizeMode="contain" source={images.spendIcon} />
            <Text style={styles.menutitle}>
              Set a weekly debit card spending limit
            </Text>
          </View>
          <View style={styles.spendLimitView}>
            <View style={styles.dollarSignView}>
              <Text style={styles.dollarSign}>S$</Text>
            </View>
            <Text style={styles.amount}>{amount}</Text>
          </View>
          <Text style={styles.weeklyText}>
            Here weekly means the last 7 days - not the calendar week
          </Text>
          <View style={styles.selectAmount}>
            <TouchableOpacity
              onPress={() => onPressSetAmount(1)}
              style={styles.selectAmountBtn}>
              <Text style={styles.amntSelected}>S$ 5,000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressSetAmount(2)}
              style={styles.selectAmountBtn}>
              <Text style={styles.amntSelected}>S$ 10,000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onPressSetAmount(3)}
              style={styles.selectAmountBtn}>
              <Text style={styles.amntSelected}>S$ 20,000</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => onPressSave()}
            style={styles.saveBtn}>
            <Text style={styles.saveTxt}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setLimit: action.setLimit,
    },
    dispatch,
  );
};

const appWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpendingLimitScreen);
export default appWithRedux;
