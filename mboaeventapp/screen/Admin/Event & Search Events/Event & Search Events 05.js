import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Animated, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import Inbox_1 from '../../../assets/img/Inbox_1'
import Musique from '../../../assets/img/Vector (2)'
import Arrow_left from '../../../assets/img/arrow-left'
import Bookmark from '../../../assets/img/bookmark'
import Ellipse from '../../../assets/img/Ellipse 1 (1)'
import Frame_33939 from '../../../assets/img/Frame 33939'
import Frame_33937 from '../../../assets/img/Frame 33937'
import Facebook from '../../../assets/img/Facebook'
import Instagram from '../../../assets/img/Instagram'
import Linkedin from '../../../assets/img/Linkedin'
import Video from '../../../assets/img/video'
import Heart from '../../../assets/img/heart'
import Messages_2 from '../../../assets/img/messages-2'
import Send_3 from '../../../assets/img/send-3'
import Arrow_right from '../../../assets/img/arrow-right'
import Camera1 from '../../../assets/img/camera1'

import EventCardVerticalCostum from '../../components/EventCardVerticalCostum'
import Bouton from '../../components/bouton'
import Map from '../../components/map'
import Trie from '../../components/trie'
import Slide from '../../components/slide'
import Bouton1 from '../../components/bouton1'
import { G } from 'react-native-svg';

function Event({ navigation },) {
    const [selectedValue, setSelectedValue] = useState('Selectionné');

    const options = [
        { label: 'Selectionné', value: 'Selectionné' },
        // { label: 'Selectionner?', value: 'Selectionner?' },
    ];

    return (
        <View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, position: 'absolute', zIndex: 1, width: '100%', top: 40 }}>
                    <TouchableOpacity style={{ backgroundColor: '#E6E8F2', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }} onPress={() => navigation.goBack()}>
                        <Arrow_left />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: '#E6E8F2', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                        <Bookmark />
                    </View>
                </View>
                <Slide />
                <View style={styles.column}>
                    <View style={styles.haut}>
                        <View style={styles.gauche}>
                            <Text style={styles.gauche_text}>Détails</Text>
                            <View style={styles.boton}></View>
                        </View>

                        <TouchableOpacity style={styles.droite} onPress={() => navigation.navigate('Event_Search_Events_10')}>
                            <Text style={styles.droite_text}>Statistiques</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.haut2}>
                        <View style={styles.block_logo}>
                            <Image
                                source={require('../../../assets/png/Oval (3).png')}
                                style={styles.Photo_Profile}
                            />
                            <View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Text>par </Text>
                                    <Text style={styles.titre_Bold}>Club O</Text>
                                </View>
                                <Text style={styles.timer}>Il y a 3min</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.suivre}>+   Suivre</Text>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#DEDFE4',
                        height: 1,
                        width: '90%',
                        marginLeft: '5%'
                    }}></View>
                    <View style={styles.sousPage}>
                        <View style={styles.categorie}>
                            <View style={styles.categorie_menu_actif}>
                                <Musique />
                                <Text style={styles.categorie_menu_titre_actif}>Musique</Text>
                            </View>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.titre}>Concert de Maalhox le Viber</Text>
                            <View style={styles.row}>
                                <Text style={styles.place}>250 places</Text>
                                <Ellipse />
                                <Text style={styles.lieu}>Au PaPoSy de Yaoundé</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.prix}>25,000 XAF</Text>
                                <View style={styles.Block_Photo_participant}>
                                    <Image
                                        source={require('../../../assets/png/Oval (3).png')}
                                        style={[styles.Photo_participant]}
                                    />
                                    <Image
                                        source={require('../../../assets/png/Oval (4).png')}
                                        style={[styles.Photo_participant, { right: 10 }]}
                                    />
                                    <Image
                                        source={require('../../../assets/png/Oval Copy 4.png')}
                                        style={[styles.Photo_participant, { right: 20 }]}
                                    />
                                </View>
                                <Text style={{ position: 'relative', right: 22 }}>+ 20 personnes participent</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{
                                fontFamily: 'TitilliumWeb-Regular',
                                fontWeight: '700',
                                fontSize: 16,
                                color: '#041578'
                            }}>Description</Text>
                            <Text style={{
                                fontFamily: 'TitilliumWeb-Regular',
                                fontWeight: '400',
                                fontSize: 12,
                                color: '#3C4260'
                            }}>Arcu in elit cursus volutpat massa vulputate. Nisl sollicitudin curabitur pharetra id porta sollicitudin aliquet. Rutrum amet volutpat adipiscing gravida a elementum aenean. Vitae sed convallis
                                <Text style={{
                                    fontFamily: 'TitilliumWeb-Regular',
                                    fontWeight: '400',
                                    fontSize: 12,
                                    color: '#3C4260'
                                }}>
                                    ...Voir Plus
                                </Text>
                            </Text>
                        </View>
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 10 }}>
                                <Frame_33937 />
                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Text style={{
                                        fontFamily: 'TitilliumWeb-Regular',
                                        fontWeight: '700',
                                        fontSize: 14,
                                        color: '#020931'
                                    }}>10 Juin 2023 - 12 Juillet 2023</Text>
                                    <Text style={{
                                        fontFamily: 'TitilliumWeb-Regular',
                                        fontWeight: '400',
                                        fontSize: 12,
                                        color: '#3C4260'
                                    }}>De 22h - 7h</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 10 }}>
                                <Frame_33939 />
                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Text style={{
                                        fontFamily: 'TitilliumWeb-Regular',
                                        fontWeight: '700',
                                        fontSize: 14,
                                        color: '#020931'
                                    }}>
                                        Yaoundé Cameroun
                                    </Text>
                                    <Text style={{
                                        fontFamily: 'TitilliumWeb-Regular',
                                        fontWeight: '400',
                                        fontSize: 12,
                                        color: '#3C4260'
                                    }}>
                                        Au PaPoSy de Yaoundé
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <Text style={styles.titre_Bold}>Carte</Text>
                            <Map />
                        </View>
                        <View>
                            <Text style={styles.titre_Bold}>Catégorie d'évènement</Text>

                            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{
                                // backgroundColor: 'red',
                            }}>
                                <Image
                                    source={require('../../../assets/png/image 14.png')}
                                    style={styles.menu}
                                />
                                <Image
                                    source={require('../../../assets/png/image 15.png')}
                                    style={styles.menu}
                                />
                                <Image
                                    source={require('../../../assets/png/image 16.png')}
                                    style={styles.menu}
                                />
                            </ScrollView>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                            marginTop: 36
                        }}>
                            <Text style={styles.titre_Bold}>Historiques des Photos</Text>

                            <View style={styles.block_Historique_Photo}>
                                <Image
                                    source={require('../../../assets/png/Image (4).png')}
                                    style={styles.Historique_Photo}
                                />
                                <Image
                                    source={require('../../../assets/png/Image (5).png')}
                                    style={styles.Historique_Photo}
                                />
                                <Image
                                    source={require('../../../assets/png/Image (6).png')}
                                    style={styles.Historique_Photo}
                                />
                                <View style={styles.Historique_Photo_More}>
                                    <Image
                                        source={require('../../../assets/png/Image (6).png')}
                                        style={styles.Historique_Photo}
                                    />
                                    <View style={styles.overlay}>
                                        <Text style={styles.overlayText}>+ 22</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                            marginTop: 36
                        }}>
                            <Text style={styles.titre_Bold}>Historiques des Lives</Text>

                            <View style={styles.block_Historique_Photo}>
                                <View style={styles.Historique_Photo_More}>
                                    <Image
                                        source={require('../../../assets/png/1.png')}
                                        style={[styles.Historique_Photo, { width: 120, height: 120 }]}
                                    />
                                    <View style={[styles.overlay, { width: 120, height: 120 }]}>
                                        <Video />
                                    </View>
                                </View>
                                <View style={styles.Historique_Photo_More}>
                                    <Image
                                        source={require('../../../assets/png/2.png')}
                                        style={[styles.Historique_Photo, { width: 120, height: 120 }]}
                                    />
                                    <View style={[styles.overlay, { width: 120, height: 120 }]}>
                                        <Video />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                            marginTop: 36
                        }}>
                            <Text style={styles.titre_Bold}>Interactions</Text>

                            <View style={styles.bas}>
                                <View style={styles.bas_element}>
                                    <Heart />
                                    <Text style={styles.texte}>+23 J’aime</Text>
                                </View>
                                <View style={styles.bas_element}>
                                    <Messages_2 />
                                    <Text style={styles.texte}>+58 Commentaires</Text>
                                </View>
                                <View style={styles.bas_element}>
                                    <Send_3 />
                                    <Text style={styles.texte}>+54M Partages</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >


            <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', bottom: 0, left: 0, backgroundColor: '#fff', elevation: 20, padding: 20, width: '100%', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Events_Details')} style={styles.Bouton_block}>
                    <Bouton1 block={[styles.button, { height: 60, marginBottom: 0 }]} texte={'Je veux participer'} ImageComposent={Arrow_right} />
                </TouchableOpacity>

                <Bouton1 block={[styles.btn_style_live_local, { height: 40, marginBottom: 0, gap: 10 }]} texte={'LIVE'} ImageComposent={Camera1} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        // paddingHorizontal: 16,
        // paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        gap: 16,
        justifyContent: 'flex-start',
        height: '100%',
        // padding: 20,
        marginHorizontal: 20,
        elevation: 20,
        width: '90%',
        backgroundColor: '#fff',
        position: 'relative',
        top: -40,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    TitreBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%'
    },
    titre_Bold: {
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#041578'
    },
    Photo_Profile: {
        width: '100%',
        resizeMode: 'cover'
    },
    haut: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    gauche: {
        borderTopLeftRadius: 20,
        width: '50%',
        backgroundColor: '#FEF0F0',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    gauche_text: {
        height: 65,
        paddingTop: 20,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#041578',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '700',
    },
    boton: {
        backgroundColor: '#F52424',
        height: 5,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    droite: {
        borderTopLeftRadius: 20,
        width: '50%',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderColor: '#767A90',
        borderBottomWidth: 1
    },
    droite_text: {
        height: 65,
        paddingTop: 20,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#3C4260',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 16,
        fontWeight: '400',
    },
    haut2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        width: '100%',
    },
    block_logo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16
    },
    Photo_Profile: {
        borderRadius: 50,
        width: 50,
        height: 50
    },
    Photo: {
        height: 200,
        width: '100%'
    },
    Photo_Block: {
        resizeMode: 'cover'
    },
    suivre: {
        backgroundColor: '#FEE9E9',
        padding: 8,
        borderRadius: 4,
        color: '#F52424',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 12,
        fontWeight: '400',
    },
    categorie_menu_actif: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#041578',
        borderRadius: 20,
        gap: 8,
        alignItems: 'center',
        marginRight: 12
    },
    categorie_menu_titre_actif: {
        color: '#fff'
    },
    categorie: {
        width: 125
    },
    sousPage: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 16,
        // paddingBottom: 26,
        gap: 16,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
    info: {
        // paddingHorizontal: 16,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    titre: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 16,
        color: '#041578'
    },
    place: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 14,
        color: '#3C4260'
    },
    lieu: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '400',
        fontSize: 14,
        color: '#3C4260'
    },
    prix: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#020931',
        backgroundColor: '#FFDE00',
        padding: 10,
    },
    Block_Photo_participant: {
        display: 'flex',
        flexDirection: 'row'
    },
    Photo_participant: {
        width: 30,
        height: 30,
        position: 'relative',
    },
    block_Historique_Photo: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    Historique_Photo: {
        width: 160,
        height: 120,
        borderRadius: 8,
        resizeMode: 'cover'
    },
    Historique_Photo_More: {
        position: 'relative',
        // width: 160,
        height: 120,
    },
    menu: {
        width: 120,
        height: 120,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#B1B3BF',
        resizeMode: 'cover',
        marginRight: 20
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Calque noir semi-transparent
        justifyContent: 'center', // Centrer le texte verticalement
        alignItems: 'center', // Centrer le texte horizontalement
        borderRadius: 10, // Optionnel : arrondir les coins du calque
    },
    overlayText: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 48,
        color: '#fff'
    },
    liens: {
        display: 'flex',
        flexDirection: 'row',
    }, bas: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    bas_element: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    button: {
        marginLeft: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: 200
    },
    btn_style_live_local: {
        marginLeft: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row-reverse',
        backgroundColor: '#F52424',
        borderRadius: 0
    },
});


module.exports = Event