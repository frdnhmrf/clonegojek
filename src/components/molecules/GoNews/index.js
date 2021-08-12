import React from 'react';
import {View} from 'react-native';
import SubGoNews from '../SubGoNews';

const GoNews = props => {
  return (
    <View
      style={{
        paddingTop: 16,
        paddingHorizontal: 16,
        borderBottomColor: '#E8E9ED',
        borderBottomWidth: 1,
      }}>
      <SubGoNews
        img={require('../../../asset/dummy/sepak-bola.jpg')}
        text="READ"
        description="Dimas Derajat selamatkan penalti, Timnas U-23 kalahkan Brunei"
      />
    </View>
  );
};

export default GoNews;
