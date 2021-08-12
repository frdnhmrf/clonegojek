import React from 'react';
import {View, Text} from 'react-native';

const TitleScrollableProducts = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 16,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 17, color: '#1C1C1C'}}>
        {props.title}
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 17, color: '#61A756'}}>
        See All
      </Text>
    </View>
  );
};

export default TitleScrollableProducts;
