import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import Inbox_1 from '../../assets/img/Inbox_1'
import Camera from '../../assets/img/camera'
import Group from '../../assets/img/Group'
import Message_text from '../../assets/img/message-text'
import Edit_2 from '../../assets/img/edit-2'
import Add_event_outline from '../../assets/img/add-event1'
import Chart from '../../assets/img/chart'
import Clipboard_text from '../../assets/img/clipboard-text'
import Profile_2user from '../../assets/img/profile-2user'
import User_tag from '../../assets/img/user-tag'
import Arrow_right1 from '../../assets/img/arrow-right1'
import Tel from '../../assets/img/tel'
import Arrow_left from '../../assets/img/arrow-left'


import Bouton1 from '../components/bouton1'
import GradientBackground from '../components/GradientBackground'
import Frame from '../components/Frame 34098'

function Dashboard({ navigation },) {
    return (
        <View>

            <StatusBar
                barStyle="white-content"
                backgroundColor="#041578"
                translucent={false}
            />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, backgroundColor: '#041578', paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#E6E8F2',
                    marginLeft: 20,
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Arrow_left />
                </TouchableOpacity>
                <Text style={{
                    color: '#fff', fontSize: 20, fontWeight: '700', fontFamily: 'TitilliumWeb-Regular',
                }}>Mon Business</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <View style={styles.Titre_block}>
                    <Text style={styles.Titre}>
                        Bienvenue dans votre
                    </Text>
                    <Text style={styles.Titre_Bold}>
                        Business
                    </Text>
                </View>
                <View>
                    <Image
                        source={require('../../assets/png/Overlay.png')}
                        style={styles.bg}
                    />
                    <TouchableOpacity>
                        <View style={{
                            position: 'relative',
                            width: 32,
                            padding: 8,
                            resizeMode: 'contain',
                            top: -70,
                            left: '90%',
                            backgroundColor: '#041578',
                            borderRadius: 20
                        }} >
                            <Camera />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.Historique_Photo_More}>
                        <View style={styles.overlay}>
                            <View style={styles.block_pp}>

                                <Image
                                    source={require('../../assets/png/Oval.png')}
                                    style={{
                                        width: 100,
                                        resizeMode: 'contain',
                                        bottom: -30,
                                        left: '38%',
                                        position: 'absolute',
                                    }}
                                />
                                <View style={{
                                    width: 32,
                                    padding: 8,
                                    resizeMode: 'contain',
                                    bottom: -20,
                                    left: '8%',
                                    // top: 55,
                                    // left: '55%',
                                    backgroundColor: '#041578',
                                    borderRadius: 20
                                }} >
                                    <Camera />
                                </View>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.nomClub}>Club O</Text>
                            <Text style={styles.sous_nomClub}>@ClubO</Text>
                        </View>
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate('Abonnement1')} style={{ width: '50%', }}>
                                <View style={[styles.button_abonement]}>
                                    <Group />
                                    <Text style={[styles.button_abonement_text]}>Mes abonnements</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                                <View style={[styles.bouton_block]}>
                                    <Message_text />
                                    <Text style={[styles.bouton_text]}>Message</Text>
                                    <View style={[styles.Block_notification_text]}>
                                        <Text style={[styles.notification_text]}>3</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Bolck_Evenement}>
                            <View styles={styles.evenement}>
                                <Text style={styles.sousTitre}>Total évènements</Text>
                                <Text style={styles.Titre_Bold}>15</Text>
                            </View>
                            <View styles={styles.evenement}>
                                <Text style={styles.sousTitre}>Abonnés</Text>
                                <Text style={styles.Titre_Bold}>25k</Text>
                            </View>
                            <View styles={styles.evenement}>
                                <Text style={styles.sousTitre}>Suivis</Text>
                                <Text style={styles.Titre_Bold}>10</Text>
                            </View>
                        </View>
                        <View style={styles.bio_blok}>
                            <View style={styles.bio}>
                                <Text style={styles.Titre_Bold}>Bio du Business</Text>
                                <Edit_2 />
                            </View>
                            <Text style={styles.text_Bio}>Arcu in elit cursus volutpat massa vulputate. Nisl sollicitudin curabitur pharetra id porta aliquet. amet volutpat adipiscing gravida a elementum aenean. Vitae sed convallis ...<Text style={styles.text_Bio_next}>Voir Plus</Text> </Text>
                        </View>
                        <View style={styles.frame}>
                            <Frame Image={Chart} nom={'Statistiques'} action={() => navigation.navigate('Statistiques')} />
                            <Frame Image={Add_event_outline} nom={'Évènements'}
                                styleBlok={{
                                    backgroundColor: '#E6EAFE',
                                }}
                                action={() => navigation.navigate('Events')}
                            />
                            <Frame Image={User_tag} nom={'Profil de l\'entreprise'}
                                styleBlok={{
                                    backgroundColor: '#F3E9FB',
                                }}
                                action={() => navigation.navigate('Profil1')}
                            />
                            <Frame Image={Clipboard_text} nom={'Gestion des business'}
                                styleBlok={{
                                    backgroundColor: '#FEE7E7',
                                }}
                                action={() => navigation.navigate('Create2')}
                            />
                            <Frame Image={Profile_2user} nom={'Gestion des droits'}
                                styleBlok={{
                                    backgroundColor: '#FFFCE5',
                                    width: '100%'
                                }}
                                // MrV@frH7YP8CM@
                                action={() => navigation.navigate('GestionDroits1')}
                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Support1')} style={styles.contacter}>
                            <View style={[styles.contacter_bouton_block]}>
                                <View style={styles.contacter_row}>
                                    <Tel />
                                    <Text style={[styles.bouton_text]}>Contacter le support</Text>
                                </View>
                                <Arrow_right1 />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
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
        // alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        gap: 16,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    Titre_block: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 8
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
        fontSize: 24,
        // paddingVertical: 16,
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
        top: -55,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 70,
        width: '100%',
        zIndex: -1,
        borderRadius: 30,
    },
    overlayText: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 48,
        color: '#fff'
    },
    block_pp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    pp: {
        position: 'relative',
        top: -45,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
    },
    nomClub: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 20,
        fontWeight: '700',
        color: '#041578',
    },
    sous_nomClub: {
        color: '#767A90',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        marginTop: 16,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    button: {
        marginLeft: 16,
        borderWidth: 2,
        width: 150,
        flexDirection: 'row-reverse'
    },
    button_abonement: {
        backgroundColor: '#FFEDCC',
        borderColor: '#FF9441',
        borderWidth: 2
    },
    bouton_block: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6EAFE',
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 26,
        gap: 6,
        borderWidth: 2,
        borderColor: '#041578'
    },
    bouton_text: {
        color: '#041578',
        fontWeight: '700',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
    },
    Block_notification_text: {
        width: 25,
        height: 25,
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F52424',
    },
    notification_text: {
        fontSize: 16,
        color: '#fff'
    },
    button_abonement: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFEDCC',
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 26,
        gap: 6,
        borderWidth: 2,
        borderColor: '#FF9441'
    },
    button_abonement_text: {
        color: '#020931',
        fontWeight: '700',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
    },
    sousTitre: {
        color: '#3C4260',
        fontWeight: '400',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
    },
    evenement: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    Bolck_Evenement: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        marginHorizontal: 16,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderBottomColor: '#767A90',
        borderBottomWidth: 1,
    },
    bio_blok: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#F5F5F7',
        marginHorizontal: 16,
        marginVertical: 16,
        borderRadius: 16
    },
    bio: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    text_Bio: {
        color: '#3C4260',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400'
    },
    text_Bio_next: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '700'
    },
    frame: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        gap: 16,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#767A90'
    },
    contacter: {
        padding: 16,
        marginBottom: 30
    },
    contacter_bouton_block: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 26,
        gap: 6,
        borderWidth: 2,
        borderColor: '#041578'
    },
    contacter_row: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
});

module.exports = Dashboard