import React from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import IconsearchSvgComponent from "../../assets/component/SVG/iconSearch";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArrowRightSvgComponent from "../../assets/component/SVG/arrowright";
import MoreSvgComponent from "../../assets/component/SVG/more";
import BookmarlSvgComponent from "../../assets/component/SVG/bookmarl";
import MessageSvgComponent from "../../assets/component/SVG/message";
import SendSvgComponent from "../../assets/component/SVG/send";
import HeartSvgComponent from "../../assets/component/SVG/Heart";
import JusteSvgComponent from "../../assets/component/SVG/juste";
import VideoSvgComponent from "../../assets/component/SVG/Video";
import Main2SvgComponent from "../../assets/component/SVG/777m";
import ElipseSvgComponent from "../../assets/component/SVG/elipse";
import ArrowsSvgComponent from "../../assets/component/SVG/arrows";

const Tab = createMaterialTopTabNavigator();

const CatalogueSante = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contscrol}>
                <ScrollView contentContainerStyle={styles.scrollcontain}>
                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Hopîtaux</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image/Oval (5).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Hopital général de Yaoundé</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Image (8).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
                                            <ArrowsSvgComponent style={{ marginTop: 4 }} />
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
                                            <Image source={require('../../assets/component/Image/Oval (5).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Hopital général de Yaoundé</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Image (8).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
                                </View>
                                {/* <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Maalhox le Viber</Text>

                                </View> */}

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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
                                            <ArrowsSvgComponent style={{ marginTop: 4 }} />
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

                        </ScrollView>
                    </View>

                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Cliniques</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image/Oval (6).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Pharmacie de douala</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Image (9).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
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
                                            <Image source={require('../../assets/component/Image/Oval (2).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Club 0</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Event image (1).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
                                            <ArrowsSvgComponent style={{ marginTop: 4 }} />
                                        </TouchableOpacity>
                                    </View>
                                    {/* <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View> */}
                                </View>

                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                                    <View style={styles.contelement2}>
                                        <View style={styles.line1}>
                                            <View style={styles.nom}>
                                                <View style={styles.imageview}>
                                                    <Image source={require('../../assets/component/Image/Oval (2).png')} style={styles.image} />
                                                </View>

                                                <View >
                                                    <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Club 0</Text>

                                                </View>
                                            </View>

                                        </View>


                                        <View style={styles.line2}>
                                            <ImageBackground source={require('../../assets/component/Image/Event image (1).png')} // Remplacez par le chemin de votre image
                                                style={styles.background}>

                                            </ImageBackground>
                                        </View>
                                        <View style={styles.line3}>
                                            <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Maalhox le Viber</Text>

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

                                        <View style={styles.line5}>
                                            <View>
                                                <TouchableOpacity style={styles.btnparticipers}>
                                                    <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
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
                                                    <Image source={require('../../assets/component/Image/Oval (2).png')} style={styles.image} />
                                                </View>

                                                <View >
                                                    <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Club 0</Text>

                                                </View>
                                            </View>

                                        </View>


                                        <View style={styles.line2}>
                                            <ImageBackground source={require('../../assets/component/Image/Event image (1).png')} // Remplacez par le chemin de votre image
                                                style={styles.background}>

                                            </ImageBackground>
                                        </View>
                                        <View style={styles.line3}>
                                            <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Maalhox le Viber</Text>

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

                                        <View style={styles.line5}>
                                            <View>
                                                <TouchableOpacity style={styles.btnparticipers}>
                                                    <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
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

                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Pharmacies</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image/Oval (7).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Clinique médicale Odysée de Douala</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Image (10).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
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
                                            <Image source={require('../../assets/component/Image/Oval (7).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Njeiforbi Chick'n Burger</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Image (10).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
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

                        </ScrollView>
                    </View>
                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Hopîtaux</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image/Oval (5).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Hopital général de Yaoundé</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Image (8).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
                                            <ArrowsSvgComponent style={{ marginTop: 4 }} />
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
                                            <Image source={require('../../assets/component/Image/Oval (5).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Hopital général de Yaoundé</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Image (8).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
                                </View>
                                {/* <View style={styles.line3}>
                                    <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Maalhox le Viber</Text>

                                </View> */}

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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
                                            <ArrowsSvgComponent style={{ marginTop: 4 }} />
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

                        </ScrollView>
                    </View>

                    <View style={styles.ligne2}>
                        <View>
                            <Text style={[styles.textmis, { fontFamily: 'regularBold' }]}>Cliniques</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.voir}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textvoir]}>Voir tout</Text>
                                <ArrowRightSvgComponent style={{ marginTop: 4 }}></ArrowRightSvgComponent>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                            <View style={styles.contelement2}>
                                <View style={styles.line1}>
                                    <View style={styles.nom}>
                                        <View style={styles.imageview}>
                                            <Image source={require('../../assets/component/Image/Oval (6).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Pharmacie de douala</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Image (9).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
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
                                            <Image source={require('../../assets/component/Image/Oval (2).png')} style={styles.image} />
                                        </View>

                                        <View >
                                            <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Club 0</Text>

                                        </View>
                                    </View>

                                </View>


                                <View style={styles.line2}>
                                    <ImageBackground source={require('../../assets/component/Image/Event image (1).png')} // Remplacez par le chemin de votre image
                                        style={styles.background}>

                                    </ImageBackground>
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

                                <View style={styles.line5}>
                                    <View>
                                        <TouchableOpacity style={styles.btnparticipers}>
                                            <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
                                            <ArrowsSvgComponent style={{ marginTop: 4 }} />
                                        </TouchableOpacity>
                                    </View>
                                    {/* <View>
                                        <TouchableOpacity style={styles.btnrouge}>
                                            <VideoSvgComponent style={{ marginTop: 1 }} />
                                            <Text style={[{ fontFamily: 'regular' }, styles.texparticipe]}>LIVE</Text>

                                        </TouchableOpacity>
                                    </View> */}
                                </View>

                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrolhorizontal}>
                                    <View style={styles.contelement2}>
                                        <View style={styles.line1}>
                                            <View style={styles.nom}>
                                                <View style={styles.imageview}>
                                                    <Image source={require('../../assets/component/Image/Oval (2).png')} style={styles.image} />
                                                </View>

                                                <View >
                                                    <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Club 0</Text>

                                                </View>
                                            </View>

                                        </View>


                                        <View style={styles.line2}>
                                            <ImageBackground source={require('../../assets/component/Image/Event image (1).png')} // Remplacez par le chemin de votre image
                                                style={styles.background}>

                                            </ImageBackground>
                                        </View>
                                        <View style={styles.line3}>
                                            <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Maalhox le Viber</Text>

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

                                        <View style={styles.line5}>
                                            <View>
                                                <TouchableOpacity style={styles.btnparticipers}>
                                                    <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
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
                                                    <Image source={require('../../assets/component/Image/Oval (2).png')} style={styles.image} />
                                                </View>

                                                <View >
                                                    <Text style={{ fontFamily: 'regularBold', color: '#041578' }}>Club 0</Text>

                                                </View>
                                            </View>

                                        </View>


                                        <View style={styles.line2}>
                                            <ImageBackground source={require('../../assets/component/Image/Event image (1).png')} // Remplacez par le chemin de votre image
                                                style={styles.background}>

                                            </ImageBackground>
                                        </View>
                                        <View style={styles.line3}>
                                            <Text style={[styles.textconcert, { fontFamily: 'regularBold' }]}>Concert de Maalhox le Viber</Text>

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

                                        <View style={styles.line5}>
                                            <View>
                                                <TouchableOpacity style={styles.btnparticipers}>
                                                    <Text style={[{ fontFamily: 'regularBold' }, styles.texparticipe]}>Details</Text>
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

                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        gap: 10,
        // paddingHorizontal:8,
        // paddingVertical:8

        // marginTop: 1
    },
    contscrol: {
        flex: 1,
    },
    scrollcontain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 10,
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
    contscrol: {
        flex: 1,
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
    scrollcontain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingHorizontal: 8,
        paddingVertical: 14,
        gap: 20
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
        height: 304,
        borderWidth: 2,
        borderColor: '#767A90',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',

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
        height: 30,
        //borderRadius:50
    },
    imageview: {
        width: 30
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
    btnparticipers: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        //justifyContent:'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#041578',
        width: 99,
        height: 37,
        borderRadius: 8
    }
})

module.exports = CatalogueSante