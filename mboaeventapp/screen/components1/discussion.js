import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const Discussion = ({ navigation, onPress = () => { }, time, name, message, image}) => {
    return (
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <View style={{ flexDirection: 'row', gap: 10, }}>
                <Image source={image} />
                <View style={{ width: 200, }}>
                    <Text style={{ color: '#041578', fontSize: 16, fontWeight: '700', }}>{name}</Text>
                    <Text style={{ color: '#767A90', }}>{message}</Text>
                </View>
            </View>
            <View>
                <Text style={{ color: '#767A90', fontSize: 12, }}>Il y a {time}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Discussion

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderWidth: 1,
        // borderColor: '#fff',
        borderBottomColor: '#E0E0E0',
        borderTopColor: '#fff',
    },
})