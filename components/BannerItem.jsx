import { View, Text, Image, Dimensions  } from 'react-native'
import React from 'react'
import { images } from "../constants";

const BannerItem = ({ title }) => {
    return (
        <View className={`bg-red-200 p-5 my-2 mx-4 w-[380px]`}>
            <View className="flex-row items-center">
                <Image
                    source={images.cards}
                    className="w-[130px] h-[84px]"
                    resizeMode="contain"
                />
                <Text className="text-2xl ml-4">{title}</Text>
            </View>
            <Text>Name of translator/user/group</Text>
            <Text>Tags: TODO change to list</Text>
            <Text>Description?</Text>
        </View>
    );
}

export default BannerItem;
