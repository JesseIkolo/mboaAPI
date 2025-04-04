import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

import Arrow_down from '../../../assets/img/arrow-down'
import Arrow_down1 from '../../../assets/img/arrow-down1'
import Inbox_1 from '../../../assets/img/Inbox_1'
import Camera from '../../../assets/img/camera'
import Group from '../../../assets/img/Group'
import Message_text from '../../../assets/img/message-text'
import Edit_2 from '../../../assets/img/edit-2'
import message_2 from '../../../assets/img/message-2'
import Chart from '../../../assets/img/chart'
import Clipboard_text from '../../../assets/img/clipboard-text'
import Profile_2user from '../../../assets/img/profile-2user'
import User_tag from '../../../assets/img/user-tag'
import Arrow_right1 from '../../../assets/img/arrow-right1'
import Tel from '../../../assets/img/tel'
import Button_1 from '../../../assets/img/Button (1)'

import Bouton1 from '../../components/bouton1'
import GradientBackground from '../../components/GradientBackground'
import Frame from '../../components/Frame 34098'
import Partcipant from '../../components/partenaires'
import ImageFlou from '../../components/imageFlou'

function Statistique({ navigation },) {

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.column}>
                <Text style={styles.Titre_Bold}>
                    Tous les partenaires
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', gap: 10 }}>
                    <TextInput
                        style={styles.input}
                        placeholder="Rechercher dans les participants ..."
                    />
                    <Button_1 />
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginHorizontal: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginLeft: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: 16 }}>0</Text>
                    <Text>sur</Text>
                    <Text style={{ fontWeight: '700', fontSize: 16 }}>420</Text>
                    <Text>sélectionnés</Text>
                </View>
                <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.Historique_Photo_More}>
                        <View style={styles.overlay}>
                        </View>

                        <View style={styles.listPartcipant}>
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                            <Partcipant image={require('../../../assets/png/Oval (1).png')} nom={'Club O'} style_suivi={styles.style_suivi_non} />
                            <Partcipant image={require('../../../assets/png/Oval (2).png')} nom={'Opium'} style_suivi={styles.style_suivi} />
                        </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate('Send_message_popup')}>
                <View style={styles.btn_end}>
                    <Bouton1
                        texte={'Envoyer un message aux sélectionnées'}
                        text={{
                            fontFamily: 'TitilliumWeb-Regular',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#fff',
                        }}
                        ImageComposent={message_2} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        // paddingHorizontal: 16,
        // paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff',
        height: '100%'
        // alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        gap: 16,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginTop: 40
    },
    Titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 24,
        color: '#041578',
    },
    Titre_Bold: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 20,
        color: '#041578'
    },
    bg: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        marginRight: 20,
        position: 'relative',
        zIndex: -1
    },
    Historique_Photo_More: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: -30,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 40,
        width: '100%',
        zIndex: -1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    style_suivi_non: {
        backgroundColor: '#DEDFE4',
        padding: 8,
        borderRadius: 4,
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 12,
        color: '#585D77'
    },
    listPartcipant: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    style_suivi: {
        backgroundColor: '#EAFAF1',
        padding: 8,
        borderRadius: 4,
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#219653'
    },
    btn_end: {
        backgroundColor: '#fff',
        width: '100%',
        elevation: 4,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20
    },
    input: {
        height: 55,
        width: '80%',
        borderRadius: 8, // Correction: borderRadius était défini deux fois
        padding: 16,
        fontSize: 16,
        backgroundColor: '#F5F5F6',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
});
module.exports = Statistique