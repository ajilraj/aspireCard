/**
 * Sample React Native DebitCard
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Switch,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';

import {images, styles} from './styles';
import globals from '../../utilities/globals';
import FooterTabItem from '../../components/FooterTabItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../../redux/actions/cardAction';
import * as Progress from 'react-native-progress';

const DebitCard = props => {
  useEffect(() => {
    props.getCardInfo();
  }, [props.weeklyLimitAmount]);
  const [isscrollUP, setIsscroll] = useState(false);
  const [isToggledFreeze, setIsToggledFreeze] = useState(false);
  const [isToggledWeeklyLimit, setIsToggledWeeklyLimit] = useState(false);
  const [ishideCardNo, setIshideCardNo] = useState(false);
  const carSecurityNo = '••••     ••••     ••••';

  const onPressToggle = id => {
    if (id === 1) setIsToggledFreeze(!isToggledFreeze);
    else {
      setIsToggledWeeklyLimit(!isToggledWeeklyLimit);
      if (isToggledWeeklyLimit === false) {
        props.navigation.navigate('spendingLimitScreen');
      }
    }
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.mainView}>
        <Image style={styles.logo} resizeMode="contain" source={images.logo} />
        <Text style={styles.screenName}>{globals.SCREEN_TITLE.debitCard}</Text>
        <Text style={styles.availableBalance}>Available balance</Text>
        <View style={styles.accountBalanceView}>
          <View style={styles.dollarSignView}>
            <Text style={styles.dollarSign}>S$</Text>
          </View>
          <Text style={styles.avilableCash}>
            {props.cardData ? props.cardData.balance : null}
          </Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        style={styles.scrollview}>
        <TouchableOpacity
          style={styles.hideCardView}
          onPress={() => {
            setIshideCardNo(!ishideCardNo);
          }}>
          <Image
            style={styles.hideImg}
            resizeMode="contain"
            source={images.hide}
          />
          <Text style={styles.hideCard}>Hide card number</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <Image
            style={styles.aspireLogo}
            resizeMode="contain"
            source={images.AspireLogo}
          />
          <Text style={styles.name}>
            {props.cardData ? props.cardData.name : null}
          </Text>
          <Text style={styles.cardNumber}>
            {props.cardData
              ? ishideCardNo
                ? carSecurityNo + '     ' + props.cardData.year
                : props.cardData.cardNumber
                ? props.cardData.cardNumber
                    .replace(/\s?/g, '')
                    .replace(/(\d{4})/g, '$1     ')
                    .trim() +
                  '     ' +
                  props.cardData.year
                : null
              : null}
          </Text>
          <View style={styles.dateCvvView}>
            <View style={styles.dateCvvView}>
              <Text style={styles.date}>Thru:</Text>
              <Text style={styles.date}>
                {props.cardData ? props.cardData.thru : null}
              </Text>
            </View>
            <View style={styles.cvvView}>
              <Text style={styles.date}>CVV: </Text>
              <Text style={styles.date}>
                {props.cardData
                  ? ishideCardNo
                    ? ' ***'
                    : props.cardData.cvv
                  : null}
              </Text>
            </View>
          </View>
          <Image
            style={styles.aspireLogo}
            resizeMode="contain"
            source={images.VisaLogo}
          />
        </View>
        <View style={styles.secondView}>
          {isToggledWeeklyLimit ? (
            <View style={styles.progressBar}>
              <View style={styles.spendView}>
                <Text style={styles.progressbarText}>
                  Debit card spending limit
                </Text>
                <View style={styles.spendAmountView}>
                  <Text style={styles.spendAmount}>
                    {props.cardData ? props.cardData.spendAmount : null}{' '}
                  </Text>
                  <Text style={styles.limitAmount}>
                    {props.weeklyLimitAmount
                      ? `$${props.weeklyLimitAmount}`
                      : null}
                  </Text>
                </View>
              </View>

              <Progress.Bar
                height={10}
                borderWidth={0}
                color={'#01D167'}
                progress={0.3}
                width={null}
                unfilledColor={'#01D16710'}
              />
            </View>
          ) : (
            <View style={styles.progressBarEmptyview}></View>
          )}
          <View style={styles.menuView}>
            <Image resizeMode="contain" source={images.insight} />
            <View style={styles.subView}>
              <View style={styles.switchView}>
                <Text style={styles.menutitle}>Top-up account</Text>
              </View>
              <Text style={styles.menuDetails}>
                Deposit money to your account to use with card
              </Text>
            </View>
          </View>
          <View style={styles.menuView}>
            <Image resizeMode="contain" source={images.transfer} />
            <View style={styles.subView}>
              <View style={styles.switchView}>
                <Text style={styles.menutitle}>Weekly spending limit</Text>
                <View style={styles.switch}>
                  <Switch
                    style={styles.switchStyle}
                    trackColor={{false: '#EEEEEE', true: '#EEEEEE'}}
                    thumbColor={isToggledWeeklyLimit ? '#01D167' : '#FFFFFF'}
                    ios_backgroundColor="#EEEEEE"
                    onValueChange={() => onPressToggle(2)}
                    value={isToggledWeeklyLimit}
                  />
                </View>
              </View>
              <Text style={styles.menuDetails}>
                You haven’t set any spending limit on card
              </Text>
            </View>
          </View>
          <View style={styles.menuView}>
            <Image resizeMode="contain" source={images.freeze} />
            <View style={styles.subView}>
              <View style={styles.switchView}>
                <Text style={styles.menutitle}>Freeze card</Text>
                <View style={styles.switch}>
                  <Switch
                    style={styles.switchStyle}
                    trackColor={{false: '#EEEEEE', true: '#EEEEEE'}}
                    thumbColor={isToggledFreeze ? '#01D167' : '#FFFFFF'}
                    ios_backgroundColor="#EEEEEE"
                    onValueChange={() => onPressToggle(1)}
                    value={isToggledFreeze}
                  />
                </View>
              </View>
              <Text style={styles.menuDetails}>
                Your debit card is currently active
              </Text>
            </View>
          </View>
          <View style={styles.menuView}>
            <Image resizeMode="contain" source={images.newCard} />
            <View>
              <View style={styles.switchView}>
                <Text style={styles.menutitle}>Get a new card</Text>
              </View>

              <Text style={styles.menuDetails}>
                You haven’t set any spending limit on card
              </Text>
            </View>
          </View>
          <View style={styles.menuView}>
            <Image resizeMode="contain" source={images.deactive} />
            <View>
              <Text style={styles.menutitle}>Deactivated cards</Text>
              <Text style={styles.menuDetails}>
                Your previously deactivated cards
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state, props) => ({
  cardData: state.cardReducer.cardData,
  weeklyLimitAmount: state.cardReducer.weeklyLimitAmount,
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCardInfo: action.getCardInfo,
    },
    dispatch,
  );
};

const appWithRedux = connect(mapStateToProps, mapDispatchToProps)(DebitCard);
export default appWithRedux;
