import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Forgot4 = () => {
  
  return (
    <View style={styles.body}>
        <View style={styles.df0}>
          <Image style={styles.imge0} source={require('../../assets/ressource/Conf.png')}/>
        </View>
        <View style={styles.df1}>
          <Image style={styles.imge1} source={require('../../assets/ressource/Check.png')}/>
          <Image style={styles.imge2} source={require('../../assets/ressource/Feli.png')}/>
          <View style={styles.df2}>
            <TouchableOpacity style={styles.bt}>
                <Text style={styles.bttx}>Se Connecter</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#041578',
    height: 1000,
  },
  imge0:{
    left: 20
  },
  imge1:{
    left: 45,
    top: 20
  },
  imge2:{
    left: 25,
    top: 40
  },
  df1:{
    width: 326,
    height: 435,
    bottom: 650,
    left: 55,
    borderRadius: 16,
    backgroundColor: '#fff'
  },
  bt:{
     display: 'flex',
     width: 262,
     height: 56,
     borderRadius: 8,
     backgroundColor: '#041578',
     top: 80,
     left: 35
  },
  bttx:{
    display: 'flex',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    top: 15
  },
});

module.exports = Forgot4;