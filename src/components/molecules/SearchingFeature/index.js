import React from 'react';
import {View, Image, TextInput} from 'react-native';

const SearchingFeature = () => {
  return (
    <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat?"
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 25,
            height: 40,
            fontSize: 13,
            paddingLeft: 45,
            backgroundColor: 'white',
            marginRight: 18,
          }}
        />
        <Image
          source={require('../../../asset/icon/search.png')}
          style={{position: 'absolute', top: 8, left: 18}}
        />
      </View>
      <View
        style={{
          width: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../../asset/icon/promo.png')} />
      </View>
    </View>
  );
};

export default SearchingFeature;
