import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';

import Inbox_1 from '../../assets/img/Inbox_1'
import Arrow_left from '../../assets/img/arrow-left'

import Bouton from '../components/bouton'

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
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>Mon Business</Text>
            </View>
            <View style={styles.page}>
                <View style={styles.column}>
                    <Inbox_1 />
                    <Text style={styles.Titre}>Bienvenue dans votre Business</Text>
                    <Text style={styles.SousTitre}>Il y a encore aucun évènement dans votre Business. Cliquez sur le bouton ci-dessous pour en ajouter.</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('listeBusiness')}>
                        <Bouton block={styles.botton_back_vert} texte={"Ajouter un Business   +"} ImageComposen />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        // paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: '90%'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        // marginTop: 36,
        justifyContent: 'center',
        height: '100%',
        width: '90%'
    },
    Titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 20,
        color: '##041578'
    },
    SousTitre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 16,
        color: '##767A90',
        textAlign: 'center'
    },
});

module.exports = Dashboard