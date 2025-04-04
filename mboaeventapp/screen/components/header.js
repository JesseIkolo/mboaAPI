import React, { useMemo } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image } from 'react-native';
import Back from '../../assets/img/arrow-left'

const Header = ({ onPress = () => { }, title, source }) => {
    return (
        <View style={styles.header}>
            <View style={{
                marginTop: 'auto',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
            }}>
                <Pressable onPress={onPress} style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#E6E8F2',
                    marginLeft: 20,
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Back />
                </Pressable>
                <Image source={source} />
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 60,
        backgroundColor: '#1E2448',
        padding: 15,
        zIndex: 1000,
        elevation: 1000,
    },

    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700',
    },
})

export default Header