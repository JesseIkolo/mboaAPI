import React from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import IconsearchSvgComponent from "../../assets/component/SVG/iconSearch";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
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

const Reseau2 = ({ navigation }) => {
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
            <View style={styles.cont1}>
                <Text style={[{ fontFamily: 'regularBold' }, styles.text1]}>Rechercher un partenaire, ou scroller pour parcourir</Text>
            </View>
            <View style={styles.fin}>
                <TextInput style={styles.textinpunt} placeholder="Rechercher dans l’application ..." />
                <TouchableOpacity style={styles.btnrechercher}>
                    <IconsearchSvgComponent />
                </TouchableOpacity>
            </View>

            <View style={styles.contscrol}>
                <ScrollView contentContainerStyle={styles.scrollcontain}>
                    <View style={styles.back}>
                        <View style={styles.ligne2}>
                            <View>
                                <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Partenaires suggéres</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.voir}>
                                    <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                    <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.cont}>
                                <View style={styles.viewimages}>
                                    <Image source={require('../../assets/component/Image/Ellipse 33 (1).png')} style={styles.imgprofil} />
                                </View>
                                <Text style={[styles.textclub, { fontFamily: 'regularBold' }]}>Club 0</Text>
                            </View>
                            <View style={styles.cont}>
                                <View style={styles.viewimages}>
                                    <Image source={require('../../assets/component/Image/Ellipse 33.png')} style={styles.imgprofil} />
                                </View>
                                <Text style={[styles.textclub, { fontFamily: 'regularBold' }]}>Opium</Text>
                            </View>
                            <View style={styles.cont}>
                                <View style={styles.viewimages}>
                                    <Image source={require('../../assets/component/Image/Ellipse 33 (2).png')} style={styles.imgprofil} />
                                </View>
                                <Text style={[styles.textclub, { fontFamily: 'regularBold' }]}>Njeiforbi </Text>
                            </View>
                            <View style={styles.cont}>
                                <View style={styles.viewimages}>
                                    <Image source={require('../../assets/component/Image/Ellipse 33 (3).png')} style={styles.imgprofil} />
                                </View>
                                <Text style={[styles.textclub, { fontFamily: 'regularBold' }]}>Jérôme Ngo'o</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.padding}>
                        <View style={styles.contelement2}>
                            <View style={styles.line1}>
                                <View style={styles.nom}>
                                    <View style={styles.imageview}>
                                        <Image source={require('../../assets/component/Image/Oval.png')} style={styles.image} />
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
                                <ImageBackground source={require('../../assets/component/Image/Image (12).png')} // Remplacez par le chemin de votre image
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
                                <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Ko-C, nouvelle tournée</Text>
                                <View style={styles.datees}>
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
                                            <Image source={require('../../assets/component/Image/Oval (1).png')} style={styles.imgerond1} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.imgerond2} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy 4.png')} style={styles.imgerond3} />
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
                                <Image source={require('../../assets/component/Image/Line 6.png')} style={{ width: 288 }} />
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
                    </View>
                    <View style={styles.padding}>
                        <View style={styles.contelement2}>
                            <View style={styles.line1}>
                                <View style={styles.nom}>
                                    <View style={styles.imageview}>
                                        <Image source={require('../../assets/component/Image/Oval.png')} style={styles.image} />
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
                                <ImageBackground source={require('../../assets/component/Image/Image (13).png')} // Remplacez par le chemin de votre image
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
                                <View style={styles.datees}>
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
                                            <Image source={require('../../assets/component/Image/Oval (1).png')} style={styles.imgerond1} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.imgerond2} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy 4.png')} style={styles.imgerond3} />
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
                                <Image source={require('../../assets/component/Image/Line 6.png')} style={{ width: 288 }} />
                            </View>
                            <View style={styles.line5}>
                                <View>
                                    <TouchableOpacity style={styles.btnparticiper}>
                                        <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Je veux participer</Text>
                                        <ArrowsSvgComponent style={{ marginTop: 4 }} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={styles.padding}>
                        <View style={styles.contelement2}>
                            <View style={styles.line1}>
                                <View style={styles.nom}>
                                    <View style={styles.imageview}>
                                        <Image source={require('../../assets/component/Image/Oval.png')} style={styles.image} />
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
                                <ImageBackground source={require('../../assets/component/Image/Image (14).png')} // Remplacez par le chemin de votre image
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
                                <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Blanche au Paposy</Text>
                                <View style={styles.datees}>
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
                                            <Image source={require('../../assets/component/Image/Oval (1).png')} style={styles.imgerond1} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.imgerond2} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy 4.png')} style={styles.imgerond3} />
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
                                <Image source={require('../../assets/component/Image/Line 6.png')} style={{ width: 288 }} />
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
                    </View>
                    <View style={styles.padding}>
                        <View style={styles.contelement2}>
                            <View style={styles.line1}>
                                <View style={styles.nom}>
                                    <View style={styles.imageview}>
                                        <Image source={require('../../assets/component/Image/Oval.png')} style={styles.image} />
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
                                <ImageBackground source={require('../../assets/component/Image/Image (11).png')} // Remplacez par le chemin de votre image
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
                                <View style={styles.datees}>
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
                                            <Image source={require('../../assets/component/Image/Oval (1).png')} style={styles.imgerond1} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.imgerond2} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy 4.png')} style={styles.imgerond3} />
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
                                <Image source={require('../../assets/component/Image/Line 6.png')} style={{ width: 288 }} />
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
                    </View>

                    <View style={styles.padding}>
                        <View style={styles.contelement2}>
                            <View style={styles.line1}>
                                <View style={styles.nom}>
                                    <View style={styles.imageview}>
                                        <Image source={require('../../assets/component/Image/Oval.png')} style={styles.image} />
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
                                <ImageBackground source={require('../../assets/component/Image/Image (2).png')} // Remplacez par le chemin de votre image
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
                                <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Tenor, le turbo d’Afrique</Text>
                                <View style={styles.datees}>
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
                                            <Image source={require('../../assets/component/Image/Oval (1).png')} style={styles.imgerond1} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.imgerond2} />
                                        </View>
                                        <View>
                                            <Image source={require('../../assets/component/Image/Oval Copy 4.png')} style={styles.imgerond3} />
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
                                <Image source={require('../../assets/component/Image/Line 6.png')} style={{ width: 288 }} />
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
                    </View>

                </ScrollView>
            </View>
            <View style={styles.mont}>
                <TouchableOpacity style={styles.montagne}>
                    <Image source={require('../../assets/component/Image/add-event.png')} style={styles.imgprofil} />
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
    text1: {
        color: '#020931',
        fontSize: 16
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
    contscrol: {
        flex: 1,
    },
    scrollcontain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // paddingBottom: 20,
        // paddingHorizontal: 18,
        paddingVertical: 14,
        gap: 20
    },
    padding: {
        paddingHorizontal: 18,
        paddingVertical: 14,
    },
    contelement2: {
        width: 320,
        height: 438,
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
    datees: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
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
    scrolhorizontal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,

    },
    back: {
        height: 188,
        backgroundColor: '#E6E8F2',
        paddingHorizontal: 18,
        paddingVertical: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 10

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
    textmis: {
        color: '#041578',
        fontSize: 18
    },
    textclub: {
        color: '#041578',
        fontSize: 16
    },
    imgprofil: {
        width: 60,
        height: 60,
        borderRadius: 500

    },
    viewimages: {
        width: 68,
        height: 68,
        // borderWidth: 2,
        // borderColor: '#041578',
        borderRadius: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
        marginHorizontal: 10

    }

})

module.exports = Reseau2