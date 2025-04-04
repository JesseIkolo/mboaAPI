import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { BlurView } from 'expo-blur';

const App = ({ image, style_image, nom }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <Image
                source={image}
                style={[{
                    width: 50,
                    height: 50,
                    zIndex: -1
                }, style_image]} // Ajustez les dimensions selon vos besoins
            />
            <Text>{nom}</Text>
        </View>
    );
};

export default App;