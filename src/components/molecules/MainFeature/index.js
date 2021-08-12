import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const MainFeature = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderColor: '#EFEFEF',
          borderRadius: 18,
          marginTop: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={props.img} />
      </View>
      <Text
        style={{
          fontSize: 11,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MainFeature;
