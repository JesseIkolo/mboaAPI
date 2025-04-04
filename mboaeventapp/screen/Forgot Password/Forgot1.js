import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Forgot1 = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.dv0}>
        <Image style={styles.img1} source={require('../../assets/ressource/Logo.png')} />
      </View>
      <View style={styles.dv1}>
        <Image style={styles.img2} source={require('../../assets/ressource/Mpo.png')} />
        <View style={styles.dv2}>
          <Text style={styles.txt2}>Nous allons vous aidez à trouver votre mot de passe, veuillez renseigner votre numero de telephone ci-dessous.</Text>
        </View>
        <View style={styles.dv2}>
          <Text style={styles.lab}>Numéro de Téléphone</Text>
          <TextInput style={styles.input1} />
        </View>
        <View style={styles.dv3}>
          <TouchableOpacity style={styles.bt} onPress={() => navigation.navigate('Forgot2')}>
            <Text style={styles.bttxt}>Continuer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dv2}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.txt1}>Retour à la connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    height: 1000,
  },
  dv1: {
    width: 326,
    height: 384,
    borderWidth: 1,
    borderColor: '#1E2448',
    padding: 32,
    left: 60,
    top: 250,
    borderRadius: 16,
  },
  img1: {
    display: 'flex',
    top: 150,
    left: 100,
  },
  img2: {
    display: 'flex',
    left: 30,
  },
  btn: {
    display: 'flex',
    width: 163,
    height: 37,
    left: 150,
    backgroundColor: '#E6E8F2',
    borderRadius: 8,
    top: 300,
  },
  txt1: {
    textAlign: 'center',
    top: 5,
    color: '#1E2448',
  },
  txt2: {
    display: 'flex',
    top: 30,
    textAlign: 'center',
    fontSize: 16
  },

  bt: {
    display: 'flex',
    width: 262,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#041578',
    top: 95
  },
  bttxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    top: 15
  },
  input1: {
    width: 262,
    height: 53,
    borderRadius: 8,
    display: 'flex',
    top: 70,
    left: 0,
    backgroundColor: '#F5F5F6'
  },
  lab: {
    display: 'flex',
    top: 65,
    fontSize: 16,
    left: 5
  },
});

module.exports = Forgot1;

