import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'

const HorizontalListItem = ({title}) => {
  return (
    <View className="bg-blue-200 p-5 my-2 mx-4">
        <Image
            source={images.cards}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
        />
        <Text className="text-2xl">{title}</Text>
    </View>
  )
}

export default HorizontalListItem