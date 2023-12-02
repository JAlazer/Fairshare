import { View, Text } from "react-native";

const SummaryScreen = ({route}) => {
    const total = route.params.params;
    console.log(route.params)

    return (
        <View><Text>{total}</Text></View>
    );
}

export default SummaryScreen