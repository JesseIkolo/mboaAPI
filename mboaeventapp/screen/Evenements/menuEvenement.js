import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Eye from "../../assets/icons/eye";
import Delete2 from "../../assets/icons/delete2";
import Chart from "../../assets/icons/chart";
import Lives from "../../assets/icons/lives";
import Share2 from "../../assets/icons/share2";
import Next2 from "../../assets/icons/next2";


const MenuEvenement = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/img1/Homepage.png')}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                blurRadius={5}
            >
                <View style={styles.overlays} />
                <View style={styles.publicité}>
                    <View
                        style={{
                            backgroundColor: '#D9D9D9',
                            width: 89,
                            height: 6,
                        }}
                    />

                    <View style={styles.elements}>
                        <TouchableOpacity style={styles.el} onPress={() => navigation.navigate('EditEvent')}>
                            <View style={{ flexDirection: 'row', gap: 5, }}>
                                <Eye />
                                <Text style={{ color: '#3C4260', fontSize: 16, }}>Voir/Modifier l'evenement</Text>
                            </View>
                            <Next2 />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.el} onPress={() => navigation.navigate('')}>
                            <View style={{ flexDirection: 'row', gap: 5, }}>
                                <Lives />
                                <Text style={{ color: '#3C4260', fontSize: 16, }}>Voir les lives</Text>
                            </View>
                            <Next2 />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.el} onPress={() => navigation.navigate('')}>
                            <View style={{ flexDirection: 'row', gap: 5, }}>
                                <Chart />
                                <Text style={{ color: '#3C4260', fontSize: 16, }}>Statistiques</Text>
                            </View>
                            <Next2 />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.el} onPress={() => navigation.navigate('')}>
                            <View style={{ flexDirection: 'row', gap: 5, }}>
                                <Share2 />
                                <Text style={{ color: '#3C4260', fontSize: 16, }}>Partager</Text>
                            </View>
                            <Next2 />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.el} onPress={() => navigation.navigate('DeleteEvenement')}>
                            <View style={{ flexDirection: 'row', gap: 5, }}>
                                <Delete2 />
                                <Text style={{ color: '#F52424', fontSize: 16, }}>Supprimer</Text>
                            </View>
                            <Next2 />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

module.exports = MenuEvenement

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

    publicité: {
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
        width: '100%',
    },

    el: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
})