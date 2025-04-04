import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { BlurView } from 'expo-blur';

const App = () => {
    return (
        <View>
            <Image

                source={require('../../assets/png/Nouveautés.png')}
                style={{
                    width: '100%',
                    height: 250,
                    zIndex: -1
                }} // Ajustez les dimensions selon vos besoins
                blurRadius={15} // Ajustez le niveau de flou (valeur supérieure à 5 pour iOS)
            />
        </View>
    );
};

export default App;