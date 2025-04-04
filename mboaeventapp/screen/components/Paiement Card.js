import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';

import Message from '../../assets/img/message-text'
import More from '../../assets/img/more'

const partcipant = ({ id, abon, prix, date_paiement, heure_paiement, valide_paiement, valide_heure_paiement, user_pp, user_name, paiement_pp, paiement_name, numero, ImageComposent, style_ImageComposent }) => {
    return (
        <View style={styles.container}>
            <View style={styles.haut}>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
                    <View style={style_ImageComposent}>
                        <ImageComposent />
                    </View>
                    <View>
                        <Text style={{ color: '#767A90' }}>{id}</Text>
                        <Text style={{ color: '#1E2448', fontWeight: '700' }}>{abon}</Text>
                    </View>
                </View>
                <Text style={{ color: '#219653', fontWeight: '700', fontSize: 20 }}>{prix}</Text>
            </View>
            <View style={{ height: 2, backgroundColor: '#DEDFE4' }}></View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <View>
                        <Text style={{ color: '#767A90', fontSize: 14 }}>Date de paiement</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '600',
                                color: '#585D77'
                            }}>{date_paiement}</Text>
                            <View style={{ backgroundColor: '#D9D9D9', height: 6, width: 6, borderRadius: 20 }}></View>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '600',
                                color: '#585D77'
                            }}>{heure_paiement} </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: '#767A90', fontSize: 14 }}>Date de paiement</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '600',
                                color: '#585D77'
                            }}>{valide_paiement}</Text>
                            <View style={{ backgroundColor: '#D9D9D9', height: 6, width: 6, borderRadius: 20 }}></View>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: '600',
                                color: '#585D77'
                            }}>{valide_heure_paiement} </Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: 2, backgroundColor: '#DEDFE4' }}></View>
                <View style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <Text>Utilisateur concerné</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                        <Image
                            source={user_pp}
                            style={styles.Photo_Profile}
                        />
                        <Text style={{ fontWeight: 700 }}>{user_name} </Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 2, backgroundColor: '#DEDFE4' }}></View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                <Text style={{ color: '#767A90' }}>Mode de paiement:</Text>
                <Image
                    source={paiement_pp}
                    style={styles.paiement_photo_Profile}
                />
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#585D77'
                    }}>{paiement_name}</Text>
                    <View style={{ backgroundColor: '#D9D9D9', height: 6, width: 6, borderRadius: 20 }}></View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '600',
                        color: '#585D77'
                    }}>{numero} </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 16,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    haut: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    Photo_Profile: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    paiement_photo_Profile: {
        maxWidth: 30,
        maxHeight: 30,
    }
});

export default partcipant;