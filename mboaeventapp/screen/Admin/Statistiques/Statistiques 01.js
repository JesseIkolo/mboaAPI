import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import Arrow_down from '../../../assets/img/arrow-down'
import Arrow_down1 from '../../../assets/img/arrow-down1'

import Graph from '../../components/Graph'
import ListeDeroulante from '../../components/listeDeroulante'

function Statistique({ navigation },) {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.page}>
                <View style={styles.haut}>
                    <View style={styles.gauche}>
                        <Text style={styles.gauche_text}>Évènements</Text>
                        <View style={styles.boton}></View>
                    </View>
                    <TouchableOpacity style={styles.droite} onPress={() => navigation.navigate('Statistiques_02')}>
                        <Text style={styles.droite_text}>Utilisateurs </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.droite} onPress={() => navigation.navigate('Event_Search_Events_10')}>
                        <Text style={styles.droite_text}>Finances</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.Titre}>Nombre d’évènement</Text>
                <View style={styles.graph}>
                    <View style={styles.date}>
                        <SafeAreaView style={{ flex: 1 }}>
                            <ListeDeroulante />
                        </SafeAreaView>
                    </View>
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
                                <Graph Haut={{ height: '60%', backgroundColor: '#F47A0D' }} text={'20%'} />
                                <Graph Haut={{ height: '48%', backgroundColor: '#11F40D' }} text={'48%'} />
                                <Graph Haut={{ height: '28%', backgroundColor: '#2D0DF4' }} text={'78%'} />
                                <Graph Haut={{ height: '74%', backgroundColor: '#F41B0D' }} text={'14%'} />
                                <Graph Haut={{ height: '40%', backgroundColor: '#F40DB4' }} text={'20%'} />
                                <Graph Haut={{ height: '55%', backgroundColor: '#8E0DF4' }} text={'45%'} />
                                <Graph Haut={{ height: '65%', backgroundColor: '#0DAFF4' }} text={'50%'} />
                            </View>

                            <View style={styles.Block_mois}>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Douala</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Yaoundé</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Edea</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Dschang</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Bafoussam</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Bamenda</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Mbouda</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.Titre}>Total des participations par catégories</Text>
                <View style={styles.graph}>
                    <View style={styles.Block_date}>
                        <View style={styles.date}>
                            <SafeAreaView style={{ flex: 1 }}>
                                <ListeDeroulante />
                            </SafeAreaView>
                        </View>
                    </View>
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
                                <Graph Haut={{ height: '60%', backgroundColor: '#F47A0D' }} text={'20%'} />
                                <Graph Haut={{ height: '40%', backgroundColor: '#11F40D' }} text={'48%'} />
                                <Graph Haut={{ height: '20%', backgroundColor: '#F40DB4' }} text={'78%'} />
                                <Graph Haut={{ height: '55%', backgroundColor: '#8E0DF4' }} text={'14%'} />
                                <Graph Haut={{ height: '85%', backgroundColor: '#0DAFF4' }} text={'14%'} />
                            </View>

                            <View style={styles.Block_mois}>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">By Night</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Santé</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Professionnel</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Restauration</Text>
                                <Text style={styles.mois} numberOfLines={1} ellipsizeMode="tail">Arts & Culture</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 16,
        paddingRight: 6,
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
    Titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 20,
        color: '#041578',
    },
    date: {
        display: 'flex',
        alignItems: 'flex-end',
        padding: 10,
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
        marginBottom: 15.5,
        gap: 20,
    },
    Block_trait: {
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        position: 'absolute',
        left: 33,
        bottom: 0,
        marginBottom: 15.5
    },
    ordonne: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 20

    },
    absicce: {
        height: 150,
        width: 350,
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
        paddingLeft: 10,
        justifyContent: 'space-evenly'
    },
    mois: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 11,
        color: '#041578',
        textAlign: 'right',
        width: 30
    },
    Block_Partipant: {
        display: 'flex',
        gap: 45,
        padding: 20,
        flexDirection: 'row'
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 11,
        color: '#041578'
    },
    nombre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 20,
        color: '#1E2448'
    },
    graph: {
        borderColor: '#DEDFE4',
        backgroundColor: '#F5F5F7',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 4,
        marginBottom: 20
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
    haut: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    gauche: {
        borderTopLeftRadius: 20,
        width: '30%',
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
        width: '35%',
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
});

module.exports = Statistique