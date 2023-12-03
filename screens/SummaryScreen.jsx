import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card, Spinner } from "@ui-kitten/components";

const SummaryScreen = ({ route }) => {
  const { total, peopleList, array2d, priceList } = route.params.params;
  const [isVisible, setVisible] = useState(true);
  const [duesData, setDuesData] = useState([]);

  useEffect(() => {
    const calculateDues = () => {
      const duesMap = new Map();

      for (let i = 0; i < peopleList.length; i++) {
        duesMap.set(peopleList[i], 0);
      }

      for (let i = 0; i < array2d.length; i++) {
        for (let j = 0; j < array2d[i].length; j++) {
          duesMap.set(
            array2d[i][j],
            duesMap.get(array2d[i][j]) + priceList[i] / array2d[i].length
          );
        }
      }

      let totalNoTipNoTax = 0;
      for (let k = 0; k < priceList.length; k++) {
        totalNoTipNoTax += priceList[k];
      }

      let tipAndTax = total - totalNoTipNoTax;

      for (let k = 0; k < peopleList.length; k++) {
        let currentDues = duesMap.get(peopleList[k]);
        currentDues += (currentDues / totalNoTipNoTax) * tipAndTax;

        currentDues = Math.round(currentDues * 100) / 100;

        duesMap.set(peopleList[k], currentDues.toFixed(2));
      }

      return Array.from(duesMap);
    };

    const timeoutId = setTimeout(() => {
      setVisible(false);
      setDuesData(calculateDues());
    }, 3000);

    return () => clearTimeout(timeoutId); // Clear timeout on unmount
  }, [total, peopleList, array2d, priceList]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Share:</Text>
      {isVisible && (
        <View style={styles.spinnerContainer}>
          <Text style={{ marginBottom: 100, fontSize: 24, fontWeight: "300" }}>
            Calculating your Fair Share
          </Text>
          <Spinner size="giant" />
          <Text style={{ marginTop: 100, fontFamily: "Didot" }}>
            "Never pay more than your fair share again"
          </Text>
        </View>
      )}
      {!isVisible && (
        <View>
          {duesData.map(([person, dues], index) => (
            <Card key={index} style={{ flexDirection: "row" }}>
              <Text style={styles.personName}>{person}</Text>
              <Text style={styles.duesAmount}>${dues}</Text>
            </Card>
          ))}
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 40,
    paddingLeft: 40,
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    marginTop: 40,
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Didot",
    alignSelf: "center",
  },
  personName: {
    fontSize: 24,
  },
  duesAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 200,
  },
  total: {
    fontSize: 24,
    marginTop: 10,
    paddingBottom: 50,
  },
});

export default SummaryScreen;
