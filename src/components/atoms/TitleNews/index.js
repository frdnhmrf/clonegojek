import React from 'react';
import {Text} from 'react-native';

const TitleNews = props => {
  return (
    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#1C1C1C'}}>
      {props.title}
    </Text>
  );
};

export default TitleNews;
