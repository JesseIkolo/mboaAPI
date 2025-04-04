import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
// import Header from "../../components/header";

import Arrow_left from '../../assets/img/arrow-left'

const Support1 = ({ navigation }) => {

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
                }}>Contactez le support</Text>
            </View>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    marginTop: 20,
                    width: '100%',
                }}
            >

                <View style={{ flexDirection: 'column', gap: 20, }}>
                    <View>
                        <Text style={{ color: '#041578', fontSize: 18, fontWeight: '700', }}>Envoyer un message directement a MBO'A EVENTS</Text>
                    </View>

                    <View style={styles.message}>

                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Tapez la description ici"
                            multiline={true} // Permet le texte multi-ligne
                            numberOfLines={4} // Nombre de lignes visibles
                            textAlignVertical="top" // Aligne le texte en haut
                        />
                        <View style={styles.buttons}>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#041578', width: '40%', }]} onPress={() => navigation.navigate('Support2')}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700', paddingVertical: 10 }}>Envoyer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#E6E8F2', width: '58%', }]}>
                                <Text style={{ color: '#041578', fontSize: 16, fontWeight: '700', }}>Annuler</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: '#F52424', fontSize: 16, fontWeight: '700', }}>Nous répondons en 24h au plus</Text>
                        <Text style={{ color: '#3C4260', fontSize: 14, lineHeight: 21, }}>
                            Arcu in elit cursus volutpat massa vulputate.
                            Nisl sollicitudin curabitur pharetra id porta aliquet.
                            amet volutpat adipiscing gravida a elementum aenean. Vitae sed convallis
                        </Text>
                    </View>
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

    message: {
        flexDirection: 'column',
        gap: 16,
        backgroundColor: '#E6E8F2',
        width: '100%',
        borderRadius: 8,
        padding: 16,
    },
    buttons: {
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        borderRadius: 8,
        paddingVertical: 8,
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: '100%',
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        backgroundColor: '#fff',
        borderRadius: 8
    },
    textArea: {
        height: 170,
        width: '100%',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
    },

})

module.exports = Support1