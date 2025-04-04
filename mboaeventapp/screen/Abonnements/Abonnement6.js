import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
// import Header from "../../components/header";
import Plus from "../../assets/icons/plus";
import Premium from "../../assets/icons/premium";

import Arrow_left from '../../assets/img/arrow-left'

const Abonnement6 = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white-content"
                backgroundColor="#041578"
                translucent={false}
            />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, backgroundColor: '#041578', paddingVertical: 10, width: '100%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#E6E8F2',
                    marginLeft: 20,
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Arrow_left />
                </TouchableOpacity>
                <Text style={{
                    color: '#fff', fontSize: 20, fontWeight: '700', fontFamily: 'TitilliumWeb-Regular',
                }}>Mes Transactions</Text>
            </View>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    marginVertical: 20,
                    width: '100%',
                }}
            >
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.items}>
                            <View style={styles.sec1}>
                                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>
                                    <View style={styles.premium}>
                                        <Premium />
                                    </View>
                                    <View>
                                        <Text style={{ color: '#767A90', }}>#4157454</Text>
                                        <Text style={{ fontWeight: '700', }}>Abonnement Premium</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: '#219653', fontSize: 20, fontWeight: '700', }}>2500 XFA</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.sec2}>
                                <View>
                                    <Text style={{ color: '#767A90', }}>Date de paiement</Text>
                                    <Text style={{ fontWeight: '700', }}>15 Mai 2023 - 12:00</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#767A90', }}>Valide jusqu'au</Text>
                                    <Text style={{ fontWeight: '700', }}>15 Mai 2024 - 13:00</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.sec3}>
                                <Text style={{ color: '#767A90', }}>Mode paiement</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                                    <Image source={require('../../assets/img1/momo.png')} />
                                    <Text style={{ fontWeight: '700', }}>Momo - 675787454</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.items}>
                            <View style={styles.sec1}>
                                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>
                                    <View style={styles.premium}>
                                        <Premium />
                                    </View>
                                    <View>
                                        <Text style={{ color: '#767A90', }}>#4157454</Text>
                                        <Text style={{ fontWeight: '700', }}>Abonnement Premium</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: '#219653', fontSize: 20, fontWeight: '700', }}>2500 XFA</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.sec2}>
                                <View>
                                    <Text style={{ color: '#767A90', }}>Date de paiement</Text>
                                    <Text style={{ fontWeight: '700', }}>15 Mai 2023 - 12:00</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#767A90', }}>Valide jusqu'au</Text>
                                    <Text style={{ fontWeight: '700', }}>15 Mai 2024 - 13:00</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.sec3}>
                                <Text style={{ color: '#767A90', }}>Mode paiement</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                                    <Image source={require('../../assets/img1/momo.png')} />
                                    <Text style={{ fontWeight: '700', }}>Momo - 675787454</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.items}>
                            <View style={styles.sec1}>
                                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>
                                    <View style={styles.premium}>
                                        <Premium />
                                    </View>
                                    <View>
                                        <Text style={{ color: '#767A90', }}>#4157454</Text>
                                        <Text style={{ fontWeight: '700', }}>Abonnement Premium</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: '#219653', fontSize: 20, fontWeight: '700', }}>2500 XFA</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.sec2}>
                                <View>
                                    <Text style={{ color: '#767A90', }}>Date de paiement</Text>
                                    <Text style={{ fontWeight: '700', }}>15 Mai 2023 - 12:00</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#767A90', }}>Valide jusqu'au</Text>
                                    <Text style={{ fontWeight: '700', }}>15 Mai 2024 - 13:00</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.sec3}>
                                <Text style={{ color: '#767A90', }}>Mode paiement</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                                    <Image source={require('../../assets/img1/momo.png')} />
                                    <Text style={{ fontWeight: '700', }}>Momo - 675787454</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.items}>
                            <View style={styles.sec1}>
                                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>
                                    <View style={styles.premium}>
                                        <Premium />
                                    </View>
                                    <View>
                                        <Text style={{ color: '#767A90', }}>#4157454</Text>
                                        <Text style={{ fontWeight: '700', }}>Abonnement Premium</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ color: '#219653', fontSize: 20, fontWeight: '700', }}>2500 XFA</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.sec2}>
                                <View>
                                    <Text style={{ color: '#767A90', }}>Date de paiement</Text>
                                    <Text style={{ fontWeight: '700', }}>15 Mai 2023 - 12:00</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#767A90', }}>Valide jusqu'au</Text>
                                    <Text style={{ fontWeight: '700', }}>15 Mai 2024 - 13:00</Text>
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.sec3}>
                                <Text style={{ color: '#767A90', }}>Mode paiement</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, }}>
                                    <Image source={require('../../assets/img1/momo.png')} />
                                    <Text style={{ fontWeight: '700', }}>Momo - 675787454</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
    },

    content: {
        flexDirection: 'column',
        gap: 15,
        width: '100%',
    },

    items: {
        flexDirection: 'column',
        gap: 8,
        width: '100%',
        borderWidth: 2,
        borderColor: '#767A90',
        borderRadius: 8,
        padding: 8,
    },

    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#767A90',
    },

    sec1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    sec2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sec3: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },

    premium: {
        backgroundColor: '#FFEDCC',
        padding: 8,
        borderRadius: 8,
    },
})

module.exports = Abonnement6