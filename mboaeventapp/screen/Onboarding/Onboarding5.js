import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Image, TouchableOpacity, Text, ImageBackground, } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Linear from '../../assets/ressource/svg/Linear'
import Barre3 from '../../assets/ressource/svg/Barre3'
import Fleche from '../../assets/ressource/svg/Fleche'

const Onboarding5 = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <View style={styles.dv1}>
                <Image style={styles.imgO1} source={require('../../assets/ressource/tab.png')} />
            </View>
            <View style={styles.imgO2}>
                <Linear />
            </View>
            <View style={styles.dv2}>
                <Text style={styles.txt}>Bienvenue sur</Text>
            </View>
            <View style={styles.dv3}>
                <Image style={styles.imeO} source={require('../../assets/ressource/LogoB.png')} />
            </View>
            <View style={styles.dv4}>
                <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('Register1')}>
                    <Text style={styles.btt1}>Créer un Compte</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dv5}>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Logins')}>
                    <Text style={styles.btt2}>Se Connecter</Text>
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <View style={styles.dv6}></View>
                <Text style={styles.vxd}>Ou</Text>
                <View style={styles.dv6}></View>
            </View>
            <View style={styles.dv8}>
                <TouchableOpacity style={styles.btn3}>
                    <Text style={styles.btt3}>Se connecter avec Google</Text>
                    <Image style={styles.glg} source={require('../../assets/ressource/glg.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.dv9}>
                <TouchableOpacity style={styles.btn4}>
                    <Text style={styles.btt4}>Se connecter avec Facebook</Text>
                    <Image style={styles.fce} source={require('../../assets/ressource/fce.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        // backgroundColor: '#020931',
        bottom: 100,
    },
    imgO1: {
        width: '100%',
        height: '100%',
    },
    imgO2: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },
    txt: {
        display: 'flex',
        fontSize: 30,
        color: 'white',
        bottom: 990,
        textAlign: 'center'
    },
    imeO: {
        display: 'flex',
        bottom: 950,
        left: '15%'
    },
    btn1: {
        display: 'flex',
        width: 326,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#E6E8F2',
        bottom: 840,
        left: '10%',
    },
    btt1: {
        textAlign: 'center',
        top: 15,
        fontSize: 18,
        color: '#041578'
    },
    btn2: {
        display: 'flex',
        width: 326,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#041578',
        bottom: 825,
        left: '10%'
    },
    btt2: {
        textAlign: 'center',
        top: 15,
        fontSize: 18,
        color: 'white'
    },
    dv6: {
        display: 'flex',
        bottom: 795,
        //borderWidth: 2,
        height: 3,
        width: 130,
        backgroundColor: 'white',
    },
    vxd: {
        display: 'flex',
        bottom: 795,
        color: 'white',
        fontSize: 20,
    },
    dv7: {
        display: 'flex',
        //borderWidth: 2,
        height: 5,
        width: 130,
        backgroundColor: 'white',
    },
    btn3: {
        display: 'flex',
        width: 326,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#020931',
        bottom: 780,
        left: '12%'
    },
    btt3: {
        textAlign: 'center',
        top: 15,
        fontSize: 18,
        color: 'white'
    },
    glg: {
        bottom: 5,
        left: 20
    },
    btn4: {
        display: 'flex',
        width: 326,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#020931',
        bottom: 770,
        left: '12%'
    },
    btt4: {
        textAlign: 'center',
        top: 15,
        fontSize: 18,
        color: 'white'
    },
    fce: {
        bottom: 5,
        left: 20
    },
})


module.exports = Onboarding5