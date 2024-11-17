import { View } from 'react-native'
import React from 'react'
import Tag from './Tag'

const TagList = ({tags}) => {

    const tagsList = tags.map((tag) => {
        return <Tag tag={tag} />;
    });

    return (
        <View 
            className="flex flex-row flex-wrap"
        >
            {tagsList}
        </View>
    )
}

export default TagList