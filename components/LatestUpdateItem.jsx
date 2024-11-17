import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from "../constants";

const LatestUpdateItem = ({title}) => {
    return (
        <View className="bg-whiteTest rounded-xl py-2 px-2 m-2 h-[100px] flex flex-row flex-wrap items-start">
            <View className="w-1/5">
                <Image
                    source={images.placeholderLastUpdatedItem}
                    className="w-[58px] h-[84px]"
                    resizeMode="contain"
                />
            </View>
            <View className="w-4/5">
                <Text className="text-2xl text-gray font-semibold">{title}</Text>
                <View className="flex flex-row items-center mt-1">
                    <Image
                        source={images.placeholderFlag}
                        className="w-[20px] h-[14px] mr-2"
                        resizeMode="contain"
                    />
                    <Text className="text-base text-grayLightFaded pr-2" numberOfLines={1}>
                        Ch. 50.3 - The Demon King's test test more text more 1 more 2 more 3
                    </Text>
                </View>
                <Text className="text-base text-grayLightFaded">Name of translator/user/group</Text>
            </View>
        </View>
    );
}

export default LatestUpdateItem