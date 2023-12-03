import { View, Text } from "react-native";

const SummaryScreen = ({ route }) => {
  const { total, peopleList } = route.params.params;

  const dues = new Map();

  for (let i = 0; i < peopleList.length; i++) {
    dues.set(peopleList[i], 0);
  }

  return (
    <View style={{ marginTop: 10, backgroundColor: "red", height: "100%" }}>
      <Text style={{ color: "white", fontSize: 100 }}>{total}</Text>
    </View>
  );
};

export default SummaryScreen;
