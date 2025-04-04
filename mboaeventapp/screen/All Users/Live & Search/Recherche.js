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
import Arrow_right from '../../../assets/img/arrow-right1'

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
        <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
            <SafeAreaView style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 26,
                backgroundColor: '#fff',
                height: '100%',
                marginTop: 10
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', gap: 10 }}>
                    <TextInput
                        value={text}
                        onChangeText={handleTextChange}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                        style={[styles.input, styles.inputFocused]}
                        placeholder="Rechercher par nom ..."
                    />
                    <Button_1 />
                    {/* <Filtre /> */}
                </View>
                <View style={{ gap: 20, display: 'flex', flexDirection: 'column' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={[styles.texteBold, { fontSize: 14 }]}>Serge</Text>
                            <Text>o Polo</Text>
                        </View>
                        <Arrow_right />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={[styles.texteBold, { fontSize: 14 }]}>Serge</Text>
                            <Text>o Antoine</Text>
                        </View>
                        <Arrow_right />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={[styles.texteBold, { fontSize: 14 }]}>Serge</Text>
                            <Text>o Polo du Cameroon</Text>
                        </View>
                        <Arrow_right />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={[styles.texteBold, { fontSize: 14 }]}>Serge</Text>
                            <Text>s Folon</Text>
                        </View>
                        <Arrow_right />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={[styles.texteBold, { fontSize: 14 }]}>Serge</Text>
                            <Text>rie du pays</Text>
                        </View>
                        <Arrow_right />
                    </View>
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
        width: '90%',
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
});
module.exports = Statistique