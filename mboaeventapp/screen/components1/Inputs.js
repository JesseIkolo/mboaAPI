import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';

const Inputs = ({icon, title, onPress = () => {} }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={title}
            />
            <Pressable style={styles.icon} onPress={onPress}>{icon}</Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width: '100%',
        height: 53,
    },
    
    input: {
        width: '80%',
        fontSize: 16,
        backgroundColor: '#F5F5F6',
        padding: 16,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
    
    icon:{
        width: '20%',
        backgroundColor: '#041578',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
});

export default Inputs;