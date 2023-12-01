import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NextScreenBtn from '../components/NextScreenBtn';
import Dropdown from '../components/Dropdown'
import { useNavigation } from "@react-navigation/native";

const FoodSplitScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view1}>
      <View style={styles.dropdown}>
        <Dropdown/>
      </View>

        <NextScreenBtn btnText={'Submit'} targetScreen={"SummaryScreen"} navigation={navigation}/>
   
      
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdown: {
    width: '80%',
  },
});

export default FoodSplitScreen;
