import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
// import Header from "../../components/header";
import Close from "../../assets/icons/close";
import DoubleCheck from "../../assets/icons/doubleCheck";
import Arrow_left from '../../assets/img/arrow-left'

const Support2 = ({ navigation }) => {

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
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#041578', width: '40%', }]}>
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

                    <View style={styles.boxSuccess}>
                        <View style={styles.close}>
                            <TouchableOpacity>
                                <Close />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 20, }}>
                            <DoubleCheck />
                            <View style={{ flexDirection: 'column', gap: 5, width: 250, }}>
                                <Text style={{ fontSize: 20, color: '#219653', fontWeight: '700', }}>Succes</Text>
                                <Text style={{ fontSize: 14, color: '#767A90', }}>
                                    Votre message a été bien envoyé, nous vous répondrons dans les plus bref delais.
                                    Vous serez redirigiré vers lestous les évènements dans
                                    <Text style={{ color: '#041578', }}> 00.05</Text>
                                </Text>
                            </View>
                        </View>
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

    form: {
        backgroundColor: '#fff',
        width: '100%',
        height: 149,
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

    boxSuccess: {
        width: '100%',
        padding: 8,
        alignItems: 'center',
        backgroundColor: '#F5F5F6',
        borderRadius: 20,
        borderTopColor: '#219653',
        borderTopWidth: 2,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        elevation: -10,
    },

    close: {
        position: 'absolute',
        right: 0,
        margin: 10,
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

module.exports = Support2