import React, { act } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Frame = ({ Image, nom, nombre, styleBlok, action }) => {
    return (
        <TouchableOpacity style={[styles.container, styleBlok]} onPress={action}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Text style={styles.texte} numberOfLines={1} ellipsizeMode="tail">{nom}</Text>
                <Image style={styles.Image} />
            </View>
            <Text style={styles.nombre}>{nombre}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: '#F5F5F7',
        width: '47%',
        height: 100,
        borderWidth: 1,
        borderColor: '#DEDFE4',
        borderRadius: 8,
    },
    texte: {
        color: '#1E2448',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 12,
        fontWeight: '400',
        width: '80%'
    },
    nombre: {
        color: '#041578',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 34,
        fontWeight: '700',
    },
    Image: {
        resizeMode: 'contain',
    }
});

export default Frame;