import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const Bill =() => {
  const [rows, setRows] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [price, setPrice] = useState('');
  const [fraction, setFraction] = useState('');

  const [percent, setPercent] = useState('');


  const addRow = () => {
    if (foodName && price && fraction) {
      setRows([...rows, { foodName, price, fraction }]);
      setFoodName('');
      setPrice('');
      setFraction('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>New Bill</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Food Item Name"
          value={foodName}
          onChangeText={(text) => setFoodName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price (in $)"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Fraction Consumed"
          value={fraction}
          onChangeText={(text) => setFraction(text)}
        />
        <Button title="Add" onPress={addRow} />
      </View>
      <FlatList
        data={rows}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.foodName}</Text>
            <Text>{item.price}</Text>
            <Text>{item.fraction}</Text>
          </View>
        )}
      />
      <View>
        <Text style={styles.label}>Enter Percentage of tip</Text>
        <TextInput
            style={styles.input}
            placeholder="Type your percent here:"
            value={percent}
            onChangeText={(percent) => setPercent(percent)}
        />
      </View>
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
}
);

export default Bill;


