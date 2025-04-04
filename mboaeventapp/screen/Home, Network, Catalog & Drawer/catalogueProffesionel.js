import React from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import IconsearchSvgComponent from "../../assets/component/SVG/iconSearch";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const CatalogueProffesionel = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cont1}>
                <Text style={[{ fontFamily: 'regularBold' }, styles.text1]}>Rechercher un évènement, ou scroller pour parcourir</Text>
            </View>
            <View style={styles.fin}>
                <TextInput style={styles.textinpunt} placeholder="Rechercher dans l’application ..." />
                <TouchableOpacity style={styles.btnrechercher}>
                    <IconsearchSvgComponent />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        gap: 10,

        // marginTop: 1
    },
    contscrol: {
        flex: 1,
    },
    scrollcontain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 14,
        gap: 20
    },
    text1: {
        color: '#020931',
        fontSize: 15
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
    },
    cont1: {
        paddingHorizontal: 8,
        paddingVertical: 14,
    },

})

module.exports = CatalogueProffesionel