import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';

// import Header from "../components1/header";
import SendMessage from "../components1/sendMessage";
import ReceiveMessage from "../components1/receiveMessage";

import AttachCircle from "../../assets/icons/attachCircle";
import HappyEmoji from "../../assets/icons/happyEmoji";
import Send2 from "../../assets/icons/send2";
import Arrow_left from '../../assets/img/arrow-left1'

const ChatDetails = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white-content"
                backgroundColor="#041578"
                translucent={false}
            />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30, backgroundColor: '#041578', paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 40,
                    height: 40,
                    marginLeft: 30,
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 10
                }}>
                    <Arrow_left />
                    <Image source={require('../../assets/img1/profile6.png')} />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>Akono Frill</Text>
            </View>
            <ScrollView
                style={{
                    marginTop: 10,
                    width: '100%',
                    paddingHorizontal: 16,
                }}
            >

                <View style={{ flexDirection: "column", gap: 16, }}>
                    <ReceiveMessage
                        profile={require('../../assets/img1/profile6.png')}
                        date="16 Juin 2023"
                        time="09:00"
                        message="Salut, comment vas-tu?"
                    />

                    <SendMessage
                        date="16 Juin 2023"
                        time="09:00"
                        message="ça va bien merci et toi même? 😊✅"
                    />
                    <ReceiveMessage
                        profile={require('../../assets/img1/profile6.png')}
                        date="16 Juin 2023"
                        time="09:00"
                        message="ça va pas très fort."
                    />

                    <SendMessage
                        date="16 Juin 2023"
                        time="09:00"
                        message="Pourquoi tu dis ça? Tu as encore essayé de draguer la fille là à l’évènement de Samedi elle a refusé? 🤣🤣🤣🤣"
                    />
                    <ReceiveMessage
                        profile={require('../../assets/img1/profile6.png')}
                        date="16 Juin 2023"
                        time="09:00"
                        message="Nor, fou, c’est tout pour toi là-bas, juste que les préparatifs me cassent la tête"
                    />

                    <SendMessage
                        date="16 Juin 2023"
                        time="09:00"
                        message="C’est ton problème, tu t’es lancé dessus nor, continue seulement. Chouagne 🙄"
                    />
                </View>

            </ScrollView>

            <View style={styles.bottom}>
                <View style={styles.inputSend}>
                    <TouchableOpacity><HappyEmoji /></TouchableOpacity>
                    <TextInput placeholder="Répondre en tant que Club O...." style={{ color: '#B1B3BF', }} />
                    <TouchableOpacity><AttachCircle /></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.send}>
                    <Send2 />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },

    items: {
        flexDirection: 'column',

    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderWidth: 1,
        // borderColor: '#fff',
        borderBottomColor: '#E0E0E0',
    },

    bottom: {
        position: 'absolute',
        flexDirection: 'row',
        gap: 5,
        alignItems: "center",
        bottom: 12,
        marginHorizontal: 8,
    },

    inputSend: {
        backgroundColor: '#EEECED',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        width: '87%'
    },

    send: {
        backgroundColor: '#041578',
        alignItems: 'center',
        padding: 13,
        borderRadius: 8,
    },
})

module.exports = ChatDetails