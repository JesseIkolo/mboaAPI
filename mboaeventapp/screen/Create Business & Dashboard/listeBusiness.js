import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar, TextInput, Animated } from 'react-native';
import React, { useState } from 'react';

import Inbox_1 from '../../assets/img/Inbox_1'
import Arrow_left from '../../assets/img/arrow-left'

import EventCardVertical from '../components/EventCardVertical'
import Bouton from '../components/bouton'

function Dashboard({ navigation },) {
    const [selectedValue, setSelectedValue] = useState('Selectionné');

    const options = [
        { label: 'Selectionné', value: 'Selectionné' },
        // { label: 'Selectionner?', value: 'Selectionner?' },
    ];

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
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <View style={styles.column}>
                    <View style={styles.TitreBlock}>
                        <Text style={styles.titre_Bold}>Liste de mes business</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Create2')}>
                            <Bouton block={styles.button} texte={"Ajouter   +"} />
                        </TouchableOpacity>
                    </View>
                    <EventCardVertical
                        pp={require('../../assets/png/Oval (1).png')}
                        nom={'Club O'}
                        Nom_style={styles.titre_Bold}
                        options={options}
                        selectedValue={'Selectionné'}
                        setSelectedValue={setSelectedValue}
                        image={require('../../assets/png/Image (7).png')}
                        like={'+23 J’aime'}
                        commentaire={'+58 Commentaires'}
                        send={'+54M Partages'}
                        action={() => navigation.navigate('Dashboard')}
                    />
                    <EventCardVertical
                        pp={require('../../assets/png/Oval (2).png')}
                        nom={'Opium'}
                        options={options}
                        selectedValue={'Selectionner?'}
                        setSelectedValue={setSelectedValue}
                        image={require('../../assets/png/Image (7).png')}
                        like={'+23 J’aime'}
                        commentaire={'+58 Commentaires'}
                        send={'+54M Partages'}
                        container1={styles.container1}
                        action={() => navigation.navigate('Dashboard')}
                    />
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
        marginBottom: 70,
        gap: 16,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        justifyContent: 'flex-start',
        height: '100%',
        marginTop: 20
    },
    TitreBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%'
    },
    titre_Bold: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#041578'
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    container1: {
        borderColor: '##767A90',
        borderWidth: 1,
    }
});


module.exports = Dashboard