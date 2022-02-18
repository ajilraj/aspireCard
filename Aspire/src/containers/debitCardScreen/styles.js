import {StyleSheet, Dimensions} from 'react-native';
import globals from '../../utilities/globals';
let {height, width} = Dimensions.get('window');

const images = {
  logo: require('../../assets/images/debitScreen/Logo.png'),
  AspireLogo: require('../../assets/images/debitScreen/AspireLogo.png'),
  VisaLogo: require('../../assets/images/debitScreen/VisaLogo.png'),
  insight: require('../../assets/images/debitScreen/insight.png'),
  transfer: require('../../assets/images/debitScreen/Transfer.png'),
  deactive: require('../../assets/images/debitScreen/deactive.png'),
  freeze: require('../../assets/images/debitScreen/freeze.png'),
  newCard: require('../../assets/images/debitScreen/newCard.png'),
  toggle: require('../../assets/images/debitScreen/toggle.png'),
  toggleActive: require('../../assets/images/debitScreen/toggleActive.png'),
  hide: require('../../assets/images/debitScreen/hide.png'),
  visible: require('../../assets/images/debitScreen/remove_red_eye-24px.png'),
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: globals.COLOR.darkBlue,
  },
  mainView: {
    flex: 1,
    margin: 15,
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
    zIndex: 1000,
    height: '100%',
    bottom: 0,
    position: 'absolute',
    marginTop: globals.INTEGER.statusBarHeight,
    width: '100%',
  },
  card: {
    backgroundColor: globals.COLOR.primarycolor,
    width: '85%',
    top: '27%',
    zIndex: 2000,
    alignSelf: 'center',
    borderRadius: 6,
    padding: 30,
  },
  aspireLogo: {
    alignSelf: 'flex-end',
  },
  hideImg: {
    marginLeft: 10,
    marginRight: 5,
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
    alignItems: 'center',
  },
  cvvView: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  date: {
    alignSelf: 'center',
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
    marginTop: '29%',
    paddingLeft: 30,
    ...Platform.select({
      ios: {
        paddingTop: '30%',
      },
      android: {
        paddingTop: '45%',
      },
    }),
  },

  switchView: {
    flexDirection: 'row',
  },
  subView: {
    width: '90%',
  },
  menuView: {
    flexDirection: 'row',
    zIndex: 5000,
    width: '92%',
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
    marginTop: 5,
    fontSize: 13,
    marginLeft: 10,
    opacity: 0.4,
    alignItems: 'flex-start',
    color: globals.COLOR.detailsFont,
    fontFamily: globals.FONTS.AvenirNextMedium,
    flexShrink: 1,
  },
  switch: {
    right: 0,
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  hideCardView: {
    backgroundColor: globals.COLOR.white,
    height: 30,
    position: 'absolute',
    right: 30,
    top: '23.5%',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    zIndex: -5000,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  hideCard: {
    color: globals.COLOR.primarycolor,
    fontFamily: globals.FONTS.AvenirNextDemiBold,
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  progressBar: {
    marginRight: 30,
    marginBottom: 25,
  },
  progressBarEmptyview: {
    marginTop: 25,
  },
  progressbarText: {
    color: globals.COLOR.detailsFont,
    fontFamily: globals.FONTS.AvenirNextMedium,
    fontSize: 13,
  },
  spendView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 15,
  },
  spendAmountView: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
  },
  limitAmount: {
    color: globals.COLOR.amtFont,
    fontFamily: globals.FONTS.AvenirNextMedium,
    fontSize: 13,
  },
  spendAmount: {
    color: globals.COLOR.primarycolor,
    fontFamily: globals.FONTS.AvenirNextMedium,
    fontSize: 13,
  },
  switchStyle: {
    ...Platform.select({
      ios: {transform: [{scaleX: 0.6}, {scaleY: 0.6}]},
      android: {transform: [{scaleX: 1}, {scaleY: 1}]},
    }),
  },
});

export {images, styles};
