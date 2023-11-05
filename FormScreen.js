import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const FormScreen = () => {
  const createButtons = () => {
    const buttons = [];
    for (let i = 0; i < value; i++) {
      buttons.push(
        <Pressable style={styles.button} key={i}>
          <Text style={styles.text}>Person {i + 1}</Text>
        </Pressable>
      );
    }
    return buttons;
  };

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

  return (
    <View style={{ justifyContent: "space-evenly", alignItems: "center" }}>
      <View style={styles.view1}>
        <Text>How many people?</Text>
        <DropDownPicker
          style={styles.dropdown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View style={styles.view2}>{createButtons()}</View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "20%",
    marginBottom: "10%",
    width: "51.2%",
  },
  view2: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    marginTop: "50%",
  },
  button: {
    backgroundColor: "#00008B",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100,
    marginBottom: "10%",
    borderRadius: "10px",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  dropdown: {
    width: 200,
  },
});

export default FormScreen;
