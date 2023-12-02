import { View, Text } from "react-native";

const SummaryScreen = ({route}) => {
    const total = route.params.params;
    console.log(route.params)

    return (
        <View style={{marginTop: 10, backgroundColor: 'red', height: '100%'}}>
            <Text style={{color: 'white', fontSize: 100}}>{total}</Text>
        </View>
    );
}

export default SummaryScreen