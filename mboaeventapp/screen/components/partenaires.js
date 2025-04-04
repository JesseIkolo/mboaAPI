import React, { useState } from 'react';
import { Button, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';

import Juste from '../../assets/img/Vector (3)'
import Message from '../../assets/img/message-text'
import More from '../../assets/img/more'

const partcipant = ({ image, style_image, nom, style_nom, suivie, style_suivi }) => {

    const [isChecked, setIsChecked] = useState(false);
    const [isBLue, setIsBLue] = useState(false);

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
        setIsBLue(!isBLue);
    };

    return (
        <TouchableOpacity style={[styles.container, isBLue && styles.containerBlue]} onPress={handleCheckboxPress}>
            <View style={styles.gauche}>
                <Image source={image} style={styles.style_image} />
                <Text style={styles.style_nom}>{nom}</Text>
            </View>
            <View style={styles.gauche}>
                <TouchableOpacity style={styles.checkbox}>
                    {isChecked && <View style={styles.checkbox_juste} ><Juste /></View>}
                </TouchableOpacity>
                {/* <More /> */}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    containerBlue: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E6E8F2',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingVertical: 10
    },
    Message: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#E6EAFE',
        padding: 8
    },
    gauche: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    style_image: {
        width: 40,
        height: 40,
        borderRadius: 30
    },
    style_nom: {
        fontFamily: 'TitilliumWeb-Regular',
        fontWeight: '700',
        fontSize: 12,
        color: '#190E30'
    },

    checkbox_block: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },

    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    checkboxText: {
        fontSize: 20,
        color: '#007AFF',
        backgroundColor: '#041578',
        paddingHorizontal: 8
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 8,
        color: '#1E2448'
    },
    checkbox_juste: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#041578'
    }
});

export default partcipant;