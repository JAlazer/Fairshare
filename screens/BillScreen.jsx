import React, { Component, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Pressable,
  PanResponder,
  Animated,
  TouchableOpacity,
} from "react-native";
import NextScreenBtn from "../components/NextScreenBtn";
import { useNavigation } from "@react-navigation/native";

const Bill = ({ route }) => {
  const navigation = useNavigation();
  const peopleList = route.params.params;
  const foodList = [];
  let priceList = [];
  let percent1 = 0;
  let taxTotal = 0;

  const [rows, setRows] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [percent, setPercent] = useState(0);
  const [tax, setTax] = useState(0.0);
  const [work, setWork] = useState(false);

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0.0);

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (_, gesture) => {
        pan.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 100) {
          // Swiped right (delete action)
          // Implement your delete logic here
          // For example:
          // deleteRow(rowId);
        } else if (gesture.dx < -100) {
          // Swiped left (edit action)
          // Implement your edit logic here
          // For example:
          // editRow(rowId);
        }
        // Reset the position of the row after the swipe
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  const animatedStyles = {
    transform: [{ translateX: pan.x }],
  };

  function addRow() {
    if (foodName && price) {
      const formattedPrice = `$${price}`;
      const newSize = "large";

      const newRow = {
        foodName,
        price: formattedPrice,
        size: newSize,
        id: rows.length,
      };
      setRows([...rows, newRow]);
      setFoodName("");
      setPrice("");
    }
  }
  useEffect(() => {
    rows.forEach((val) => {
      priceList.push(parseFloat(val.price.substr(1)));
    });
    if (priceList.length > 0) {
      setSubTotal(priceList.reduce((prev, curr) => prev + curr));
    }
  }, [rows]);

  useEffect(() => {
    percent1 = parseFloat(`${percent}`) / 100;
    taxTotal = parseFloat(tax) + parseFloat(subTotal);
    setTotal(percent1 * taxTotal + taxTotal);
  }, [tax, percent]);

  useEffect(() => {
    if (work) {
      priceList = [];
      rows.forEach((val) => {
        foodList.push(`${val.foodName} ${val.price}`);
        priceList.push(parseFloat(val.price.substr(1)));
      });
      console.log(priceList);
      navigation.navigate(`FoodSplitScreen`, {
        peopleList: peopleList,
        foodList: foodList,
        total: total,
        priceList: priceList,
      });
    }
  }, [work]);

  return (
    <View style={styles.container}>
      {/* HEADING FOR NEW BILL */}
      <Text style={styles.h1}>New Bill</Text>

      {/* INPUT GRID */}
      <View style={styles.inputRow}>
        {/* Food Input */}
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Enter food"
          value={foodName}
          onChangeText={(food) => {
            setFoodName(food);
          }}
        />

        {/* Price input */}
        <TextInput
          style={styles.input}
          placeholder="Total Price in $"
          keyboardType="numeric"
          value={price}
          onChangeText={(p) => {
            setPrice(p);
          }}
        />

        <View style={styles.button}>
          <Button
            color={"white"}
            onPress={() => {
              addRow();
            }}
            title="Add"
          />
        </View>
      </View>

      {/* VIEW ONCE INFO IS ENTERED INTO EACH ROW */}
      <FlatList
        data={rows}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View
            {...panResponder.panHandlers}
            style={[styles.row, animatedStyles]}
          >
            <Text>{item.foodName}</Text>
            <Text>{item.price}</Text>
          </Animated.View>
        )}
      />

      {/* ENTERING PERCENTAGE TIP */}
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{
            borderColor: "black",
            width: "45%",
            borderWidth: 1,
            height: "20%",
            padding: 10,
          }}
          placeholder="Tip percent:"
          value={percent}
          keyboardType="numeric"
          onChangeText={(percent) => setPercent(percent)}
        />
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            width: "45%",
            height: "20%",
            padding: 10,
          }}
          placeholder="Enter tax:"
          value={tax}
          keyboardType="numeric"
          onChangeText={(tax) => setTax(tax)}
        />
      </View>
      <View style={styles.button1}>
        <Button
          className="btn btn-next"
          type="button"
          title={"Split"}
          onPress={() => {
            setWork(true);
          }}
          color="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 5,
    backgroundColor: "white",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 20,
    marginBottom: 10,
  },
  h1: {
    textAlign: "center",
    fontSize: 64,
  },
  button: {
    backgroundColor: "#00008B",
    borderRadius: 3,
  },
  button1: {
    backgroundColor: "#00008B",
    justifyContent: "center",
    height: "10%",
    width: "80%",
    marginBottom: "10%",
    borderRadius: "10px",
    alignSelf: "center",
  },
});

export default Bill;
