import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Visual = () => {

  return (
    <View style={styles.box}>
      <Text style={styles.text}>FairShare</Text>
      <Image source={require('../assets/images/BrokenTable.png')} 
       style={styles.table}/>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: '20%'
  },
  text: {
    fontFamily: 'Futura-Medium',
    fontSize: 36,
    color: '#00008B',
    padding: '0',
    marginLeft: '0',
    marginBottom: '5%',
    textAlign: 'left'
  },
  table: {
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 5,
    marginTop: '10%',
  },
});

export default Visual