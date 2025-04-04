import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
// import Header from "../components1/header";
import Info_circle from "../../assets/icons/info_circle";
import Music from "../../assets/icons/music";
import CustomTextInput from "../components1/input";
import Vignette from "../components1/Vignette";
import File from "../components1/file";
import Inputs from "../components1/Inputs";
import Calendar from "../../assets/icons/calendar";
import Map from "../../assets/icons/map";
import Free from "../../assets/icons/free";
import Payant from "../../assets/icons/payant";
import Global from "../../assets/icons/global";
import Share from "../../assets/icons/share";
import Delete from "../../assets/icons/delete";
import Arrow_left from '../../assets/img/arrow-left'


const CreateEventDesign4 = ({ navigation }) => {
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
                backgroundColor="#fff"
                translucent={false}
            />
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, backgroundColor: '#fff', paddingVertical: 10, paddingVertical: 10, borderColor: '#041578', borderBottomWidth: 1 }}>
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
                <Text style={{
                    color: '#041578', fontSize: 20, fontWeight: '700', fontFamily: 'TitilliumWeb-Regular',
                }}>Créer un évènement</Text>
            </View>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    marginVertical: 20,
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
                        <Text style={styles.label}>Type d'évènement</Text>
                        <View style={{
                            flexDirection: 'row',
                            gap: 5,
                        }}>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#F2F2F2', }]}>
                                <Global />
                                <Text>Tout le monde</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#041578', }]}>
                                <Share />
                                <Text style={{ color: '#ffffff', }}>Mon réseau</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
                    <View style={styles.textInput}>
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text) => setText(text)}
                            value={text}
                            placeholder="Iaculis egestas semper odio ultrices laoreet ullamcorper cursus risus. Duis sodales cras ipsum nec. Ipsum elementum sed turpis tortor eget imperdiet amet egestas sed. Morbi quam euismod mi varius leo vestibulum. Euismod natoque pulvinar metus ac.
                                        Dignissim viverra bibendum vel in gravida quis lacus."
                        />
                    </View>
                    <View style={styles.textInput}>
                        <Text style={styles.label}>Selectionnez la plage de date et d'heure</Text>
                        <View style={{
                            flexDirection: 'column',
                            gap: 5,
                        }}>
                            <Inputs
                                title="Date et heure de début"
                                icon={<Calendar />}
                            />
                            <Inputs
                                title="Date et heure de fin"
                                icon={<Calendar />}
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <Text style={styles.label}>Localisation</Text>
                        <View style={{
                            flexDirection: 'column',
                            gap: 5,
                        }}>
                            <Inputs
                                title="Doula, Bonamoussadi, Rue 28"
                                icon={<Map />}
                            />
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <Text style={styles.label}>Type d'évènement</Text>
                        <View style={{
                            flexDirection: 'row',
                            gap: 5,
                        }}>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#041578', }]}>
                                <Free />
                                <Text style={{ color: '#ffffff', }}>Gratuit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#F2F2F2', }]} onPress={() => navigation.navigate('CreateEventDesign')}>
                                <Payant />
                                <Text>Payant</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.textInput}>
                        <Text style={styles.label}>Proposez vous un menu ?</Text>
                        <View style={{
                            flexDirection: 'row',
                            gap: 5,
                        }}>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#041578', }]}>
                                <Text style={{ color: '#ffffff', }}>Non</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, { backgroundColor: '#F2F2F2', }]} onPress={() => navigation.navigate('')}>
                                <Text>Oui</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.options}>
                    {options.map(option => (
                        <View key={option} style={{ flexDirection: 'row', }}>
                            <TouchableOpacity style={styles.checkbox} onPress={() => pickLanguage(option)}>
                                {languages.includes(option) && <Text style={{ alignSelf: 'center', fontSize: 10, }}>✔️</Text>}
                            </TouchableOpacity>
                            <Text style={{ fontSize: 12, textAlign: 'center', }}>{option}</Text>
                        </View>
                    ))}
                </View>

                <View style={{ marginTop: 40, }}>
                    <TouchableOpacity style={styles.valid} onPress={() => navigation.navigate('CreateSuccessDesign')}>
                        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: '700', }}>Créer un évènement</Text>
                    </TouchableOpacity>
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

    textArea: {
        width: '100%',
        height: 172,
        padding: 10,
        backgroundColor: '#F5F6F6',
        borderRadius: 16,
        textAlignVertical: 'top',
    },

    button: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: '49%',
        height: 53,
    },

    valid: {
        backgroundColor: '#041578',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: '100%',
        height: 53,
    },

    options: {
        alignSelf: 'flex-start',
        marginTop: 20,
    },

    checkbox: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#CBD5E1',
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
})

module.exports = CreateEventDesign4