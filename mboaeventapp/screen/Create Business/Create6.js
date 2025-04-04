import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, StatusBar } from 'react-native';
import React, { useState } from 'react';

import Arrow_left from '../../assets/img/arrow-left'
import Map from '../../assets/img/map'
import Juste from '../../assets/img/Vector (3)'

import CustomTextInput from '../components/input'
import Vignette from '../components/Vignette'
import SousVignette from '../components/SousVignette'
import Lien from '../components/lien'
import Bouton from '../components/bouton'
import Categiries from '../components/categiries'
import Etapes from '../components/etapes'
import Horaire from '../components/horaire'

function Create6({ navigation },) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

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
                    <Etapes numero={'1 sur 3'} titre={'Informations de contact'} sousTitre={'Suivant : Aperçu'} />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Numéro de téléphone</Text>
                    <CustomTextInput />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Email</Text>
                    <CustomTextInput />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Liens Sociaux</Text>
                    <View style={styles.column}>
                        <Lien />
                        <Lien />
                        <Lien />
                    </View>
                </View>
                <View style={styles.column}>
                    <View style={styles.column}>
                        <Text style={styles.titre}>Localisation</Text>
                        <View style={styles.localisation}>
                            <TextInput
                                style={[styles.input, styles.Costum1]}
                                placeholder="Ex: Mariage de Aline & Christian"
                            />
                            <View style={styles.map}>
                                <Map />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleCheckboxPress} style={styles.checkbox_block}>
                        <TouchableOpacity style={styles.checkbox} onPress={handleCheckboxPress}>
                            {isChecked && <View style={styles.checkbox_juste} ><Juste /></View>}
                        </TouchableOpacity>
                        <Text style={styles.label}>En créant un business, vous acceptez nos Termes et conditions</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.row, { marginBottom: 50 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Create5')} style={{ width: '50%' }}>
                        <Bouton block={styles.botton_back} text={styles.botton_text} texte={'Précedent'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Create7')} style={{ width: '45%' }}>
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
        justifyContent: 'space-between'
    },
    botton_back: {
        backgroundColor: '#E6E8F2',
        // width: 180
    },
    botton_text: {
        color: '#041578'
    },
    list_Sous_Vignette: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-between',
    },
    localisation: {
        display: 'flex',
        flexDirection: 'row'
    },
    map: {
        padding: 10,
        backgroundColor: '#041578',
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Costum1: {
        width: '82%',
        backgroundColor: '#f5f5f6'
    },
    checkbox_block: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
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
    checkboxText: {
        fontSize: 20,
        color: '#007AFF',
        backgroundColor: '#041578',
        paddingHorizontal: 8
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 8,
        color: '#1E2448',
        width: '92%',
    },
    checkbox_juste: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#041578'
    },
    input: {
        height: 50,
        width: '100%',
        borderRadius: 8, // Correction: borderRadius était défini deux fois
        padding: 16,
        fontSize: 16,
        backgroundColor: '#F5F5F6',
    }
});

module.exports = Create6