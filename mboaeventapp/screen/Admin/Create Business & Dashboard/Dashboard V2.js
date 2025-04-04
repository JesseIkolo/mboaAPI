import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

import Camera from '../../../assets/img/camera'
import Add_event_outline from '../../../assets/img/add-event1'
import Chart from '../../../assets/img/chart'
import Clipboard_text from '../../../assets/img/clipboard-text'
import Profile_2user from '../../../assets/img/profile-2user'
import User_tag from '../../../assets/img/user-tag'
import User_tag1 from '../../../assets/img/user-tag1'
import message_2 from '../../../assets/img/message-3'

import Frame from '../../components/Frame 34098'

function Statistique({ navigation },) {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <SafeAreaView style={styles.page}>
                <View>
                    <Text style={styles.texteSimple}>Bienvenue dans votre</Text>
                    <Text style={styles.texteBold}>Tableau de bord</Text>
                </View>

                <View style={{
                    backgroundColor: '#E6E8F2',
                    height: 105,
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'center'
                    alignItems: 'center',
                    borderRadius: 15
                }}>

                    <View>
                        <Image
                            source={require('../../../assets/png/Oval (5).png')}
                            style={{
                                width: 100,
                                resizeMode: 'contain',
                                bottom: -20,
                                // left: '38%',
                                position: 'absolute',
                            }}
                        />
                        <View style={{
                            width: 32,
                            padding: 8,
                            resizeMode: 'contain',
                            top: 25,
                            left: 60,
                            backgroundColor: '#041578',
                            borderRadius: 20
                        }} >
                            <Camera />
                        </View>
                    </View>
                    <View style={{ marginLeft: 80 }}>
                        <Text style={styles.texteBold}>Stéphane Ndiki</Text>
                        <Text style={[styles.texteSimple, { fontSize: 16, color: '#767A90' }]}>@Stéphanendiki</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', gap: 10 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, width: '100%' }}>
                        <View>
                            <View style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: '#FFD17E',
                                width: 115,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: 10,
                                backgroundColor: '#FFEDCC'
                            }}>
                                <Text style={[styles.texteSimple, { fontSize: 14, color: '#767A90', textAlign: 'center' }]}>Total d’évènements</Text>
                                <Text style={styles.texteBold}>10</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: '#FFD17E',
                                width: 115,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: 10,
                                backgroundColor: '#FFEDCC'
                            }}>
                                <Text style={[styles.texteSimple, { fontSize: 14, color: '#767A90', textAlign: 'center' }]}>Total partenaires</Text>
                                <Text style={styles.texteBold}>10</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: '#FFD17E',
                                width: 125,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: 10,
                                backgroundColor: '#FFEDCC'
                            }}>
                                <Text style={[styles.texteSimple, { fontSize: 14, color: '#767A90', textAlign: 'center' }]}>Montant généré en mars</Text>
                                <Text style={styles.texteBold}>10,5M</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                        <View>
                            <View style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: '#FFD17E',
                                width: 180,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: 10,
                                backgroundColor: '#FFEDCC'
                            }}>
                                <Text style={[styles.texteSimple, { fontSize: 14, color: '#767A90', textAlign: 'center', width: 150 }]}>Total d'utilisateurs Premium</Text>
                                <Text style={styles.texteBold}>25k</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: '#FFD17E',
                                width: 180,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: 10,
                                backgroundColor: '#FFEDCC'
                            }}>
                                <Text style={[styles.texteSimple, { fontSize: 14, color: '#767A90', textAlign: 'center', width: 150 }]}>Total d'utilisateurs Freemium</Text>
                                <Text style={styles.texteBold}>25,5M</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: '#767A90' }}></View>

                <View style={styles.frame}>
                    <Frame Image={Chart} nom={'Statistiques'} action={() => navigation.navigate('Statistiques')} />
                    <Frame Image={Add_event_outline} nom={'Évènements'}
                        styleBlok={{
                            backgroundColor: '#E6EAFE',
                        }}
                        action={() => navigation.navigate('Statistiques')}
                    />
                    <Frame Image={User_tag} nom={'Partenaires'}
                        styleBlok={{
                            backgroundColor: '#F3E9FB',
                        }}
                        action={() => navigation.navigate('Statistiques')}
                    />
                    <Frame Image={Clipboard_text} nom={'Publicités'}
                        styleBlok={{
                            backgroundColor: '#FEE7E7',
                        }}
                        action={() => navigation.navigate('Statistiques')}
                    />
                    <Frame Image={Profile_2user} nom={'Utilisateurs'}
                        styleBlok={{
                            backgroundColor: '#FFFCE5',
                        }}
                        action={() => navigation.navigate('Statistiques')}
                    />
                    <Frame Image={message_2} nom={'Messagerie'}
                        styleBlok={{
                            backgroundColor: '#E9F5FB',
                        }}
                        action={() => navigation.navigate('Statistiques')}
                    />
                    <Frame Image={User_tag1} nom={'Transactions'}
                        styleBlok={{
                            backgroundColor: '#E9FBF8',
                            width: '100%'
                        }}
                        action={() => navigation.navigate('Statistiques')}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        // paddingBottom: 26,
        gap: 26,
        backgroundColor: '#fff',
        height: '100%'
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
    frame: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        gap: 16,
        paddingBottom: 20,
    },

});
module.exports = Statistique