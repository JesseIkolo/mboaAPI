import React from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import CroixSvgComponent from "../../assets/component/SVG/croix";
import PremieumSvgComponent from "../../assets/component/SVG/premieim";
import AddSvgComponent from "../../assets/component/SVG/add";
import { useNavigation } from '@react-navigation/native';
import PersonSvgComponent from "../../assets/component/SVG/person";
import FlecheSvgComponent from "../../assets/component/SVG/fleche";
import LogoutSvgComponent from "../../assets/component/SVG/logout";
import AideSvgComponent from "../../assets/component/SVG/aide";
import ContacterSvgComponent from "../../assets/component/SVG/contaxter";
import EvenementSvgComponent from "../../assets/component/SVG/evenement";
import NotificationSvgComponent from "../../assets/component/SVG/notif";
import CataloguesSvgComponent from "../../assets/component/SVG/catalog";
import ReseauxSvgComponent from "../../assets/component/SVG/reseaux";
import MessageTextSvgComponent from "../../assets/component/SVG/messagetext";
import { useFonts } from 'expo-font';

const Profil2 = () => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        //'MaPolice': require('./fonts/tobias-bold.ttf'),
        //'tobias': require('./fonts/tobias-regular.ttf'),
        'regular': require('../../assets/component/font/TitilliumWeb-Regular.ttf'),
        'regularBold': require('../../assets/component/font/TitilliumWeb-Bold.ttf')
    });

    if (!fontsLoaded) {
        return null; // Ou un indicateur de chargement
    }
    return (

        <View style={styles.container}>
            <View style={styles.viewcroix}>
                <TouchableOpacity style={styles.btnCroix}>
                    <CroixSvgComponent></CroixSvgComponent>
                </TouchableOpacity>
            </View>
            <View style={{ width: 358 }}>
                <View style={styles.infos}>
                    <View style={styles.viewimage}>
                        <Image source={require('../../assets/component/Image/Rectangle 4159.png')} style={styles.imgprofil} />
                    </View>
                    <View style={styles.noms}>
                        <View style={styles.viewpremuim}>
                            <Text style={[{ fontFamily: 'regularBold' }, styles.textnom]}>Stéphane Priso</Text>
                            <View style={styles.premuim}>

                                <Text style={[{ fontFamily: 'regular' }, styles.textemail]}>Freemium</Text>
                            </View>
                        </View>

                        <Text style={[{ fontFamily: 'regular' }, styles.textemail]}>stephanepriso@gmail.com</Text>
                    </View>

                </View>
            </View>
            <View style={styles.btn}>
                <View style={{ width: 358 }}>
                    <TouchableOpacity style={styles.btncree} >
                        <Text style={[{ fontFamily: 'regularBold' }, styles.textcree]}>Créer un évènement</Text>
                        <AddSvgComponent />
                    </TouchableOpacity>
                </View>
                <View style={{ width: 358 }}>
                    <TouchableOpacity style={styles.btnbuissiness}>
                        <Text style={[{ fontFamily: 'regularBold' }, styles.textbuis]}>Mon Business</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.donne}>
                <View style={styles.donne1}>

                    <View style={styles.icontext}>
                        <PersonSvgComponent />
                        <Text style={[styles.textmonprofil, { fontFamily: 'regular' }]}>Mon profil</Text>
                    </View>
                    <View>
                        <FlecheSvgComponent />
                    </View>
                </View>
                <View style={styles.donne1}>

                    <View style={styles.icontext}>
                        <MessageTextSvgComponent />
                        <Text style={[styles.textmonprofil, { fontFamily: 'regular' }]}>Messages</Text>
                    </View>
                    <View>
                        <FlecheSvgComponent />
                    </View>
                </View>
                <View style={styles.donne1}>

                    <View style={styles.icontext}>
                        <ReseauxSvgComponent />
                        <Text style={[styles.textmonprofil, { fontFamily: 'regular' }]}>Mon réseau</Text>
                    </View>
                    <View>
                        <FlecheSvgComponent />
                    </View>
                </View>
                <View style={styles.donne1}>

                    <View style={styles.icontext}>
                        <CataloguesSvgComponent />
                        <Text style={[styles.textmonprofil, { fontFamily: 'regular' }]}>Catalogue</Text>
                    </View>
                    <View>
                        <FlecheSvgComponent />
                    </View>
                </View>
                <View style={styles.donnes1}>

                    <View style={styles.icontext}>
                        <NotificationSvgComponent />
                        <Text style={[styles.textmonprofil, { fontFamily: 'regular' }]}>Notifications</Text>
                        <View style={styles.trois}><Text style={[{ fontFamily: 'regularBold' }, styles.texttrois]}>3</Text></View>
                    </View>
                    <View>
                        <FlecheSvgComponent />
                    </View>
                </View>
                <View style={styles.donne1}>

                    <View style={styles.icontext}>
                        <EvenementSvgComponent />
                        <Text style={[styles.textmonprofil, { fontFamily: 'regular' }]}>Événements marqués</Text>
                    </View>
                    <View>
                        <FlecheSvgComponent />
                    </View>
                </View>
                <View style={styles.donne1}>

                    <View style={styles.icontext}>
                        <ContacterSvgComponent />
                        <Text style={[styles.textmonprofil, { fontFamily: 'regular' }]}>Nous contacter</Text>
                    </View>
                    <View>
                        <FlecheSvgComponent />
                    </View>
                </View>
                <View style={styles.donne1}>

                    <View style={styles.icontext}>
                        <AideSvgComponent />
                        <Text style={[styles.textmonprofil, { fontFamily: 'regular' }]}>Aide & FAQ</Text>
                    </View>
                    <View>
                        <FlecheSvgComponent />
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.btndeconnecter}>
                    <Text style={[styles.texdeconne, { fontFamily: 'regularBold' }]}>Se deconnecter</Text>
                    <LogoutSvgComponent />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginTop: 18,
            paddingHorizontal: 12,
            paddingVertical: 10,
            // gap:20,
            flex: 1,
            backgroundColor: '#FFFFFF'
        },
        btnCroix: {
            width: 36,
            height: 36,
            backgroundColor: '#E6E8F2',
            borderRadius: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
        viewcroix: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            flexDirection: 'row',


        },
        infos: {
            width: '94%',
            height: 88,
            backgroundColor: '#EEF0F6',
            paddingHorizontal: 12,
            paddingVertical: 12,
            // justifyContent: 'flex-end',
            flexDirection: 'row',
            gap: 6
        },
        imgprofil: {
            width: 60,
            height: 60,
            borderRadius: 500

        },
        viewimage: {
            width: 68,
            height: 68,
            borderWidth: 2,
            borderColor: '#041578',
            borderRadius: 500,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        noms: {
            marginTop: 9
        },
        premuim: {
            width: 80,
            height: 29,
            backgroundColor: '#DEE0ED',
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            paddingHorizontal: 2
        },
        viewpremuim: {
            display: 'flex',
            flexDirection: 'row',
            gap: 6
        },
        btn: {
            display: 'flex',
            flexDirection: 'column',
            gap: 6
        },
        btncree: {
            width: '94%',
            height: 53,
            backgroundColor: '#041578',
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 8
        },
        btnbuissiness: {
            width: '94%',
            height: 53,
            backgroundColor: '#E6E8F2',
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#041578',

        },
        textnom: {
            fontSize: 20,
            color: '#041578'
        },
        textemail: {
            fontSize: 14,
            color: '#041578'

        },
        textcree: {
            fontSize: 14,
            color: '#EAE9EF'
        },
        textbuis: {
            fontSize: 14,
            color: '#041578'
        },
        donne: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
        },
        donne1: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        donnes1: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FEE9E9',
            height: 45,
            paddingVertical: 12,
            borderRadius: 8
        },
        trois: {
            width: 29,
            height: 29,
            borderRadius: 200,
            backgroundColor: '#F52424',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        texttrois: {
            fontSize: 16,
            color: '#E6E8F2'
        },
        icontext: {
            display: 'flex',
            flexDirection: 'row',
            gap: 10
        },
        textmonprofil: {
            fontSize: 16,
            color: '#3C4260'
        },
        btndeconnecter: {
            width: 198,
            height: 56,
            backgroundColor: '#F52424',
            borderRadius: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10
        },
        texdeconne: {
            fontSize: 16,
            color: '#E6E8F2'
        }


    }
)

module.exports = Profil2