import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, SafeAreaView, StatusBar } from 'react-native';
import React, { useState } from 'react';

import Inbox_1 from '../../assets/img/Inbox_1'
import Button1 from '../../assets/img/Button'
import Arrow_left from '../../assets/img/arrow-left'

import EventCardVerticalCostum from '../components/EventCardVerticalCostum'
import Bouton from '../components/bouton'
import Trie from '../components/trie'

function Event({ navigation },) {
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
                <Text style={{
                    color: '#fff', fontSize: 20, fontWeight: '700', fontFamily: 'TitilliumWeb-Regular',
                }}>Mes Evènements</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <View style={styles.column}>
                    <View style={styles.Block_date}>
                        <View style={styles.date}>
                            <SafeAreaView style={{ flex: 1 }}>
                                <Trie />
                            </SafeAreaView>
                        </View>
                    </View>
                    <EventCardVerticalCostum
                        pp={require('../../assets/png/Oval (3).png')}
                        nom={'Club O'}
                        Nom_style={styles.titre_Bold}
                        image={require('../../assets/png/Image (8).png')}
                        like={'+23 J’aime'}
                        commentaire={'+58 Commentaires'}
                        send={'+54M Partages'}
                        action={() => navigation.navigate('Events_Details')}
                        timer={'Il y a 3min'}
                        titre={'Concert de Maalhox le Viber'}
                        lieu={'Au PaPoSy de Yaoundé'}
                        place={'250'}
                        prix={'25,000'}
                        participant={'20'}
                        image1={require('../../assets/png/Oval (3).png')}
                        image2={require('../../assets/png/Oval (4).png')}
                        image3={require('../../assets/png/Oval Copy 4.png')}
                        action1={() => navigation.navigate('MenuEvenement')}
                    />
                    <EventCardVerticalCostum
                        pp={require('../../assets/png/Oval (3).png')}
                        nom={'Opium'}
                        Nom_style={styles.titre_Bold}
                        image={require('../../assets/png/Image (9).png')}
                        like={'+23 J’aime'}
                        commentaire={'+58 Commentaires'}
                        send={'+54M Partages'}
                        container1={styles.container1}
                        action={() => navigation.navigate('Events_Details')}
                        timer={'Il y a 3min'}
                        titre={'Concert de Maalhox le Viber'}
                        lieu={'Au PaPoSy de Yaoundé'}
                        place={'250'}
                        prix={'25,000'}
                        participant={'20'}
                        image1={require('../../assets/png/Oval (3).png')}
                        image2={require('../../assets/png/Oval (4).png')}
                        image3={require('../../assets/png/Oval Copy 4.png')}
                        action1={() => navigation.navigate('MenuEvenement')}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('CreateEvent')} style={{ position: 'absolute', zIndex: 3, bottom: 70, right: 10 }}>
                <Button1 />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        marginBottom: 56,
        gap: 16,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        gap: 16,
        justifyContent: 'flex-start',
        height: '100%',
        marginBottom: 20
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
        borderColor: '#767A90',
        borderWidth: 1,
    },
    date: {
        display: 'flex',
        alignItems: 'flex-end',
        padding: 10,
    },
    Block_date: {
        display: 'flex',
        justifyContent: 'flex-end',
        // padding: 10,
        flexDirection: 'row',
        // gap: 10,
        // marginBottom: 15,
        position: 'relative',
        alignItems: 'center'
    },
});


module.exports = Event