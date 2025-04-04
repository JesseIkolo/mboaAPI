import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

// import Check from '../../assets/img/Check'

const Animation = () => {
    const sizeValue = useRef(new Animated.Value(100)).current; // Valeur initiale de la taille

    useEffect(() => {
        Animated.timing(sizeValue, {
            toValue: 200, // Valeur finale de la taille
            duration: 1000, // Durée de l'animation en millisecondes
            useNativeDriver: false, // Utilisez false car nous animons des propriétés de style
        }).start();
    }, [sizeValue]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.square,
                    {
                        width: sizeValue,
                        height: sizeValue,
                    },
                ]}
            >
                {/* <Check /> */}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    square: {
        // backgroundColor: '#007AFF',
    },
});

export default Animation;
