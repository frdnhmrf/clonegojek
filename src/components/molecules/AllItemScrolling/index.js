import React from 'react';
import {View} from 'react-native';
import ScrollableItem from '../ScrollableItem';

const AllItemScrolling = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <ScrollableItem
        img={require('../../../asset/dummy/go-food-kfc.jpg')}
        text="KFC Aero Mall"
      />
      <ScrollableItem
        img={require('../../../asset/dummy/go-food-orins.jpg')}
        text="Martabak Orins"
      />
      <ScrollableItem
        img={require('../../../asset/dummy/go-food-banka.jpg')}
        text="Martabak Banka"
      />
      <ScrollableItem
        img={require('../../../asset/dummy/go-food-pak-boss.jpg')}
        text="Ayam Bakar Pak Boss"
      />
      <ScrollableItem
        img={require('../../../asset/dummy/go-food-gm.jpg')}
        text="Mie Ayam Aero Mall"
      />
    </View>
  );
};

export default AllItemScrolling;
