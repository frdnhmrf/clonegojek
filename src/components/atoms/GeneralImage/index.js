import React from 'react';
import {View, Image} from 'react-native';

const GeneralImage = props => {
  return (
    <View style={{position: 'relative'}}>
      <Image
        source={props.img}
        style={{height: 170, width: '100%', borderRadius: 7}}
      />
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'black',
          opacity: 0.2,
          borderRadius: 7,
        }}
      />
      <View
        style={{
          width: 60,
          height: 16,
          position: 'absolute',
          left: 16,
          top: 16,
        }}>
        <Image
          source={require('../../../asset/logo/white.png')}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <View>{props.add}</View>
    </View>
  );
};

export default GeneralImage;
