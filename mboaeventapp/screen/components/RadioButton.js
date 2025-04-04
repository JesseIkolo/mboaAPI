import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButton = ({ options, selectedValue, onValueChange }) => {
    return (
        <View style={styles.container}>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.radioButtonContainer}
                    onPress={() => onValueChange(option.value)}
                >
                    <Text style={[
                        styles.radioButtonText,
                        selectedValue === option.value && styles.selectedradioButtonText,
                    ]}>{option.label}</Text>
                    <View
                        style={[
                            styles.radioButton,
                            selectedValue === option.value && styles.selectedRadioButton,
                        ]}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        gap: 12,
        backgroundColor: '#EAFAF1',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 50
    },
    radioButton: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#CBD5E1',
        marginRight: 8,
    },
    selectedRadioButton: {
        borderWidth: 6,
        borderColor: '#27AE60',
    },
    radioButtonText: {
        fontSize: 16,
        color: '#767A90'
    },
    selectedradioButtonText:{
        fontSize: 16,
        color: '#219653'
    }
});

export default RadioButton;
