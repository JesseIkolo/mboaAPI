import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Document_upload from '../../assets/icons/document_upload';

const File = () => {
    return (
        <View style={styles.Upload}>
            {/* <View style={{ width: 16, height: 16, }}>
            </View> */}
                <Document_upload />
            <Text style={styles.Upload_Titre}>Charger ici</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Upload: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#ACB7B8',
        backgroundColor: '#F5F6F6',
        borderRadius: 16,
    },
    Upload_Titre: {
        // fontFamily: 'TitilliumWeb-Regular',
        fontSize: 9,
        fontWeight: '400',
        lineHeight: 21.29,
        textAlign: 'center',
        color: '#1E2448',
    },
    documentUpload: {
        marginBottom: 10, // Ajoutez un espacement si nécessaire
    },
});

export default File;