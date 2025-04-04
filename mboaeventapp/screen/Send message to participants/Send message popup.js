import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react';

import message_2 from '../../assets/img/message-2'
import Button_1 from '../../assets/img/Button (1)'
import Close from '../../assets/img/close'

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
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontFamily: 'TitilliumWeb-Regular',
                            fontWeight: '700',
                            fontSize: 18,
                            color: '#041578',
                            width: '80%'
                        }}>
                            Envoyer un message à tous les participants
                        </Text>
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
                            <Close />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: '#E6E8F2',
                        padding: 12,
                        borderRadius: 10
                    }}>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Tapez la description ici"
                            multiline={true} // Permet le texte multi-ligne
                            numberOfLines={4} // Nombre de lignes visibles
                            textAlignVertical="top" // Aligne le texte en haut
                        />
                        <View style={styles.row}>
                            <TouchableOpacity onPress={() => navigation.navigate('Successful')} style={{ width: '45%' }}>
                                <Bouton texte={'Envoyer'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('List_of_participants1')} style={{ width: '45%' }}>
                                <Bouton block={styles.botton_back} text={styles.btn_text} texte={'Annuler'} />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        bottom: '25%',
        padding: 10,
    },
    contenue: {
        elevation: 1,
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 10
    },

    input: {
        height: 55,
        width: '80%',
        borderRadius: 8, // Correction: borderRadius était défini deux fois
        padding: 16,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        marginTop: 16,
        justifyContent: 'space-between'
    },
    botton_back: {
        backgroundColor: '#E6E8F2',
    },
    btn_text: {
        color: '#041578'
    },
    textArea: {
        height: 170,
        width: '100%',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
    },
});
module.exports = Statistique