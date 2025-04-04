import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Person from "../../assets/icons/person";

const SendMessage = ({date, time, message}) => {
    return(
        <View style={styles.container}>
            <View style={styles.message}>
                <View style={{flexDirection: 'row', gap: 10,}}>
                    <Text style={{color: '#9598A8', fontSize: 10,}}>{date}</Text>
                    <Text style={{color: '#9598A8', fontSize: 10,}}>{time}</Text>
                </View>
                <View>
                    <Text style={{color: '#fff', fontSize: 14,}}>{message}</Text>
                </View>
            </View>
            <View style={styles.profile}>
                <Person/>
            </View>
        </View>
    )
}

export default SendMessage

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 8,
    },

    message:{
        backgroundColor: '#041578',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 16,
        width: "85%",
    },

    profile:{
        width: 40,
        height: 40,
        backgroundColor: '#F5F5F7',
        padding: 8,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: "center",
    },
})