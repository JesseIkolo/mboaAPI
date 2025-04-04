import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Register4 = () => {

  return (
    <View style={styles.body}>
      <Image style={styles.imge1} source={require('../../assets/ressource/Conf.png')} />
      <View style={styles.df1}>
        <Image style={styles.imge2} source={require('../../assets/ressource/FSS.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#041578',
    height: 1000,
  },
  imge1: {
    left: 20
  },
  imge2: {
    display: 'flex',
    bottom: 600,
    left: '10%',
  },
});

module.exports = Register4;