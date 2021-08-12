import React from 'react';
import {View, Text, Image} from 'react-native';

const ScrollableItem = props => {
  return (
    <View>
      <View
        style={{
          width: 150,
          height: 150,
          marginBottom: 12,
          marginRight: 20,
        }}>
        <Image
          source={props.img}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'cover',
            flex: 1,
            borderRadius: 10,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: '#1C1C1C',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ScrollableItem;
