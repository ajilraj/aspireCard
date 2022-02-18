import {Platform, Dimensions} from 'react-native';
import {displayName as appName} from '../../app.json';
let {height, width} = Dimensions.get('window');
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
module.exports = {
  SCREEN_TITLE: {
    debitCard: 'Debit Card',
    spendLimit: 'Spending limit',
  },
  COLOR: {
    transparent: 'transparent',
    white: '#ffffff',
    black: '#000000',
    primarycolor: '#01D167',
    greyColor: '#DDDDDD',
    shadowColor: '#00000014',
    darkBlue: '#0C365A',
    titleColor: '#25345F',
    detailsFont: '#222222',
    amtFont: '#22222233',
  },
  STRING: {
    appName: appName,
    home: 'Home',
    debitCard: 'Debit Card',
    payments: 'Payments',
    credit: 'Credit',
    profile: 'Profile',
  },

  INTEGER: {
    statusBarHeight: getStatusBarHeight(),
    screenBottom: getBottomSpace(),
    headerHeight: 64,
    footerTabBarHeight: 57,
    fourteen: 14,
    twentyFour: 24,
    fiftySeven: 57,
  },
  FONTS: {
    AvenirNextBold: 'AvenirNext-Bold',
    AvenirNextDemiBold: 'AvenirNext-DemiBold',
    AvenirNextMedium: 'AvenirNext-Medium',
    AvenirNextRegular: 'AvenirNext-Regular',
  },
};
