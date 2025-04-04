import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import Heart from '../../assets/img/heart'
import Messages_2 from '../../assets/img/messages-2'
import Send_3 from '../../assets/img/send-3'
import Arrow_right from '../../assets/img/arrow-right'
import More from '../../assets/img/more'
import Ellipse from '../../assets/img/Ellipse 1 (1)'
import Camera1 from '../../assets/img/camera1'

import RadioButton from './RadioButton'
import Bouton1 from './bouton1'

const CustomTextInput = ({ pp, image, like, commentaire, send, container1, nom, Nom_style, action, timer, titre, lieu, place, prix, participant, image1, image2, image3, show_live, show_date, show_details, action1 }) => {
    return (
        <View style={[styles.container, container1]}>
            <View style={styles.haut}>
                <View style={styles.block_logo}>
                    <Image
                        source={pp}
                        style={styles.Photo_Profile}
                    />
                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text>par </Text>
                            <Text style={Nom_style}>{nom}</Text>
                        </View>
                        <Text style={styles.timer}>{timer}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={action1}>
                    <More />
                </TouchableOpacity>
            </View>
            <View style={styles.Photo_Block}>
                <View style={[styles.overflow_date, show_date]}>
                    <Text style={styles.overflow_date_number}>10</Text>
                    <Text style={styles.overflow_date_mois}>Juin</Text>
                </View>
                <Image
                    source={image}
                    style={styles.Photo}
                />
            </View>
            <View style={[styles.info, show_details]}>
                <Text style={styles.titre}>{titre}</Text>
                <View style={styles.row}>
                    <Text style={styles.place}>{place} places</Text>
                    <Ellipse />
                    <Text style={styles.lieu}>{lieu}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.prix}>{prix} XAF</Text>
                    <View style={styles.Block_Photo_participant}>
                        <Image
                            source={image1}
                            style={[styles.Photo_participant]}
                        />
                        <Image
                            source={image2}
                            style={[styles.Photo_participant, { right: 10 }]}
                        />
                        <Image
                            source={image3}
                            style={[styles.Photo_participant, { right: 20 }]}
                        />
                    </View>
                    <Text style={{ position: 'relative', right: 22 }}>+ {participant} personnes participent</Text>
                </View>
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

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: 20 }}>
                <TouchableOpacity onPress={action} style={styles.Bouton_block}>
                    <Bouton1 block={styles.button} texte={"Détails"} ImageComposent={Arrow_right} />
                </TouchableOpacity>

                <Bouton1 block={[styles.btn_style_live_local, show_live]} texte={'LIVE'} ImageComposent={Camera1} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#767A90',
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
        width: 50,
        height: 50
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
    },
    timer: {
        color: '#767A90',
        fontSize: 11,
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
    },
    overflow_date: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#E6E8F2',
        borderRadius: 8,
        width: 100,
        height: 80,
        position: 'absolute',
        zIndex: 1,
        top: 8,
        left: 8
    },
    overflow_date_number: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 24,
        color: '#041578'
    },
    overflow_date_mois: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 14,
        color: '#041578'
    },
    info: {
        paddingHorizontal: 16,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 16,
        color: '#041578'
    },
    place: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 14,
        color: '#3C4260'
    },
    lieu: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#3C4260'
    },
    prix: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#020931',
        backgroundColor: '#FFDE00',
        padding: 10,
    },
    Block_Photo_participant: {
        display: 'flex',
        flexDirection: 'row'
    },
    Photo_participant: {
        width: 30,
        height: 30,
        position: 'relative',
    },
    btn_style_live_local: {
        marginLeft: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: 'none',
        flexDirection: 'row-reverse',
        backgroundColor: '#F52424',
        borderRadius: 0
    },
});

export default CustomTextInput;