import {StyleSheet, Dimensions} from 'react-native';
import globals from '../../utilities/globals';
let {height, width} = Dimensions.get('window');

const images = {
  logo: require('../../assets/images/debitScreen/Logo.png'),
  backBtn: require('../../assets/images/spendLimit/backBtn.png'),
  spendIcon: require('../../assets/images/spendLimit/Group1242.png'),
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: globals.COLOR.darkBlue,
  },
  mainView: {
    flex: 1,

    zIndex: -100,
  },
  screenName: {
    fontSize: globals.INTEGER.twentyFour,
    alignSelf: 'flex-start',
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.AvenirNextBold,
    margin: 15,
  },

  logo: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
  },
  backBtn: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
  logoview: {
    flexDirection: 'row',
    marginBottom: 15,
    margin: 15,
  },
  backBtnView: {
    alignSelf: 'flex-start',
  },
  contentView: {
    backgroundColor: globals.COLOR.white,
    borderTopLeftRadius: 20,
    flexDirection: 'column',
    borderTopRightRadius: 20,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,

    height: '100%',
    width: '100%',
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
  spendLimitView: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: globals.COLOR.amtFont,
    paddingBottom: 5,
  },
  amount: {
    fontSize: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    color: globals.COLOR.detailsFont,
    fontFamily: globals.FONTS.AvenirNextBold,
  },
  weeklyText: {
    fontSize: 12,
    color: '#22222266',
    fontFamily: globals.FONTS.AvenirNextRegular,
    marginTop: 10,
  },
  selectAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  selectAmountBtn: {
    backgroundColor: '#daf5e5',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 4,
  },
  amntSelected: {
    fontSize: 12,
    color: globals.COLOR.primarycolor,
    fontFamily: globals.FONTS.AvenirNextBold,
  },
  saveBtn: {
    backgroundColor: '#01D167',
    borderRadius: 30,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 150,
  },
  saveTxt: {
    fontSize: 16,
    color: globals.COLOR.white,
    fontFamily: globals.FONTS.AvenirNextBold,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export {images, styles};
