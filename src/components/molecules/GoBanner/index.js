import React from 'react';
import {View, Text} from 'react-native';
import ButtonGreen from '../../../components/atoms/ButtonGreen';
import LightLines from '../../../components/atoms/LightLines';
import GeneralImage from '../../atoms/GeneralImage';

const Add = props => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 10,
          }}>
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: 'white',
            marginBottom: 8,
          }}>
          {props.description}
        </Text>
      </View>
      <View>
        <ButtonGreen text="GET VOUCHER" />
      </View>
    </View>
  );
};
const GoBanner = props => {
  return (
    <View
      style={{
        padding: 16,
        paddingBottom: 0,
      }}>
      <GeneralImage
        img={require('../../../asset/dummy/food-banner.jpg')}
        add={
          <Add
            title="Free GO-FOOD Voucher"
            description="Quick, before they run out!"
          />
        }
      />

      <LightLines />
    </View>
  );
};

export default GoBanner;
