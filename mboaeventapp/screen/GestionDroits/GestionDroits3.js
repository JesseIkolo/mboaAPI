import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
// import Header from "../../components/header";
import Search from "../../assets/icons/search";
import Add from "../../assets/icons/add";
import Arrow_left from '../../assets/img/arrow-left'


const GestionDroits3 = ({ navigation }) => {

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
                            <View style={styles.id}>
                                <View style={{ width: 40, height: 60, }}>
                                    <Image source={require('../../assets/img1/profile2.png')} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', }}>Erica Fotso</Text>
                            </View>

                            <TouchableOpacity style={styles.select} onPress={() => navigation.navigate('GestionDroits4')}>
                                <Add />
                                <Text style={{ fontSize: 12, }}>Selectionner</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.id}>
                                <View style={{ width: 40, height: 60, }}>
                                    <Image source={require('../../assets/img1/profile2.png')} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', }}>Erica Fotso</Text>
                            </View>

                            <TouchableOpacity style={styles.select}>
                                <Add />
                                <Text style={{ fontSize: 12, }}>Selectionner</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.id}>
                                <View style={{ width: 40, height: 60, }}>
                                    <Image source={require('../../assets/img1/profile2.png')} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', }}>Erica Fotso</Text>
                            </View>

                            <TouchableOpacity style={styles.select}>
                                <Add />
                                <Text style={{ fontSize: 12, }}>Selectionner</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.id}>
                                <View style={{ width: 40, height: 60, }}>
                                    <Image source={require('../../assets/img1/profile2.png')} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', }}>Erica Fotso</Text>
                            </View>

                            <TouchableOpacity style={styles.select}>
                                <Add />
                                <Text style={{ fontSize: 12, }}>Selectionner</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.id}>
                                <View style={{ width: 40, height: 60, }}>
                                    <Image source={require('../../assets/img1/profile2.png')} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', }}>Erica Fotso</Text>
                            </View>

                            <TouchableOpacity style={styles.select}>
                                <Add />
                                <Text style={{ fontSize: 12, }}>Selectionner</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.id}>
                                <View style={{ width: 40, height: 60, }}>
                                    <Image source={require('../../assets/img1/profile2.png')} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', }}>Erica Fotso</Text>
                            </View>

                            <TouchableOpacity style={styles.select}>
                                <Add />
                                <Text style={{ fontSize: 12, }}>Selectionner</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.id}>
                                <View style={{ width: 40, height: 60, }}>
                                    <Image source={require('../../assets/img1/profile2.png')} />
                                </View>
                                <Text style={{ fontSize: 14, fontWeight: '700', }}>Erica Fotso</Text>
                            </View>

                            <TouchableOpacity style={styles.select}>
                                <Add />
                                <Text style={{ fontSize: 12, }}>Selectionner</Text>
                            </TouchableOpacity>
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

    content: {

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },

    id: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
    },

    select: {
        backgroundColor: '#DEDFE4',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        gap: 5,
        borderRadius: 4,
    },

    action: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
    },

})

module.exports = GestionDroits3