import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import IconsearchSvgComponent from "../../assets/component/SVG/iconSearch";
import ElipseSvgComponent from "../../assets/component/SVG/elipse";
import ArrowRightSvgComponent from "../../assets/component/SVG/arrowright";
import MoreSvgComponent from "../../assets/component/SVG/more";
import BookmarlSvgComponent from "../../assets/component/SVG/bookmarl";
import MessageSvgComponent from "../../assets/component/SVG/message";
import SendSvgComponent from "../../assets/component/SVG/send";
import HeartSvgComponent from "../../assets/component/SVG/Heart";
import JusteSvgComponent from "../../assets/component/SVG/juste";
import VideoSvgComponent from "../../assets/component/SVG/Video";
import Main2SvgComponent from "../../assets/component/SVG/777m";
import BynuitSvgComponent from "../../assets/component/SVG/Bynuit";
import CoeurbriseSvgComponent from "../../assets/component/SVG/coeurbrisé";
import SacSvgComponent from "../../assets/component/SVG/sac";
import ArrowsSvgComponent from "../../assets/component/SVG/arrows";

const Accueil = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.contscrol}>
                <ScrollView contentContainerStyle={styles.scrollcontain}>
                    <View style={styles.cont1}>
                        <Text style={[{ fontFamily: 'regularBold' }, styles.text1]}>Rechercher un évènement, ou scroller pour parcourir</Text>
                    </View>
                    <View style={styles.fin}>
                        <TextInput style={styles.textinpunt} placeholder="Rechercher dans l’application ..." />
                        <TouchableOpacity style={styles.btnrechercher}>
                            <IconsearchSvgComponent />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Mis en avant</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement1}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textExplication]}>Concert de IZA, l’artiste de l’heure</Text>
                                <View style={styles.date}>
                                    <Text style={[styles.textdate, { fontFamily: 'regular' }]}>29 Dec 2023</Text>
                                    <ElipseSvgComponent style={{ marginTop: 4 }} />
                                    <Text style={[styles.textdate, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                </View>
                            </View>
                            <View style={styles.contelement1}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textExplication]}>Concert de Lydol, l’artiste de l’heure du Slam</Text>
                                <View style={styles.date}>
                                    <Text style={[styles.textdate, { fontFamily: 'regular' }]}>29 Dec 2023</Text>
                                    <ElipseSvgComponent style={{ marginTop: 4 }} />
                                    <Text style={[styles.textdate, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                </View>
                            </View>
                            <View style={styles.contelement1}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textExplication]}>Concert de IZA, l’artiste de l’heure</Text>
                                <View style={styles.date}>
                                    <Text style={[styles.textdate, { fontFamily: 'regular' }]}>29 Dec 2023</Text>
                                    <ElipseSvgComponent style={{ marginTop: 4 }} />
                                    <Text style={[styles.textdate, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.troispoint}>
                        <View style={styles.grospoints}></View>
                        <View style={styles.petitpoints}></View>
                        <View style={styles.petitpoints}></View>
                    </View>

                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Nouveautés</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrolhorizontal}>
                            <TouchableOpacity style={styles.contelement2} onPress={() => navigation.navigate('Event1')}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image//Oval.png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={[styles.textnom, { fontFamily: 'regular' }]}>Par <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Eric Fotso</Text></Text>
                                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>Il y a 3min</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <MoreSvgComponent />
                                    </View>
                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image//Image.png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>
                                        <View style={styles.contline2}>
                                            <View style={styles.dates}>
                                                <Text style={[{ fontFamily: 'regularBold' }, styles.textdates]}>10 <Text style={{ fontSize: 16 }}>Juin</Text></Text>
                                            </View>
                                            <View><BookmarlSvgComponent /></View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Maalhox le Viber</Text>
                                    <View style={styles.date}>
                                        <Text style={[styles.textplace, { fontFamily: 'regularBold' }]}>250 places</Text>
                                        <ElipseSvgComponent style={{ marginTop: 8 }} />
                                        <Text style={[styles.textPapo, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                    </View>
                                </View>
                                <View style={styles.line4}>
                                    <View style={styles.viewprix}>
                                        <Text style={[styles.texprix, { fontFamily: 'regularBold' }]}>25,000 XAF</Text>
                                    </View>
                                    <View style={styles.viewimage}>
                                        <View style={styles.imagesrond}>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval (1).png')} style={styles.imgerond1} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy.png')} style={styles.imgerond2} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy 4.png')} style={styles.imgerond3} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texnombre]}>+20 personnes participent</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.line5}>
                                    <View style={styles.viewcomment}>
                                        <HeartSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+23 J’aime</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <MessageSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+58 Commentaires</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <SendSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+54M Partages</Text>
                                    </View>
                                </View>
                                <View style={styles.lineimg}>
                                    <Image source={require('../../assets/component/Image//Line 6.png')} style={{ width: 288 }} />
                                </View>
                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnvert}>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>Je participe</Text>
                                            <JusteSvgComponent style={{ marginTop: 6 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image//Oval.png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={[styles.textnom, { fontFamily: 'regular' }]}>Par <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Eric Fotso</Text></Text>
                                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>Il y a 3min</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <MoreSvgComponent />
                                    </View>
                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image//Image.png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>
                                        <View style={styles.contline2}>
                                            <View style={styles.dates}>
                                                <Text style={[{ fontFamily: 'regularBold' }, styles.textdates]}>10 <Text style={{ fontSize: 16 }}>Juin</Text></Text>
                                            </View>
                                            <View><BookmarlSvgComponent /></View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Elections du président</Text>
                                    <View style={styles.date}>
                                        <Text style={[styles.textplace, { fontFamily: 'regularBold' }]}>250 places</Text>
                                        <ElipseSvgComponent style={{ marginTop: 8 }} />
                                        <Text style={[styles.textPapo, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                    </View>
                                </View>
                                <View style={styles.line4}>
                                    <View style={styles.viewprix}>
                                        <Text style={[styles.texprix, { fontFamily: 'regularBold' }]}>25,000 XAF</Text>
                                    </View>
                                    <View style={styles.viewimage}>
                                        <View style={styles.imagesrond}>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval (1).png')} style={styles.imgerond1} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy.png')} style={styles.imgerond2} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy 4.png')} style={styles.imgerond3} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texnombre]}>+20 personnes participent</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.line5}>
                                    <View style={styles.viewcomment}>
                                        <HeartSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+23 J’aime</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <MessageSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+58 Commentaires</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <SendSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+54M Partages</Text>
                                    </View>
                                </View>
                                <View style={styles.lineimg}>
                                    <Image source={require('../../assets/component/Image//Line 6.png')} style={{ width: 288 }} />
                                </View>
                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnvert}>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>Je participe</Text>
                                            <JusteSvgComponent style={{ marginTop: 6 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                    <View style={{ width: 358 }}>
                        <View style={styles.viewjaune}>
                            <View style={styles.text}>
                                <Text style={[styles.inviterami, { fontFamily: 'regularBold' }]}>Invitez un ami</Text>
                                <Text style={[styles.gagnez, { fontFamily: 'regular' }]}>Et gagnez un ticket de 600 XAF gratuitement </Text>

                                <TouchableOpacity style={styles.btninviter}>
                                    <Text style={[{ fontFamily: 'regularBold' }, styles.textinvibtn]}>Inviter</Text>
                                </TouchableOpacity>
                            </View>
                            <View ><Main2SvgComponent /></View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Tous les évènements</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                            <View>
                                <TouchableOpacity style={styles.touchtout}>
                                    <Text style={[{ fontFamily: 'regular' }, styles.texttout]}>Tout</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.touchbynuit}>
                                    <BynuitSvgComponent style={{ marginTop: 2 }} />
                                    <Text style={[{ fontFamily: 'regular' }, styles.textbynuit]}>By Night</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.touchsante}>
                                    <CoeurbriseSvgComponent style={{ marginTop: 2 }} />
                                    <Text style={[{ fontFamily: 'regular' }, styles.textbynuit]}>Santé</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.touchpro}>
                                    <SacSvgComponent style={{ marginTop: 2 }} />
                                    <Text style={[{ fontFamily: 'regular' }, styles.textbynuit]}>Proffessionel</Text>
                                </TouchableOpacity>
                            </View>

                        </ScrollView>

                    </View>
                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Cette semaine</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image//Oval.png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={[styles.textnom, { fontFamily: 'regular' }]}>Par <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Eric Fotso</Text></Text>
                                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>Il y a 3min</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <MoreSvgComponent />
                                    </View>
                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image//Image (3).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>
                                        <View style={styles.contline2}>
                                            <View style={styles.dates}>
                                                <Text style={[{ fontFamily: 'regularBold' }, styles.textdates]}>10 <Text style={{ fontSize: 16 }}>Juin</Text></Text>
                                            </View>
                                            <View><BookmarlSvgComponent /></View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Muriel Blanche au Paposy</Text>
                                    <View style={styles.date}>
                                        <Text style={[styles.textplace, { fontFamily: 'regularBold' }]}>250 places</Text>
                                        <ElipseSvgComponent style={{ marginTop: 8 }} />
                                        <Text style={[styles.textPapo, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                    </View>
                                </View>
                                <View style={styles.line4}>
                                    <View style={styles.viewprix}>
                                        <Text style={[styles.texprix, { fontFamily: 'regularBold' }]}>25,000 XAF</Text>
                                    </View>
                                    <View style={styles.viewimage}>
                                        <View style={styles.imagesrond}>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval (1).png')} style={styles.imgerond1} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy.png')} style={styles.imgerond2} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy 4.png')} style={styles.imgerond3} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texnombre]}>+20 personnes participent</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.line5}>
                                    <View style={styles.viewcomment}>
                                        <HeartSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+23 J’aime</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <MessageSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+58 Commentaires</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <SendSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+54M Partages</Text>
                                    </View>
                                </View>
                                <View style={styles.lineimg}>
                                    <Image source={require('../../assets/component/Image//Line 6.png')} style={{ width: 288 }} />
                                </View>
                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnvert}>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>Je participe</Text>
                                            <JusteSvgComponent style={{ marginTop: 6 }} />
                                        </TouchableOpacity>
                                    </View>
                                    {/* <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View> */}
                                </View>
                            </View>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image//Oval.png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={[styles.textnom, { fontFamily: 'regular' }]}>Par <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Eric Fotso</Text></Text>
                                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>Il y a 3min</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <MoreSvgComponent />
                                    </View>
                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image//Image.png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>
                                        <View style={styles.contline2}>
                                            <View style={styles.dates}>
                                                <Text style={[{ fontFamily: 'regularBold' }, styles.textdates]}>10 <Text style={{ fontSize: 16 }}>Juin</Text></Text>
                                            </View>
                                            <View><BookmarlSvgComponent /></View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Elections du président</Text>
                                    <View style={styles.date}>
                                        <Text style={[styles.textplace, { fontFamily: 'regularBold' }]}>250 places</Text>
                                        <ElipseSvgComponent style={{ marginTop: 8 }} />
                                        <Text style={[styles.textPapo, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                    </View>
                                </View>
                                <View style={styles.line4}>
                                    <View style={styles.viewprix}>
                                        <Text style={[styles.texprix, { fontFamily: 'regularBold' }]}>25,000 XAF</Text>
                                    </View>
                                    <View style={styles.viewimage}>
                                        <View style={styles.imagesrond}>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval (1).png')} style={styles.imgerond1} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy.png')} style={styles.imgerond2} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy 4.png')} style={styles.imgerond3} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texnombre]}>+20 personnes participent</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.line5}>
                                    <View style={styles.viewcomment}>
                                        <HeartSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+23 J’aime</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <MessageSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+58 Commentaires</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <SendSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+54M Partages</Text>
                                    </View>
                                </View>
                                <View style={styles.lineimg}>
                                    <Image source={require('../../assets/component/Image//Line 6.png')} style={{ width: 288 }} />
                                </View>
                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnvert}>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>Je participe</Text>
                                            <JusteSvgComponent style={{ marginTop: 6 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>A venir</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image//Oval.png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={[styles.textnom, { fontFamily: 'regular' }]}>Par <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Eric Fotso</Text></Text>
                                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>Il y a 3min</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <MoreSvgComponent />
                                    </View>
                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image//Image (4).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>
                                        <View style={styles.contline2}>
                                            <View style={styles.dates}>
                                                <Text style={[{ fontFamily: 'regularBold' }, styles.textdates]}>10 <Text style={{ fontSize: 16 }}>Juin</Text></Text>
                                            </View>
                                            <View><BookmarlSvgComponent /></View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Muriel Blanche au Paposy</Text>
                                    <View style={styles.date}>
                                        <Text style={[styles.textplace, { fontFamily: 'regularBold' }]}>250 places</Text>
                                        <ElipseSvgComponent style={{ marginTop: 8 }} />
                                        <Text style={[styles.textPapo, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                    </View>
                                </View>
                                <View style={styles.line4}>
                                    <View style={styles.viewprix}>
                                        <Text style={[styles.texprix, { fontFamily: 'regularBold' }]}>25,000 XAF</Text>
                                    </View>
                                    <View style={styles.viewimage}>
                                        <View style={styles.imagesrond}>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval (1).png')} style={styles.imgerond1} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy.png')} style={styles.imgerond2} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy 4.png')} style={styles.imgerond3} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texnombre]}>+20 personnes participent</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.line5}>
                                    <View style={styles.viewcomment}>
                                        <HeartSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+23 J’aime</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <MessageSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+58 Commentaires</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <SendSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+54M Partages</Text>
                                    </View>
                                </View>
                                <View style={styles.lineimg}>
                                    <Image source={require('../../assets/component/Image//Line 6.png')} style={{ width: 288 }} />
                                </View>
                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticiper}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Je veux participer</Text>
                                            <ArrowsSvgComponent style={{ marginTop: 4 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image//Oval.png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={[styles.textnom, { fontFamily: 'regular' }]}>Par <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Eric Fotso</Text></Text>
                                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>Il y a 3min</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <MoreSvgComponent />
                                    </View>
                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image//Image.png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>
                                        <View style={styles.contline2}>
                                            <View style={styles.dates}>
                                                <Text style={[{ fontFamily: 'regularBold' }, styles.textdates]}>10 <Text style={{ fontSize: 16 }}>Mars</Text></Text>
                                            </View>
                                            <View><BookmarlSvgComponent /></View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Elections du président</Text>
                                    <View style={styles.date}>
                                        <Text style={[styles.textplace, { fontFamily: 'regularBold' }]}>250 places</Text>
                                        <ElipseSvgComponent style={{ marginTop: 8 }} />
                                        <Text style={[styles.textPapo, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                    </View>
                                </View>
                                <View style={styles.line4}>
                                    <View style={styles.viewprix}>
                                        <Text style={[styles.texprix, { fontFamily: 'regularBold' }]}>25,000 XAF</Text>
                                    </View>
                                    <View style={styles.viewimage}>
                                        <View style={styles.imagesrond}>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval (1).png')} style={styles.imgerond1} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy.png')} style={styles.imgerond2} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy 4.png')} style={styles.imgerond3} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texnombre]}>+20 personnes participent</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.line5}>
                                    <View style={styles.viewcomment}>
                                        <HeartSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+23 J’aime</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <MessageSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+58 Commentaires</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <SendSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+54M Partages</Text>
                                    </View>
                                </View>
                                <View style={styles.lineimg}>
                                    <Image source={require('../../assets/component/Image//Line 6.png')} style={{ width: 288 }} />
                                </View>
                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnvert}>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>Je participe</Text>
                                            <JusteSvgComponent style={{ marginTop: 6 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </View>

                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Proche de chez vous</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image//Oval.png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={[styles.textnom, { fontFamily: 'regular' }]}>Par <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Eric Fotso</Text></Text>
                                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>Il y a 3min</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <MoreSvgComponent />
                                    </View>
                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image//Image (5).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>
                                        <View style={styles.contline2}>
                                            <View style={styles.dates}>
                                                <Text style={[{ fontFamily: 'regularBold' }, styles.textdates]}>26 <Text style={{ fontSize: 16 }}>juin</Text></Text>
                                            </View>
                                            <View><BookmarlSvgComponent /></View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Muriel Blanche au Paposy</Text>
                                    <View style={styles.date}>
                                        <Text style={[styles.textplace, { fontFamily: 'regularBold' }]}>250 places</Text>
                                        <ElipseSvgComponent style={{ marginTop: 8 }} />
                                        <Text style={[styles.textPapo, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                    </View>
                                </View>
                                <View style={styles.line4}>
                                    <View style={styles.viewprix}>
                                        <Text style={[styles.texprix, { fontFamily: 'regularBold' }]}>25,000 XAF</Text>
                                    </View>
                                    <View style={styles.viewimage}>
                                        <View style={styles.imagesrond}>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval (1).png')} style={styles.imgerond1} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy.png')} style={styles.imgerond2} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy 4.png')} style={styles.imgerond3} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texnombre]}>+20 personnes participent</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.line5}>
                                    <View style={styles.viewcomment}>
                                        <HeartSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+23 J’aime</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <MessageSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+58 Commentaires</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <SendSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+54M Partages</Text>
                                    </View>
                                </View>
                                <View style={styles.lineimg}>
                                    <Image source={require('../../assets/component/Image//Line 6.png')} style={{ width: 288 }} />
                                </View>
                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticiper}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Je veux participer</Text>
                                            <ArrowsSvgComponent style={{ marginTop: 4 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image//Oval.png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={[styles.textnom, { fontFamily: 'regular' }]}>Par <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Eric Fotso</Text></Text>
                                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>Il y a 3min</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <MoreSvgComponent />
                                    </View>
                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image//Image.png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>
                                        <View style={styles.contline2}>
                                            <View style={styles.dates}>
                                                <Text style={[{ fontFamily: 'regularBold' }, styles.textdates]}>10 <Text style={{ fontSize: 16 }}>Mars</Text></Text>
                                            </View>
                                            <View><BookmarlSvgComponent /></View>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Elections du président</Text>
                                    <View style={styles.date}>
                                        <Text style={[styles.textplace, { fontFamily: 'regularBold' }]}>250 places</Text>
                                        <ElipseSvgComponent style={{ marginTop: 8 }} />
                                        <Text style={[styles.textPapo, { fontFamily: 'regular' }]}>Au PaPoSy de Yaoundé</Text>
                                    </View>
                                </View>
                                <View style={styles.line4}>
                                    <View style={styles.viewprix}>
                                        <Text style={[styles.texprix, { fontFamily: 'regularBold' }]}>25,000 XAF</Text>
                                    </View>
                                    <View style={styles.viewimage}>
                                        <View style={styles.imagesrond}>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval (1).png')} style={styles.imgerond1} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy.png')} style={styles.imgerond2} />
                                            </View>
                                            <View>
                                                <Image source={require('../../assets/component/Image//Oval Copy 4.png')} style={styles.imgerond3} />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texnombre]}>+20 personnes participent</Text>
                                        </View>
                                    </View>

                                </View>
                                <View style={styles.line5}>
                                    <View style={styles.viewcomment}>
                                        <HeartSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+23 J’aime</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <MessageSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+58 Commentaires</Text>
                                    </View>
                                    <View style={styles.viewcomment}>
                                        <SendSvgComponent />
                                        <Text style={[styles.texjaime, { fontFamily: 'regular' }]}>+54M Partages</Text>
                                    </View>
                                </View>
                                <View style={styles.lineimg}>
                                    <Image source={require('../../assets/component/Image//Line 6.png')} style={{ width: 288 }} />
                                </View>
                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnvert}>
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>Je participe</Text>
                                            <JusteSvgComponent style={{ marginTop: 6 }} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.mont}>
                <TouchableOpacity style={styles.montagne} onPress={() => navigation.navigate('CreateEventDesign')}>
                    <Image source={require('../../assets/component/Image//add-event.png')} style={styles.imgprofil} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        gap: 2,
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
    textmis: {
        color: '#041578',
        fontSize: 20
    },
    scrolhorizontal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    contelement1: {
        width: 266,
        height: 140,
        backgroundColor: '#041578',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textExplication: {
        color: '#FFFFFF',
        fontSize: 20
    },
    date: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4
    },
    textdate: {
        color: '#DEDFE4',
        fontSize: 9
    },
    troispoint: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6
    },
    grospoints: {
        width: 39,
        height: 8,
        backgroundColor: '#041578',
        borderRadius: 100
    },
    petitpoints: {
        width: 8,
        height: 8,
        backgroundColor: '#767A90',
        borderRadius: 100
    },
    ligne2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    voir: {
        width: 109,
        height: 37,
        borderWidth: 2,
        borderColor: '#041578',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    textvoir: {
        color: '#041578',
        fontSize: 14
    },
    contelement2: {
        width: 320,
        height: 418,
        borderWidth: 2,
        borderColor: '#767A90',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    line1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    image: {
        width: '100%',
        height: 44,
        //borderRadius:50
    },
    imageview: {
        width: 44
    },
    nom: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    textnom: {
        fontSize: 14,

    },
    textmin: {
        fontSize: 11,
        color: '#767A90'
    },
    background: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optionnel : pour ajouter un effet de superposition
        padding: 20,
        borderRadius: 10,
    },
    line2: {
        width: 316,
        height: 154
    },
    background: {
        width: '100%',
        flex: 1,
    },
    contline2: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dates: {
        width: 58,
        height: 59,
        borderRadius: 9,
        backgroundColor: '#E6E8F2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textdates: {
        color: '#041578',
        fontSize: 24
    },
    line3: {
        paddingHorizontal: 8,
        paddingVertical: 8
    },
    textconcert: {
        color: '#041578',
        fontSize: 16
    },
    textplace: {
        color: '#3C4260',
        fontSize: 14
    },
    textPapo: {
        color: '#3C4260',
        fontSize: 14
    },
    line4: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        //justifyContent:'space-between'
        gap: 14
    },
    viewprix: {
        width: 68,
        height: 26,
        backgroundColor: '#FFDE00'
    },
    texprix: {
        fontSize: 12,
        color: '#020931',
        padding: 4
    },
    viewimage: {
        display: 'flex',
        flexDirection: 'row',
    },
    imagesrond: {
        display: 'flex',
        flexDirection: 'row'
    },
    imgerond1: {
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFFFFF',

    },
    imgerond2: {
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        position: 'relative',
        right: 10
        //zIndex:5
    },
    imgerond3: {
        width: 24,
        height: 24,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        position: 'relative',
        right: 18,
        // zIndex:5
    },
    texnombre: {
        fontSize: 11,
        color: '#3C4260',
        marginTop: 2,
        right: 10
    },
    line5: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    viewcomment: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2
    },
    texjaime: {
        fontSize: 11,
        color: '#3C4260'
    },
    lineimg: {
        //width:288,
        paddingHorizontal: 14
    },
    btnvert: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        //justifyContent:'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#27AE60',
        width: 124,
        height: 37,
        borderRadius: 8
    },
    texparticipe: {
        color: '#E2F8EB',
        fontSize: 14
    },
    btnrouge: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        //justifyContent:'space-between',
        paddingHorizontal: 2,
        paddingVertical: 2,
        backgroundColor: '#F52424',
        width: 63,
        height: 28,
        borderRadius: 8,
        marginTop: 2
    },
    viewjaune: {
        width: '95%',
        height: 150,
        backgroundColor: '#FFDE00',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 2,
        paddingVertical: 10
    },
    inviterami: {
        fontSize: 16,
        color: '#041578'
    },
    gagnez: {
        fontSize: 14,
        color: '#1E2448',
        width: 145
    },
    text: {
        paddingHorizontal: 4,
        width: 135,
        gap: 12
    },
    btninviter: {
        width: 72,
        height: 37,
        backgroundColor: '#041578',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    textinvibtn: {
        color: '#EAE9EF',
        fontSize: 14
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
        color: '#EAE9EF',
        fontSize: 16
    },
    touchbynuit: {
        width: 118,
        height: 40,
        borderRadius: 20.96,
        backgroundColor: '#E6E8F2',
        paddingHorizontal: 12,
        paddingVertical: 6,
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    textbynuit: {
        color: '#041578',
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
    btnparticiper: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        //justifyContent:'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#041578',
        width: 161,
        height: 37,
        borderRadius: 8
    },
    montagne: {
        backgroundColor: '#041578',
        height: 72,
        width: 72,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 16
    },
    imgprofil: {
        width: 41,
        height: 41
    },
    mont: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 20,
        backgroundColor: 'transparent',
        marginHorizontal: 19

    }

})

module.exports = Accueil