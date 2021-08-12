import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image} from 'react-native';
import GopayFiture from '../../../components/molecules/GopayFiture';

const HomeGopay = () => {
  const Navigation = useNavigation();

  return (
    <View style={{marginHorizontal: 17, marginTop: 8}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#2C5FB8',
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          padding: 14,
        }}>
        <Image source={require('../../../asset/icon/gopay.png')} />
        <Text
          style={{
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Rp50.000
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 14,
          backgroundColor: '#2F65BD',
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4,
        }}>
        <GopayFiture
          onPress={() => Navigation.navigate('ScanQrCode')}
          img={require('../../../asset/icon/pay.png')}
          text="Pay"
        />
        <GopayFiture
          img={require('../../../asset/icon/nearby.png')}
          text="Nearby"
        />
        <GopayFiture
          img={require('../../../asset/icon/topup.png')}
          text="TopUp"
        />
        <GopayFiture
          img={require('../../../asset/icon/more.png')}
          text="More"
        />
      </View>
    </View>
  );
};

export default HomeGopay;
