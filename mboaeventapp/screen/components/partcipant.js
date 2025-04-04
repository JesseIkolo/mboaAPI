import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';

import Message from '../../assets/img/message-text'
import More from '../../assets/img/more'

const partcipant = ({ image, style_image, nom, style_nom, suivie, style_suivi }) => {
    return (
        <View style={styles.container}>
            <View style={styles.gauche}>
                <Image source={image} style={styles.style_image} />
                <Text style={styles.style_nom}>{nom}</Text>
            </View>
            <View style={styles.gauche}>
                <View style={styles.Message}>
                    <Message />
                </View>
                <More />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Message: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#E6EAFE',
        padding: 8
    },
    gauche: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    style_image: {
        width: 40,
        height: 40,
        borderRadius: 30
    },
    style_nom: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#190E30'
    }
});

export default partcipant;