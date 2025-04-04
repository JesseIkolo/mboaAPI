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
import Filtre1 from '../../../assets/img/filtre'
import Diament from '../../../assets/img/diament'
import NotDiament from '../../../assets/img/notDiament.js'

import Frame from '../../components/Frame 34098'
import Filtre from '../../components/fiiltre'
import Paiement from '../../components/Paiement Card'

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
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    gap: 16,
                    justifyContent: 'flex-start',
                    height: '100%',
                    marginBottom: 20
                }}>
                    <Paiement
                        ImageComposent={Diament}
                        style_ImageComposent={styles.style_ImageComposent}
                        id={'#4157454'}
                        abon={'Abonnement Premium'}
                        prix={'2500 XAF'}
                        date_paiement={'15 Mai 2023'}
                        heure_paiement={'12:00'}
                        valide_paiement={'15 Mai 2024'}
                        valide_heure_paiement={'13:00'}
                        user_pp={require('../../../assets/png/Image.png')}
                        user_name={'Erica Lando'}
                        paiement_pp={require('../../../assets/png/4.png')}
                        paiement_name={'Momo'}
                        numero={'675787454'} />
                    <Paiement
                        ImageComposent={NotDiament}
                        style_ImageComposent={styles.style_ImageComposent1}
                        id={'#4157454'}
                        abon={'Abonnement Premium'}
                        prix={'2500 XAF'}
                        date_paiement={'15 Mai 2023'}
                        heure_paiement={'12:00'}
                        valide_paiement={'15 Mai 2024'}
                        valide_heure_paiement={'13:00'}
                        user_pp={require('../../../assets/png/Image.png')}
                        user_name={'Erica Lando'}
                        paiement_pp={require('../../../assets/png/3.png')}
                        paiement_name={'OM'}
                        numero={'675787454'} />
                    <Paiement
                        ImageComposent={NotDiament}
                        style_ImageComposent={styles.style_ImageComposent1}
                        id={'#4157454'}
                        abon={'Abonnement Premium'}
                        prix={'2500 XAF'}
                        date_paiement={'15 Mai 2023'}
                        heure_paiement={'12:00'}
                        valide_paiement={'15 Mai 2024'}
                        valide_heure_paiement={'13:00'}
                        user_pp={require('../../../assets/png/Image.png')}
                        user_name={'Erica Lando'}
                        paiement_pp={require('../../../assets/png/3.png')}
                        paiement_name={'OM'}
                        numero={'675787454'} />
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
    style_ImageComposent: {
        backgroundColor: '#FFEDCC',
        borderRadius: 8,
        padding: 8
    },
    style_ImageComposent1: {
        backgroundColor: '#E6E8F2',
        borderRadius: 8,
        padding: 8
    }
});
module.exports = Statistique