import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomTextInput = ({ numero, titre, sousTitre }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Etapes_numero}>
        <Text style={styles.Etapes_numero_Text}>{numero}</Text>
      </View>
      <View style={styles.Etapes_Block}>
        <Text style={styles.Etapes_Titre}>{titre}</Text>
        <Text style={styles.Etapes_Sous_Titre}>{sousTitre}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    marginTop: 10
  },
  Etapes_numero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#989FC8',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  Etapes_numero_Text: {
    color: '#002040',
    fontSize: 16,
    fontWeight: '600'
  },
  Etapes_Block: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
  Etapes_Titre: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 20,
    fontWeight: '700',
    color: '#041578',
  },
  Etapes_Sous_Titre: {
    fontSize: 11,
    fontWeight: '400',
    color: '#002040',
    ////styleName: Paragraph Small;
    // font-family: Inter;
    // font-size: 11px;
    // font-weight: 400;
    // line-height: 16.5px;
    // text-align: left;

  }
});

export default CustomTextInput;