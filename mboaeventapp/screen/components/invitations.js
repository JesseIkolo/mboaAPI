import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';

import Message from '../../assets/img/message-text'
import More from '../../assets/img/more'

import Bouton from './bouton'

const partcipant = ({ image, nom, texte, time, show_btn, show_btns }) => {
    return (
        <View style={styles.container}>
            <View style={styles.gauche}>
                <Image source={image} style={styles.style_image} />
                <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <Text style={styles.style_nom}>{nom}
                        <Text style={styles.style_texte}>{texte}</Text>
                    </Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            <View style={[{ width: '100%', display: 'flex', alignItems: 'flex-end' }, show_btn]}>
                <Bouton texte={'OK'} block={{ width: 70, position: 'relative', left: 0 }} />
            </View>
            <View style={[{ width: '100%', display: 'flex', alignItems: 'flex-end' }, show_btns]}>
                <View style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row', gap: 20 }}>
                    <Bouton texte={'Refuser'} block={{ width: 100, position: 'relative', left: 0, backgroundColor: '#F74949', borderRadius: 8 }} />
                    <Bouton texte={'Accepter'} block={{ width: 100, position: 'relative', left: 0, backgroundColor: '#27AE60' }} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: '#B3B2B2',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderBottomWidth: 1,
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
        width: 50,
        height: 50,
        borderRadius: 30
    },
    style_nom: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#190E30',
        width: 305
    },
    style_texte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 12,
        color: '#190E30'
    },
    time: {
        color: '#989697',
        fontSize: 14
    }
});

export default partcipant;