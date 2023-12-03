import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

const SelectMultiSelectShowcase = ({people, food, onUpdate2dArray}) => {
  const [selectedIndexes, setSelectedIndexes] = useState(Array(food.length).fill([]));
  const [assignList, setAssignList] = useState([]);
  const onSelect = (index, foodIndex) => {
    const updatedIndexes = [...selectedIndexes];
    updatedIndexes[foodIndex] = index;
    setSelectedIndexes(updatedIndexes);
  };
  

  useEffect(() => {
    const updatedAssignList = selectedIndexes.map((selectedIndexArr) =>
      selectedIndexArr.map((selectedIndex) => people[selectedIndex - 1]), // Adjusting index to start from 0
    );
    //setAssignList(updatedAssignList);
    onUpdate2dArray(updatedAssignList)
    //console.log(assignList);
    //console.log(updatedAssignList)
  }, [selectedIndexes]);

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
