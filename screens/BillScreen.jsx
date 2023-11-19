import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Pressable } from 'react-native';
import NextScreenBtn from "../components/NextScreenBtn";
import { useNavigation } from "@react-navigation/native";


const Bill =() => {
  const navigation = useNavigation();

  const [rows, setRows] = useState([]);

  const [foodName, setFoodName] = useState('');
  const [price, setPrice] = useState(0.0);
  const [fraction, setFraction] = useState(0.0);

  const [percent, setPercent] = useState(0.0);

  const [tax, setTax] = useState(0.0);

  const [totalCollect, setTotalCollect] = useState([]);

  const [total, setTotal] = useState(0.0);

  const parsedPrice = parseFloat(price);
  const parsedFrac = parseFloat(fraction);
  const parsedPercent = parseFloat(percent);
  const parsedTax = parseFloat(tax);

  
  function calcSubTotal() {
    const subTotal = (parsedPrice * parsedFrac).toFixed(2);

    return subTotal;
  }

  function addRow () {
    if (foodName && price && fraction) {
      setRows([...rows, {foodName, price, fraction, "id" : new Date().getTime()}]);
      const sub = calcSubTotal();
      setTotalCollect([...totalCollect, {sub}])

      setFoodName('');
      setPrice('');
      setFraction('');
    }
  }

  function calcTotal() {
    let sumPrice = totalCollect.reduce(
      (element, currentValue) => element + currentValue, 0);
    
    sumPrice *= parsedPercent;

    return sumPrice += parsedTax;
  }


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
          onChangeText={(food) => {setFoodName(food)}}
        />

        {/* Price input */}
        <TextInput
          style={styles.input}
          placeholder="Total Price in $"
          keyboardType='numeric'
          value={price}
          onChangeText={(p) => {setPrice(p)}}
        />

        {/* Fraction input */}
        <TextInput
          style={styles.input}
          placeholder="Fraction Consumed"
          keyboardType='numeric'
          value={fraction}
          onChangeText={(frac) => {setFraction(frac)}}
        />

        <Text> {foodName} </Text>

        <Text> {price} </Text>

        <Text> {fraction} </Text>
        
        <Button onPress={() => {
          addRow()
          console.log(totalCollect);
          
        }}
                title="Add"/>
      </View>
      

      {/* VIEW ONCE INFO IS ENTERED INTO EACH ROW */}
      <FlatList
        data={rows}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.foodName}</Text>
            <Text>{item.price}</Text>
            <Text>{item.fraction}</Text>
          </View>
        )}
      />

      
      {/* ENTERING PERCENTAGE TIP */}
      <View>
        <Text style={styles.label}>Enter Percentage of tip</Text>
        <TextInput
            style={styles.input}
            placeholder="Type your percent here:"
            value={percent}
            onChangeText={(percent) => setPercent(percent)}
        />
      </View>

      {/* ENTERING TAX! */}
      <View>
        <TextInput 
            style={styles.input}
            placeholder="Enter tax:"
            value={tax}
            onChangeText={(tax) => setTax(tax)}
        />
      </View>

      {/* TODO: Create Button to press that gives calculated total! Pray the function works */}
      <View>
        <Text
            style={styles.label}>
                Your total is: ${total}
        </Text>
      </View>

      <NextScreenBtn
        navigation={navigation}
        targetScreen="FoodSplitScreen"
        btnText="Split"
      />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,

  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginBottom: 5,
  },
  h1: {
    textAlign: 'center',
    fontSize: 64
  }
}
);

export default Bill;

