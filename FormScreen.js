import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function FormScreen() {
    return (
        <div>
            <Text>Form Screen!!</Text>
            <Button>This is a button</Button>
            <StatusBar style="auto" />
        </div>
    );
}