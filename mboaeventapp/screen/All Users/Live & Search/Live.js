import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, SafeAreaView, ImageBackground } from 'react-native';
import React, { useState } from 'react';

import Close from '../../../assets/img/close2'
import Eye from '../../../assets/img/eye1'
import More from '../../../assets/img/more1'
import Hand from '../../../assets/img/hand'

import ListeDeroulante from '../../components/listeDeroulante'


function Event({ navigation },) {
    return (
        <ImageBackground
            source={require('../../../assets/png/6.png')}
            resizeMode="cover"
            showsVerticalScrollIndicator={false}
            style={styles.page}>

            <View style={{ flex: 1, width: '100%', paddingTop: 50, justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <Image
                            source={require('../../../assets/png/5.png')}
                            style={styles.Image}
                        />
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                <Text style={[styles.texteSimple, { fontSize: 16, color: '#9598A8' }]}>Par</Text>
                                <Text style={[styles.texteBold, { fontSize: 16 }]}>Eric Fotso</Text>
                            </View>
                            <Text style={{ color: '#9598A8' }}>Il y a 3min</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <View style={{
                            backgroundColor: '#F52424',
                            padding: 10,
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontWeight: '700',
                                color: '#fff',
                                fontSize: 12
                            }}>LIVE</Text>
                        </View>
                        <View style={{
                            backgroundColor: '#F52424',
                            padding: 10,
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 5
                        }}>
                            <Eye />
                            <Text style={{
                                fontWeight: '700',
                                color: '#fff',
                                fontSize: 12
                            }}>2541</Text>
                        </View>
                        <View style={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#E6E8F2',
                            borderRadius: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Close />
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: '#00000025' }}>
                    <View style={{ flexDirection: 'column-reverse', gap: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/png/5.png')}
                                style={styles.Image}
                            />
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                    <Text style={[styles.texteBold, { fontSize: 16, color: '#fff' }]}>Daniel Ndam</Text>
                                </View>
                                <Text style={{ color: '#9598A8' }}>Je vais te fouetter hein 🤣🤣</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <Image
                                source={require('../../../assets/png/5.png')}
                                style={styles.Image}
                            />
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                    <Text style={[styles.texteBold, { fontSize: 16, color: '#fff' }]}>Daniel Ndam</Text>
                                </View>
                                <Text style={{ color: '#9598A8' }}>Je vais te fouetter hein 🤣🤣</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', opacity: 0.5 }}>
                            <Image
                                source={require('../../../assets/png/5.png')}
                                style={styles.Image}
                            />
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                                    <Text style={[styles.texteBold, { fontSize: 16, color: '#fff' }]}>Daniel Ndam</Text>
                                </View>
                                <Text style={{ color: '#9598A8' }}>Je vais te fouetter hein 🤣🤣</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#00000015', alignItems: 'center', gap: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', borderWidth: 1, borderColor: '#DEDFE4', borderRadius: 8, alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Commentez ici'}
                                placeholderTextColor={'#fff'}
                            />
                            <More />
                        </View>
                        <Hand />
                    </View>
                </View>
            </View>
        </ImageBackground >
    );
}
const styles = StyleSheet.create({
    page: {
        gap: 16,
        flex: 1,
        justifyContent: 'center', // Centre verticalement
        alignItems: 'center', // Centre horizontalement
    },
    Image: {
        width: 50,
        height: 50,
        borderRadius: 50
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
    input: {
        fontSize: 18,
        color: '#fff',
        padding: 10,
        width: '80%'
    }
});


module.exports = Event