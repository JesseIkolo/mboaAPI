import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
// import Header from "../../components/header";
import Plus from "../../assets/icons/plus";
import Arrow_left from '../../assets/img/arrow-left'


const GestionDroits1 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white-content"
                backgroundColor="#041578"
                translucent={false}
            />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, backgroundColor: '#041578', paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#E6E8F2',
                    marginLeft: 20,
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Arrow_left />
                </TouchableOpacity>
                <Text style={{
                    color: '#fff', fontSize: 20, fontWeight: '700', fontFamily: 'TitilliumWeb-Regular',
                }}>Gestion des droits</Text>
            </View>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    marginTop: 150,
                    width: '100%',
                }}
            >
                <View style={styles.infos}>
                    <View>
                        <Image source={require('../../assets/img1/Inbox.png')} />
                    </View>
                    <View style={styles.titles}>
                        <Text style={[styles.text, { color: '#041578', fontSize: 19, fontWeight: '700', }]}>Bienvenue dans la gestion des droits</Text>
                        <Text style={[styles.text, { color: '#767A90', fontSize: 17, }]}>Il y a pas encore de droits, prière d'ajouter un membre et lui conferer des permissions</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GestionDroits2')}>
                        <Text style={{ color: '#fff', fontWeight: '700', }}>Ajouter un nouveau gestionnaire</Text>
                        <Plus />
                    </TouchableOpacity>
                </View>

            </ScrollView>
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

    text: {
        textAlign: "center",
    },

    titles: {
        flexDirection: 'column',
        gap: 10,
    },

    infos: {
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 30,
        alignItems: 'center',
    },

    button: {
        flexDirection: 'row',
        gap: 4,
        backgroundColor: '#041578',
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    },

})

module.exports = GestionDroits1