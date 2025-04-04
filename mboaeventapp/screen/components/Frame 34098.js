import React, { act } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Frame = ({ Image, nom, styleBlok, action }) => {
    return (
        <TouchableOpacity style={[styles.container, styleBlok]}  onPress={action}>
            <Image style={styles.Image} />
            <Text style={styles.texte}>{nom}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: '#E5FFEA',
        width: '47%',
        height: 125,
        borderWidth: 1,
        borderColor: '#DEDFE4',
        borderRadius: 8,
    },
    texte: {
        color: '#3C4260',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 20,
        fontWeight: '700'
    },
    Image:{
        resizeMode:'contain',
    }
});

export default Frame;