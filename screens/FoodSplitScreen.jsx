import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NextScreenBtn from '../components/NextScreenBtn';
import Dropdown from '../components/Dropdown'
import { useNavigation } from "@react-navigation/native";

const FoodSplitScreen = ({route}) => {
  const navigation = useNavigation();
  const {peopleList, foodList, total} = route.params;
  console.log(route.params)

  const [array2d, set2dArray] = useState([]);

  const handleTwoDArrayUpdate = (updatedArray) => {
    set2dArray(updatedArray);
  };

  useEffect(()=>{
    console.log(array2d)
  }, [array2d])
  return (
    <View style={styles.view1}>
      <View style={styles.dropdown}>
        <Dropdown people={peopleList} food={foodList} onUpdate2dArray={handleTwoDArrayUpdate}/>
      </View>
        <NextScreenBtn btnText='Submit' targetScreen="SummaryScreen" navigation={navigation} params={total}/>
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
