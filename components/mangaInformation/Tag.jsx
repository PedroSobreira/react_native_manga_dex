import { Text } from 'react-native'
import React from 'react'

const Tag = ({tag}) => {
  return (
    <Text
      className="bg-grayLight py-1 px-2 my-1 mr-2 text-sm text-gray font-bold"
    > 
        {tag.attributes.name.en}
    </Text>
  )
}

export default Tag