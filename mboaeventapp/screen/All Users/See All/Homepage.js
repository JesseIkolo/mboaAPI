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
import Juste3 from '../../../assets/img/juste3'
import Close from '../../../assets/img/close1'

import Frame from '../../components/Frame 34098'
import Filtre from '../../components/fiiltre'
import EventCardVerticalCostum from '../../components/EventCardVerticalCostum1'

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
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView style={styles.page}>
                    <View style={{
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
                            Bookmark_style={styles.Bookmark_style}
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
                            Bookmark_style={styles.Bookmark_style}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView >


            <View style={{
                position: 'absolute',
                zIndex: 3,
                bottom: 40,
                right: 20,
                backgroundColor: '#fff',
                width: '90%',
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 40,
                paddingVertical: 20,
                borderRadius: 20,
                borderTopColor: '#219653',
                borderTopWidth: 15,
                elevation: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'space-between'
            }}>
                <Juste3 />
                <View>
                    <Text style={[styles.texteBold, { color: '#219653' }]}>Succès</Text>
                    <Text style={[styles.texteSimple, { color: '#767A90', fontSize: 16 }]}>L'évènement a été marqué</Text>
                </View>
                <View>
                    <Close />
                </View>
            </View>
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
    Bookmark_style: {
        display: 'none'
    }
});
module.exports = Statistique