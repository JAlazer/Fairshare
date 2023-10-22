import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';


const FormScreen = () => {
    return (
        <View style={styles.view}>
            <Text>How many people?</Text>
            <TextInput style={styles.field} placeholder="Enter number of people" inputMode="numeric"></TextInput>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    field: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    view: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default FormScreen;