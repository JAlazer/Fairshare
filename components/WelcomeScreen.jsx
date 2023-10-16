import React from 'react'
import { View, StyleSheet } from 'react-native'
import NextScreenBtn from './NextScreenBtn'

const WelcomeScreen = () => {
  return (
    <View style={styles.screen}>
      <NextScreenBtn btnText="Create New Bill"/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default WelcomeScreen