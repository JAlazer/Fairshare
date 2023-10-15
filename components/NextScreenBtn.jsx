import React from 'react'
import { Button } from 'react-native';


const NextScreenBtn = ({btnText, targetScreen}) => {
  return (
    <Button type="button" title={btnText} onPress={()=>navigation.navigate({targetScreen})} color="black"/>
  )
}

export default NextScreenBtn