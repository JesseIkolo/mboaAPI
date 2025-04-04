import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import Juste from '../../../assets/img/juste'

import Bouton from '../../components/bouton'
import CustomTextInput from '../../components/input'
import Bouton1 from '../../components/bouton1'
import ImageFlou from '../../components/imageFlou4'

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
        <View style={{ height: '100%', backgroundColor: '#fff' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <ImageFlou style_image={styles.style_image} />
                </View>
                <View style={styles.page}>
                    <View style={styles.overlay}>
                        <View style={{ display: 'flex', alignItems: 'center' }}>
                            <View style={{ width: 125, height: 5, backgroundColor: '#D9D9D9', marginTop: 20, borderRadius: 20 }}></View>
                        </View>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Text style={[styles.texteBold, { fontSize: 18 }]}>Voulez-vous vraiment supprime cet évènement?</Text>
                        <Text style={[styles.texteSimple, { fontSize: 16, color: '#000', textAlign: 'center' }]}>Sit proin sed purus diam ultricies habitasse feugiat enim vitae. Etiam cras nisi amet id tincidunt sed.</Text>
                    </View>
                </View>
            </ScrollView >

            <View style={{ backgroundColor: '#fff', width: '100%', paddingHorizontal: 20 }}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Create3')} style={{ width: '50%' }}>
                        <Bouton block={styles.botton_back} text={styles.botton_text} texte={'Non, annuler'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Event_Search_Events_05')} style={{ width: '50%' }}>
                        <Bouton texte={'Oui, supprimer'} block={styles.botton_back1} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
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
        height: '10%',
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
    botton_back1: {
        backgroundColor: '#F74949',
    },
    botton_text: {
        color: '#041578'
    },
    overlay: {
        position: 'absolute',
        top: -30,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 50,
        zIndex: -1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    style_image: {
        height: 600
    }
});
module.exports = Statistique