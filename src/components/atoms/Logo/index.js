import React from 'react';
import {View, Image} from 'react-native';

const Logo = props => {
  return (
    <View
      style={{
        width: 60,
        height: 16,
        marginLeft: -2,
      }}>
      <Image
        source={props.img}
        style={{
          width: undefined,
          height: undefined,
          resizeMode: 'contain',
          flex: 1,
        }}
      />
    </View>
  );
};

export default Logo;
