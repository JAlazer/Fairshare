import React from "react";
import { View, StyleSheet } from "react-native";
import NextScreenBtn from "./NextScreenBtn";
import { useNavigation } from "@react-navigation/native";
import Visual from "./Visual";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <Visual></Visual>
      <NextScreenBtn
        navigation={navigation}
        targetScreen="FormScreen"
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
