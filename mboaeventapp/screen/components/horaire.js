import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated } from 'react-native';
import React, { useState } from 'react';

import Calendar_edit from '../../assets/img/calendar-edit'

const CustomTextInput = ({jour }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const handleToggle = () => {
    setIsToggled(!isToggled);
    Animated.spring(animation, {
      toValue: isToggled ? 0 : 1,
      useNativeDriver: false,
    }).start();
  };

  const circleColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#fff']
  });

  const trackColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#E2E8F0', '#041578'] // Gris clair à vert clair
  });

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 8]
  });


  return (

    <View style={styles.horaires_view}>
      <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
        <Text style={styles.titre}>{jour}</Text>
        <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
          <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
          <Animated.View
            style={[
              styles.toggleCircle,
              { backgroundColor: circleColor, transform: [{ translateX }] }
            ]}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.horaires}>
        <Text style={styles.horaires_texte}>08h00-18h00</Text>
        <Calendar_edit />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horaires_view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8
  },
  horaires: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F6',
    width: '50%',
    height: 50,
    padding: 8,
    borderRadius: 8
  },
  horaires_date: {
    width: '50%',
  },
  toggleButton: {
    width: 24,
    height: 16,
    borderRadius: 15,
    justifyContent: 'center',
  },
  toggleTrack: {
    width: 24,
    height: 16,
    borderRadius: 15,
    position: 'absolute',
  },
  toggleCircle: {
    width: 12,
    height: 12,
    borderRadius: 13,
    position: 'absolute',
    left: 2,
  },
  horaires_close: {
    backgroundColor: '#FEE9E9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  horaires_texte: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21.29,
    textAlign: 'left',
    color: '#767A90'
  },
});

export default CustomTextInput;