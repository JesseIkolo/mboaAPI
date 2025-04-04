import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

import message_2 from '../../assets/img/message-2'
import Button_1 from '../../assets/img/Button (1)'
import Juste from '../../assets/img/juste'

import Bouton1 from '../components/bouton1'
import Partcipant from '../components/partcipant1'
import ImageFlou from '../components/imageFlou1'
import Bouton from '../components/bouton'

function Statistique({ navigation },) {

    return (
        <SafeAreaView style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <ImageFlou />
                </View>
            </ScrollView>

            <View style={styles.boite}>
                <View style={styles.contenue}>
                    <View style={{ display: 'flex', flexDirection: 'column-reverse', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
                        <Text style={{
                            fontFamily: 'TitilliumWeb-Regular',
                            fontWeight: '700',
                            fontSize: 18,
                            color: '#041578'
                        }}>
                            Votre message a été bien envoyé
                        </Text>
                        <Juste />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{ width: '75%' }}>
                        <Bouton texte={'Retour à l’évènement'} />
                    </TouchableOpacity>
                </View>
            </View>
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
    boite: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        // elevation: 4,
        position: 'absolute',
        bottom: '35%',
        padding: 10,
    },
    contenue: {
        elevation: 1,
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 20
    },
});
module.exports = Statistique