import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import React, { useState } from 'react';

import Arrow_down from '../../assets/img/arrow-down'
import Arrow_down1 from '../../assets/img/arrow-down1'
import Arrow_left from '../../assets/img/arrow-left'

import Graph from '../components/Graph'
import ListeDeroulante from '../components/listeDeroulante'

function Statistique({ navigation },) {

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
                }}>Toutes les Statistiques</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <Text style={styles.Titre}>Statistiques par année</Text>
                <View style={styles.graph}>
                    <View style={styles.date}>
                        <SafeAreaView style={{ flex: 1 }}>
                            <ListeDeroulante />
                        </SafeAreaView>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.ordonne}>
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
                                <Graph Haut={{ height: '20%', }} Bas={{ height: '50%', }} text={'20%'} />
                                <Graph Haut={{ height: '48%', }} Bas={{ height: '30%', }} text={'48%'} />
                                <Graph Haut={{ height: '78%', }} Bas={{ height: '10%', }} text={'78%'} />
                                <Graph Haut={{ height: '14%', }} Bas={{ height: '85%', }} text={'14%'} />
                                <Graph Haut={{ height: '20%', }} Bas={{ height: '40%', }} text={'20%'} />
                                <Graph Haut={{ height: '45%', }} Bas={{ height: '32%', }} text={'45%'} />
                                <Graph Haut={{ height: '12%', }} Bas={{ height: '55%', }} text={'12%'} />
                                <Graph Haut={{ height: '58%', }} Bas={{ height: '30%', }} text={'78%'} />
                                <Graph Haut={{ height: '01%', }} Bas={{ height: '55%', }} text={'01%'} />
                                <Graph Haut={{ height: '08%', }} Bas={{ height: '50%', }} text={'08%'} />
                                <Graph Haut={{ height: '35%', }} Bas={{ height: '25%', }} text={'77%'} />
                                <Graph Haut={{ height: '45%', }} Bas={{ height: '45%', }} text={'50%'} />
                            </View>

                            <View style={styles.Block_mois}>
                                <Text style={styles.mois}>Jan</Text>
                                <Text style={styles.mois}>Fev</Text>
                                <Text style={styles.mois}>Mar</Text>
                                <Text style={styles.mois}>Avr</Text>
                                <Text style={styles.mois}>Mai</Text>
                                <Text style={styles.mois}>Jun</Text>
                                <Text style={styles.mois}>Jui</Text>
                                <Text style={styles.mois}>Aou</Text>
                                <Text style={styles.mois}>Sep</Text>
                                <Text style={styles.mois}>Oct</Text>
                                <Text style={styles.mois}>Nov</Text>
                                <Text style={styles.mois}>Dec</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.Block_Partipant}>
                        <View>
                            <Text style={styles.titre}>Participation présumées</Text>
                            <Text style={styles.nombre}>23</Text>
                        </View>
                        <View>
                            <Text style={[styles.titre, { color: '#F47A0D' }]}>Participation réelle</Text>
                            <Text style={styles.nombre}>23</Text>
                        </View>
                        <View>
                            <Text style={[styles.titre, { color: '#9B51E0' }]}>Ratio moyen</Text>
                            <Text style={styles.nombre}>45%</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.Titre}>Statistiques par année</Text>
                <View style={styles.graph}>
                    <View style={styles.Block_date}>
                        <View style={styles.fleche}>
                            <Arrow_down />
                        </View>
                        <View style={styles.date}>
                            <SafeAreaView style={{ flex: 1 }}>
                                <ListeDeroulante />
                            </SafeAreaView>
                        </View>
                        <View style={styles.fleche}>
                            <Arrow_down1 />
                        </View>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.ordonne}>
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
                                <Graph Haut={{ height: '20%', }} Bas={{ height: '50%', }} text={'20%'} />
                                <Graph Haut={{ height: '48%', }} Bas={{ height: '30%', }} text={'48%'} />
                                <Graph Haut={{ height: '78%', }} Bas={{ height: '10%', }} text={'78%'} />
                                <Graph Haut={{ height: '14%', }} Bas={{ height: '85%', }} text={'14%'} />
                            </View>

                            <View style={[styles.Block_mois, {
                                width: '95%',
                                paddingLeft: '12%',
                            }]}>
                                <Text style={styles.mois}>12 Jan</Text>
                                <Text style={styles.mois}>18 Jui</Text>
                                <Text style={styles.mois}>21 Jan</Text>
                                <Text style={styles.mois}>31 Jan</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.Block_Partipant}>
                        <View>
                            <Text style={styles.titre}>Participation présumées</Text>
                            <Text style={styles.nombre}>23</Text>
                        </View>
                        <View>
                            <Text style={[styles.titre, { color: '#F47A0D' }]}>Participation réelle</Text>
                            <Text style={styles.nombre}>23</Text>
                        </View>
                        <View>
                            <Text style={[styles.titre, { color: '#9B51E0' }]}>Ratio moyen</Text>
                            <Text style={styles.nombre}>45%</Text>
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
        paddingLeft: 16,
        paddingRight: 6,
        paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff',
        marginBottom: 60
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
        gap: 50,
        width: '60%',
        paddingLeft: '12%',
        justifyContent: 'space-evenly'
    },
    mois: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 11,
        color: '#041578',
        textAlign: 'right'
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
    }
});

module.exports = Statistique