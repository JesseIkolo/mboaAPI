import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, Platform } from 'react-native';
import Animated from 'react-native-reanimated';

const HEADER_HEIGHT_IOS = 115;
const HEADER_HEIGHT_ANDROID = 70;

const CreateEvent1 = () => {
  const [statusBarHeight, setStatusBarHeight] = useState(Platform.OS === 'ios' ? 0 : StatusBar.currentHeight);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.currentHeight.then(height => {
        setStatusBarHeight(height);
        console.log('StatusBar height:', height); // Ajout pour vérification
      });
    }
  }, []);

  const headerHeight = Platform.OS === 'ios' ? HEADER_HEIGHT_IOS : HEADER_HEIGHT_ANDROID + statusBarHeight;

  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, headerHeight);
  const headerY = Animated.interpolate(diffClampScrollY, {
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],

  });

  return (
    <View>
      <Animated.View style={[styles.header, { transform: [{ translateY: headerY }] }]} />
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        style={{
          paddingTop: headerHeight,
        }}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY
              }
            },
          },
        ])}
      >
        {/* Your content here */}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: HEADER_HEIGHT_ANDROID,
    backgroundColor: '#1E2448',
    zIndex: 1000,
    elevation: 1000,
  },
})

export default CreateEvent1


  < View style = { styles.overlay } >
    <View style={styles.block_pp}>
      <Image
        source={require('../../assets/png/Oval.png')}
        style={styles.pp}
      />
    </View>
  </View >
  <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.nomClub}>Club O</Text>
    <Text style={styles.sous_nomClub}>@ClubO</Text>
  </View>
overlay: {
  position: 'absolute',
    top: -55,
      left: 0,
        right: 0,
          bottom: 0,
            backgroundColor: '#fff',
              height: 70,
                width: '100%',
                  zIndex: -1,
                    borderRadius: 30,
    }, block_pp: {
  display: 'flex',
    alignItems: 'center',
      justifyContent: 'center',
        width: '100%',
    },
pp: {
  position: 'relative',
    top: -45,
      left: 0,
        right: 0,
          bottom: 0,
            zIndex: 0
},
nomClub: {
  fontFamily: 'TitilliumWeb-Regular',
    fontSize: 20,
      fontWeight: '700',
        color: '#041578',
    },
sous_nomClub: {
  color: '#767A90',
    fontFamily: 'TitilliumWeb-Regular',
      fontSize: 14,
        fontWeight: '400'
},