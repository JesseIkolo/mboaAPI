import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import Inbox_1 from '../../assets/img/Inbox_1'
import Musique from '../../assets/img/Vector (2)'
import Arrow_left from '../../assets/img/arrow-left'
import Bookmark from '../../assets/img/bookmark'
import Ellipse from '../../assets/img/Ellipse 1 (1)'
import Frame_33939 from '../../assets/img/Frame 33939'
import Frame_33937 from '../../assets/img/Frame 33937'

import EventCardVerticalCostum from '../components/EventCardVerticalCostum'
import Bouton from '../components/bouton'
import Trie from '../components/trie'
import Slide from '../components/slide'

function Event({ navigation },) {
    const [selectedValue, setSelectedValue] = useState('Selectionné');

    const options = [
        { label: 'Selectionné', value: 'Selectionné' },
        // { label: 'Selectionner?', value: 'Selectionner?' },
    ];

    return (
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
                    <View style={styles.gauche}>
                        <Text style={styles.gauche_text}>Détails</Text>
                        <View style={styles.boton}></View>
                    </View>

                    <TouchableOpacity style={styles.droite} onPress={() => navigation.navigate('Event_Search_Events_10')}>
                        <Text style={styles.droite_text}>Statistiques</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.haut2}>
                    <View style={styles.block_logo}>
                        <Image
                            source={require('../../assets/png/Oval (3).png')}
                            style={styles.Photo_Profile}
                        />
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Text>par </Text>
                                <Text style={styles.titre_Bold}>Club O</Text>
                            </View>
                            <Text style={styles.timer}>Il y a 3min</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.suivre}>+   Suivre</Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#DEDFE4',
                    height: 1,
                    width: '90%',
                    marginLeft: '5%'
                }}></View>
                <View style={styles.sousPage}>
                    <View style={styles.categorie}>
                        <View style={styles.categorie_menu_actif}>
                            <Musique />
                            <Text style={styles.categorie_menu_titre_actif}>Musique</Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.titre}>Concert de Maalhox le Viber</Text>
                        <View style={styles.row}>
                            <Text style={styles.place}>250 places</Text>
                            <Ellipse />
                            <Text style={styles.lieu}>Au PaPoSy de Yaoundé</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.prix}>25,000 XAF</Text>
                            <View style={styles.Block_Photo_participant}>
                                <Image
                                    source={require('../../assets/png/Oval (3).png')}
                                    style={[styles.Photo_participant]}
                                />
                                <Image
                                    source={require('../../assets/png/Oval (4).png')}
                                    style={[styles.Photo_participant, { right: 10 }]}
                                />
                                <Image
                                    source={require('../../assets/png/Oval Copy 4.png')}
                                    style={[styles.Photo_participant, { right: 20 }]}
                                />
                            </View>
                            <Text style={{ position: 'relative', right: 22 }}>+ 20 personnes participent</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            fontFamily: 'TitilliumWeb-Regular',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#041578'
                        }}>Description</Text>
                        <Text style={{
                            fontFamily: 'TitilliumWeb-Regular',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#3C4260'
                        }}>Arcu in elit cursus volutpat massa vulputate. Nisl sollicitudin curabitur pharetra id porta sollicitudin aliquet. Rutrum amet volutpat adipiscing gravida a elementum aenean. Vitae sed convallis
                            <Text style={{
                                fontFamily: 'TitilliumWeb-Regular',
                                fontWeight: '400',
                                fontSize: 12,
                                color: '#3C4260'
                            }}>
                                ...Voir Plus
                            </Text>
                        </Text>
                    </View>
                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 10 }}>
                            <Frame_33937 />
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <Text style={{
                                    fontFamily: 'TitilliumWeb-Regular',
                                    fontWeight: '700',
                                    fontSize: 14,
                                    color: '#020931'
                                }}>10 Juin 2023 - 12 Juillet 2023</Text>
                                <Text style={{
                                    fontFamily: 'TitilliumWeb-Regular',
                                    fontWeight: '400',
                                    fontSize: 12,
                                    color: '#3C4260'
                                }}>De 22h - 7h</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 10 }}>
                            <Frame_33939 />
                            <View style={{ display: 'flex', flexDirection: 'column' }}>
                                <Text style={{
                                    fontFamily: 'TitilliumWeb-Regular',
                                    fontWeight: '700',
                                    fontSize: 14,
                                    color: '#020931'
                                }}>
                                    Yaoundé Cameroun
                                </Text>
                                <Text style={{
                                    fontFamily: 'TitilliumWeb-Regular',
                                    fontWeight: '400',
                                    fontSize: 12,
                                    color: '#3C4260'
                                }}>
                                    Au PaPoSy de Yaoundé
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
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
        // alignItems: 'center',
        gap: 16,
        justifyContent: 'flex-start',
        height: '100%',
        // padding: 20,
        marginHorizontal: 20,
        elevation: 20,
        width: '90%',
        backgroundColor: '#fff',
        position: 'relative',
        top: -40,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
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
        borderTopLeftRadius: 20,
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
    haut2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        width: '100%',
    },
    block_logo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    Photo_Profile: {
        borderRadius: 50,
        width: 50,
        height: 50
    },
    Photo: {
        height: 200,
        width: '100%'
    },
    Photo_Block: {
        resizeMode: 'cover'
    },
    suivre: {
        backgroundColor: '#FEE9E9',
        padding: 8,
        borderRadius: 4,
        color: '#F52424',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 12,
        fontWeight: '400',
    },
    categorie_menu_actif: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#041578',
        borderRadius: 20,
        gap: 8,
        alignItems: 'center',
        marginRight: 12
    },
    categorie_menu_titre_actif: {
        color: '#fff'
    },
    categorie: {
        width: 125
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
    info: {
        // paddingHorizontal: 16,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 16,
        color: '#041578'
    },
    place: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 14,
        color: '#3C4260'
    },
    lieu: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#3C4260'
    },
    prix: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#020931',
        backgroundColor: '#FFDE00',
        padding: 10,
    },
    Block_Photo_participant: {
        display: 'flex',
        flexDirection: 'row'
    },
    Photo_participant: {
        width: 30,
        height: 30,
        position: 'relative',
    }
});


module.exports = Event