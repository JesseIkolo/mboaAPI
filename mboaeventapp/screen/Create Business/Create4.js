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

function Create4({ navigation },) {

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
                    <Etapes numero={'1 sur 3'} titre={'Horaires d’ouverture'} sousTitre={'Suivant : Insertions d’images'} />
                </View>
                <View style={styles.column}>
                    <Horaire jour={'Lundi'} />
                    <Horaire jour={'Mardi'} />
                    <Horaire jour={'Mercredi'} />
                    <Horaire jour={'Jeudi'} />
                    <Horaire jour={'Vendredi'} />
                    <View style={styles.horaires_view}>
                        <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                            <Text style={styles.titre}>Samedi</Text>
                            <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                <Animated.View
                                    style={[
                                        styles.toggleCircle,
                                        { backgroundColor: circleColor, transform: [{ translateX }] }
                                    ]}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <View style={[styles.horaires, styles.horaires_close]}>
                            <Text style={styles.horaires_texte}>Fermé</Text>
                        </View>
                    </View>
                    <View style={styles.horaires_view}>
                        <TouchableOpacity style={[styles.horaires, styles.horaires_date]} onPress={handleToggle}>
                            <Text style={styles.titre}>Dimanche</Text>
                            <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                                <Animated.View style={[styles.toggleTrack, { backgroundColor: trackColor }]} />
                                <Animated.View
                                    style={[
                                        styles.toggleCircle,
                                        { backgroundColor: circleColor, transform: [{ translateX }] }
                                    ]}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <View style={[styles.horaires, styles.horaires_close]}>
                            <Text style={styles.horaires_texte}>Fermé</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Create3')} style={{ width: '50%' }}>
                        <Bouton block={styles.botton_back} text={styles.botton_text} texte={'Précedent'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Create5')} style={{ width: '45%' }}>
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
        // width: '100%'
    },
    botton_text: {
        color: '#041578'
    },
    horaires_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8
    },
    horaires: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F6',
        width: '50%',
        height: 50,
        padding: 8,
        borderRadius: 8
    },
    horaires_date: {
        width: '50%',
    },
    toggleButton: {
        width: 24,
        height: 16,
        borderRadius: 15,
        justifyContent: 'center',
    },
    toggleTrack: {
        width: 24,
        height: 16,
        borderRadius: 15,
        position: 'absolute',
    },
    toggleCircle: {
        width: 12,
        height: 12,
        borderRadius: 13,
        position: 'absolute',
        left: 2,
    },
    horaires_close: {
        backgroundColor: '#FEE9E9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    horaires_texte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21.29,
        textAlign: 'left',
        color: '#767A90'
    },
});

module.exports = Create4