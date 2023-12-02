import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import { Input } from '@ui-kitten/components';
import NextScreenBtn from "../components/NextScreenBtn";

const FormScreen = () => {
  const navigation = useNavigation();

  const [inputValues, setInputValues] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 },
  ]);

  useEffect(() => {
    if (value !== null) {
      const defaultInputValues = Array(value)
        .fill('')
        .map((_, index) => `Person ${index + 1}`);
      setInputValues(defaultInputValues);
    }
  }, [value]);

  const createInput = () => {
    const inputs = [];
    for (let i = 0; i < value; i++) {
      inputs.push(
        <Input
          key={i}
          size="large"
          placeholder={`Person ${i + 1}`}
          value={inputValues[i] || ''}
          onChangeText={(nextValue) => handleInputChange(nextValue, i)}
        />
      );
    }
    return inputs;
  };

  const handleInputChange = (nextValue, index) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = nextValue;
    setInputValues(updatedValues);
  };

  const handleDropDownChange = (selectedValue) => {
    setValue(selectedValue);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: 'space-between', backgroundColor: "white" }}>
      <View style={styles.view1}>
        <Text>How many people?</Text>
        <DropDownPicker
          style={styles.dropdown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={handleDropDownChange}
          setItems={setItems}
          maxHeight={200}
        />
      </View>

      <View style={styles.view2}>
        {createInput()}
      </View>

      <NextScreenBtn btnText="Next" targetScreen="BillScreen" navigation={navigation} params={inputValues}/>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: '10%',
    width: 200,
    zIndex: 10,
  },
  dropdown: {
    width: 200,
    height: 10,
  },
  view2: {
    flex: 1,
    flexDirection: "column",
    width: '60%',
    maxHeight: '10%',
    marginTop: '-90%',
  },
});

export default FormScreen;
