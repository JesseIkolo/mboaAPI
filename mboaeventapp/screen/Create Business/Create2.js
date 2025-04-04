import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React from 'react';

import Nouriture from '../../assets/img/685352'
import Coeur from '../../assets/img/fluent-mdl2_health-solid'
import Art from '../../assets/img/mdi_art'
import Proffesionel from '../../assets/img/material-symbols_business-center'
import Lune from '../../assets/img/material-symbols_nights-stay'
import Arrow_left from '../../assets/img/arrow-left'

import Bouton from '../components/bouton'
import Categiries from '../components/categiries'
import Etapes from '../components/etapes'

function Create2({ navigation },) {
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
                    <Etapes numero={'1 sur 3'} titre={'Catégorie de business'} sousTitre={'Suivant : Informations générales'} />
                    <View style={styles.List_categorie}>
                        <View style={styles.categorie_menu}>
                            <Text style={styles.categorie_menu_titre}>Tout</Text>
                        </View>
                        <Categiries
                            BasketComponent={Lune}
                            title="By Night"
                            menuStyle={styles.categorie_menu_actif} // Exemple de style personnalisé
                            titleStyle={styles.categorie_menu_titre_actif} // Exemple de style personnalisé
                        />
                        <Categiries
                            BasketComponent={Coeur}
                            title="Santé"
                            menuStyle={styles.categorie_menu} // Exemple de style personnalisé
                            titleStyle={styles.categorie_menu_titre} // Exemple de style personnalisé
                        />
                        <Categiries
                            BasketComponent={Proffesionel}
                            title="Professionnel"
                            menuStyle={styles.categorie_menu} // Exemple de style personnalisé
                            titleStyle={styles.categorie_menu_titre} // Exemple de style personnalisé
                        />
                        <Categiries
                            BasketComponent={Nouriture}
                            title="Restauration"
                            menuStyle={styles.categorie_menu} // Exemple de style personnalisé
                            titleStyle={styles.categorie_menu_titre} // Exemple de style personnalisé
                        />
                        <Categiries
                            BasketComponent={Art}
                            title="Arts & Culture"
                            menuStyle={styles.categorie_menu} // Exemple de style personnalisé
                            titleStyle={styles.categorie_menu_titre} // Exemple de style personnalisé
                        />
                    </View>
                </View>
                <View style={styles.column}>
                    <TouchableOpacity onPress={() => navigation.navigate('Create3')}>
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
    categorie: {
        paddingTop: 26,
        paddingBottom: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
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
    categorie_menu: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#E6E8F2',
        borderRadius: 20,
        gap: 8,
        alignItems: 'center',
        marginRight: 12,
    },
    categorie_menu_titre: {
        color: '#041578',
    },
    List_categorie: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 12,
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginTop: 36
    },
});

module.exports = Create2