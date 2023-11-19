import React from "react";
import { View, StyleSheet } from "react-native";
import NextScreenBtn from "../components/NextScreenBtn";
import { useNavigation } from "@react-navigation/native";
import Visual from "../components/Visual";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Visual/>
      <NextScreenBtn
        navigation={navigation}
        targetScreen="FoodSplitScreen"
        btnText="Create New Bill"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default WelcomeScreen;
