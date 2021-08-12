import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Logo from '../../../components/atoms/Logo';
import TitleScrollableProducts from '../../../components/molecules/TitleScrollableProdutcs';
import AllItemScrolling from '../../../components/molecules/AllItemScrolling';

class ScrollableProducts extends Component {
  render() {
    return (
      <View style={{padding: 16, paddingBottom: 0, flexDirection: 'column'}}>
        <Logo img={require('../../../asset/logo/go-food.png')} />
        <TitleScrollableProducts title="Nearby Restaurant" />
        <ScrollView horizontal>
          <AllItemScrolling />
        </ScrollView>
      </View>
    );
  }
}

export default ScrollableProducts;
