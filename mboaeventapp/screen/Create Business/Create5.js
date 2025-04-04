import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, StatusBar } from 'react-native';
import React, { useState } from 'react';

import Arrow_left from '../../assets/img/arrow-left'


import CustomTextInput from '../components/input'
import Vignette from '../components/Vignette'
import SousVignette from '../components/SousVignette'
import Lien from '../components/lien'
import Bouton from '../components/bouton'
import Categiries from '../components/categiries'
import Etapes from '../components/etapes'
import Horaire from '../components/horaire'

function Create5({ navigation },) {

    const [isToggled, setIsToggled] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const handleToggle = () => {
        setIsToggled(!isToggled);
        Animated.spring(animation, {
            toValue: isToggled ? 0 : 1,
            useNativeDriver: false,
        }).start();
    };

    const circleColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#fff', '#fff']
    });

    const trackColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E2E8F0', '#041578'] // Gris clair à vert clair
    });

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 8]
    });


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
                    <Etapes numero={'1 sur 3'} titre={'Insertions d’images'} sousTitre={'Suivant : Informations de contact'} />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Image de couverture</Text>
                    <Vignette />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Image de couverture</Text>
                    <Vignette />
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Galerie</Text>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
                        // backgroundColor: 'red',
                    }}>
                        <SousVignette />
                        <SousVignette />
                        <SousVignette />
                        <SousVignette />
                    </ScrollView>
                </View>
                <View style={styles.column}>
                    <Text style={styles.titre}>Menu habituel (si existant)</Text>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
                        // backgroundColor: 'red',
                    }}>
                        <SousVignette />
                        <SousVignette />
                        <SousVignette />
                        <SousVignette />
                    </ScrollView>
                </View>
                <View style={[styles.row, { marginBottom: 50 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Create4')} style={{ width: '50%' }}>
                        <Bouton block={styles.botton_back} text={styles.botton_text} texte={'Précedent'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Create6')} style={{ width: '45%' }}>
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
        backgroundColor: '#fff',
        // height: '0%'
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
});

module.exports = Create5