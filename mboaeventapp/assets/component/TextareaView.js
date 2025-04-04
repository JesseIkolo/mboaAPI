import { TextInput,StyleSheet } from 'react-native';
import React from 'react';

export default function TextareaView  ({ value, onChangeText, placeholder, multiline, numberOfLines })  {
    return (
      <TextInput 
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.textArea}
      />
    );
  };

  const styles= StyleSheet.create({
    textArea:{
        backgroundColor:'#FFFFFF',
        height:128,
        width:330,
        borderRadius:12,
        paddingHorizontal:4,
        paddingBottom:70,
        fontSize:16,
        borderWidth:1,
        borderColor:'#E7E7EF'
    }
  })
