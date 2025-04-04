import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Document_upload from '../../assets/img/document-upload'

const SousVignette = () => {
  return (
    <View style={styles.Upload}>
      <Document_upload />
      <Text style={styles.Upload_Sous_Titre}>Charger ici</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Upload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ACB7B8',
    backgroundColor: '#F5F6F6',
    borderRadius: 16,
    marginRight: 8
  },
  Upload_Titre: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21.29,
    textAlign: 'center',
    color: '#1E2448',
  },
  Upload_Sous_Titre: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 21.29,
    textAlign: 'center',
    color: '#B6B9BA',
  },
});

export default SousVignette;