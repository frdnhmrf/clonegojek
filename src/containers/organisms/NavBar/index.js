import React from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';

const NavBar = () => {
  return (
    <View
      style={{
        height: 54,
        flexDirection: 'row',
      }}>
      <NavBarIcon img={require('../../../asset/icon/home.png')} title="Home" />
      <NavBarIcon
        img={require('../../../asset/icon/order.png')}
        title="Orders"
      />
      <NavBarIcon img={require('../../../asset/icon/help.png')} title="Help" />
      <NavBarIcon
        img={require('../../../asset/icon/inbox.png')}
        title="Inbox"
      />
      <NavBarIcon
        img={require('../../../asset/icon/account.png')}
        title="Account"
      />
    </View>
  );
};

export default NavBar;
