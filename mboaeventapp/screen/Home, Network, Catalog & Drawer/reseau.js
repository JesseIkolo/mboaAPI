import React from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import IconReseauIm1SvgComponent from "../../assets/component/SVG/imgReseau1";
import IconsearchSvgComponent from "../../assets/component/SVG/iconSearch";
import { useNavigation } from '@react-navigation/native';

const Reseau = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.img} >
                <IconReseauIm1SvgComponent />
            </View>
            <View>
                <View><Text style={[styles.textnouveau, { fontFamily: 'regularBold' }]}>Nouveau dans votre réseau?</Text></View>

                <View>
                    <Text style={[styles.textexplicatif, { fontFamily: 'regular' }]}>Il y a encore aucun évènement dans votre réseau</Text>
                    <Text style={[styles.textexplicatif, { fontFamily: 'regular' }]}>Recherchez et ajoutez un ami ou un partenaire </Text>
                    <Text style={[styles.textexplicatif, { fontFamily: 'regular' }]}>pour commencer à batir votre réseau</Text>
                </View>
            </View>
            <View style={styles.fin}>
                <TextInput style={styles.textinpunt} placeholder="Rechercher dans l’application ..." />
                <TouchableOpacity style={styles.btnrechercher} onPress={() => navigation.navigate('Reseau2')}>
                    <IconsearchSvgComponent />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        gap: 28,

        // justifyContent:'center',
        // alignItems:'center'
    },
    img: {
        marginTop: 28,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textnouveau: {
        textAlign: 'center',
        fontSize: 20,
        color: '#041578'
    },
    textexplicatif: {
        textAlign: 'center',
        fontSize: 16,
        color: '#767A90'
    },
    textinpunt: {
        backgroundColor: '#E6E8F2',
        width: 256,
        height: 53,
        borderRadius: 8,
        paddingHorizontal: 13

    },
    btnrechercher: {
        backgroundColor: '#041578',
        width: 53,
        height: 53,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fin: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    }

})

module.exports = Reseau