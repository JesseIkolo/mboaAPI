import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';


const CustomButton = ({ texte, block, text, ImageComposent}) => {
  return (
    <View style={[styles.bouton_block, block]}>
      <Text style={[styles.bouton_text, text]}>{texte}</Text>
      <ImageComposent />
    </View>
  );
};

const styles = StyleSheet.create({
  bouton_block: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#041578',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 26, 
    gap: 26
  },
  bouton_text: {
    color: '#fff',
    fontWeight: '700',
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 16,
  }
});

export default CustomButton;