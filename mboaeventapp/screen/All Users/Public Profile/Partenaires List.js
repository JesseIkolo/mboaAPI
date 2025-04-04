import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

import Button_1 from '../../../assets/img/Button (1)'
import Cart from '../../../assets/img/cart1'
import Liste from '../../../assets/img/liste1'

import Frame from '../../components/Frame 34098'
import Filtre from '../../components/fiiltre'
import EventList from '../../components/EventList'
import Partcipant from '../../components/partcipant'
import Bouton from '../../components/bouton1'

function Statistique({ navigation },) {


    const [text, setText] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([
        { id: 1, title: 'Option 1' },
        { id: 2, title: 'Option 2' },
        { id: 3, title: 'Option 3' },
    ]);

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

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.page}>
                <View style={styles.haut}>
                    <View style={styles.gauche}>
                        <Text style={styles.gauche_text}>Tous les Partenaires</Text>
                        <View style={styles.boton}></View>
                    </View>
                    <TouchableOpacity style={styles.droite} onPress={() => navigation.navigate('Event_Search_Events_10')}>
                        <Text style={styles.droite_text}>Suivis en Commun</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: 10, justifyContent: 'space-between' }}>
                    <View style={[
                        showSuggestions && styles.inputFocused, {
                            width: '85%',
                            backgroundColor: '#E6E8F2',
                            borderRadius: 8,
                            maxHeight: 50,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }]}>
                        <TextInput
                            value={text}
                            onChangeText={handleTextChange}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setShowSuggestions(false)}
                            style={[styles.input, { width: '100%' }]}
                            placeholder="Rechercher dans le réseau de Eric Fotso ..."
                        />
                        {/* <Text>X</Text> */}
                    </View>
                    <Button_1 />
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('3')} >
                        <Bouton block={styles.botton_back} text={styles.botton_text} texte={'Vue en Carte'} ImageComposent={Cart} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Create4')} style={{ width: '45%' }}>
                        <Bouton texte={'Vue en Liste'} ImageComposent={Liste} block={{
                            marginBottom: 0,
                            gap: 10,
                            width: 150
                        }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.listPartcipant}>

                    <EventList
                        pp={require('../../../assets/png/Oval (3).png')}
                        nom={'Club O'}
                        Nom_style={styles.titre_Bold}
                        image={require('../../../assets/png/Image (8).png')}
                        like={'+23 J’aime'}
                        commentaire={'+58 Commentaires'}
                        send={'+54M Partages'}
                        show_details={styles.show_date}
                    />
                    <EventList
                        pp={require('../../../assets/png/Oval (3).png')}
                        nom={'Opium'}
                        image={require('../../../assets/png/Image (9).png')}
                        like={'+23 J’aime'}
                        commentaire={'+58 Commentaires'}
                        send={'+54M Partages'}
                        show_not_details={styles.show_date}
                    />
                </View>

            </SafeAreaView>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: 36,
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
    frame: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        gap: 16,
        paddingBottom: 20,
    },
    input: {
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: '75%',
        maxHeight: 60
    },
    btn_style_live: {
        display: 'none'
    },
    inputFocused: {
        backgroundColor: '#F5F5F6',
        borderColor: '#041578', // Change la couleur de la bordure lors du focus
        borderWidth: 1
    },
    suggestionsList: {
        marginTop: 70,
        zIndex: 2,
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%'
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    suggestionContent: {
        fontSize: 12,
        color: 'gray',
    },
    bouton_block: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6EAFE',
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 26,
        gap: 6,
        borderWidth: 2,
        borderColor: '#041578'
    },
    bouton_text: {
        color: '#041578',
        fontWeight: '700',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
    },
    show_date: {
        display: 'none'
    },
    show_live: {
        display: 'flex'
    }, haut: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    gauche: {
        // borderTopLeftRadius: 20,
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
    style_suivi: {
        backgroundColor: '#EAFAF1',
        padding: 8,
        borderRadius: 4,
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#219653'
    },
    style_suivi_non: {
        backgroundColor: '#DEDFE4',
        padding: 8,
        borderRadius: 4,
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 12,
        color: '#585D77'
    },
    listPartcipant: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
    },
    botton_back: {
        backgroundColor: '#E6E8F2',
        marginBottom: 0,
        gap: 10,
        width: 150
    },
    botton_text: {
        color: '#041578',
    }
});
module.exports = Statistique