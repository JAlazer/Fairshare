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
    console.log(percent1)
    taxTotal = parseFloat(tax) + parseFloat(subTotal);
    console.log(taxTotal)
    setTotal((percent1 * subTotal) + taxTotal);
  }, [tax, percent]);

  useEffect(() => {
    if (work) {
      priceList = [];
      rows.forEach((val) => {
        foodList.push(`${val.foodName} ${val.price}`);
        priceList.push(parseFloat(val.price.substr(1)));
      });
      console.log(priceList);
      console.log(total)
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


      <View style={{flex: 1, flexDirection: 'row', maxHeight: '15%'}}>
        {/* INPUT GRID */}
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            {/* Food Input */}
            <TextInput
              style={styles.input}
              keyboardType="default"
              placeholder="Enter food"
              value={foodName}
              onChangeText={(food) => setFoodName(food)}
            />
            {/* Price input */}
            <TextInput
              style={styles.input}
              placeholder="Total Price in $"
              keyboardType="numeric"
              value={price}
              onChangeText={(p) => setPrice(p)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Tip percent:"
              value={percent}
              keyboardType="numeric"
              onChangeText={(percent) => setPercent(percent)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter tax:"
              value={tax}
              keyboardType="numeric"
              onChangeText={(tax) => setTax(tax)}
            />
          </View>
        </View>

        <View style={styles.button}>
          <Button
            color={'white'}
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

      <View style={styles.button1}>
        <Button
          className="btn btn-next"
          type="button"
          title="Split"
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
  inputRow: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    width: '80%',
    maxHeight: '80%',
    marginRight: 10
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },
  input: {
    width: '48%', // Adjust this percentage as needed
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
    textAlign: 'center',
    fontSize: 64,
    fontFamily: 'Didot',
  },
  button1: {
    backgroundColor: '#00008B',
    justifyContent: 'center',
    height: '10%',
    width: '80%',
    marginBottom: '10%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#00008B',
    borderRadius: 3,
    padding: 1,
    fontFamily: 'Didot',
    width: '20%',
    height: '32%'
  },
});

export default Bill;
