import { View, Text, FlatList } from 'react-native'
import React from 'react'
import LastestUpdatesList from '../../components/LastestUpdatesList'
import HorizontalList from '../../components/HorizontalList'
import BannerList from '../../components/BannerList'


const Home = () => {
  return (
    <View>
      {/* <BannerList/> */}
      {/* <HorizontalList/> */}
      <LastestUpdatesList
        listTitle="Latest Updates"
      />
    </View>
  )
}

export default Home