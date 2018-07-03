import React from 'react';
import { Text, StyleSheet } from 'react-native';

const headingText = props => (
    <Text {...props} style={[styles.screenHeading, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create ({
    screenHeading: {
        fontSize: 28, //font styling can only be done in text elements
        fontWeight: "bold"
    }
});

export default headingText