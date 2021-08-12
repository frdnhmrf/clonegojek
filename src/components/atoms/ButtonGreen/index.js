import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ButtonGreen = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#61A756',
        paddingHorizontal: 12,
        paddingVertical: 11,
        alignSelf: 'flex-end',
        borderRadius: 4,
      }}>
      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white'}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonGreen;
