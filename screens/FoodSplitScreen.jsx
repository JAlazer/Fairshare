import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const FoodSplitScreen = () => {
  const [open, setOpen] = useState(false);
  const foodNamePrice = [["Matt's Mac and Cheese $500"], ["Matt's WAP $10000000"]]; // Corrected the data structure

  // Transform the foodNamePrice array into an array of objects with label and value properties
  const dropdownItems = foodNamePrice.map((item, index) => ({
    label: item[0],
    value: index,
  }));

  return (
    <View style={styles.view1}>
      <Text>You Ate?</Text>
      <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={null} // Set the initial value to null
        items={dropdownItems}
        setOpen={setOpen}
        placeholder={()=>{}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    marginTop: 100,
  },
  dropdown: {
    width: 200,
  },
});

export default FoodSplitScreen;
