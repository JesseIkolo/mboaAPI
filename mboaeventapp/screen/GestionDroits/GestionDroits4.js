import React, { useMemo, useState } from "react";
import { View, StyleSheet, Text, Pressable, ScrollView, Image, StatusBar, TextInput, TouchableOpacity, Switch } from 'react-native';
// import Header from "../../components/header";
import Plus from "../../assets/icons/plus";
import Check from "../../assets/icons/check";
import Arrow_left from '../../assets/img/arrow-left'


const GestionDroits4 = ({ navigation }) => {
    const [switchValueOff, setSwitchValueOff] = useState(false);
    const [switchValueOn, setSwitchValueOn] = useState(true);

    const toogleSwitchOff = (value) => {
        setSwitchValueOn(value)
    }
    const toogleSwitchOn = (value) => {
        setSwitchValueOff(value)
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="white-content"
                backgroundColor="#041578"
                translucent={false}
            />

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 20, backgroundColor: '#041578', paddingVertical: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#E6E8F2',
                    marginLeft: 20,
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Arrow_left />
                </TouchableOpacity>
                <Text style={{
                    color: '#fff', fontSize: 20, fontWeight: '700', fontFamily: 'TitilliumWeb-Regular',
                }}>Modifier les droits</Text>
            </View>
            <ScrollView
                style={{
                    paddingHorizontal: 16,
                    marginVertical: 20,
                    width: '100%',
                }}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View>
                            <Text style={{ color: '#041578', fontSize: 18, fontWeight: '700', }}>Cet utilisateur a été selectionné</Text>
                        </View>

                        <View style={styles.item}>
                            <View>
                                <Image source={require('../../assets/img1/profile2.png')} />
                            </View>
                            <View style={styles.id}>
                                <Text style={{ fontSize: 16, fontWeight: '700', }}>Erica Lando</Text>
                                <Text style={{ fontSize: 14, }}>ericalando@gmail.com</Text>
                            </View>
                            <View style={styles.check}>
                                <Check />
                            </View>
                        </View>
                    </View>

                    <View style={styles.roles}>
                        <View>
                            <Text style={{ color: '#041578', fontSize: 18, fontWeight: '700', }}>Attribuer les roles</Text>
                        </View>
                        <View style={styles.elements}>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut créer et modifier un évènement</Text>
                                <Switch
                                    onValueChange={toogleSwitchOff}
                                    value={switchValueOn}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut supprimer un évènement</Text>
                                <Switch
                                    onValueChange={toogleSwitchOn}
                                    value={switchValueOff}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut ajouter un gestionnaire</Text>
                                <Switch
                                    onValueChange={toogleSwitchOff}
                                    value={switchValueOn}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut supprimer un gestionnaire</Text>
                                <Switch
                                    onValueChange={toogleSwitchOn}
                                    value={switchValueOff}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut modifier le profil de l'entreprise</Text>
                                <Switch
                                    onValueChange={toogleSwitchOn}
                                    value={switchValueOff}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut consulter et répondre aux messages</Text>
                                <Switch
                                    onValueChange={toogleSwitchOff}
                                    value={switchValueOn}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut contacter le support</Text>
                                <Switch
                                    onValueChange={toogleSwitchOn}
                                    value={switchValueOff}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut voir la liste des transactions</Text>
                                <Switch
                                    onValueChange={toogleSwitchOff}
                                    value={switchValueOn}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut renouveller l'abonnement</Text>
                                <Switch
                                    onValueChange={toogleSwitchOn}
                                    value={switchValueOff}
                                />
                            </View>
                            <View style={styles.element}>
                                <Text style={{ color: '#3C4260', }}>Peut voir les statistiques</Text>
                                <Switch
                                    onValueChange={toogleSwitchOn}
                                    value={switchValueOff}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#E6E8F2', }]} onPress={() => navigation.goBack()}>
                            <Text style={{ fontSize: 16, color: '#041578', fontWeight: '700', }}>Annuler</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: '#041578', }]}>
                            <Text style={{ fontSize: 16, color: '#fff', fontWeight: '700', }} onPress={() => navigation.navigate('Dashboard')}>Sauvegarder</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
    },

    content: {
        flexDirection: 'column',
        gap: 30,
    },

    header: {
        flexDirection: 'column',
        gap: 10,
    },

    item: {
        backgroundColor: '#EEF0F6',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 8,
        alignItems: 'center',
        borderRadius: 8,
    },

    id: {
        flexDirection: 'column',
        gap: 3,
    },

    check: {
        backgroundColor: '#27AE60',
        padding: 4,
        borderRadius: 100,
    },

    roles: {
        flexDirection: 'column',
        gap: 8,
    },

    elements: {
        flexDirection: 'column',
        gap: 8,
        width: '100%',
    },

    element: {
        backgroundColor: '#F5F5F7',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 8,
        borderRadius: 8,
    },

    buttons: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },

    button: {
        width: '48%',
        alignItems: 'center',
        paddingVertical: 16,
        borderRadius: 8,
    },

})

module.exports = GestionDroits4