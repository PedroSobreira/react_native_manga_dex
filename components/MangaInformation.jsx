import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { images } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

const MangaInformation = ({ data }) => {

  const [showFullView, setShowFullView] = useState(false);

  return (
    <ScrollView className="bg-white h-full">
      <View className="p-4 flex flex-row flex-wrap items-start">
      
        {/* Manga Image */}
        <View className="w-1/4">
          <Image
            source={images.placeholderMangaCover}
            className="w-[90px] min-w-30 h-[130px] rounded-xl"
          />
        </View>

        {/* Manga Title */}
        <View className="w-3/4">
          <Text className="text-2xl px-2 text-gray font-bold line-clamp-2">
            {data.attributes.title.en}
          </Text>
          <Text className="px-2 text-gray line-clamp-2">
            {data.attributes.title.en}
            {/* TODO: Change to altitle */}
          </Text>
        </View>

        {/* Description and Image */}
        <View
          className={`${
            showFullView 
              ? "" 
              : "h-[200px]"
            } relative overflow-hidden`
          }
        >
          <Text numberOfLines={10}>
            Description: {data.attributes.description.en}
          </Text>

          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            className="w-full h-[150px] my-2"
            resizeMode="contain"
          />

          <Text>
            More content here...  More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...
          </Text>

          {/* Gradient */}
          <LinearGradient
            colors={["transparent", "white", "white"]}
            locations={[0, 0.9, 1]}
            style={showFullView ? null : StyleSheet.absoluteFillObject} // Ensures the gradient fills the parent container
            pointerEvents="none" // Allows interaction with elements underneath
          />
        </View>

        {/* TouchableOpacity centered horizontally */}
        <View 
          className="w-full flex items-center"
        >
          <TouchableOpacity
            className="bg-blue-500 py-2 px-6 rounded-lg mt-4"
            onPress={() => setShowFullView(!showFullView)}
          >
            <Text className="text-white text-lg font-semibold">
              {showFullView ? "Hide Half" : "Show Full"}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default MangaInformation;
