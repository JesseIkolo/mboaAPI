import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import Right from '../../../assets/img/arrow-right1'
import Eye from '../../../assets/img/eye'
import Video from '../../../assets/img/video1'
import Bookmark from '../../../assets/img/bookmark2'
import Danger from '../../../assets/img/danger'
import Share from '../../../assets/img/share'

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
                            <View style={{ width: 150, height: 5, backgroundColor: '#D9D9D9', marginTop: 20 }}></View>
                        </View>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                        <View>
                            <Text style={styles.texteBold}>Signaler cet l’evènement </Text>
                            <Text style={[styles.texteSimple, { fontSize: 16, color: '#000', fontWeight: '400' }]}>Aidez-nous à comprendre le problème avec cette publicité. Comment la décririez-vous? </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Trompeur ou indésirable</Text>
                                </View>
                                <Right />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Sexuellement inapproprié</Text>
                                </View>
                                <Right />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Offensant</Text>
                                </View>
                                <Right />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Violence</Text>
                                </View>
                                <Right />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>L’annonceur usurpe l’identité d’une autre personne</Text>
                                </View>
                                <Right />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Contenu interdit</Text>
                                </View>
                                <Right />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Spam</Text>
                                </View>
                                <Right />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Candidat ou thème politique</Text>
                                </View>
                                <Right />
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%', borderBottomColor: '#767A90', borderBottomWidth: 1, paddingBottom: 10 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>Autre</Text>
                                </View>
                                <Right />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
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
        height: 200
    }
});
module.exports = Statistique