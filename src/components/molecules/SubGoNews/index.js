import React from 'react';
import {View, Text} from 'react-native';
import ButtonGreen from '../../../components/atoms/ButtonGreen';
import GeneralImage from '../../atoms/GeneralImage';
import TitleNews from '../../atoms/TitleNews';

const SubGoNews = props => {
  return (
    <View>
      <GeneralImage img={props.img} />
      <View style={{paddingTop: 16, paddingBottom: 20}}>
        <TitleNews title="Go-News" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            color: '#7A7A7A',
            marginTop: 5,
            marginBottom: 11,
          }}>
          {props.description}
        </Text>
        <ButtonGreen text={props.text} />
      </View>
    </View>
  );
};

export default SubGoNews;
