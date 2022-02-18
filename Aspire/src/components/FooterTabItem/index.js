import React, {Component} from 'react';
import T from 'prop-types';
import {View, Image, Text} from 'react-native';
import {images, styles} from './styles';
import globals from '../../utilities/globals';

const FooterTabItem = props => {
  const {tabBarIndex, isFocused} = props;

  let tabBarImage, tabBarTitle;
  if (parseInt(tabBarIndex) === 0) {
    tabBarImage = images.homeIcon;
  } else if (parseInt(tabBarIndex) === 1) {
    tabBarImage = images.cardIcon;
  } else if (parseInt(tabBarIndex) === 2) {
    tabBarImage = images.paymentsIcon;
  } else if (parseInt(tabBarIndex) === 3) {
    tabBarImage = images.creditIcon;
  } else if (parseInt(tabBarIndex) === 4) {
    tabBarImage = images.accountIcon;
  }

  return (
    <View style={styles.tabBarItem}>
      <Image resizeMode="contain" source={tabBarImage} />
    </View>
  );
};
FooterTabItem.propTypes = {
  tabBarIndex: T.number,
  isFocused: T.bool,
};

export default FooterTabItem;
