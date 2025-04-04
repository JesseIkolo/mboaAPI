import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Sort from '../../assets/img/sort'
import Filtre1 from '../../assets/img/filtre'

const YearPicker = () => {
  const [selectedYear, setSelectedYear] = useState('Trier par ...');
  const [showFilters, setShowFilters] = useState(false);

  const listes = [
    'Par nom, de A à Z',
    'Par nom, de Z à A',
    'Plus récent au plus ancien',
    'Plus ancien au plus récent',
    'Par Ratio de participation',
    'Par nombre de vues',
    'Par nombre de likes'
  ]

  // Générer une liste d'années de 2000 à 2024
  const years = Array.from({ length: 25 }, (v, i) => (2000 + i).toString());

  const toggleFilters = () => {
    setShowFilters(!showFilters); // Toggle filter visibility on click
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <TouchableOpacity onPress={toggleFilters}>
          <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E6E8F2', padding: 16, width: 190, gap: 16, borderRadius: 8 }}>
            <Text style={[styles.texteBold, { fontSize: 14, fontWeight: '700', color: '#041578' }]}>Filtrer la recherche</Text>
            <Filtre1 />
          </View>
        </TouchableOpacity>
      </View>
      {showFilters && ( // Render filter dropdown only when visible
        <View style={styles.filtersList}>
          {listes.map((liste) => (
            <Text key={liste} style={styles.filterText}>{liste}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  filtersList: {
    elevation: 4,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    position: 'absolute',
    width: 250,
    left: 0,
    top: 60,
    zIndex: 1,
    backgroundColor: '#fff'
  },
  filterText: {
    color: '#767A90',
    fontSize: 14
  }
});

export default YearPicker;
