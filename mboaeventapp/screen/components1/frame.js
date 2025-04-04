import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, StatusBar } from 'react-native';


const Frame = ({navigation, onPress = () =>{}, icon, bg, title, width}) => {
    return(
        <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: bg, width: width,}]}>
            {icon}
            <Text style={{color: '#3C4260', fontSize: 20, fontWeight: '700',}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Frame

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        gap: 16,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#DEDFE4",
    },
})