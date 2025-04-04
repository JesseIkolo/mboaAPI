import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, SafeAreaView, StatusBar } from 'react-native';
import React, { useState } from 'react';

import Arrow_left from '../../assets/img/arrow-left'

import Bouton from '../components/bouton'
import Etapes from '../components/etapes'
import HoraireEnable from '../components/horaireEnable'
import Map from '../components/map'
import Animation from '../components/animation'
import AnimationHaut from '../components/animationHaut'


function Create8({ navigation },) {
    return (
        <View style={styles.contain}>
            <SafeAreaView>
                <AnimationHaut />
            </SafeAreaView>
            <View style={styles.sousContain}>
                <View style={styles.sousSousContain}>
                    <View style={styles.animation}>
                        <SafeAreaView>
                            <Animation />
                        </SafeAreaView>
                    </View>
                    <View style={styles.Texte}>
                        <Text style={styles.Titre}>Félicitations</Text>
                        <Text style={styles.SousTitre}>Le mot de passe a été renitialisé</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                            <Bouton block={styles.botton_back_vert} texte={"Aller au tableau de bord"} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Create6')}>
                            <Bouton block={styles.botton_back} text={styles.botton_text} texte={"Retour à l'accueil"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#041578',
        height: '100%',
        display: 'flex',
    },
    sousContain: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
        marginTop: '15%'
    },
    sousSousContain: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '90%',
        backgroundColor: '#ffffff',
        // height: '70%',
        borderRadius: 16,
        gap: 32,
        paddingVertical: 32
    },
    animation: {
        marginTop: 32
    },
    Titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 24,
        color: '#020931'
    },
    SousTitre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#1E2448'
    },
    Texte: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }, botton_back: {
        backgroundColor: '#E6E8F2',
        width: '100%'
    },
    botton_text: {
        color: '#041578'
    },
});

module.exports = Create8