import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import Inbox_1 from '../../../assets/img/Inbox_1'
import Musique from '../../../assets/img/Vector (2)'
import Arrow_left from '../../../assets/img/arrow-left'
import Bookmark from '../../../assets/img/bookmark'
import Ellipse from '../../../assets/img/Ellipse 1 (1)'
import Frame_33939 from '../../../assets/img/Frame 33939'
import Frame_33937 from '../../../assets/img/Frame 33937'
import Icon_1 from '../../../assets/img/Icon (1)'
import Icon_2 from '../../../assets/img/Icon (2)'
import Icon_3 from '../../../assets/img/Icon (3)'
import Icon_4 from '../../../assets/img/Icon (4)'
import Icon_5 from '../../../assets/img/Icon (5)'
import Icon_6 from '../../../assets/img/Icon (6)'
import Arrow_down from '../../../assets/img/arrow-down'
import Arrow_down1 from '../../../assets/img/arrow-down1'
import Arrow_right from '../../../assets/img/arrow-right'
import Camera1 from '../../../assets/img/camera1'

import EventCardVerticalCostum from '../../components/EventCardVerticalCostum'
import Bouton from '../../components/bouton'
import Trie from '../../components/trie'
import Slide from '../../components/slide'
import Frame from '../../components/Frame 34099'
import Graph from '../../components/Graph'
import ListeDeroulante from '../../components/listeDeroulante'
import Bouton1 from '../../components/bouton1'


function Event({ navigation },) {
    const [selectedValue, setSelectedValue] = useState('Selectionné');

    const options = [
        { label: 'Selectionné', value: 'Selectionné' },
        // { label: 'Selectionner?', value: 'Selectionner?' },
    ];

    return (
        <View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, position: 'absolute', zIndex: 1, width: '100%', top: 40 }}>
                    <TouchableOpacity style={{ backgroundColor: '#E6E8F2', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }} onPress={() => navigation.goBack()}>
                        <Arrow_left />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: '#E6E8F2', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                        <Bookmark />
                    </View>
                </View>
                <Slide />
                <View style={styles.column}>
                    <View style={styles.haut}>
                        <View style={styles.droite}>
                            <Text style={styles.droite_text}>Détails</Text>
                        </View>
                        <View style={styles.gauche}>
                            <Text style={styles.gauche_text}>Statistiques</Text>
                            <View style={styles.boton}></View>
                        </View>
                    </View>
                    <View style={styles.sousPage}>
                        <View>
                            <Text style={{
                                fontFamily: 'TitilliumWeb-Regular',
                                fontWeight: '400',
                                fontSize: 24,
                                color: '#3C4260'
                            }}>
                                Statistiques de l’évènement
                            </Text>
                            <Text style={{
                                fontFamily: 'TitilliumWeb-Regular',
                                fontWeight: '700',
                                fontSize: 24,
                                color: '#041578'
                            }}>
                                Concert de Maalhox le Viber
                            </Text>
                        </View>
                        <View style={{
                            display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 12
                        }}>
                            <Frame Image={Icon_1} nom={'Statistiques'} action={() => navigation.navigate('Statistiques')} nombre={'250k'} />
                            <Frame Image={Icon_2} nom={'Nombre de Likes'} action={() => navigation.navigate('Statistiques')} nombre={'524'} />
                            <Frame Image={Icon_3} nom={'Nombre de Partages'} action={() => navigation.navigate('Statistiques')} nombre={'524'} />
                            <Frame Image={Icon_4} nom={'Nombre de vues sur live'} action={() => navigation.navigate('Statistiques')} nombre={'520M'} />
                            <Frame Image={Icon_5} nom={'Nombre de commentaires'} action={() => navigation.navigate('Statistiques')} nombre={'52,4k'} />
                            <Frame Image={Icon_6} nom={'Nombre de partipants'} action={() => navigation.navigate('Statistiques')} nombre={'520'} />
                        </View>

                        <Text style={styles.Titre}>Statistiques par année</Text>
                        <View style={styles.graph}>
                            <View style={styles.ordonne}>
                                <View style={styles.Block_Valeur}>
                                    <Text style={styles.Valeur}>0</Text>
                                    <Text style={styles.Valeur}>500</Text>
                                    <Text style={styles.Valeur}>1000</Text>
                                    <Text style={styles.Valeur}>1500</Text>
                                    <Text style={styles.Valeur}>2000</Text>
                                </View>
                                <View style={styles.Block_trait}>
                                    <Text style={styles.Trait}></Text>
                                    <Text style={styles.Trait}></Text>
                                    <Text style={styles.Trait}></Text>
                                    <Text style={styles.Trait}></Text>
                                    <Text style={styles.Trait}></Text>
                                </View>
                                <View style={styles.ligne}></View>
                                <View>
                                    <View style={styles.absicce}>
                                        <Graph Bas={{ height: '80%', width: 60, backgroundColor: '#041578' }} text={'1800'} />
                                        <Graph Bas={{ height: '70%', width: 60, backgroundColor: '#6D77B1' }} text={'1400'} />
                                    </View>

                                    <View style={styles.Block_mois}>
                                        <Text style={styles.mois}>Personnes qui participent</Text>
                                        <Text style={styles.mois}>Personnes qui sont venues</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <View style={styles.Block_Partipant}>
                                    <Text style={styles.titre}>Ratio des participants</Text>
                                    <Icon_6 />
                                </View>
                            </View>

                        </View>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }} onPress={() => navigation.navigate('List_of_participants')}>
                            <View style={styles.Block_Photo_participant}>
                                <Image
                                    source={require('../../../assets/png/Oval (3).png')}
                                    style={[styles.Photo_participant]}
                                />
                                <Image
                                    source={require('../../../assets/png/Oval (4).png')}
                                    style={[styles.Photo_participant, { right: 10 }]}
                                />
                                <Image
                                    source={require('../../../assets/png/Oval Copy 4.png')}
                                    style={[styles.Photo_participant, { right: 20 }]}
                                />
                            </View>
                            <Text style={{ position: 'relative', right: 22, fontWeight: 700 }}>+ 20 personnes participent</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 20, position: 'relative' }}></View>
            </ScrollView >
            <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0, left: 0, backgroundColor: '#fff', elevation: 20, padding: 20, width: '100%', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Events_Details')} style={styles.Bouton_block}>
                    <Bouton1 block={[styles.button, { height: 60, marginBottom: 0 }]} texte={'Je veux participer'} ImageComposent={Arrow_right} />
                </TouchableOpacity>

                <Bouton1 block={[styles.btn_style_live_local, { height: 40, marginBottom: 0, gap: 10 }]} texte={'LIVE'} ImageComposent={Camera1} />
            </View>
        </View>
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
        // alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        justifyContent: 'flex-start',
        height: '100%',
        marginHorizontal: 20,
        marginBottom: 50,
        elevation: 15,
        width: '90%',
        backgroundColor: '#fff',
        position: 'relative',
        top: -40,
        borderRadius: 20,
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
    Photo_Profile: {
        width: '100%',
        resizeMode: 'cover'
    },
    haut: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    gauche: {
        borderTopRightRadius: 20,
        width: '50%',
        backgroundColor: '#FEF0F0',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    gauche_text: {
        height: 65,
        paddingTop: 20,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#041578',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '700',
    },
    boton: {
        backgroundColor: '#F52424',
        height: 5,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    droite: {
        borderTopLeftRadius: 20,
        width: '50%',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderColor: '#767A90',
        borderBottomWidth: 1
    },
    droite_text: {
        height: 65,
        paddingTop: 20,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#3C4260',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '400',
    },
    sousPage: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        // paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
    graph: {
        borderColor: '#DEDFE4',
        backgroundColor: '#F5F5F7',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 4
    },
    Block_date: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 10,
        flexDirection: 'row',
        // gap: 10,
        marginBottom: 15,
        position: 'relative',
        alignItems: 'center'
    },
    fleche: {
        marginVertical: 15,
        padding: 10,
        backgroundColor: '#041578',
        borderRadius: 8,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Valeur: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 9,
        color: '#041578',
        textAlign: 'right'
    },
    Block_Valeur: {
        display: 'flex',
        flexDirection: 'column-reverse',
        marginBottom: 32.5,
        gap: 20,
    },
    Block_trait: {
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        position: 'absolute',
        left: 33,
        bottom: 0,
        marginBottom: 32.5
    },
    ordonne: {
        display: 'flex',
        flexDirection: 'row',

    },
    absicce: {
        height: 150,
        width: 250,
        borderBottomWidth: 2,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 10,
        justifyContent: 'space-around'
    },
    Block_mois: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        paddingLeft: 30,
        justifyContent: 'space-evenly'
    },
    mois: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 11,
        color: '#041578',
        textAlign: 'right',
        width: 100,
        textAlign: 'center'
    },
    Block_Partipant: {
        display: 'flex',
        gap: 15,
        padding: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#1E2448',

    },
    nombre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 20,
        color: '#1E2448'
    },

    ligne: {
        backgroundColor: '#000',
        width: 2,
        height: 150,
        marginLeft: 20
    },
    Trait: {
        backgroundColor: '#000',
        width: 15,
        height: 2
    },
    Block_Photo_participant: {
        display: 'flex',
        flexDirection: 'row',
    },
    Photo_participant: {
        width: 50,
        height: 50,
        position: 'relative',
    },
    button: {
        marginLeft: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: 200
    },
    btn_style_live_local: {
        marginLeft: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row-reverse',
        backgroundColor: '#F52424',
        borderRadius: 0
    },
});


module.exports = Event