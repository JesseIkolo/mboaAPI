import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Register3 = () => {

  return (
    <View style={styles.body}>
      <View style={styles.df0}>
        <Image style={styles.imge0} source={require('../../assets/ressource/Conf.png')} />
      </View>
      <View style={styles.df1}>
        <Image style={styles.imge1} source={require('../../assets/ressource/Bs.png')} />
        <Image style={styles.imge2} source={require('../../assets/ressource/Bst.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#041578',
    height: '100%',
  },
  imge0: {
    left: 20
  },
  imge1: {
    left: 50,
    top: 240
  },
  imge2: {
    left: 25,
    top: 260
  },
  df1: {
    width: 326,
    height: 389,
    bottom: 650,
    left: 55,
    borderRadius: 16,
    backgroundColor: '#fff'
  },
});

module.exports = Register3;