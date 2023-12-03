import { View, Text, StyleSheet } from "react-native";

const SummaryScreen = ({ route }) => {
  const { total, peopleList, array2d, priceList } = route.params.params;

  const dues = new Map();

  for (let i = 0; i < peopleList.length; i++) {
    dues.set(peopleList[i], 0);
  }

  for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
      dues.set(
        array2d[i][j],
        dues.get(array2d[i][j]) + priceList[i] / array2d[i].length
      );
    }
  }

  let totalNoTipNoTax = 0;
  for (let k = 0; k < priceList.length; k++) {
    totalNoTipNoTax += priceList[k];
  }

  let tipAndTax = total - totalNoTipNoTax;

  for (let k = 0; k < peopleList.length; k++) {
    let currentDues = dues.get(peopleList[k]);
    currentDues += (currentDues / totalNoTipNoTax) * tipAndTax;

    currentDues = Math.ceil(currentDues * 100) / 100;

    dues.set(peopleList[k], currentDues);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Amount Each Person Owes:</Text>
      {peopleList.map((person, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.personName}>{person}</Text>
          <Text style={styles.duesAmount}>${dues.get(person)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 10,
    height: "100%",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 100,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  personName: {
    fontSize: 16,
  },
  duesAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

export default SummaryScreen;
