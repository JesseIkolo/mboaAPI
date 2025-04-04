import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Heart from '../../assets/img/heart'
import Messages_2 from '../../assets/img/messages-2'
import Send_3 from '../../assets/img/send-3'
import Arrow_right from '../../assets/img/arrow-right'

import RadioButton from '../components/RadioButton'
import Bouton1 from '../components/bouton1'

const CustomTextInput = ({ pp, options, selectedValue, setSelectedValue, image, like, commentaire, send, container1, nom, Nom_style, action }) => {
    return (
        <View style={[styles.container, container1]}>
            <View style={styles.haut}>
                <View style={styles.block_logo}>
                    <Image
                        source={pp}
                        style={styles.Photo_Profile}
                    />
                    <Text style={Nom_style}>{nom}</Text>
                </View>
                <RadioButton
                    options={options}
                    selectedValue={selectedValue}
                    onValueChange={setSelectedValue}
                />
            </View>
            <View style={styles.Photo_Block}>
                <Image
                    source={image}
                    style={styles.Photo}
                />
            </View>
            <View style={styles.bas}>
                <View style={styles.bas_element}>
                    <Heart />
                    <Text style={styles.texte}>{like}</Text>
                </View>
                <View style={styles.bas_element}>
                    <Messages_2 />
                    <Text style={styles.texte}>{commentaire}</Text>
                </View>
                <View style={styles.bas_element}>
                    <Send_3 />
                    <Text style={styles.texte}>{send}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={action} style={styles.Bouton_block}>
                <Bouton1 block={styles.button} texte={"Détails"} ImageComposent={Arrow_right} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#27AE60',
        borderWidth: 2,
        borderRadius: 20,
        // paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
        display: 'flex',
        flexDirection: 'column'
    },
    haut: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        width: '100%'
    },
    block_logo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    Photo_Profile: {
        borderRadius: 50,
    },
    Photo: {
        height: 200,
        width: '100%'
    },
    Photo_Block: {
        resizeMode: 'cover'
    },
    bas: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    bas_element: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    texte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 11,
        color: '#3C4260'
    },
    Bouton_block: {
        display: 'flex',

    },
    button: {
        marginLeft: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: 150
    }
});

export default CustomTextInput;