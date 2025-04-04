import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, StatusBar } from 'react-native';
import React from 'react';

import Arrow_left from '../../assets/img/arrow-left'


import CustomTextInput from '../components/input'
import Vignette from '../components/Vignette'
import SousVignette from '../components/SousVignette'
import Lien from '../components/lien'
import Bouton from '../components/bouton'
import Categiries from '../components/categiries'
import Etapes from '../components/etapes'

function Create3({ navigation },) {
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
                }}>Créer un Business</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <View style={styles.categorie}>
                    <Etapes numero={'1 sur 3'} titre={'Informations générales'} sousTitre={'Suivant : Horaires d’ouverture'} />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Nom de l'établissement</Text>
                    <CustomTextInput />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Description</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Tapez la description ici"
                        multiline={true} // Permet le texte multi-ligne
                        numberOfLines={4} // Nombre de lignes visibles
                        textAlignVertical="top" // Aligne le texte en haut
                    />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Create2')} style={{ width: '45%' }}>
                        <Bouton block={styles.botton_back} text={styles.botton_text} texte={'Précedent'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Create4')} style={{ width: '45%' }}>
                        <Bouton texte={'Suivant'} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        marginTop: 36
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16,
        marginTop: 16,
        justifyContent: 'space-between',
        // width: '100%'
    },
    input: {
        height: 50,
        width: '100%',
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        backgroundColor: '#F5F5F6',
        borderRadius: 8
    },
    textArea: {
        height: 170,
        width: '100%',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
    },
    botton_back: {
        backgroundColor: '#E6E8F2',
        // width: 180
    },
    botton_text: {
        color: '#041578'
    }
});

module.exports = Create3