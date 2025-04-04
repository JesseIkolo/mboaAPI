import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Image, ImageBackground } from "react-native";

import More from "../../assets/icons/more";
import AddEvents from "../../assets/icons/addEvents";
import Like from "../../assets/icons/like";
import Comment from "../../assets/icons/comment";
import Partage from "../../assets/icons/partage";
import Avatars from "../../assets/icons/avatar";
import ArrowRight from "../../assets/icons/arrowRight";
import Arrow_left from '../../assets/img/arrow-left'


const Evenement = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

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
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>Créer un Business</Text>
            </View>
            <ScrollView style={styles.content}>
                <View style={styles.items}>
                    <View style={styles.item}>
                        <View style={styles.user}>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>
                                <Image source={require('../../assets/img1/profile.png')} style={{ width: 38, height: 38, }} />
                                <View style={{}}>
                                    <Text style={{ fontSize: 11, color: '#767A90', lineHeight: 21.29, }}>Par Eric Fotso</Text>
                                    <Text style={{ fontSize: 11, color: '#767A90', lineHeight: 21.29, }}>il y a 3min</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('MenuEvenement')}>
                                <More />
                            </TouchableOpacity>
                        </View>

                        <ImageBackground source={require('../../assets/img1/minks.png')} style={{ width: '100%', height: 152, }}>
                            <View style={styles.date}>
                                <View style={styles.number}>
                                    <Text style={{ fontSize: 24, textAlign: 'center', color: '#041578', fontWeight: 'bold', }}>10 Juin</Text>
                                </View>
                            </View>
                        </ImageBackground>

                        <View style={styles.infos}>
                            <Text style={{ fontSize: 16, color: '#041578', fontWeight: '700', }}>Elections du président</Text>

                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', }}>
                                <Text style={{ color: '#3C4260', fontSize: 14, fontWeight: '700', }}>250 Places</Text>
                                <View style={{ width: 5, height: 5, backgroundColor: '#F52424', borderRadius: 10, }}></View>
                                <Text style={{ color: '#3C4260', }}>Au PaPoSy de Yaoundé</Text>
                            </View>

                            <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center', }}>
                                <View style={{ backgroundColor: '#FFDE00', width: 85, padding: 4, alignItems: 'center', }}>
                                    <Text style={{ fontWeight: '700', }}>25,000 XAF</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Avatars />
                                    <Text style={{ fontSize: 11, color: '#3C4260', }}>+20 personnes participent</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row', gap: 2, }}>
                                    <Like />
                                    <Text style={{ fontSize: 11, color: '#3C4260', }}>+23 J'aime</Text>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 2, }}>
                                    <Comment />
                                    <Text style={{ fontSize: 11, color: '#3C4260', }}>+58 Commenataire</Text>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 2, }}>
                                    <Partage />
                                    <Text style={{ fontSize: 11, color: '#3C4260', }}>+54M Partage</Text>
                                </View>
                            </View>

                            <View style={{ width: '100%', height: 1, backgroundColor: '#DEDFE4', }}></View>

                            <TouchableOpacity style={styles.details} onPress={() => navigation.navigate('Profile')}>
                                <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', }}>Details</Text>
                                <ArrowRight />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CreateEvent')}>
                <AddEvents />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

module.exports = Evenement

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    content: {
        marginTop: 50,
        width: '100%',
        padding: 16,
    },

    items: {
        width: '100%',
        flexDirection: 'column',
        gap: 31,
    },

    item: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#767A90',
        borderRadius: 8,
    },

    user: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    date: {
        position: 'absolute',
        left: 0,
        margin: 8,
    },

    number: {
        width: 59,
        borderRadius: 8,
        backgroundColor: '#E6E8F2',
    },

    button: {
        position: 'absolute',
        right: -17,
        marginTop: 40,
    },

    infos: {
        flexDirection: 'column',
        gap: 8,
        padding: 16,
    },

    details: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
        backgroundColor: '#041578',
        borderRadius: 8,
        width: 99,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
})