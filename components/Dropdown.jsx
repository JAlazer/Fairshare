import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

const SelectMultiSelectShowcase = ({people, food}) => {
  const [selectedIndexes, setSelectedIndexes] = useState(Array(food.length).fill([]));
  const onSelect = (index, foodIndex) => {
    const updatedIndexes = [...selectedIndexes];
    updatedIndexes[foodIndex] = index;
    setSelectedIndexes(updatedIndexes);
  };


  return (
    <Layout style={styles.container} level='3'>
      {food.map((foodItem, foodIndex) => (
        <Select
          key={foodIndex}
          multiSelect={true}
          selectedIndex={selectedIndexes[foodIndex]}
          onSelect={(index) => onSelect(index, foodIndex)}
          value={foodItem}
          size='large'
          style={{ marginBottom: 0 }}
        >
          {people.map((person, personIndex) => (
            <SelectItem key={personIndex} title={person} />
          ))}
        </Select>
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SelectMultiSelectShowcase;
