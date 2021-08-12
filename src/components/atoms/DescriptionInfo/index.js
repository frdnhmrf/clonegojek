import React from 'react';
import {View, Text} from 'react-native';

const DescriptionInfo = props => {
  return (
    <Text
      style={{
        fontSize: 15,
        fontWeight: 'normal',
        color: '#4A4A4A',
        width: '60%',
      }}>
      {props.description}
    </Text>
  );
};

export default DescriptionInfo;
