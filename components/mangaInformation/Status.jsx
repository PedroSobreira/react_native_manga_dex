import { View, Text } from 'react-native'
import React from 'react'
import { getMangaStatusColor } from '../../constants/enums/mangaStatus'

const Status = ({year, status}) => {
  
  return (
    <View
        className="flex flex-row flex-wrap items-start"
    >
        <View className={`w-[16px] h-[16px] mr-2 bg-${getMangaStatusColor(status)} rounded-full`} ></View>
        <Text
            className="uppercase h-[16px] text-sm"
        >
            Publication: {year}, {status}
        </Text>
    </View>
  )
}

export default Status