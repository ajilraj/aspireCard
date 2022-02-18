import React, {Fragment, useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import debitCardScreen from '../containers/debitCardScreen';
import spendingLimitScreen from '../containers/spendingLimitScreen';
import homeScreen from '../containers/homeScreen';
import paymentsScreen from '../containers/paymentsScreen';
import profileScreen from '../containers/profileScreen';
import creditScreen from '../containers/creditScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FooterTabItem from '../components/FooterTabItem';
import globals from './globals';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
  function DebitScreen() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Debit" component={debitCardScreen} />
        <Stack.Screen
          name="spendingLimitScreen"
          component={spendingLimitScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'DebitCard'}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: globals.COLOR.primarycolor,
          tabBarInactiveTintColor: globals.COLOR.greyColor,
          tabBarStyle: {
            //  borderTopWidth: 0,
            borderTopColor: globals.COLOR.greyColor,
            borderTopWidth: 1,
            height:
              globals.INTEGER.footerTabBarHeight + globals.INTEGER.screenBottom,
            marginBottom: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={homeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FooterTabItem
                tabBarIndex={0}
                isFocused={focused}
                tabBarLabel={'Home'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="DebitCard"
          component={DebitScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FooterTabItem tabBarIndex={1} isFocused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Payments"
          component={paymentsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FooterTabItem
                tabBarIndex={2}
                isFocused={focused}
                tabBarLabel={'Payments'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Credit"
          component={creditScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FooterTabItem
                tabBarIndex={3}
                isFocused={focused}
                tabBarLabel={'Credit'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={profileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FooterTabItem
                tabBarIndex={4}
                isFocused={focused}
                tabBarLabel={'Profile'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
