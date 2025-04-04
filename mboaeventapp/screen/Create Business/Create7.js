import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, StatusBar } from 'react-native';
import React, { useState } from 'react';


import Musique from '../../assets/img/Vector (2)'
import Camera from '../../assets/img/camera'
import Call from '../../assets/img/call'
import Send_2 from '../../assets/img/send-2'
import Facebook from '../../assets/img/Facebook'
import Instagram from '../../assets/img/Instagram'
import Linkedin from '../../assets/img/Linkedin'
import Arrow_left from '../../assets/img/arrow-left'

import Bouton from '../components/bouton'
import Etapes from '../components/etapes'
import HoraireEnable from '../components/horaireEnable'
import Map from '../components/map'
import Animation from '../components/animation'

function Create7({ navigation },) {

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
                <View style={{
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                }}>
                    <Etapes numero={'1 sur 3'} titre={'Aperçu'} sousTitre={'Suivant : Finalisation'} />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Create6')} style={{ width: '45%' }}>
                        <Bouton block={styles.botton_back} text={styles.botton_text} texte={'Précedent'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Create8')} style={{ width: '45%' }}>
                        <Bouton block={styles.botton_back_vert} texte={'Validé ✓'} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image
                        source={require('../../assets/png/Frame 33932.png')}
                        style={{
                            position: 'relative',
                            width: '100%'
                        }}
                    />
                    <Image
                        source={require('../../assets/png/Oval.png')}
                        style={{
                            width: 100,
                            resizeMode: 'contain',
                            bottom: -30,
                            left: '38%',
                            position: 'absolute',
                        }}
                    />
                    <View style={{
                        width: 32,
                        padding: 8,
                        resizeMode: 'contain',
                        top: 15,
                        left: '55%',
                        backgroundColor: '#041578',
                        borderRadius: 20
                    }} >
                        <Camera />
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 30, }}>
                    <Text style={styles.nomClub}>Club O</Text>
                    <Text style={styles.sous_nomClub}>@ClubO</Text>
                </View>
                <View style={styles.sousPage}>
                    <View style={styles.categories_evenement}>
                        <Text style={styles.categories_evenement_text}>Catégorie d’évènement:</Text>
                        <View style={styles.categories_evenement_Choisie}>
                            <Musique />
                            <Text style={styles.categories_evenement_Choisie_text}>Musique</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.titre}>Infos de contact</Text>
                        <View style={styles.info_block}>
                            <View style={styles.callBLock}>
                                <Call />
                            </View>
                            <Text style={styles.callTexte}>+237 695 754 145</Text>
                        </View>
                        <View style={styles.info_block}>
                            <View style={styles.callBLock}>
                                <Send_2 />
                            </View>
                            <Text style={styles.callTexte}>info@clubo.com</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.titre}>Description</Text>
                        <View style={styles.block_Desciption}>
                            <Text style={styles.Desciption}>
                                Nulla venenatis eget dui risus adipiscing habitasse volutpat. Nulla mauris libero arcu condimentum urna nec amet ut. Sagittis dictum lacus venenatis ante. Ipsum fermentum augue magna sagittis blandit lectus sed penatibus. Commodo at vestibulum leo tortor volutpat. Lobortis nec nunc etiam nullam. Eleifend lectus dignissim in sed sem sed gravida adipiscing feugiat. Fermentum in eget sit tempus sed egestas.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <HoraireEnable jour={'Lundi'} />
                        <HoraireEnable jour={'Mardi'} />
                        <HoraireEnable jour={'Mercredi'} />
                        <HoraireEnable jour={'Jeudi'} />
                        <HoraireEnable jour={'Vendredi'} />
                        <View style={styles.horaires_view}>
                            <View style={[styles.horaires, styles.horaires_date]}>
                                <Text style={styles.titre}>Samedi</Text>
                            </View>
                            <View style={[styles.horaires, styles.horaires_close]}>
                                <Text style={styles.horaires_texte}>Fermé</Text>
                            </View>
                        </View>
                        <View style={styles.horaires_view}>
                            <View style={[styles.horaires, styles.horaires_date]}>
                                <Text style={styles.titre}>Dimanche</Text>
                            </View>
                            <View style={[styles.horaires, styles.horaires_close]}>
                                <Text style={styles.horaires_texte}>Fermé</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.titre_Bold}>Carte</Text>
                        <Map />
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.titre_Bold}>Catégorie d'évènement</Text>

                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
                            // backgroundColor: 'red',
                        }}>
                            <Image
                                source={require('../../assets/png/image 14.png')}
                                style={styles.menu}
                            />
                            <Image
                                source={require('../../assets/png/image 15.png')}
                                style={styles.menu}
                            />
                            <Image
                                source={require('../../assets/png/image 16.png')}
                                style={styles.menu}
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.titre_Bold}>Historiques des Photos</Text>

                        <View style={styles.block_Historique_Photo}>
                            <Image
                                source={require('../../assets/png/Image (4).png')}
                                style={styles.Historique_Photo}
                            />
                            <Image
                                source={require('../../assets/png/Image (5).png')}
                                style={styles.Historique_Photo}
                            />
                            <Image
                                source={require('../../assets/png/Image (6).png')}
                                style={styles.Historique_Photo}
                            />
                            <TouchableOpacity style={styles.Historique_Photo_More}>
                                <Image
                                    source={require('../../assets/png/Image (6).png')}
                                    style={[styles.Historique_Photo, { width: '100%' }]}
                                />
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>+ 22</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.titre}>Liens Sociaux</Text>
                        <View style={[styles.liens, { marginBottom: 50 }]}>
                            <Facebook />
                            <Linkedin />
                            <Instagram />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        // paddingHorizontal: 16,
        paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff'
    },
    sousPage: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 26,
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
        paddingHorizontal: 16
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
        width: 325
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
        color: '#1E2448'
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
    botton_back_vert: {
        // width: 180,
        backgroundColor: '#27AE60',
    },
    nomClub: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 20,
        fontWeight: '700',
        color: '#041578',
    },
    sous_nomClub: {
        color: '#767A90',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400'
    },
    categories_evenement: {
        // paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16
    },
    categories_evenement_text: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '400'
    },
    categories_evenement_Choisie: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 30,
        paddingVertical: 16,
        backgroundColor: '#041578',
        borderRadius: 50,
        alignItems: 'center',
    },
    categories_evenement_Choisie_text: {
        color: '#E6E8F2',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '400'
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
    },
    info_block: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        paddingVertical: 10
    },
    callBLock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#FEE9E9',
        padding: 10
    },
    callTexte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: "700",
        fontSize: 14,
    },
    block_Desciption: {
        display: 'flex',
        paddingHorizontal: 8,
        paddingVertical: 16,
        backgroundColor: '#F5F5F6',
        borderBottomColor: '#041578',
        borderBottomWidth: 1,
        borderRadius: 10,
    },
    Desciption: {
        color: '#767A90',
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
        width: 150,
        height: 50,
        padding: 8,
        borderRadius: 8
    },
    horaires_date: {
        width: '50%',
    },
    horaires_close: {
        backgroundColor: '#FEE9E9',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },
    horaires_texte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21.29,
        textAlign: 'left',
        color: '#767A90'
    },
    titre_Bold: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#041578'
    },
    menu: {
        width: 120,
        height: 120,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#B1B3BF',
        resizeMode: 'cover',
        marginRight: 20
    },
    block_Historique_Photo: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    Historique_Photo: {
        width: '48%',
        height: 120,
        borderRadius: 8,
        resizeMode: 'cover'
    },
    Historique_Photo_More: {
        position: 'relative',
        width: '48%',
        height: 120,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Calque noir semi-transparent
        justifyContent: 'center', // Centrer le texte verticalement
        alignItems: 'center', // Centrer le texte horizontalement
        borderRadius: 10, // Optionnel : arrondir les coins du calque
    },
    overlayText: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 48,
        color: '#fff'
    },
    liens: {
        display: 'flex',
        flexDirection: 'row',
    }
});

module.exports = Create7