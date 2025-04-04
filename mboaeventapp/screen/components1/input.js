import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomTextInput = ({ title, unit, type, color, icon, space, padding}) => {
  return (
    <View style={[styles.container, {justifyContent: space, paddingHorizontal: padding,}]}>
      <TextInput
        style={styles.input}
        placeholder={title}
        keyboardType={type}
      />
      <Text style={styles.unit}>{unit}</Text>
      <TouchableOpacity>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 53,
    backgroundColor: '#F5F5F6',
    borderRadius: 8,
    width: '100%',
  },

  input: {
    // width: '100%',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },

  unit: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default CustomTextInput;