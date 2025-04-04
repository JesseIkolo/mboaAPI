import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder = "Ex: Mariage de Aline & Christian" }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderRadius: 8, // Correction: borderRadius était défini deux fois
    padding: 16,
    fontSize: 16,
    backgroundColor: '#F5F5F6',
  },
});

export default CustomTextInput;