import React, { Component, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';


const Bill =() => {
  const [rows, setRows] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [price, setPrice] = useState('');
  const [fraction, setFraction] = useState('');

  const [percent, setPercent] = useState('');

  const [tax, setTax] = useState('');

  let total = 69.69;   // TO-BE CHANGED ONCE CALCULATE BILL METHOD IS MADE

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
        {/* HEADING FOR NEW BILL */}
        <h1 style={styles.h1}>New Bill</h1>

        {/* INPUT GRID */}
      <View style={styles.inputRow}>    
        <TextInput
          style={styles.input}
          placeholder="Food Item"
          value={foodName}
          onChangeText={(text) => setFoodName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price in $"
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

      {/* VIEW ONCE INFO IS ENTERED INTO EACH ROW */}
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

      {/* TODO: CALCULATION OF TOTAL IN SPERATE METHOD PERHAPS */}
      <View>
        <Text
            style={styles.label}>
                Your total is: ${total}
        </Text>
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
  h1: {
    textAlign: 'center'
  }
}
);

export default Bill;


