import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const NavBarIcon = props => {
  return (
    <View style={styles.background}>
      <Image style={styles.img} source={props.img} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 10, color: '#545454', marginTop: 4},
  img: {width: 26, height: 26},
});

export default NavBarIcon;
