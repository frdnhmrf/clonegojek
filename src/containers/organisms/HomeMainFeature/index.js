import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

const HomeMainFeature = () => {
  const Navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 18,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          flexWrap: 'wrap',
        }}>
        <MainFeature
          onPress={() => Navigation.navigate('GoRide')}
          title="G0-RIDE"
          img={require('../../../asset/icon/go-ride.png')}
        />
        <MainFeature
          title="G0-CAR"
          img={require('../../../asset/icon/go-car.png')}
        />
        <MainFeature
          title="G0-BLUEBIRD"
          img={require('../../../asset/icon/go-bluebird.png')}
        />
        <MainFeature
          title="G0-SEND"
          img={require('../../../asset/icon/go-send.png')}
        />

        <MainFeature
          title="G0-DEALS"
          img={require('../../../asset/icon/go-deals.png')}
        />
        <MainFeature
          title="G0-PULSA"
          img={require('../../../asset/icon/go-pulsa.png')}
        />
        <MainFeature
          title="G0-FOOD"
          img={require('../../../asset/icon/go-food.png')}
        />
        <MainFeature
          title="MORE"
          img={require('../../../asset/icon/go-more.png')}
        />
      </View>
    </View>
  );
};

export default HomeMainFeature;
