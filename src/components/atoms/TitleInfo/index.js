import React from 'react';
import {Text} from 'react-native';

const TitleInfo = props => {
  return (
    <Text
      style={{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1C1C1C',
        marginTop: 15,
        marginBottom: 20,
      }}>
      {props.title}
    </Text>
  );
};

export default TitleInfo;
