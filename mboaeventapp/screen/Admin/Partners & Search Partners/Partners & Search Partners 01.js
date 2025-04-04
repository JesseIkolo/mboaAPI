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
                <Text style={{
                    fontFamily: 'TitilliumWeb-Regular',
                    fontWeight: '700',
                    fontSize: 16
                }}>
                    Rechercher un évènement, ou scroller pour parcourir
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', gap: 10 }}>
                    <TextInput
                        value={text}
                        onChangeText={handleTextChange}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        style={[styles.input, showSuggestions && styles.inputFocused]}
                        placeholder="Rechercher par nom ..."
                    />
                    <Button_1 />
                    <Sort />
                </View>
                <Filtre />
                <TouchableOpacity onPress={() => navigation.navigate('Create8')}>
                    <View style={[styles.bouton_block]}>
                        <Text style={[styles.bouton_text]}>Envoyer un message à tous</Text>
                        <Message_text />
                    </View>
                </TouchableOpacity>
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
                    show_details={styles.show_date}
                    show_live={styles.show_live}
                />
                <EventCardVerticalCostum
                    pp={require('../../../assets/png/Oval (3).png')}
                    nom={'Opium'}
                    Nom_style={styles.titre_Bold}
                    image={require('../../../assets/png/Image (9).png')}
                    like={'+23 J’aime'}
                    commentaire={'+58 Commentaires'}
                    send={'+54M Partages'}
                    container1={styles.container1}
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
                    show_details={styles.show_date}
                />
                {/* <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        // alignItems: 'center',
                        gap: 16,
                        justifyContent: 'flex-start',
                        height: '100%',
                        marginBottom: 20
                    }}>
                        <EventCardVerticalCostum
                            pp={require('../../../assets/png/Oval (3).png')}
                            nom={'Club O'}
                            Nom_style={styles.titre_Bold}
                            image={require('../../../assets/png/Image.png')}
                            like={'+23 J’aime'}
                            commentaire={'+58 Commentaires'}
                            send={'+54M Partages'}
                            action={() => navigation.navigate('Events_Details')}
                            timer={'Il y a 3min'}
                            titre={'Ko-C, nouvelle tournée'}
                            lieu={'Au PaPoSy de Yaoundé'}
                            place={'250'}
                            prix={'25,000'}
                            participant={'20'}
                            image1={require('../../../assets/png/Oval (3).png')}
                            image2={require('../../../assets/png/Oval (4).png')}
                            image3={require('../../../assets/png/Oval Copy 4.png')}
                            btn_text={'Je veux participer'}
                            btn_style_participe={styles.btn_style_live}
                        />
                        <EventCardVerticalCostum
                            pp={require('../../../assets/png/Oval (3).png')}
                            nom={'Opium'}
                            Nom_style={styles.titre_Bold}
                            image={require('../../../assets/png/Image (9).png')}
                            like={'+23 J’aime'}
                            commentaire={'+58 Commentaires'}
                            send={'+54M Partages'}
                            container1={styles.container1}
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
                            btn_text={'Je veux participer'}
                            btn_style_participe={styles.btn_style_live}
                            btn_style_live={styles.btn_style_live}
                        />
                        <EventCardVerticalCostum
                            pp={require('../../../assets/png/Oval (3).png')}
                            nom={'Opium'}
                            Nom_style={styles.titre_Bold}
                            image={require('../../../assets/png/Image (9).png')}
                            like={'+23 J’aime'}
                            commentaire={'+58 Commentaires'}
                            send={'+54M Partages'}
                            container1={styles.container1}
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
                            btn_text={'Je veux participer'}
                            btn_style={styles.btn_style_live}
                            btn_style_live={styles.btn_style_live}
                        />
                    </View> */}
            </SafeAreaView>
        </ScrollView >
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
        backgroundColor: '#E6E8F2',
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
    show_date:{
        display:'none'
    },
    show_live:{
        display:'flex'
    }
});
module.exports = Statistique