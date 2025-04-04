import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import Crop1 from '../../../assets/img/crop_free'
import Crop2 from '../../../assets/img/crop_portrait'
import Copy from '../../../assets/img/content_copy'
import Devices from '../../../assets/img/devices'
import Qr from '../../../assets/img/qr_code_scanner'

import Bouton from '../../components/bouton'
import CustomTextInput from '../../components/input'
import Bouton1 from '../../components/bouton1'
import ImageFlou from '../../components/imageFlou4'
import Option from '../../components/option'
import Option1 from '../../components/option1'

function Statistique({ navigation },) {
    return (
        <View style={{ height: '100%', backgroundColor: '#fff' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <ImageFlou style_image={styles.style_image} />
                </View>
                <View style={styles.page}>
                    <View style={styles.overlay}>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 20 }}>
                            <Image
                                source={require('../../../assets/png/Image.png')}
                                style={[{
                                    width: 60,
                                    height: 50,
                                    zIndex: -1
                                }]} // Ajustez les dimensions selon vos besoins
                            />
                            <View>
                                <Text style={[styles.texteBold, { color: '#000', fontSize: 16 }]}>Partager cet évènement</Text>
                                <Text style={[styles.texteSimple, { color: '#000', fontSize: 16 }]}>Ko-C, nouvelle tournée</Text>
                            </View>
                        </View>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
                            paddingHorizontal: 30,
                            paddingVertical: 15,
                            borderTopWidth: 1,
                            borderColor: '#DFE2EB',
                        }} >
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
                                <Option image={require('../../../assets/png/WhatsApp Inc. - png.png')} nom={'WhatsApp'} />
                                <Option image={require('../../../assets/png/Notion - png.png')} nom={'Notion'} />
                                <Option image={require('../../../assets/png/Facebook - png.png')} nom={'Facebook'} />
                                <Option image={require('../../../assets/png/more_horiz.png')} nom={'Plus'} />
                            </View>
                        </ScrollView>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
                            paddingHorizontal: 30,
                            paddingVertical: 15,
                            borderTopWidth: 1,
                            borderColor: '#DFE2EB'
                        }} >
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
                                <Option1 Component={Crop1} nom={'Capture'} />
                                <Option1 Component={Crop2} nom={'Longue Capture'} />
                                <Option1 Component={Copy} nom={'Copier le lien'} />
                                <Option1 Component={Devices} nom={'Envoyer sur  périphériques'} />
                                <Option1 Component={Qr} nom={'QR code'} />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        // paddingHorizontal: 16,
        // paddingVertical: 26,
        gap: 26,
        backgroundColor: '#fff',
        height: '100%',
        // alignItems: 'center',
    },
    texteSimple: {
        fontWeight: '400',
        fontSize: 24,
        color: '#041578'
    },
    texteBold: {
        fontWeight: '700',
        fontSize: 24,
        color: '#041578'
    },
    categorie: {
        paddingTop: 26,
        paddingBottom: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    filterText: {
        color: '#767A90',
        fontSize: 14
    },
    btn_actif: {
        backgroundColor: '#041578',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: '50%',
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_not_actif: {
        backgroundColor: '#E6E8F2',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: '50%',
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    horaires_date: {
        width: 220,
    },
    horaires_texte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21.29,
        textAlign: 'left',
        color: '#767A90'
    },
    botton_back: {
        backgroundColor: '#E6E8F2',
        width: 180
    },
    botton_text: {
        color: '#041578'
    },
    overlay: {
        position: 'absolute',
        top: -30,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 50,
        zIndex: -1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    style_image: {
        height: 500
    }
});
module.exports = Statistique