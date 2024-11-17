import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../constants'
import { LinearGradient } from 'expo-linear-gradient'
import TagList from './TagList'
import Status from './Status'
import ChaptersList from '../ChaptersList'
    

const MangaInformation = ({ id, data}) => {

  const [showFullView, setShowFullView] = useState(false);

  return (
    <>
      <ScrollView className="bg-white h-full">
        <View className="p-4 flex flex-row flex-wrap items-start">
        
          {/* Manga Image */}
          <View className="w-1/4">
            <Image
              source={images.placeholderMangaCover}
              className="w-[90px] min-w-30 h-[130px] rounded-xl"
            />
          </View>

          {/* Manga Title, Alttitle, Author */}
          <View className="w-3/4">
            {/* Title */}
            <Text className="text-2xl px-2 text-gray font-bold line-clamp-2">
              {data.attributes.title.en}
            </Text>

            {/* Alttitle */}
            <Text className="px-2 text-gray line-clamp-2">
              {data.attributes.title.en}
              {/* TODO: Change to altitle */}
            </Text>

            {/* Author */}
            {/* TODO */}
          </View>

          {/* Other Information: Tags, Status, Description, etc */}
          <View
            className={`${
              showFullView 
                ? "" 
                : "h-[200px]"
              } relative overflow-hidden`
            }
          >
            {/* Tags */}
            <TagList 
              tags={data.attributes.tags}
            />

            {/* Status */}
            <Status 
              year={data.attributes.year}
              status={data.attributes.status}
            />

            {/* Description */}
            <Text 
              className=""
              numberOfLines={10}
            >
              {data.attributes.description.en}
            </Text>

            <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            className="w-full h-[150px] my-2"
            resizeMode="contain"
          />
          <Text>
            More content here...  More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...More content here...
          </Text>

            {/* Gradient to fade information */}
            <LinearGradient
              colors={["transparent", "transparent", "white", "white"]}
              locations={[0, 0.5, 0.9, 1]}
              style={showFullView ? null : StyleSheet.absoluteFillObject} // Ensures the gradient fills the parent container
              className={`${
                showFullView 
                  ? "" 
                  : "border-b-2"
                }  border-orange`
              }
              pointerEvents="none" // Allows interaction with elements underneath
            />

          </View>

          {/* Button - See More || See Less */}
          <View 
            className="w-full flex items-center"
          >
            <TouchableOpacity
              className={`${
                showFullView 
                  ? "bg-grayLight" 
                  : "bg-orange"
                } pb-1 rounded-b-2xl flex flex-row items-center justify-center`
              }
              onPress={() => setShowFullView(!showFullView)}
            >
              <Image
                source={showFullView ? images.chevronUp : images.chevronDown}
                className="w-[16px] h-[16px] mx-2"
                resizeMode="contain"
              />

              <Text 
                className={`${
                  showFullView 
                    ? "text-black" 
                    : "text-white"
                  } text-sm font-semibold`
                }
              >
                {showFullView ? "See less" : "See more"}
              </Text>

              <Image
                source={showFullView ? images.chevronUp : images.chevronDown}
                className="w-[16px] h-[16px] mx-2"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      {/* <ChaptersList
        id={id}
      /> */}
    </>
  );
};

export default MangaInformation;
