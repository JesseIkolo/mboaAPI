import React from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import IconsearchSvgComponent from "../../assets/component/SVG/iconSearch";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BynuitSvgComponent from "../../assets/component/SVG/Bynuit";
import CoeurbriseSvgComponent from "../../assets/component/SVG/coeurbrisé";
import SacSvgComponent from "../../assets/component/SVG/sac";
import CatalogueByNight from "./cataloguebynight";
import CatalogueSante from "./cataloguesante";
import CatalogueProffesionel from "./catalogueProffesionel";
import BynuitActifSvgComponent from "../../assets/component/SVG/sacActif";
import CoeurActifSvgComponent from "../../assets/component/SVG/coeurractif";
import TabViewExample from "./tabbar";

const Tab = createMaterialTopTabNavigator();

const Catalogue = () => {
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

            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#041578',
                    tabBarInactiveTintColor: '#3C4260',
                    tabBarLabelStyle: { fontSize: 12, textTransform: 'none', fontFamily: 'regularBold' },
                    tabBarStyle: { width: '100%', marginBottom: 2, borderColor: 'transparent' },
                    tabBarIndicatorStyle: {
                        backgroundColor: 'transparent'
                        // width: 118,
                        // height: 40,
                        // borderRadius: 20.96,
                        // backgroundColor: '#041578',
                        // paddingHorizontal: 12,
                        // paddingVertical: 6,
                        // display: 'flex',
                        // flexDirection: 'row',
                        // gap: 8

                    },
                    tabBarPressColor: 'transparent',



                }}


            >

                <Tab.Screen name="Bynight" component={CatalogueByNight} options={{
                    tabBarLabel: ({ focused }) => (
                        <View style={focused ? styles.activeTabStyle : styles.inactiveTabStyle}>
                            {focused ? <BynuitActifSvgComponent style={{ marginTop: 2 }} /> : <BynuitSvgComponent style={{ marginTop: 5 }} />}
                            <Text style={{ color: focused ? '#E6E8F2' : '#041578', fontFamily: 'regular', fontSize: 16 }}>By Night</Text>
                        </View>
                    ),
                }} />
                <Tab.Screen name="Sante" component={CatalogueSante}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <View style={focused ? styles.activeTabStyle : styles.inactiveTabStyle}>
                                {focused ? <CoeurActifSvgComponent /> : <CoeurbriseSvgComponent style={{ marginTop: 2 }} />}
                                <Text style={{ color: focused ? '#E6E8F2' : '#041578', fontFamily: 'regular', fontSize: 16 }}>Sante</Text>
                            </View>
                        ),
                    }}
                />
                <Tab.Screen name="Proffessional" component={CatalogueProffesionel}
                    options={{
                        tabBarLabel: ({ focused }) => (
                            <View style={focused ? styles.activeTabStyle : styles.inactiveTabStyle}>
                                <SacSvgComponent />
                                <Text style={{ color: focused ? '#E6E8F2' : '#041578', fontFamily: 'regular', fontSize: 15 }}>Proffessional</Text>
                            </View>
                        ),
                    }}
                />


            </Tab.Navigator>
            {/* <TabViewExample></TabViewExample> */}
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
        paddingVertical: 10,
    },
    scrolhorizontal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    touchtout: {
        width: 62,
        height: 40,
        borderRadius: 20.96,
        backgroundColor: '#041578',
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    texttout: {
        color: '#041578',
        fontSize: 16
    },
    touchbynuit: {
        width: 118,
        height: 40,
        borderRadius: 20.96,
        backgroundColor: '#041578',
        paddingHorizontal: 12,
        paddingVertical: 6,
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    textbynuit: {
        color: '#EAE9EF',
        fontSize: 16
    },
    touchsante: {
        width: 99,
        height: 40,
        borderRadius: 20.96,
        backgroundColor: '#E6E8F2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    touchpro: {
        width: 153,
        height: 40,
        borderRadius: 20.96,
        backgroundColor: '#E6E8F2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    activeTabStyle: {
        width: 118,
        height: 40,
        borderRadius: 20.96,
        backgroundColor: '#041578',
        paddingHorizontal: 12,
        paddingVertical: 6,
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    inactiveTabStyle: {
        width: 118,
        height: 40,
        borderRadius: 20.96,
        backgroundColor: '#E6E8F2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        display: 'flex',
        flexDirection: 'row',
        gap: 6
    },
})

module.exports = Catalogue