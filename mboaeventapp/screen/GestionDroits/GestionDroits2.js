import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
// import Header from "../../components/header";
import Plus from "../../assets/icons/plus";
import Search from "../../assets/icons/search";
import Delete2 from "../../assets/icons/delete2";
import Next from "../../assets/icons/next";
import Arrow_left from '../../assets/img/arrow-left'


const GestionDroits2 = ({ navigation }) => {

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
                    marginTop: 10,
                    width: '100%',
                }}
            >
                <View style={{ flexDirection: 'column', gap: 20, }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '700', }}>Rechercher un utilisateur</Text>
                    </View>

                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder='Rechercher un utilisateur'
                        />
                        <TouchableOpacity style={styles.icon}>
                            <Search />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.items}>
                        <View style={styles.item}>
                            <View>
                                <Image source={require('../../assets/img1/profile2.png')} />
                            </View>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 16, fontWeight: '700', }}>Erica Lando</Text>
                                <Text style={{ fontSize: 14, }}>ericalando@gmail.com</Text>
                            </View>
                            <View style={styles.buttons}>
                                <TouchableOpacity style={[styles.action, { borderColor: '#F52424', backgroundColor: '#FEE9E9', }]}>
                                    <Delete2 />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.action, { borderColor: '#041578', }]}>
                                    <Next />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View>
                                <Image source={require('../../assets/img1/profile.png')} />
                            </View>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 16, fontWeight: '700', }}>Erica Lando</Text>
                                <Text style={{ fontSize: 14, }}>ericalando@gmail.com</Text>
                            </View>
                            <View style={styles.buttons}>
                                <TouchableOpacity style={[styles.action, { borderColor: '#F52424', backgroundColor: '#FEE9E9', }]}>
                                    <Delete2 />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.action, { borderColor: '#041578', }]}>
                                    <Next />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View>
                                <Image source={require('../../assets/img1/profile3.png')} />
                            </View>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 16, fontWeight: '700', }}>Erica Lando</Text>
                                <Text style={{ fontSize: 14, }}>ericalando@gmail.com</Text>
                            </View>
                            <View style={styles.buttons}>
                                <TouchableOpacity style={[styles.action, { borderColor: '#F52424', backgroundColor: '#FEE9E9', }]}>
                                    <Delete2 />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.action, { borderColor: '#041578', }]}>
                                    <Next />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View>
                                <Image source={require('../../assets/img1/profile4.png')} />
                            </View>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 16, fontWeight: '700', }}>Erica Lando</Text>
                                <Text style={{ fontSize: 14, }}>ericalando@gmail.com</Text>
                            </View>
                            <View style={styles.buttons}>
                                <TouchableOpacity style={[styles.action, { borderColor: '#F52424', backgroundColor: '#FEE9E9', }]}>
                                    <Delete2 />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.action, { borderColor: '#041578', }]}>
                                    <Next />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View>
                                <Image source={require('../../assets/img1/profile5.png')} />
                            </View>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 16, fontWeight: '700', }}>Erica Lando</Text>
                                <Text style={{ fontSize: 14, }}>ericalando@gmail.com</Text>
                            </View>
                            <View style={styles.buttons}>
                                <TouchableOpacity style={[styles.action, { borderColor: '#F52424', backgroundColor: '#FEE9E9', }]}>
                                    <Delete2 />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.action, { borderColor: '#041578', }]}>
                                    <Next />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GestionDroits3')}>
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

    search: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '100%',
        height: 53,
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

    input: {
        width: '80%',
        fontSize: 16,
        backgroundColor: '#F5F5F6',
        padding: 16,
        borderRadius: 8,
    },

    icon: {
        width: '17%',
        backgroundColor: '#041578',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    items: {
        flexDirection: 'column',
        width: '100%',
        gap: 10,
    },

    item: {
        backgroundColor: '#EEF0F6',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 8,
        alignItems: 'center',
        borderRadius: 8,
    },

    id: {
        flexDirection: 'column',
        gap: 3,
    },

    buttons: {
        flexDirection: 'row',
        gap: 5,
    },

    action: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
    },

})

module.exports = GestionDroits2