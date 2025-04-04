import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
// import Header from "../components1/header";
import Info_circle from "../../assets/icons/info_circle";
import Music from "../../assets/icons/music";
import CustomTextInput from "../components1/input";
// import Vignette from "../components1/Vignette";
// import File from "../../components1/file";
// import Inputs from "../../components1/Inputs";
// import Calendar from "../../assets/icons/calendar";
import Map from "../../assets/icons/map";
import Free from "../../assets/icons/free";
import Payant from "../../assets/icons/payant";
import Delete from "../../assets/icons/delete";
import Close from "../../assets/icons/close";
import DoubleCheck from "../../assets/icons/doubleCheck";
import Arrow_left from '../../assets/img/arrow-left'


const EditEventSave = ({ navigation }) => {
    const [text, setText] = useState('');
    const [languages, setLanguages] = useState([])
    const options = ['En créant un évènement, vous acceptez nos Termes et conditions']

    function pickLanguage(selectLanguage) {
        // const index = languages.findIndex(Language => Language === selectLanguage)

        if (languages.includes(selectLanguage)) {
            setLanguages(languages.filter(Language => Language !== selectLanguage))
            return;
        }

        setLanguages(Languages => Languages.concat(selectLanguage))
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white-content"
                backgroundColor="#1E2448"
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
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    marginVertical: 10,
                    width: '100%',
                }}
            >
                <View>
                    <Text style={{ fontSize: 16, color: '#1E2448', }}>Catégorie d'évènement</Text>
                </View>

                <View style={styles.info}>
                    <Info_circle />
                    <Text style={{ fontSize: 9, color: '#F2994A', fontWeight: 'bold', }}>Définie par défaut</Text>
                    <Text style={{ fontSize: 9, color: '#F2994A', }}>par la catégorie de votre bussiness</Text>
                </View>

                <Pressable style={styles.music} onPress={() => navigation.navigate('')}>
                    <Music />
                    <Text style={{ color: '#ffffff', fontSize: 16, }}>Musique</Text>
                </Pressable>

                <View style={styles.form}>
                    <View style={styles.textInput}>
                        <Text style={styles.label}>Nom de l'évènement</Text>
                        <CustomTextInput title="Ex: Mariage de Aline & Christian" />
                    </View>
                    <View style={styles.textInput}>
                        <Text style={styles.label}>Image de couverture</Text>
                        {/* <Vignette /> */}
                        <View style={styles.image}>
                            <ImageBackground style={styles.img} source={require('../../assets/img1/IMG.png')}>
                                <View style={styles.delete}>
                                    <TouchableOpacity>
                                        <Delete />
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <Text style={styles.label}>Galerie</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    gap: 8,
                                }}
                            >
                                <Image source={require('../../assets/img1/gal1.png')} style={styles.gal} />
                                <Image source={require('../../assets/img1/gal4.png')} style={styles.gal} />
                                <Image source={require('../../assets/img1/gal2.png')} style={styles.gal} />
                                <Image source={require('../../assets/img1/gal3.png')} style={styles.gal} />
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.boxSuccess}>
                        <View style={styles.close}>
                            <TouchableOpacity>
                                <Close />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 20, }}>
                            <DoubleCheck />
                            <View style={{ flexDirection: 'column', gap: 5, width: 250, }}>
                                <Text style={{ fontSize: 20, color: '#219653', fontWeight: '700', }}>Succes</Text>
                                <Text style={{ fontSize: 14, color: '#767A90', }}>
                                    L'évènement a été modifié, vous serez
                                    redirigiré vers lestous les évènements dans
                                    <Text style={{ color: '#041578', }}> 00.05</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },

    info: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        backgroundColor: '#FDF2E7',
        borderRadius: 4,
        gap: 4,
    },

    music: {
        marginTop: 10,
        width: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#041578',
        borderRadius: 21,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    form: {
        marginTop: 20,
        flexDirection: 'column',
        gap: 16,
    },

    textInput: {
        flexDirection: 'column',
        gap: 10,
        width: '100%',
    },

    label: {
        fontSize: 16,
        color: '#1E2448',
        fontWeight: '400',
    },

    image: {
        width: '100%',
        height: 127,
        borderRadius: 8,
    },

    img: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },

    delete: {
        position: 'absolute',
        right: 0,
        margin: 8,
    },

    gal: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },

    boxSuccess: {
        width: '100%',
        padding: 8,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F6',
        borderRadius: 8,
        borderTopColor: '#219653',
        borderTopWidth: 2,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        elevation: 10,
    },

    close: {
        position: 'absolute',
        right: 0,
        margin: 10,
    },
})

module.exports = EditEventSave