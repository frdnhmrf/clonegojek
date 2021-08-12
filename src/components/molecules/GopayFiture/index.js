import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GopayFiture = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={props.onPress}>
        <Image source={props.img} />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 13,
            marginTop: 15,
            textAlign: 'center',
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GopayFiture;
