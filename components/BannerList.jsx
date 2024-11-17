import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BannerItem from './BannerItem';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'a2c8a46b-fc2b-4c47-9d5c-d345a7b55d3d',
        title: 'Fourth Item',
    },
    {
        id: '9b7acb35-715f-4e18-8e7a-1c2f27a5e1f7',
        title: 'Fifth Item',
    },
    {
        id: '8c9f5dbf-4a93-4263-9a1d-6e9bf7bc7a9a',
        title: 'Sixth Item',
    },
    {
        id: 'ec98f432-6635-4dc4-88a2-1e2c9856d92f',
        title: 'Seventh Item',
    },
    {
        id: 'bf0f6c82-1fb6-4de6-b5d3-7d31bdf456e1',
        title: 'Eighth Item',
    },
    {
        id: 'd3f8e2c3-b8f4-4390-9286-9c0e6f364adf',
        title: 'Ninth Item',
    },
    {
        id: 'a40f7cb2-3c64-4b98-8f29-1b12d354b567',
        title: 'Tenth Item',
    },
    {
        id: '1b5c03ed-019a-4d60-81c8-6ae394f6efc0',
        title: 'Eleventh Item',
    },
    {
        id: 'df9f2c71-6e4e-4c21-9f5e-2c6e8e3778d3',
        title: 'Twelfth Item',
    },
    {
        id: 'be8f4b68-7151-41f9-a3e1-97a6dc2338a5',
        title: 'Thirteenth Item',
    },
    {
        id: 'f2847d5c-671c-43d4-bf85-4f3c0fd7630f',
        title: 'Fourteenth Item',
    },
    {
        id: 'e091c485-b7e2-4b4f-91fa-8c4e1b9a3b6f',
        title: 'Fifteenth Item',
    },
    {
        id: 'cf6a9c6f-e6c1-4f4a-8165-09ec2a0b43c7',
        title: 'Sixteenth Item',
    },
    {
        id: 'dfe75d8f-4c24-4b9c-ae75-2f7e9642b98b',
        title: 'Seventeenth Item',
    },
    {
        id: 'a8c7f7d3-b812-451f-9054-1d9a9ec5b43b',
        title: 'Eighteenth Item',
    },
];


const BannerList = () => {
  return (
    <View>
        <Text>Banner List</Text>
        <FlatList
            data={DATA}
            renderItem={({item}) => <BannerItem title={item.title} />}
            keyExtractor={item => item.id}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
        />
        <Text>Number on the list/number of total members of the list</Text>
    </View>
  )
}

export default BannerList