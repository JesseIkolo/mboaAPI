import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { BlurView } from 'expo-blur';

const App = ({ Component, style_image, nom }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <Component />
            <Text style={{ width: 86, textAlign: 'center' }}>{nom}</Text>
        </View>
    );
};

export default App;