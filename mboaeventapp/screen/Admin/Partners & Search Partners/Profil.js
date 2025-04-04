import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, TextInput, text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import Inbox_1 from '../../../assets/img/Inbox_1'
import Camera from '../../../assets/img/camera'
import Group from '../../../assets/img/Group'
import Message_text from '../../../assets/img/message-text'
import Edit_2 from '../../../assets/img/edit-2'
import Add_event_outline from '../../../assets/img/add-event1'
import Chart from '../../../assets/img/chart'
import Clipboard_text from '../../../assets/img/clipboard-text'
import Profile_2user from '../../../assets/img/profile-2user'
import User_tag from '../../../assets/img/user-tag'
import Arrow_right1 from '../../../assets/img/arrow-right1'
import Tel from '../../../assets/img/tel'
import Arrow_left from '../../../assets/img/arrow-left'
import Juste2 from '../../../assets/img/juste2'
import FlecheBas from '../../../assets/img/FlecheBas'

import Bouton from '../../components/bouton'
import Bouton1 from '../../components/bouton1'
import GradientBackground from '../../components/GradientBackground'
import Frame from '../../components/Frame 34098'

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
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingBottom: 20, paddingLeft: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Nom d’utilisateur
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
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
                                <Juste2 />
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Adresse email
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
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
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Nom
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
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
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Prénom
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
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
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={styles.titre}>Quartier</Text>
                            <View style={styles.pickerContainer}>
                                <TouchableOpacity onPress={toggleFilters}>
                                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E6E8F2', padding: 16, gap: 16, borderRadius: 8, justifyContent: 'space-between', width: '95%' }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                                            <Image
                                                source={require('../../../assets/png/emojione_flag-for-cameroon.png')}
                                            />
                                            <Text style={[styles.texteSimple, { fontSize: 14, color: '#767A90' }]}>Selectionner un quartier</Text>
                                        </View>
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
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Phone
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
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
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Ville
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
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
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Quartier
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
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
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Quartier
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
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
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: '400' }}>
                                Mot de Passe
                            </Text>

                            <View style={[
                                showSuggestions && styles.inputFocused, {
                                    width: '95%',
                                    backgroundColor: '#E6E8F2',
                                    borderRadius: 8,
                                    maxHeight: 50,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }]}>
                                <TextInput
                                    secureTextEntry={true}
                                    value={text}
                                    onChangeText={handleTextChange}
                                    onFocus={() => setShowSuggestions(true)}
                                    onBlur={() => setShowSuggestions(false)}
                                    style={[styles.input, { width: '90%' }]}
                                    placeholder="Rechercher par nom ..."
                                />
                            </View>
                        </View>
                        <Text style={{ textAlign: 'right', width: '95%', color: '#041578' }}>Changer le mot de passe?</Text>

                        <View style={{ display: 'flex', flexDirection: 'column', gap: 0}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Event_Search_Events_05')} style={{ width: '95%' }}>
                                <Bouton texte={'Sauvegarder'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Create3')}>
                                <Bouton block={styles.botton_back} text={styles.botton_text} texte={'X   Annuler'} />
                            </TouchableOpacity>
                        </View>
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
        // paddingHorizontal: 16,
        // paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff',
        // alignItems: 'center',
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
    input: {
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        width: '75%',
        maxHeight: 60
    },
    inputFocused: {
        backgroundColor: '#F5F5F6',
        borderColor: '#219653',
        borderWidth: 1
    },
    botton_back: {
        backgroundColor: 'transparent',
        width: '95%'
    },
    botton_text: {
        color: '#F52424'
    },
});

module.exports = Dashboard