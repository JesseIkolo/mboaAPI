import {
    Button, Text,
    View, Image,
    StyleSheet, TouchableOpacity,
    ScrollView, TextInput,
    Animated, Switch
} from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';

import Musique from '../../../assets/img/Vector (2)'
import Basket from '../../../assets/img/2476154'
import Nouriture from '../../../assets/img/685352'
import Calendar_edit from '../../../assets/img/calendar-edit'
import Document_upload from '../../../assets/img/document-upload'
import Map from '../../../assets/img/map'
import Juste from '../../../assets/img/Vector (3)'

import CustomTextInput from '../../components/input'
import Vignette from '../../components/Vignette'
import SousVignette from '../../components/SousVignette'
import Lien from '../../components/lien'
import Bouton from '../../components/bouton'

function Create1({ navigation },) {
    const [fontsLoaded] = useFonts({
        'TitilliumWeb-Regular': require('../../../assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf'),
        'TitilliumWeb-Bold': require('../../../assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null; // ou un écran de chargement
    }

    const [isToggled, setIsToggled] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const handleToggle = () => {
        setIsToggled(!isToggled);
        Animated.spring(animation, {
            toValue: isToggled ? 0 : 1,
            useNativeDriver: false,
        }).start();
    };

    const circleColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#fff', '#fff']
    });

    const trackColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#E2E8F0', '#041578'] // Gris clair à vert clair
    });

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 8]
    });

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
            <View style={styles.column}>
                <Text style={styles.titre}>Nom de l'établissement</Text>
                <CustomTextInput />
            </View>
            <View style={styles.column}>
                <Text style={styles.titre}>Image de couverture</Text>
                <Vignette />
            </View>
            <View style={styles.column}>
                <Text style={styles.titre}>Galerie</Text>
                <View style={styles.list_Sous_Vignette}>
                    <SousVignette />
                    <SousVignette />
                    <SousVignette />
                    <SousVignette />
                </View>
            </View>
            <View style={styles.column}>
                <Text style={styles.titre}>Description</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Tapez la description ici"
                    multiline={true} // Permet le texte multi-ligne
                    numberOfLines={4} // Nombre de lignes visibles
                    textAlignVertical="top" // Aligne le texte en haut
                />
            </View>
            <View style={styles.column}>
                <Text style={styles.titre}>Localisation</Text>
                <View style={styles.localisation}>
                    <TextInput
                        style={[styles.input, styles.Costum1]}
                        placeholder="Ex: Mariage de Aline & Christian"
                    />
                    <View style={styles.map}>
                        <Map />
                    </View>
                </View>
                <View style={styles.localisation}>
                    <TextInput
                        style={[styles.input, styles.Costum1]}
                        placeholder="Ex: Mariage de Aline & Christian"
                    />
                    <View style={styles.map}>
                        <Map />
                    </View>
                </View>
            </View>
            <View style={styles.column}>
                <Text style={styles.titre}>Localisation</Text>
                <View style={styles.localisation}>
                    <TextInput
                        style={[styles.input, styles.Costum1]}
                        placeholder="Ex: Mariage de Aline & Christian"
                    />
                    <View style={styles.map}>
                        <Map />
                    </View>
                </View>
            </View>
            <View style={styles.column}>

                <TouchableOpacity onPress={handleCheckboxPress} style={styles.checkbox_block}>
                    <TouchableOpacity style={styles.checkbox} onPress={handleCheckboxPress}>
                        {isChecked && <View style={styles.checkbox_juste} ><Juste /></View>}
                    </TouchableOpacity>
                    <Text style={styles.label}>En créant un business, vous acceptez nos Termes et conditions</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Create2')}>
                    <Bouton texte={'Créer mon Business'} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff'
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
    categorie_menu_actif: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#041578',
        borderRadius: 20,
        gap: 8,
        alignItems: 'center',
        marginRight: 12
    },
    categorie_menu_titre_actif: {
        color: '#fff'
    },
    categorie_menu: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#E6E8F2',
        borderRadius: 20,
        gap: 8,
        alignItems: 'center',
        marginRight: 12
    },
    categorie_menu_titre: {
        color: '#041578'
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
    },
    input: {
        height: 50,
        width: '100%',
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        backgroundColor: '#F5F5F6',
        borderRadius: 8
    },
    textArea: {
        height: 170,
        width: '100%',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
    },
    horaires_view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8
    },
    horaires: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F6',
        width: 150,
        height: 50,
        padding: 8,
        borderRadius: 8
    },
    horaires_date: {
        width: 220,
    },
    toggleButton: {
        width: 24,
        height: 16,
        borderRadius: 15,
        justifyContent: 'center',
    },
    toggleTrack: {
        width: 24,
        height: 16,
        borderRadius: 15,
        position: 'absolute',
    },
    toggleCircle: {
        width: 12,
        height: 12,
        borderRadius: 13,
        position: 'absolute',
        left: 2,
    },
    horaires_close: {
        backgroundColor: '#FEE9E9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    horaires_texte: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21.29,
        textAlign: 'left',
        color: '#767A90'
    },
    list_Sous_Vignette: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-between',
    },
    localisation: {
        display: 'flex',
        flexDirection: 'row'
    },
    map: {
        padding: 10,
        backgroundColor: '#041578',
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        height: 50,
        width: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Costum1: {
        width: 325
    },
    checkbox_block: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },

    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    checkboxText: {
        fontSize: 20,
        color: '#007AFF',
        backgroundColor: '#041578',
        paddingHorizontal: 8
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 8,
        color: '#1E2448'
    },
    checkbox_juste: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#041578'
    }
});

module.exports = Create1