import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';
import Confetis from '../icons/confetis';

const AnimatedSquare = () => {
  const translateY = useRef(new Animated.Value(-100)).current; // Valeur initiale de la translation verticale

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0, // Valeur finale de la translation (500 pixels vers le bas)
      duration: 1000, // Durée de l'animation en millisecondes
      useNativeDriver: true, // Utilisation du pilote natif pour de meilleures performances
    }).start();
  }, [translateY]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [{ translateY }], // Applique la translation verticale
          },
        ]}
      >
        <Confetis />
        </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Commence en haut
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Couleur de fond pour mieux visualiser l'animation
  },
  square: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#007AFF',
    // marginTop: 50, // Espace en haut pour que le carré ne soit pas collé au bord
  },
});

export default AnimatedSquare;
