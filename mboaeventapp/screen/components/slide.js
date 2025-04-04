import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [require('../../assets/png/Image (7).png'),
  require('../../assets/png/Image (8).png'),
  require('../../assets/png/Image (9).png'),
  ];

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
        autoplay={true}
        autoplayTimeout={3}
        index={activeIndex} // Définit l'index actif
        onIndexChanged={(index) => setActiveIndex(index)} // Met à jour l'index actif
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index ? styles.paginationDotActive : null,
            ]}
            onPress={() => setActiveIndex(index)} // Met à jour l'index actif au clic
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    // marginTop: 10,
    position: 'relative',
    top: -50
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    opacity: 0.5,
    backgroundColor: '#E6E8F2',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    opacity: 1,
    width: 30,
    backgroundColor: '#E6E8F2',
  },
});

export default ImageSlider;
