import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import GoBanner from '../../../components/molecules/GoBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import GoNews from '../../../components/molecules/GoNews';
import SearchingFeature from '../../../components/molecules/SearchingFeature';
import HomeGopay from '../../organisms/HomeGopay';
import HomeMainFeature from '../../organisms/HomeMainFeature';
import NavBar from '../../organisms/NavBar';
import ScrollableProducts from '../../organisms/ScrollableProducts';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 32, marginBottom: 10}}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <SearchingFeature />
          <HomeGopay />
          <HomeMainFeature />
          <View
            style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}
          />
          <GoNews />
          <GoInfo />
          <GoBanner />
          <ScrollableProducts />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
