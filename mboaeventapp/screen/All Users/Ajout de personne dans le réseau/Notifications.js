import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput, FlatList, DevSettings } from 'react-native';
import React, { useState } from 'react';

import Button_1 from '../../../assets/img/Button (1)'

import Filtre from '../../components/fiiltre'
import Partcipant from '../../components/partcipant'
import Invitations from '../../components/invitations'
import Invitations1 from '../../components/invitations1'

function Statistique({ navigation },) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.page}>
                <Invitations1 image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations1 image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btn={{ display: 'none' }} />
                <Invitations1 image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations1 image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btn={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btn={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btns={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btn={{ display: 'none' }} />
                <Invitations image={require('../../../assets/png/Ellipse 1 (1).png')} nom={'Yves Laurent'} texte={' a accepté votre demande à faire parti de votre réseau'} time={'Il y a 1 min'} show_btn={{ display: 'none' }} />
            </SafeAreaView>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        // paddingHorizontal: 16,
        // paddingVertical: 36,
        // gap: 26,
        backgroundColor: '#fff',
        height: '100%'
        // alignItems: 'center',
    },
});
module.exports = Statistique