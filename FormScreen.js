import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function FormScreen() {
    return (
        <View style={styles.container}>
        <Text>Form Screen</Text>
        <StatusBar style="auto" />
        </View>
    );
}