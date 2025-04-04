import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native';



const Abonnement3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/img1/Abonnement1.png')}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                blurRadius={5}
            >
                <View style={styles.overlays} />
                <View style={styles.abonnement}>
                    <View
                        style={{
                            backgroundColor: '#D9D9D9',
                            width: 89,
                            height: 6,
                        }}
                    />

                    <View>
                        <Text style={{ color: '#041578', fontSize: 20, fontWeight: '700', }}>Payer son abonnement</Text>
                    </View>

                    <View style={styles.elements}>
                        <TouchableOpacity style={styles.el} onPress={() => navigation.navigate('Abonnement5')}>
                            <Image
                                source={require('../../assets/img1/Payments2.png')}
                            />
                            <Text style={{ color: '#041578', fontSize: 16, fontWeight: '700', }}>MTN Momo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.el} onPress={() => navigation.navigate('Abonnement5')}>
                            <Image
                                source={require('../../assets/img1/Payments3.png')}
                            />
                            <Text style={{ color: '#041578', fontSize: 16, fontWeight: '700', }}>Orange Money</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.el} onPress={() => navigation.navigate('Abonnement5')}>
                            <Image
                                source={require('../../assets/img1/Payments1.png')}
                            />
                            <Text style={{ color: '#041578', fontSize: 16, fontWeight: '700', }}>VISA/Master</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

module.exports = Abonnement3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlays: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajoutez l'opacité souhaitée ici
    },

    abonnement: {
        flexDirection: 'column',
        gap: 24,
        width: '100%',
        marginTop: 'auto',
        backgroundColor: '#fff',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        padding: 16,
        alignItems: 'center',
    },

    elements: {
        flexDirection: 'column',
        gap: 8,
        width: '100%',
    },

    el: {
        backgroundColor: '#F5F5F6',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 16,
        borderRadius: 10,
    },
})