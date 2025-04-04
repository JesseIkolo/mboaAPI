import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';


const Qualite = ({bg, name, img, color}) => {
    return(
        <View style={[styles.container, {backgroundColor: bg,}]}>
            {img}
            <Text style={{color: color, fontSize: 10,}}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 5,
        padding: 4,
        borderRadius: 4,
    },
})

export default Qualite