import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Document_upload from '../../assets/icons/document_upload';

const Vignette = () => {
  return (
    <View style={styles.Upload}>
      <Document_upload />
      <Text style={styles.Upload_Titre}>Charger ici</Text>
      <Text style={styles.Upload_Sous_Titre}>Types de fichiers supportés : jpg, jpeg, png, pdf</Text>
      <Text style={styles.Upload_Sous_Titre}>Taille Max: 5Mo</Text>
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
    paddingHorizontal: 50,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#ACB7B8',
    backgroundColor: '#F5F6F6',
    borderRadius: 16,
  },
  Upload_Titre: {
    // fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21.29,
    textAlign: 'center',
    color: '#1E2448',
  },
  Upload_Sous_Titre: {
    // fontFamily: 'TitilliumWeb-Regular',
    fontSize: 9,
    fontWeight: '400',
    lineHeight: 21.29,
    textAlign: 'center',
    color: '#B6B9BA',
  },
  documentUpload: {
    marginBottom: 10, // Ajoutez un espacement si nécessaire
  },
});

export default Vignette;