import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {
  Account,
  GoRide,
  Help,
  Home,
  Inbox,
  Orders,
  ScanQrCode,
} from '../../containers/pages';

const Stack = createStackNavigator();
const MaterialButtom = createMaterialBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={BottomTabs}
        options={{headerShown: false, title: 'Home'}}
      />
      <Stack.Screen
        name="GoRide"
        component={GoRide}
        options={{headerShown: true, title: 'Go-Ride'}}
      />
      <Stack.Screen
        name="ScanQrCode"
        component={ScanQrCode}
        options={{headerShown: false, title: 'Scan Qr Code'}}
      />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <MaterialButtom.Navigator
      title="none"
      headertittle="none"
      shifting={false}
      initialRouteName="Home"
      activeColor="#61A756"
      inactiveColor="#545454"
      barStyle={{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgrey',
      }}>
      <MaterialButtom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <View marginTop={-5}>
              {color == '#61A756' ? (
                <Image
                  source={require('../../asset/icon/home-active.png')}
                  style={{height: 30, width: 30}}
                />
              ) : (
                <Image
                  source={require('../../asset/icon/home.png')}
                  style={{height: 30, width: 30}}
                />
              )}
            </View>
          ),
        }}
      />
      <MaterialButtom.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({color}) => (
            <View marginTop={-5}>
              {color == '#61A756' ? (
                <Image
                  source={require('../../asset/icon/order-active.png')}
                  style={{height: 30, width: 30}}
                />
              ) : (
                <Image
                  source={require('../../asset/icon/order.png')}
                  style={{height: 30, width: 30}}
                />
              )}
            </View>
          ),
        }}
      />
      <MaterialButtom.Screen
        name="Help"
        component={Help}
        options={{
          tabBarIcon: ({color}) => (
            <View marginTop={-5}>
              {color == '#61A756' ? (
                <Image
                  source={require('../../asset/icon/help-active.png')}
                  style={{height: 30, width: 30}}
                />
              ) : (
                <Image
                  source={require('../../asset/icon/help.png')}
                  style={{height: 30, width: 30}}
                />
              )}
            </View>
          ),
        }}
      />
      <MaterialButtom.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({color}) => (
            <View marginTop={-5}>
              {color == '#61A756' ? (
                <Image
                  source={require('../../asset/icon/inbox-active.png')}
                  style={{height: 30, width: 30}}
                />
              ) : (
                <Image
                  source={require('../../asset/icon/inbox.png')}
                  style={{height: 30, width: 30}}
                />
              )}
            </View>
          ),
        }}
      />
      <MaterialButtom.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color}) => (
            <View marginTop={-5}>
              {color == '#61A756' ? (
                <Image
                  source={require('../../asset/icon/account-active.png')}
                  style={{height: 30, width: 30}}
                />
              ) : (
                <Image
                  source={require('../../asset/icon/account.png')}
                  style={{height: 30, width: 30}}
                />
              )}
            </View>
          ),
        }}
      />
    </MaterialButtom.Navigator>
  );
};
export default class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    );
  }
}
