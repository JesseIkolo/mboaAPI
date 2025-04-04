import React from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import MessageSvgComponent from "../../assets/component/SVG/message";
import HeartSvgComponent from "../../assets/component/SVG/Heart";
import TextareaView from "../../assets/component/TextareaView";

const Comment = () => {
    const [fontsLoaded] = useFonts({
        //'MaPolice': require('./fonts/tobias-bold.ttf'),
        //'tobias': require('./fonts/tobias-regular.ttf'),
        'regular': require('../../assets/component/font/TitilliumWeb-Regular.ttf'),
        'regularBold': require('../../assets/component/font/TitilliumWeb-Bold.ttf')
    });
    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrolcontainer} showsVerticalScrollIndicator={false}>
                <View style={styles.elementcomments}>
                    <View style={styles.line1}>
                        <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.img1} />
                        <Text style={[{ fontFamily: 'regularBold' }, styles.textnom]}>Eric Fotso</Text>
                        <View style={styles.elipse}></View>
                        <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>6 min</Text>
                    </View>
                    <View style={styles.textview}>
                        <Text style={[{ fontFamily: 'regular' }, styles.textdumy]}>
                            Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...
                        </Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/component/Image/Line 6.png')} />
                    </View>
                    <View style={styles.coments}>
                        <View style={styles.coment}>
                            <HeartSvgComponent style={{ marginTop: 3 }} />
                            <Text style={[{ fontFamily: 'regular' }, styles.textjaime]}>j'aime</Text>
                        </View>
                        <View style={styles.coment}>
                            <MessageSvgComponent style={{ marginTop: 3 }} />
                            <Text style={[{ fontFamily: 'regular' }, styles.textjaime]}>Repondre</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.commenatire}>
                    <View style={styles.elementcomment}>
                        <View style={styles.line1}>
                            <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.img1} />
                            <Text style={[{ fontFamily: 'regularBold' }, styles.textnom]}>Eric Fotso</Text>
                            <View style={styles.elipse}></View>
                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>6 min</Text>
                        </View>
                        <View style={styles.textview}>
                            <Text style={[{ fontFamily: 'regular' }, styles.textdumy]}>
                                J’aime ça
                            </Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/component/Image/Line 6.png')} />
                        </View>
                        <View style={styles.coments}>
                            <View style={styles.coment}>
                                <HeartSvgComponent style={{ marginTop: 3 }} />
                                <Text style={[{ fontFamily: 'regular' }, styles.textjaime]}>j'aime</Text>
                            </View>
                            <View style={styles.coment}>
                                <MessageSvgComponent style={{ marginTop: 3 }} />
                                <Text style={[{ fontFamily: 'regular' }, styles.textjaime]}>Repondre</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.elementcomment}>
                        <View style={styles.line1}>
                            <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.img1} />
                            <Text style={[{ fontFamily: 'regularBold' }, styles.textnom]}>Eric Fotso</Text>
                            <View style={styles.elipse}></View>
                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>6 min</Text>
                        </View>
                        <View style={styles.textview}>
                            <Text style={[{ fontFamily: 'regular' }, styles.textdumy]}>
                                Fou
                            </Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/component/Image/Line 6.png')} />
                        </View>
                        <View style={styles.coments}>
                            <View style={styles.coment}>
                                <HeartSvgComponent style={{ marginTop: 3 }} />
                                <Text style={[{ fontFamily: 'regular' }, styles.textjaime]}>j'aime</Text>
                            </View>
                            <View style={styles.coment}>
                                <MessageSvgComponent style={{ marginTop: 3 }} />
                                <Text style={[{ fontFamily: 'regular' }, styles.textjaime]}>Repondre</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.elementcomment}>
                        <View style={styles.line1}>
                            <Image source={require('../../assets/component/Image/Oval Copy.png')} style={styles.img1} />
                            <Text style={[{ fontFamily: 'regularBold' }, styles.textnom]}>Eric Fotso</Text>
                            <View style={styles.elipse}></View>
                            <Text style={[{ fontFamily: 'regular' }, styles.textmin]}>6 min</Text>
                        </View>
                        <View style={styles.textview}>
                            <Text style={[{ fontFamily: 'regular' }, styles.textdumy]}>
                                Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                            </Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/component/Image/Line 6.png')} />
                        </View>
                        <View style={styles.coments}>
                            <View style={styles.coment}>
                                <HeartSvgComponent style={{ marginTop: 3 }} />
                                <Text style={[{ fontFamily: 'regular' }, styles.textjaime]}>j'aime</Text>
                            </View>
                            <View style={styles.coment}>
                                <MessageSvgComponent style={{ marginTop: 3 }} />
                                <Text style={[{ fontFamily: 'regular' }, styles.textjaime]}>Repondre</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ width: 399 }}>
                    <View style={styles.bleu}>
                        <View style={styles.line1}>
                            <Image source={require('../../assets/component/Image/Oval Copy 4.png')} style={styles.img1} />
                            <Text style={[{ fontFamily: 'regularBold' }, styles.textnom]}>Erica Malowi</Text>

                        </View>
                        <View>
                            <TextareaView />
                        </View>
                        <View style={styles.bouton}>
                            <TouchableOpacity style={styles.btnrepondre}>
                                <Text style={[{ fontFamily: 'regularBold' }, styles.textrepondre]}>Repondre</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={[styles.textannuler, { fontFamily: 'regularBold' }]}>Annuler</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',

            marginTop: 35
        },
        contscrol: {
            flex: 1
        },
        scrolcontainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 2,
            gap: 20
        },
        line1: {
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
        },
        img1: {
            width: 24,
            height: 24,
            borderRadius: 2
        },
        elipse: {
            width: 3,
            height: 3,
            backgroundColor: '#767A90',
            marginTop: 10,
            borderRadius: 3
        },
        textnom: {
            fontSize: 14,
            color: '#041578'
        },
        textmin: {
            fontSize: 12,
            color: '#767A90'
        },
        textdumy: {
            fontSize: 16,
            color: '#292936'
        },
        coment: {
            display: 'flex',
            flexDirection: 'row',
            gap: 6
        },
        coments: {
            display: 'flex',
            flexDirection: 'row',
            gap: 18,
            paddingHorizontal: 30
        },
        textjaime: {
            fontSize: 14,
            color: '#292936'
        },
        commenatire: {
            display: 'flex',
            flexDirection: 'column',
            gap: 29,
            paddingHorizontal: 18,
            paddingVertical: 10,
            // marginTop: 10
        },
        elementcomment: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        },
        elementcomments: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            paddingHorizontal: 18,
            paddingVertical: 10,
        },
        textview: {
            paddingHorizontal: 36
        },
        bleu: {
            width: '90%',
            height: 253,
            backgroundColor: '#E6E8F2',
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
            paddingVertical: 10,
        },
        bouton: {
            display: 'flex',
            flexDirection: 'row',
            gap: 18
        },
        btnrepondre: {
            width: 91,
            height: 37,
            backgroundColor: '#041578',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textrepondre: {
            fontSize: 14,
            color: '#EAE9EF'
        },
        textannuler: {
            marginTop: 6,
            color: '#041578'
        }

    }
)

module.exports = Comment