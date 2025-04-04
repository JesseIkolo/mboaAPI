import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, TextInput, text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import More from '../../../assets/img/more'
import Camera from '../../../assets/img/camera'
import Message from '../../../assets/img/message-text'
import Arrow_left from '../../../assets/img/arrow-left'
import Edit from '../../../assets/img/edit'

import Bouton from '../../components/bouton'
import Bouton1 from '../../components/bouton1'
import GradientBackground from '../../components/GradientBackground'
import Frame from '../../components/Frame 34098'
import EventCardVerticalCostum from '../../components/EventCardVerticalCostum1'

function Dashboard({ navigation },) {

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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
            <View>
                <View style={styles.fleche}>
                    <Arrow_left />
                </View>
                <Image
                    source={require('../../../assets/png/Overlay (1).png')}
                    style={styles.bg}
                />
                <TouchableOpacity>
                    <View style={{
                        position: 'relative',
                        width: 32,
                        padding: 8,
                        resizeMode: 'contain',
                        top: -70,
                        left: '90%',
                        backgroundColor: '#041578',
                        borderRadius: 20
                    }} >
                        <Camera />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.Historique_Photo_More}>
                    <View style={styles.overlay}>
                        <View style={styles.block_pp}>
                            <Image
                                source={require('../../../assets/png/Oval.png')}
                                style={{
                                    width: 100,
                                    resizeMode: 'contain',
                                    bottom: -30,
                                    left: '38%',
                                    position: 'absolute',
                                }}
                            />
                            <View style={{
                                width: 32,
                                padding: 8,
                                resizeMode: 'contain',
                                bottom: -20,
                                left: '8%',
                                // top: 55,
                                // left: '55%',
                                backgroundColor: '#041578',
                                borderRadius: 20
                            }} >
                                <Camera />
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.nomClub}>Club O</Text>
                        <Text style={styles.sous_nomClub}>@ClubO</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', marginTop: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, backgroundColor: '#FEE9E9', paddingHorizontal: 15, paddingVertical: 10, alignItems: 'center', borderRadius: 5 }}>
                            <Text style={{ color: '#F52424' }}>+</Text>
                            <Text style={{ color: '#F52424' }}>Ajouter</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, backgroundColor: '#E6EAFE', padding: 15, paddingVertical: 10, alignItems: 'center', borderRadius: 5 }}>
                            <Message />
                            <Text>Message</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, backgroundColor: '#E6EAFE', padding: 15, paddingVertical: 10, alignItems: 'center', borderRadius: 5 }}>
                            <More />
                            <Text>Autre</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center', marginTop: 20, marginHorizontal: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', paddingBottom: 20, width: '90%', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: '#767A90' }}>
                            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={[styles.texteSimple, { fontSize: 14, width: 125, textAlign: 'center', color: '#3C4260' }]}>Total évènements</Text>
                                <Text style={styles.texteBold}>15</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={[styles.texteSimple, { fontSize: 14, width: 125, textAlign: 'center', color: '#3C4260' }]}>Amis</Text>
                                <Text style={styles.texteBold}>25k</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={[styles.texteSimple, { fontSize: 14, width: 125, textAlign: 'center', color: '#3C4260' }]}>Suivis</Text>
                                <Text style={styles.texteBold}>10</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#F5F5F7', borderRadius: 20, padding: 20, marginHorizontal: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <Text style={styles.texteBold}>Ma Bio</Text>
                            <Edit />
                        </View>
                        <Text style={{ fontWeight: '400', fontSize: 14 }}>
                            Arcu in elit cursus volutpat massa vulputate. Nisl sollicitudin curabitur pharetra id porta aliquet. amet volutpat adipiscing gravida a elementum aenean. Vitae sed convallis ...
                            <Text style={{ color: '#041578' }}>Voir Plus</Text>
                        </Text>
                    </View>
                    <View style={{ marginHorizontal: 20, gap: 20 }}>
                        <Text style={styles.texteBold}>Evènements recents</Text>


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
                            Bookmark_style={styles.btn_style_live}
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
                            Bookmark_style={styles.btn_style_live}
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
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        backgroundColor: '#fff',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        gap: 16,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    bg: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        marginRight: 20,
        position: 'relative',
        zIndex: -1
    },
    overlay: {
        position: 'absolute',
        top: -55,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 70,
        width: '100%',
        zIndex: -1,
        borderRadius: 30,
    },
    overlayText: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 48,
        color: '#fff'
    },
    block_pp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    pp: {
        position: 'relative',
        top: -45,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0
    },
    nomClub: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 20,
        fontWeight: '700',
        color: '#041578',
    },
    sous_nomClub: {
        color: '#767A90',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400'
    },
    fleche: {
        top: 50,
        position: 'absolute',
        width: 40,
        height: 40,
        backgroundColor: '#E6E8F2',
        marginLeft: 20,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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
    btn_style_live: {
        display: 'none'
    },
});

module.exports = Dashboard