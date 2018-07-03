import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput
    underlineColorAndroid="transparent"
    {...props} //order here matters 
    style={[styles.input, props.style]} //including the custom styling 
    />

);

const styles = StyleSheet.create ({ 
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#eee",
        padding: 5,
        margin: 8

    }
})

export default defaultInput
