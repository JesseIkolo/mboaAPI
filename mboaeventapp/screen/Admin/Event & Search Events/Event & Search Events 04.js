import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

import Musique from '../../../assets/img/Vector (2)'
import Basket from '../../../assets/img/2476154'
import Nouriture from '../../../assets/img/685352'
import FlecheBas from '../../../assets/img/FlecheBas'
import Free from '../../../assets/img/free'
import Paye from '../../../assets/img/paye'
import Calendar_edit from '../../../assets/img/calendar-edit'
import Group18294 from '../../../assets/img/Group 18294'
import Art from '../../../assets/img/art'
import All from '../../../assets/img/all'

import Bouton from '../../components/bouton'
import CustomTextInput from '../../components/input'

function Statistique({ navigation },) {


    const [text, setText] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    const listes = [
        'Par nom, de A à Z',
        'Par nom, de Z à A',
        'Plus récent au plus ancien',
        'Plus ancien au plus récent',
        'Par Ratio de participation',
        'Par nombre de vues',
        'Par nombre de likes'
    ]

    const handleTextChange = (newText) => {
        setText(newText);
        setShowSuggestions(newText.length > 0); // Afficher les suggestions si le texte n'est pas vide
    };

    const renderItem = ({ item }) => (
        <View style={styles.suggestionItem}>
            <Text>{item.title}</Text>
            <Text style={styles.suggestionContent}>{item.content}</Text>
        </View>
    );

    const toggleFilters = () => {
        setShowFilters(!showFilters); // Toggle filter visibility on click
    };

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView style={styles.page}>
                    <View>
                        <Text style={[styles.texteBold, { textAlign: 'center', fontSize: 20 }]}>Filtre</Text>
                    </View>
                    <View style={styles.categorie}>
                        <Text style={styles.titre}>Toutes les catégories</Text>

                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
                            // backgroundColor: 'red',
                        }}>
                            <View style={styles.categorie_menu_actif}>
                                <Musique />
                                <Text style={styles.categorie_menu_titre_actif}>Musique</Text>
                            </View>
                            <View style={styles.categorie_menu}>
                                <Basket />
                                <Text style={styles.categorie_menu_titre}>Sports</Text>
                            </View>
                            <View style={styles.categorie_menu}>
                                <Nouriture />
                                <Text style={styles.categorie_menu_titre}>Nourritures</Text>
                            </View>
                            <View style={styles.categorie_menu}>
                                <Art />
                                <Text style={styles.categorie_menu_titre}>Art</Text>
                            </View>
                            <View style={styles.categorie_menu}>
                                <All />
                                <Text style={styles.categorie_menu_titre}>Tout</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.titre}>Ville</Text>
                        <CustomTextInput placeholder='Ex: Douala' />
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.titre}>Quartier</Text>
                        <View style={styles.pickerContainer}>
                            <TouchableOpacity onPress={toggleFilters}>
                                <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F5F5F6', padding: 16, gap: 16, borderRadius: 8, justifyContent: 'space-between' }}>
                                    <Text style={[styles.texteSimple, { fontSize: 14, color: '#767A90' }]}>Selectionner un quartier</Text>
                                    <FlecheBas />
                                </View>
                            </TouchableOpacity>
                        </View>
                        {showFilters && ( // Render filter dropdown only when visible
                            <View style={styles.filtersList}>
                                {listes.map((liste) => (
                                    <Text key={liste} style={styles.filterText}>{liste}</Text>
                                ))}
                            </View>
                        )}
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.titre}>Type d’évènement</Text>
                        <View style={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
                            <View style={styles.btn_actif}>
                                <Free />
                                <Text style={[styles.texteSimple, { color: '#E6E8F2', fontSize: 18 }]}>Gratuit</Text>
                            </View>
                            <View style={styles.btn_not_actif}>
                                <Paye />
                                <Text style={[styles.texteSimple, { color: '#041578', fontSize: 18 }]}>Payant</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.column}>
                        <Text style={styles.titre}>Type d’évènement</Text>
                        <View style={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
                            <View style={styles.btn_actif}>
                                <Text style={[styles.texteSimple, { color: '#E6E8F2', fontSize: 18 }]}>Aujourd’hui</Text>
                            </View>
                            <View style={styles.btn_not_actif}>
                                <Text style={[styles.texteSimple, { color: '#041578', fontSize: 18 }]}>Demain</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
                            <View style={styles.btn_not_actif}>
                                <Text style={[styles.texteSimple, { color: '#041578', fontSize: 18 }]}>Ce Weekend</Text>
                            </View>
                            <View style={styles.btn_not_actif}>
                                <Text style={[styles.texteSimple, { color: '#041578', fontSize: 18 }]}>Autre</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <View style={styles.horaires}>
                            <Text style={styles.horaires_texte}>Date de début</Text>
                            <Calendar_edit />
                        </View>
                        <View style={styles.horaires}>
                            <Text style={styles.horaires_texte}>Date de fin</Text>
                            <Calendar_edit />
                        </View>
                    </View>
                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                            <Text style={styles.titre}>Tranche de prix</Text>
                            <Text style={[styles.texteBold, { fontSize: 16 }]}>20,000-150,000</Text>
                        </View>
                        <View style={{ height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: '90%', height: 5, backgroundColor: '#04157820', borderRadius: 30 }}></View>
                            <View style={{ width: '50%', height: 5, backgroundColor: '#041578', borderRadius: 30, position: 'absolute' }}></View>
                            <View style={{ paddingVertical: 20, paddingHorizontal: 15, borderWidth: 2, borderColor: '#041578', borderRadius: 10, backgroundColor: '#fff', position: 'absolute', left: '20%' }}>
                                <Group18294 />
                            </View>
                            <View style={{ paddingVertical: 20, paddingHorizontal: 15, borderWidth: 2, borderColor: '#041578', borderRadius: 10, backgroundColor: '#fff', position: 'absolute', right: '20%' }}>
                                <Group18294 />
                            </View>
                        </View>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Create3')}>
                            <Bouton block={styles.botton_back} text={styles.botton_text} texte={'Annuler'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Event_Search_Events_05')} style={{ width: '45%' }}>
                            <Bouton texte={'Appliquer'} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView >
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 26,
        gap: 26,
        backgroundColor: '#fff',
        height: '100%'
        // alignItems: 'center',
    },
    texteSimple: {
        fontWeight: '400',
        fontSize: 24,
        color: '#041578'
    },
    texteBold: {
        fontWeight: '700',
        fontSize: 24,
        color: '#041578'
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
        marginRight: 12
    },
    categorie_menu_titre: {
        color: '#041578'
    },
    input: {
        height: 50,
        width: '100%',
        borderRadius: 8, // Correction: borderRadius était défini deux fois
        padding: 16,
        fontSize: 16,
        backgroundColor: '#F5F5F6',
    },
    filtersList: {
        elevation: 4,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: '100%',
        left: 0,
        top: 0,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    filterText: {
        color: '#767A90',
        fontSize: 14
    },
    btn_actif: {
        backgroundColor: '#041578',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: '50%',
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_not_actif: {
        backgroundColor: '#E6E8F2',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: '50%',
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    horaires: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F6',
        width: '49%',
        height: 50,
        padding: 8,
        borderRadius: 8
    },
    horaires_date: {
        width: 220,
    },
    horaires_texte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21.29,
        textAlign: 'left',
        color: '#767A90'
    },
    botton_back: {
        backgroundColor: '#E6E8F2',
        width: 180
    },
    botton_text: {
        color: '#041578'
    },
});
module.exports = Statistique