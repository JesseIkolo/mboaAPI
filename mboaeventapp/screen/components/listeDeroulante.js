import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const YearPicker = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  // Générer une liste d'années de 2000 à 2024
  const years = Array.from({ length: 25 }, (v, i) => (2000 + i).toString());

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedYear}
        onValueChange={(itemValue) => setSelectedYear(itemValue)}
        style={[styles.picker, styles.shadow]}
      >
        {years.map((year) => (
          <Picker.Item key={year} label={year} value={year} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  shadow: {
    // Ombre pour iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Ombre pour Android
    elevation: 4,
  },
});

export default YearPicker;
