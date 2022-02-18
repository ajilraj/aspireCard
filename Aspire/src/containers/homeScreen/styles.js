import {StyleSheet} from 'react-native';
import globals from '../../utilities/globals';

const images = {
  logo: require('../../assets/images/debitScreen/Logo.png'),
  AspireLogo: require('../../assets/images/debitScreen/AspireLogo.png'),
  VisaLogo: require('../../assets/images/debitScreen/VisaLogo.png'),
  insight: require('../../assets/images/debitScreen/insight.png'),
  transfer: require('../../assets/images/debitScreen/Transfer.png'),
  deactive: require('../../assets/images/debitScreen/deactive.png'),
  freeze: require('../../assets/images/debitScreen/freeze.png'),
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: globals.COLOR.darkBlue,
  },
  mainView: {
    flex: 1,
    margin: 30,
    zIndex: -100,
  },
  screenName: {
    fontSize: globals.INTEGER.twentyFour,
    alignSelf: 'flex-start',
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.AvenirNextBold,
  },
  availableBalance: {
    fontSize: 16,
    alignSelf: 'flex-start',
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.AvenirNextMedium,
    marginTop: 30,
  },
  logo: {
    alignSelf: 'flex-end',
  },
  dollarSignView: {
    borderRadius: 4,
    backgroundColor: globals.COLOR.primarycolor,
    width: 40,
    height: 24,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dollarSign: {
    fontSize: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.AvenirNextBold,
  },
  accountBalanceView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avilableCash: {
    fontSize: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.AvenirNextBold,
    marginLeft: 10,
  },
  fixed: {
    position: 'absolute',
    top: 0,
    paddingTop: 280,
    left: 0,
    right: 0,
    bottom: 0,
    //backgroundColor: globals.COLOR.white,
    zIndex: 1000,
    elevation: 1000,
  },
  fixedDeafult: {
    position: 'absolute',
    top: 0,
    paddingTop: 50,
    left: 0,
    right: 0,
    bottom: 0,
    //backgroundColor: globals.COLOR.white,
    zIndex: 1000,
    elevation: 1000,
  },
  scrollview: {
    //backgroundColor: 'transparent',
    zIndex: 1000,
  },
  card: {
    backgroundColor: globals.COLOR.primarycolor,
    width: '85%',
    //  height: 220,
    zIndex: 2000,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 30,
  },
  aspireLogo: {
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 22,
    alignItems: 'flex-start',
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.AvenirNextBold,
  },
  cardNumber: {
    fontSize: 14,
    alignItems: 'flex-start',
    color: globals.COLOR.white,
    marginTop: 10,
    fontFamily: globals.FONTS.AvenirNextDemiBold,
  },
  dateCvvView: {
    flexDirection: 'row',
  },
  cvvView: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  date: {
    fontSize: 13,
    alignItems: 'flex-start',
    color: globals.COLOR.white,
    marginTop: 10,
    fontFamily: globals.FONTS.AvenirNextDemiBold,
  },
  secondView: {
    backgroundColor: globals.COLOR.white,
    borderTopLeftRadius: 20,
    flexDirection: 'column',
    borderTopRightRadius: 20,
    top: 80,
    height: 500,
    position: 'absolute',
    paddingTop: '37%',
    paddingLeft: 30,
    //paddingTop: 350,
    left: 0,
    right: 0,
    bottom: 0,
    //backgroundCo
  },
  menuView: {
    flexDirection: 'row',
    zIndex: 5000,
    alignItems: 'center',
    marginBottom: 25,
  },
  menutitle: {
    fontSize: 14,
    marginLeft: 10,

    alignItems: 'flex-start',
    color: globals.COLOR.titleColor,
    fontFamily: globals.FONTS.AvenirNextMedium,
  },
  menuDetails: {
    fontSize: 13,
    marginLeft: 10,
    opacity: 0.4,
    alignItems: 'flex-start',
    color: globals.COLOR.detailsFont,
    fontFamily: globals.FONTS.AvenirNextMedium,
  },
});

export {images, styles};
