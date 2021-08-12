import React from 'react';
import {View, Image, Text} from 'react-native';
import ButtonGreen from '../../../components/atoms/ButtonGreen';
import LightLines from '../../../components/atoms/LightLines';
import Logo from '../../../components/atoms/Logo';
import TitleInfo from '../../../components/atoms/TitleInfo';
import DescriptionInfo from '../../atoms/DescriptionInfo';

const GoInfo = props => {
  return (
    <View>
      <View style={{padding: 16, paddingBottom: 0}}>
        <Logo img={require('../../../asset/logo/gojek.png')} />
        <TitleInfo title="Complete yout profile" />
        <View style={{flexDirection: 'row', marginBottom: 16}}>
          <View>
            <Image
              source={require('../../../asset/dummy/facebook-connect.png')}
              style={{marginRight: 16}}
            />
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#4A4A4A',
                marginBottom: 8,
              }}>
              Connect with Facebook
            </Text>
            <DescriptionInfo description="Log in faster without verification code" />
          </View>
        </View>
        <ButtonGreen text="CONNECT" />
      </View>
      <LightLines />
    </View>
  );
};

export default GoInfo;
