import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Accueil from "./accueil";
import Reseau from "./reseau";
import Catalogue from "./catalogue";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LogoSvgComponent from "../../assets/component/SVG/logo";
import HommeSvgComponent from "../../assets/component/SVG/hommevert";
import TroisbarreSvgComponent from "../../assets/component/SVG/troisbarre";
import HorlogeSvgComponent from "../../assets/component/SVG/horloge";
import IconReseauSvgComponent from "../../assets/component/SVG/iconreseau";
import IconHomeSvgComponent from "../../assets/component/SVG/iconAccueil";
import IconCatalogueSvgComponent from "../../assets/component/SVG/iconCatologue";
import CatalogueByNight from "./cataloguebynight";
import CatalogueSante from "./cataloguesante";
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Reseau2 from "./reseau2";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
import { useNavigation } from '@react-navigation/native';

function Catalogues() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bynight" component={CatalogueByNight} />
      <Tab.Screen name="Sante" component={CatalogueSante} />
    </Tab.Navigator>
  );
}
const TopNavigator = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    //'MaPolice': require('./fonts/tobias-bold.ttf'),
    //'tobias': require('./fonts/tobias-regular.ttf'),
    'regular': require('../../assets/component/font/TitilliumWeb-Regular.ttf'),
    'regularBold': require('../../assets/component/font/TitilliumWeb-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null; // Ou un indicateur de chargement
  }
  const Reseaux = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Reseau"
          component={Reseau}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reseau2"
          component={Reseau2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <View style={styles.container}>
      {/* Vue personnalisée avant le top tab navigator */}
      <View style={styles.logo}>
        <LogoSvgComponent />
        <View style={styles.logos}>
          <HorlogeSvgComponent />
          <TouchableOpacity onPress={() => navigation.navigate('Profil01')}>
            <TroisbarreSvgComponent />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profil01')}>
            <HommeSvgComponent />
          </TouchableOpacity>
        </View>
      </View>


      {/* Top Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#041578',
          tabBarInactiveTintColor: '#3C4260',
          tabBarLabelStyle: { fontSize: 12, textTransform: 'none', fontFamily: 'regularBold' },
          tabBarStyle: { width: '100%', marginBottom: 2, borderColor: 'transparent' },
          tabBarIndicatorStyle: {
            backgroundColor: '#FEF0F0', // Supprime l'indicateur par défaut
            width: 112,
            height: 56,
            borderTopLeftRadius: 14,
            //  marginBottom:5,
            marginLeft: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 3,
            borderBottomColor: '#F52424'

          },
          tabBarPressColor: 'transparent',
          headerStyle: {
            backgroundColor: '#f4511e',
            borderBottomColor: 'blue',
            borderBottomWidth: 2,
          },
          headerTintColor: '#fff',

        }}
      >
        <Tab.Screen
          name="Accueil"
          component={Accueil}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <IconHomeSvgComponent />
                <Text style={{ color: focused ? '#041578' : '#3C4260', fontFamily: focused ? 'regularBold' : 'regular', fontSize: 16 }}>Accueil</Text>
              </View>
            ),
          }}


        />
        <Tab.Screen
          name="Reseau"
          component={Reseau}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <IconReseauSvgComponent />
                <Text style={{ color: focused ? '#041578' : '#3C4260', fontFamily: focused ? 'regularBold' : 'regular', fontSize: 16 }}>Mon Reseau</Text>
              </View>
            ),
          }}

        />
        <Tab.Screen
          name="Catalogue"
          component={Catalogue}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <IconCatalogueSvgComponent />
                <Text style={{ color: focused ? '#041578' : '#3C4260', fontFamily: focused ? 'regularBold' : 'regular', fontSize: 16 }}>Catalogue</Text>
              </View>
            ),
          }}

        />

      </Tab.Navigator>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    gap: 18,
    //paddingHorizontal:10
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    paddingHorizontal: 14,
    justifyContent: 'space-between'
    // paddingLeft: 14,
    // paddingRight: 14,
  },
  logos: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    gap: 10
  },
  splashImage: {
    width: 17.83,
    height: 22,
    marginRight: 10,
    marginTop: 5,
  },
  textLogo: {
    fontWeight: '400',
    fontSize: 22.14,
    color: '#153D1C',
  },
  Line1: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  img: {
    width: '100%',
  },
  imge: {
    width: '100%',
    marginTop: 2,
  },
  ligne1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    paddingHorizontal: 10,
  },
  profil: {
    fontWeight: '500',
    fontSize: 24,
    color: '#153D1C',
  },
});

module.exports = TopNavigator