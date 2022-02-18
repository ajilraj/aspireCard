import {StyleSheet} from 'react-native';
import globals from '../../utilities/globals';

const images = {
  accountIcon: require('../../assets/images/footerTab/Account.png'),
  cardIcon: require('../../assets/images/footerTab/Card.png'),
  creditIcon: require('../../assets/images/footerTab/Credit.png'),
  homeIcon: require('../../assets/images/footerTab/Home.png'),
  paymentsIcon: require('../../assets/images/footerTab/Payments.png'),
};

const styles = StyleSheet.create({
  tabBarItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: globals.COLOR.greyColor,
    backgroundColor: globals.COLOR.white,
  },
  tabBarTitle: {
    marginTop: globals.INTEGER.ten,
    fontSize: globals.INTEGER.twelve,
  },
});

export {images, styles};
