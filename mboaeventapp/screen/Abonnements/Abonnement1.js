import React from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet, StatusBar, ImageBackground } from "react-native";
import Premium from "../../assets/icons/premium";
import Edit from "../../assets/icons/edit";
import Music from "../../assets/icons/music";
import Camera from "../../assets/icons/camera";
import Call from "../../assets/icons/call";
import Send from "../../assets/icons/send";
import Facebook from "../../assets/icons/facebook";
import Instagram from "../../assets/icons/instagram";
import Linkedin from "../../assets/icons/linkedin";
import MapView from "react-native-maps";
import Info_circle from "../../assets/icons/info_circle";


const Abonnement1 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ width: '100%', }}>
                <View>
                    <Image
                        source={require('../../assets/img1/Overlay.png')}
                        style={styles.bg}
                    />
                    <TouchableOpacity>
                        <View style={{
                            position: 'relative',
                            width: 32,
                            padding: 8,
                            resizeMode: 'contain',
                            top: -60,
                            left: '88%',
                            backgroundColor: '#041578',
                            borderRadius: 20
                        }} >
                            <Camera />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.overlay} >
                    <View style={styles.block_pp}>
                        <Image
                            source={require('../../assets/img1/Oval.png')}
                            style={styles.pp}
                        />
                        <TouchableOpacity>
                            <View style={{
                                position: 'relative',
                                width: 32,
                                padding: 8,
                                resizeMode: 'contain',
                                top: -80,
                                left: '10%',
                                backgroundColor: '#041578',
                                borderRadius: 20
                            }} >
                                <Camera />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >

                <View style={styles.content}>
                    <View style={styles.name}>
                        <Text style={styles.nomClub}>Club O</Text>
                        <Text style={styles.sous_nomClub}>@ClubO</Text>
                    </View>

                    <View style={styles.buttons}>
                        <View style={styles.abonnement}>
                            <TouchableOpacity style={[styles.button, { borderColor: '#FFD17E', backgroundColor: '#FFEDCC', }]} onPress={()=>navigation.navigate('Abonnement2')}>
                                <Premium />
                                <Text style={{ fontSize: 16, fontWeight: '700', color: '#020931', }}>Renouveler son abonnement</Text>
                            </TouchableOpacity>
                            <View style={styles.info}>
                                <Info_circle />
                                <Text style={{ fontSize: 9, color: '#F52424', fontWeight: 'bold', }}>Votre abonnement a expiré</Text>
                                <Text style={{ fontSize: 9, color: '#F52424', }}>cliquez sur le bouton ci haut pour renouveller</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.button, { borderColor: '#041578', backgroundColor: '#E6E8F2', }]}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: '#041578', }}>Modifier son Profil</Text>
                            <Edit />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.stats}>
                        <View style={{ flexDirection: 'column', gap: 8, alignItems: 'center', }}>
                            <Text style={{ color: '#3C4260', fontSize: 14, }}>Total évènements</Text>
                            <Text style={{ color: '#041578', fontSize: 24, fontWeight: '700', }}>15</Text>
                        </View>
                        <View style={{ flexDirection: 'column', gap: 8, alignItems: 'center', }}>
                            <Text style={{ color: '#3C4260', fontSize: 14, }}>Abonnés</Text>
                            <Text style={{ color: '#041578', fontSize: 24, fontWeight: '700', }}>25K</Text>
                        </View>
                        <View style={{ flexDirection: 'column', gap: 8, alignItems: 'center', }}>
                            <Text style={{ color: '#3C4260', fontSize: 14, }}>Suivis</Text>
                            <Text style={{ color: '#041578', fontSize: 24, fontWeight: '700', }}>10</Text>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 1, backgroundColor: '#767A90', }}></View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ fontSize: 16, }}>Catégorie d'évènement: </Text>
                        <View style={styles.music} onPress={() => navigation.navigate('')}>
                            <Music />
                            <Text style={{ color: '#ffffff', fontSize: 16, }}>Musique</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <Text style={{ fontSize: 16, }}>Infos de contact</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, }}>
                            <Call />
                            <Text style={{ fontSize: 14, fontWeight: '700', }}>+237 695 754 145</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15, }}>
                            <Send />
                            <Text style={{ fontSize: 14, fontWeight: '700', }}>info@clubo.com</Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <Text style={{ fontSize: 16, }}>Description</Text>
                        <View style={styles.description}>
                            <Text style={{ color: '#767A90', fontSize: 14, }}>
                                Nulla venenatis eget dui risus adipiscing habitasse volutpat.
                                Nulla mauris libero arcu condimentum urna nec amet ut. Sagittis
                                dictum lacus venenatis ante. Ipsum fermentum augue magna sagittis
                                blandit lectus sed penatibus. Commodo at vestibulum leo tortor volutpat.
                                Lobortis nec nunc etiam nullam. Eleifend lectus dignissim in sed sem sed
                                gravida adipiscing feugiat. Fermentum in eget sit tempus sed egestas.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <Text style={{ fontSize: 16, }}>Horaires d'ouvertures</Text>
                        <View style={styles.horaire}>
                            <View style={styles.jour}>
                                <Text>Lundi</Text>
                            </View>
                            <View style={styles.heure}>
                                <Text>08h00-18h00</Text>
                            </View>
                        </View>
                        <View style={styles.horaire}>
                            <View style={styles.jour}>
                                <Text>Mardi</Text>
                            </View>
                            <View style={styles.heure}>
                                <Text>08h00-18h00</Text>
                            </View>
                        </View>
                        <View style={styles.horaire}>
                            <View style={styles.jour}>
                                <Text>Mercredi</Text>
                            </View>
                            <View style={styles.heure}>
                                <Text>08h00-18h00</Text>
                            </View>
                        </View>
                        <View style={styles.horaire}>
                            <View style={styles.jour}>
                                <Text>Jeudi</Text>
                            </View>
                            <View style={styles.heure}>
                                <Text>08h00-18h00</Text>
                            </View>
                        </View>
                        <View style={styles.horaire}>
                            <View style={styles.jour}>
                                <Text>Vendredi</Text>
                            </View>
                            <View style={styles.heure}>
                                <Text>08h00-18h00</Text>
                            </View>
                        </View>
                        <View style={styles.horaire}>
                            <View style={styles.jour}>
                                <Text>Samedi</Text>
                            </View>
                            <View style={[styles.heure, { backgroundColor: '#FEE9E9', alignItems: 'center', }]}>
                                <Text>Fermé</Text>
                            </View>
                        </View>
                        <View style={styles.horaire}>
                            <View style={styles.jour}>
                                <Text>Dimanche</Text>
                            </View>
                            <View style={[styles.heure, { backgroundColor: '#FEE9E9', alignItems: 'center', }]}>
                                <Text>Fermé</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <Text style={{ fontSize: 16, color: '#041578', fontWeight: '700', }}>Carte</Text>
                        <MapView
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}

                            style={{
                                width: '100%',
                                height: 200,
                            }}
                        />
                    </View>

                    <View style={styles.item}>
                        <Text style={{ fontSize: 16, color: '#041578', fontWeight: '700', }}>Menu</Text>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{
                                flexDirection: 'row',
                                gap: 25,
                            }}
                        >
                            <Image source={require('../../assets/img1/image 14.png')} style={{ width: 120, height: 120, }} />
                            <Image source={require('../../assets/img1/image 15.png')} style={{ width: 120, height: 120, }} />
                            <Image source={require('../../assets/img1/image 16.png')} style={{ width: 120, height: 120, }} />
                        </ScrollView>
                    </View>

                    <View style={styles.item}>
                        <Text style={{ fontSize: 16, color: '#041578', fontWeight: '700', }}>Historique des photos</Text>
                        <View style={{ flexDirection: 'column', gap: 10, }}>
                            <View style={{ flexDirection: 'row', gap: 10, }}>
                                <Image source={require('../../assets/img1/Image.png')} style={styles.photos} />
                                <Image source={require('../../assets/img1/Image-1.png')} style={styles.photos} />
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, }}>
                                <Image source={require('../../assets/img1/Image-2.png')} style={styles.photos} />
                                <TouchableOpacity style={{ width: '49%', borderRadius: 8, }}>
                                    <ImageBackground source={require('../../assets/img1/Image-2.png')} style={styles.more}>
                                        <View style={styles.overlays} />
                                        <Text style={{ fontSize: 48, color: '#ffffff', fontWeight: '700', }}>+22</Text>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.item}>
                        <Text style={{ fontSize: 16, color: '#041578', fontWeight: '700', }}>Liens Sociaux</Text>
                        <View style={styles.social}>
                            <TouchableOpacity>
                                <Facebook />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Instagram />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Linkedin />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },

    bg: {
        width: '100%',
        height: '100%',
        height: 191,
        resizeMode: 'cover',
        marginRight: 20,
        position: 'relative',
        zIndex: -1
    },

    overlay: {
        position: 'absolute',
        top: 200,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        height: 70,
        width: '100%',
        zIndex: -1,
        borderRadius: 30,
    },

    block_pp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    pp: {
        position: 'relative',
        top: -45,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        width: 110,
        height: 110,
    },
    nomClub: {
        fontSize: 20,
        fontWeight: '700',
        color: '#041578',
    },
    sous_nomClub: {
        color: '#767A90',
        fontSize: 14,
        fontWeight: '400'
    },

    content: {
        width: '100%',
        flexDirection: 'column',
        gap: 20,
        padding: 16,
    },

    name: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    item: {
        flexDirection: 'column',
        gap: 8,
    },

    buttons: {
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    abonnement:{
        width: '100%',
    },

    info: {
        marginTop: 10,
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        backgroundColor: '#FEE7E7',
        width: '100%',
        borderRadius: 4,
        gap: 4,
    },

    button: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderWidth: 2,
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 32,
    },

    stats: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    music: {
        width: 150,
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#041578',
        borderRadius: 21,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    description: {
        width: '100%',
        padding: 8,
        backgroundColor: '#F5F5F6',
        borderRadius: 8,
        borderBottomColor: '#041578',
        borderBottomWidth: 1,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    horaire: {
        flexDirection: 'row',
        gap: 5,
        width: '100',
    },

    jour: {
        width: '60%',
        height: 31,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#F5F5F6',
    },

    heure: {
        width: '40%',
        height: 31,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#F5F5F6',
    },

    overlays: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajoutez l'opacité souhaitée ici
    },

    more: {
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'brightness(90%) contrast(120%)',
    },

    photos: {
        width: '49%',
        height: 120,
        borderRadius: 8,
    },

    social: {
        flexDirection: 'row',
        gap: 10,
    },
})

module.exports =  Abonnement1