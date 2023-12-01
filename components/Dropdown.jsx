import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

const SelectMultiSelectShowcase = () => {
  const food = ["Mac and Cheese", "Naan", "Curry", "Chicken"];
  const people = ["Person 1", "Person 2", "Person 3"];
  const [selectedIndexes, setSelectedIndexes] = useState(Array(food.length).fill([]));

  const onSelect = (index, foodIndex) => {
    const updatedIndexes = [...selectedIndexes];
    updatedIndexes[foodIndex] = index;
    setSelectedIndexes(updatedIndexes);
  };
  /** For each meal it will send a json to the backend in the format {Mac and cheese: 'person 1', 'person2'}
 * then for each meal we will divide it equally by how many each person ate. update how much person1 ate in the database
 * divide the tip and tax equally by everyone add it to everyones database at the end. and on the final loading screen send it back for each person
 * 
 */

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
