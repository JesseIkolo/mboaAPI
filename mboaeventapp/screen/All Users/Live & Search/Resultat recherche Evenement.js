import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';

import Camera from '../../../assets/img/camera'
import Add_event_outline from '../../../assets/img/add-event1'
import Chart from '../../../assets/img/chart'
import Clipboard_text from '../../../assets/img/clipboard-text'
import Profile_2user from '../../../assets/img/profile-2user'
import User_tag from '../../../assets/img/user-tag'
import User_tag1 from '../../../assets/img/user-tag1'
import message_2 from '../../../assets/img/message-3'
import Button_1 from '../../../assets/img/Button (1)'
import Button1 from '../../../assets/img/Button'
import Sort from '../../../assets/img/sort'
import Message_text from '../../../assets/img/message-text1'
import Filtre1 from '../../../assets/img/filtre'

import Frame from '../../components/Frame 34098'
import Filtre from '../../components/fiiltre'
import EventCardVerticalCostum from '../../components/EventCardVerticalCostum'

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
                            style={[styles.input, { width: '90%' }]}
                            placeholder="Rechercher par nom ..."
                        />
                        <Text>X</Text>
                    </View>
                    <Button_1 />
                </View>
                <View style={styles.haut}>
                    <View style={styles.gauche}>
                        <Text style={styles.gauche_text}>Évènements</Text>
                        <View style={styles.boton}></View>
                    </View>
                    <TouchableOpacity style={styles.droite} onPress={() => navigation.navigate('Statistiques_02')}>
                        <Text style={styles.droite_text}>Partenaires </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.droite} onPress={() => navigation.navigate('Event_Search_Events_10')}>
                        <Text style={styles.droite_text}>Personnes</Text>
                    </TouchableOpacity>
                </View>
                <Filtre />
                <EventCardVerticalCostum
                    pp={require('../../../assets/png/Oval (3).png')}
                    nom={'Club O'}
                    Nom_style={styles.titre_Bold}
                    image={require('../../../assets/png/Image (8).png')}
                    like={'+23 J’aime'}
                    commentaire={'+58 Commentaires'}
                    send={'+54M Partages'}
                    action={() => navigation.navigate('Events_Details')}
                    timer={'Il y a 3min'}
                    titre={'Concert de Maalhox le Viber'}
                    lieu={'Au PaPoSy de Yaoundé'}
                    place={'250'}
                    prix={'25,000'}
                    participant={'20'}
                    image1={require('../../../assets/png/Oval (3).png')}
                    image2={require('../../../assets/png/Oval (4).png')}
                    image3={require('../../../assets/png/Oval Copy 4.png')}
                    show_date={styles.show_date}
                    show_live={styles.show_live}
                />
                <EventCardVerticalCostum
                    pp={require('../../../assets/png/Oval (3).png')}
                    nom={'Club O'}
                    Nom_style={styles.titre_Bold}
                    image={require('../../../assets/png/Image (8).png')}
                    like={'+23 J’aime'}
                    commentaire={'+58 Commentaires'}
                    send={'+54M Partages'}
                    action={() => navigation.navigate('Events_Details')}
                    timer={'Il y a 3min'}
                    titre={'Concert de Maalhox le Viber'}
                    lieu={'Au PaPoSy de Yaoundé'}
                    place={'250'}
                    prix={'25,000'}
                    participant={'20'}
                    image1={require('../../../assets/png/Oval (3).png')}
                    image2={require('../../../assets/png/Oval (4).png')}
                    image3={require('../../../assets/png/Oval Copy 4.png')}
                    show_date={styles.show_date}
                    show_live={styles.show_live}
                />
            </SafeAreaView>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 36,
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