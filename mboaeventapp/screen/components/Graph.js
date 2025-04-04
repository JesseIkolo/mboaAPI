import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const Graph = ({ Haut, Bas, text, style_text }) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, style_text]}>{text}</Text>
            <View style={[styles.haut, Haut]}></View>
            <View style={[styles.bas, Bas]}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    haut: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        width: 12,
        backgroundColor: '#F47A0D'
    },
    bas: {
        width: 12,
        backgroundColor: '#041578'
    },
    text: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 9,
        color: '#9B51E0',
        // marginLeft: 18
    }
});

export default Graph;