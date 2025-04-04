import React from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


const DeleteEvenement = ({ navigation }) => {
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
                <View style={styles.delete}>
                    <View
                        style={{
                            backgroundColor: '#D9D9D9',
                            width: 89,
                            height: 6,
                        }}
                    />

                    <View>
                        <Text style={{ color: '#041578', fontSize: 20, fontWeight: '700', textAlign: 'center',}}>Voulez vous vraiment supprimer cet evenement ?</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#041578', fontSize: 16, textAlign: 'center',}}>Cette action est irreversible, pensez-y avant de valider cette opération.</Text>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#E6E8F2',}]} onPress={()=>navigation.navigate('Events')}>
                            <Text style={{fontSize: 16, color: '#041578', fontWeight: '700',}}>Non, annuler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#F74949',}]} onPress={()=>navigation.navigate('Events')}>
                            <Text style={{fontSize: 16, color: '#fff', fontWeight: '700',}}>Oui, supprimer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

module.exports = DeleteEvenement

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

    delete: {
        flexDirection: 'column',
        gap: 14,
        width: '100%',
        marginTop: 'auto',
        backgroundColor: '#fff',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        padding: 16,
        alignItems: 'center',
    },

    buttons:{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },

    button:{
        width: '48%',
        alignItems: 'center',
        paddingVertical: 16,
        borderRadius: 8,
    },

})