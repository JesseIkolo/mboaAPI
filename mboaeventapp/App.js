import * as React from 'react';
import { useFonts } from 'expo-font';
import { Button, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Create1 = require('./screen/Create Business/Create1');
const Create2 = require('./screen/Create Business/Create2');
const Create3 = require('./screen/Create Business/Create3');
const Create4 = require('./screen/Create Business/Create4');
const Create5 = require('./screen/Create Business/Create5');
const Create6 = require('./screen/Create Business/Create6');
const Create7 = require('./screen/Create Business/Create7');
const Create8 = require('./screen/Create Business/Create8');

const Dashboard = require('./screen/Create Business & Dashboard/Dashboard')
const listeBusiness = require('./screen/Create Business & Dashboard/listeBusiness')
const listeBusinessEmpty = require('./screen/Create Business & Dashboard/listeBusinessEmpty')

const Statistiques = require('./screen/Events Stats/Statistiques')

const Event_Search_Events_10 = require('./screen/Send message to participants/Event Search Events 10')
const Events = require('./screen/Send message to participants/Events')
const Events_Details = require('./screen/Send message to participants/Events Details')
const List_of_participants = require('./screen/Send message to participants/List of participants')
const List_of_participants1 = require('./screen/Send message to participants/List of participants1')
const Send_message_popup = require('./screen/Send message to participants/Send message popup')
const Successful = require('./screen/Send message to participants/Successful')

const Chat = require('./screen/Chat/Chat')
const ChatDetails = require('./screen/Chat/ChatDetails')

const Evenement = require('./screen/Evenements/evenement')
const MenuEvenement = require('./screen/Evenements/menuEvenement')
const DeleteEvenement = require('./screen/Evenements/deleteEvenement')
const EditEvent = require('./screen/Evenements/EditEvent')
const EditeEventSave = require('./screen/Evenements/EditeEventSave')

const Profil1 = require('./screen/ProfileEntreprise/profile')

const GestionDroits1 = require('./screen/GestionDroits/GestionDroits1')
const GestionDroits2 = require('./screen/GestionDroits/GestionDroits2')
const GestionDroits3 = require('./screen/GestionDroits/GestionDroits3')
const GestionDroits4 = require('./screen/GestionDroits/GestionDroits4')

const Support1 = require('./screen/Support/Support1')
const Support2 = require('./screen/Support/Support2')

const Abonnement1 = require('./screen/Abonnements/Abonnement1')
const Abonnement2 = require('./screen/Abonnements/Abonnement2')
const Abonnement3 = require('./screen/Abonnements/Abonnement3')
const Abonnement5 = require('./screen/Abonnements/Abonnement5')
const Abonnement6 = require('./screen/Abonnements/Abonnement6')

const CreateEvent = require('./screen/CreateEvent/CreateEvent')
const CreateEvent2 = require('./screen/CreateEvent/CreateEvent2')
const CreateEvent3 = require('./screen/CreateEvent/CreateEvent3')
const CreateEvent4 = require('./screen/CreateEvent/CreateEvent4')
const CreateSuccess = require('./screen/CreateEvent/CreateSuccess')

// Design

const Onboarding02 = require('./screen/Onboarding/Onboarding02')
const Onboarding03 = require('./screen/Onboarding/Onboarding03')
const Onboarding04 = require('./screen/Onboarding/Onboarding04')
const Onboarding5 = require('./screen/Onboarding/Onboarding5')

const Logins = require('./screen/Login & Register/Logins')
const Register1 = require('./screen/Login & Register/Register1')
const Register2 = require('./screen/Login & Register/Register2')
const Register3 = require('./screen/Login & Register/Register3')
const Register4 = require('./screen/Login & Register/Register4')

const Forgot1 = require('./screen/Forgot Password/Forgot1')
const Forgot2 = require('./screen/Forgot Password/Forgot2')
const Forgot3 = require('./screen/Forgot Password/Forgot3')
const Forgot4 = require('./screen/Forgot Password/Forgot4')

const accueil = require('./screen/Home, Network, Catalog & Drawer/accueil')
const boitedenuit = require('./screen/Home, Network, Catalog & Drawer/boitedenuit')
const catalogue = require('./screen/Home, Network, Catalog & Drawer/catalogue')
const catalogueProffesionel = require('./screen/Home, Network, Catalog & Drawer/catalogueProffesionel')
const cataloguebynight = require('./screen/Home, Network, Catalog & Drawer/cataloguebynight')
const cataloguesante = require('./screen/Home, Network, Catalog & Drawer/cataloguesante')
const comment = require('./screen/Home, Network, Catalog & Drawer/comment')
const profil01 = require('./screen/Home, Network, Catalog & Drawer/profil')
const profil11 = require('./screen/Home, Network, Catalog & Drawer/profil1')
const reseau = require('./screen/Home, Network, Catalog & Drawer/reseau')
const reseau2 = require('./screen/Home, Network, Catalog & Drawer/reseau2')
const tabbar = require('./screen/Home, Network, Catalog & Drawer/tabbar')
const topnavigator = require('./screen/Home, Network, Catalog & Drawer/topnavigator')

const Event1 = require('./screen/Create Event & Event Details/Event1')
const Event2 = require('./screen/Create Event & Event Details/Event2')

const CreateEventDesign = require('./screen/CreateEvent1/CreateEvent')
const CreateEventDesign2 = require('./screen/CreateEvent1/CreateEvent2')
const CreateEventDesign3 = require('./screen/CreateEvent1/CreateEvent3')
const CreateEventDesign4 = require('./screen/CreateEvent1/CreateEvent4')
const CreateSuccessDesign = require('./screen/CreateEvent1/CreateSuccess')


const ChatDesign = require('./screen/Chat1/Chat')
const ChatDetailsDesign = require('./screen/Chat1/ChatDetails')






// Admin 

const Dashboard_V1 = require('./screen/Admin/Create Business & Dashboard/Dashboard')
const Dashboard_V2 = require('./screen/Admin/Create Business & Dashboard/Dashboard V2')
const Dashboard_V3 = require('./screen/Admin/Create Business & Dashboard/Dashboard V3')

const Event_Search_Events_01 = require('./screen/Admin/Event & Search Events/Event & Search Events 01')
const Event_Search_Events_02 = require('./screen/Admin/Event & Search Events/Event & Search Events 02')
const Event_Search_Events_03 = require('./screen/Admin/Event & Search Events/Event & Search Events 03')
const Event_Search_Events_04 = require('./screen/Admin/Event & Search Events/Event & Search Events 04')
const Event_Search_Events_05 = require('./screen/Admin/Event & Search Events/Event & Search Events 05')
const Event_Search_Events_7 = require('./screen/Admin/Event & Search Events/Event & Search Events 7')
const Event_Search_Events_8 = require('./screen/Admin/Event & Search Events/Event & Search Events 8')

const Partners_Search_Partners_01 = require('./screen/Admin/Partners & Search Partners/Partners & Search Partners 01')
const Partners_Search_Partners_02 = require('./screen/Admin/Partners & Search Partners/Partners & Search Partners 02')
const Partners_Search_Partners_03 = require('./screen/Admin/Partners & Search Partners/Partners & Search Partners 03')
const Partners_Search_Partners_04 = require('./screen/Admin/Partners & Search Partners/Partners & Search Partners 04')
const Partners_Search_Partners_05 = require('./screen/Admin/Partners & Search Partners/Partners & Search Partners 05')
const Profil = require('./screen/Admin/Partners & Search Partners/Profil')

const Partners_Send_Message_01 = require('./screen/Admin/Partners & Send Message/Partners & Send Message 01')
const Partners_Send_Message_02 = require('./screen/Admin/Partners & Send Message/Partners & Send Message 02')
const Partners_Send_Message_03 = require('./screen/Admin/Partners & Send Message/Partners & Send Message 03')
const Partners_Send_Message_04 = require('./screen/Admin/Partners & Send Message/Partners & Send Message 04')
const Partners_Send_Message_05 = require('./screen/Admin/Partners & Send Message/Partners & Send Message 05')

const Abonnement = require('./screen/Admin/Transactions/Abonnement 7')

const Statistiques_01 = require('./screen/Admin/Statistiques/Statistiques 01')
const Statistiques_02 = require('./screen/Admin/Statistiques/Statistiques 02')
const Statistiques_03 = require('./screen/Admin/Statistiques/Statistiques 03')
const Statistiques_04 = require('./screen/Admin/Statistiques/Statistiques 04')
const Statistiques_05 = require('./screen/Admin/Statistiques/Statistiques 05')

const Nouveautés = require('./screen/All Users/See All/Nouveautés')
const Tous_les_evenements = require('./screen/All Users/See All/Tous les évènements')
const Homepage = require('./screen/All Users/See All/Homepage')
const Menu = require('./screen/All Users/See All/Menu')
const Signaler_Event = require('./screen/All Users/See All/Signaler Event')
const Signaler_Event_Réussite = require('./screen/All Users/See All/Signaler Event Réussite')
const Partager_Event = require('./screen/All Users/See All/Partager Event')
const Supprimer_Event = require('./screen/All Users/See All/Supprimer Event')
const Events_Statistiques_For_author = require('./screen/All Users/See All/Events Statistiques (For author)')

const live = require('./screen/All Users/Live & Search/Live')
const Recherche = require('./screen/All Users/Live & Search/Recherche')
const Resultat_recherche_Evenement = require('./screen/All Users/Live & Search/Resultat recherche Evenement')
const Resultat_recherche_Evenement_Filtre = require('./screen/All Users/Live & Search/Resultat recherche Evenement Filtre')
const Resultat_recherche_Partenaires = require('./screen/All Users/Live & Search/Resultat recherche Partenaires')
const Resultat_recherche_Personne = require('./screen/All Users/Live & Search/Resultat recherche Personne')
const Resultat_recherche_Partenaires1 = require('./screen/All Users/Live & Search/Resultat recherche Partenaires1')

const Profil_Utilisateurs = require('./screen/All Users/Public Profile/Profil Utilisateurs')
const Amis = require('./screen/All Users/Public Profile/Amis')
const Partenaires_card = require('./screen/All Users/Public Profile/Partenaires card')
const Partenaires_List = require('./screen/All Users/Public Profile/Partenaires List')

const Resultat_recherche_Personne1 = require('./screen/All Users/Ajout de personne dans le réseau/Resultat recherche Personne')
const Mes_invitations = require('./screen/All Users/Ajout de personne dans le réseau/Mes invitations')
const Notifications = require('./screen/All Users/Ajout de personne dans le réseau/Notifications')

const Create_Event_01 = require('./screen/All Users/Create Event & Event Details/Create Event 01')
const Create_Event_02 = require('./screen/All Users/Create Event & Event Details/Create Event 02')
const Create_Event_Paid = require('./screen/All Users/Create Event & Event Details/Create Event Paid')
const Create_Event_date = require('./screen/All Users/Create Event & Event Details/Create Event date')
const Create_Event_filled_hour = require('./screen/All Users/Create Event & Event Details/Create Event filled hour')
const Create_Event_success = require('./screen/All Users/Create Event & Event Details/Create Event success')
const Events_Details1 = require('./screen/All Users/Create Event & Event Details/Events Details')
const Events_Details_For_author = require('./screen/All Users/Create Event & Event Details/Events Details (For author)')

import Arrow_left from './assets/img/arrow-left'
import Search from './assets/img/search'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function Messages() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages Screen</Text>
    </View>
  );
}

// Composants pour les écrans stack
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Create1"
        component={Create1}
        options={{
          headerTitle: 'Créer un Business',
          headerStyle: {
            backgroundColor: '#041578',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'TitilliumWeb-Regular',
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={styles.fleche}>
              <Arrow_left />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}



export default function App() {
  const [fontsLoaded] = useFonts({
    'TitilliumWeb-Regular': require('./assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf'),
    'TitilliumWeb-Bold': require('./assets/fonts/Titillium_Web/TitilliumWeb-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ou un écran de chargement
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding02">
          <Stack.Screen
            name="Create1"
            component={Create1}
            options={{
              headerTitle: 'Créer un Business',
              headerStyle: {
                backgroundColor: '#041578',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: 'TitilliumWeb-Regular',
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <View style={styles.fleche}>
                  <Arrow_left />
                </View>
              ),
            }} />
          <Stack.Screen name="Create2" component={Create2} options={{ headerShown: false, }} />
          <Stack.Screen name="Create3" component={Create3} options={{ headerShown: false, }} />
          <Stack.Screen name="Create4" component={Create4} options={{ headerShown: false, }} />
          <Stack.Screen name="Create5" component={Create5} options={{ headerShown: false, }} />
          <Stack.Screen name="Create6" component={Create6} options={{ headerShown: false, }} />
          <Stack.Screen name="Create7" component={Create7} options={{ headerShown: false, }} />
          <Stack.Screen name="Create8" component={Create8} options={{ headerShown: false, }} />

          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, }} />

          <Stack.Screen name="listeBusiness" component={listeBusiness} options={{ headerShown: false, }} />

          <Stack.Screen name="listeBusinessEmpty" component={listeBusinessEmpty} options={{ headerShown: false, }} />

          <Stack.Screen name="Statistiques" component={Statistiques} options={{ headerShown: false, }} />

          <Stack.Screen name="Events" component={Events} options={{ headerShown: false, }} />

          <Stack.Screen name="Events_Details" component={Events_Details} options={{ headerShown: false, }} />
          <Stack.Screen name="Event_Search_Events_10" component={Event_Search_Events_10} options={{ headerShown: false, }} />
          <Stack.Screen name="List_of_participants" component={List_of_participants} options={{ headerShown: false, }} />
          <Stack.Screen name="List_of_participants1" component={List_of_participants1} options={{ headerShown: false, }} />
          <Stack.Screen name="Send_message_popup" component={Send_message_popup} options={{ headerShown: false, }} />
          <Stack.Screen name="Successful" component={Successful} options={{ headerShown: false, }} />

          <Stack.Screen name="Profile" component={Profile} />

          <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false, }} />
          <Stack.Screen name="ChatDetails" component={ChatDetails} options={{ headerShown: false, }} />

          <Stack.Screen name="MenuEvenement" component={MenuEvenement} options={{ headerShown: false, }} />
          <Stack.Screen name="DeleteEvenement" component={DeleteEvenement} options={{ headerShown: false, }} />
          <Stack.Screen name="EditEvent" component={EditEvent} options={{ headerShown: false, }} />
          <Stack.Screen name="EditeEventSave" component={EditeEventSave} options={{ headerShown: false, }} />

          <Stack.Screen name="Profil1" component={Profil1} options={{ headerShown: false, }} />

          <Stack.Screen name="GestionDroits1" component={GestionDroits1} options={{ headerShown: false, }} />
          <Stack.Screen name="GestionDroits2" component={GestionDroits2} options={{ headerShown: false, }} />
          <Stack.Screen name="GestionDroits3" component={GestionDroits3} options={{ headerShown: false, }} />
          <Stack.Screen name="GestionDroits4" component={GestionDroits4} options={{ headerShown: false, }} />

          <Stack.Screen name="Support1" component={Support1} options={{ headerShown: false, }} />
          <Stack.Screen name="Support2" component={Support2} options={{ headerShown: false, }} />

          <Stack.Screen name="Abonnement1" component={Abonnement1} options={{ headerShown: false, }} />
          <Stack.Screen name="Abonnement2" component={Abonnement2} options={{ headerShown: false, }} />
          <Stack.Screen name="Abonnement3" component={Abonnement3} options={{ headerShown: false, }} />
          <Stack.Screen name="Abonnement5" component={Abonnement5} options={{ headerShown: false, }} />
          <Stack.Screen name="Abonnement6" component={Abonnement6} options={{ headerShown: false, }} />

          <Stack.Screen name="CreateEvent" component={CreateEvent} options={{ headerShown: false, }} />
          <Stack.Screen name="CreateEvent2" component={CreateEvent2} options={{ headerShown: false, }} />
          <Stack.Screen name="CreateEvent3" component={CreateEvent3} options={{ headerShown: false, }} />
          <Stack.Screen name="CreateEvent4" component={CreateEvent4} options={{ headerShown: false, }} />
          <Stack.Screen name="CreateSuccess" component={CreateSuccess} options={{ headerShown: false, }} />

          {/* Admin  */}

          <Stack.Screen name="Onboarding02" component={Onboarding02} options={{ headerShown: false, }} />
          <Stack.Screen name="Onboarding03" component={Onboarding03} options={{ headerShown: false, }} />
          <Stack.Screen name="Onboarding04" component={Onboarding04} options={{ headerShown: false, }} />
          <Stack.Screen name="Onboarding5" component={Onboarding5} options={{ headerShown: false, }} />

          <Stack.Screen name="Logins" component={Logins} options={{ headerShown: false, }} />
          <Stack.Screen name="Register1" component={Register1} options={{ headerShown: false, }} />
          <Stack.Screen name="Register2" component={Register2} options={{ headerShown: false, }} />
          <Stack.Screen name="Register3" component={Register3} options={{ headerShown: false, }} />
          <Stack.Screen name="Register4" component={Register4} options={{ headerShown: false, }} />

          <Stack.Screen name="Forgot1" component={Forgot1} options={{ headerShown: false, }} />
          <Stack.Screen name="Forgot2" component={Forgot2} options={{ headerShown: false, }} />
          <Stack.Screen name="Forgot3" component={Forgot3} options={{ headerShown: false, }} />
          <Stack.Screen name="Forgot4" component={Forgot4} options={{ headerShown: false, }} />

          <Stack.Screen name="TopNavigator" component={topnavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Boitedenuit" component={boitedenuit} options={{ headerShown: false }} />
          <Stack.Screen name="Reseau2" component={reseau2} options={{ headerShown: false }} />
          <Stack.Screen name="Profil01" component={profil01} options={{ headerShown: false }} />
          <Stack.Screen name="Profil11" component={profil11} options={{ headerShown: false }} />
          <Stack.Screen name="Comment" component={comment} options={{ headerShown: false }} />

          <Stack.Screen name="Event1" component={Event1} options={{ headerShown: false }} />
          <Stack.Screen name="Event2" component={Event2} options={{ headerShown: false }} />


          <Stack.Screen name="CreateEventDesign" component={CreateEventDesign} options={{ headerShown: false, }} />
          <Stack.Screen name="CreateEventDesign2" component={CreateEventDesign2} options={{ headerShown: false, }} />
          <Stack.Screen name="CreateEventDesign3" component={CreateEventDesign3} options={{ headerShown: false, }} />
          <Stack.Screen name="CreateEventDesign4" component={CreateEventDesign4} options={{ headerShown: false, }} />
          <Stack.Screen name="CreateSuccessDesign" component={CreateSuccessDesign} options={{ headerShown: false, }} />

          <Stack.Screen name="ChatDesign" component={ChatDesign} options={{ headerShown: false, }} />
          <Stack.Screen name="ChatDetailsDesign" component={ChatDetailsDesign} options={{ headerShown: false, }} />


          {/* Admin  */}

          <Stack.Screen name="Dashboard_V1" component={Dashboard_V1}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: 'TitilliumWeb-Regular',
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <View style={styles.fleche}>
                  <Arrow_left />
                </View>
              ),
              //   <TouchableOpacity onPress={() => navigation.goBack()}>
              //   <Image source={back} style={styles.back} />
              // </TouchableOpacity>

            }} />
          <Stack.Screen name="Dashboard_V2" component={Dashboard_V2}
            options={{
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: 'TitilliumWeb-Regular',
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <View style={styles.fleche}>
                  <Arrow_left />
                </View>
              ),
              //   <TouchableOpacity onPress={() => navigation.goBack()}>
              //   <Image source={back} style={styles.back} />
              // </TouchableOpacity>

            }} />
          <Stack.Screen name="Dashboard_V3" component={Dashboard_V3}
            options={{
              headerTitle: ' ',
              headerStyle: {
                backgroundColor: '#1E2448',
                elevation: 0
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: 'TitilliumWeb-Regular',
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <View style={styles.fleche}>
                  <Arrow_left />
                </View>
              ),
            }} />

          <Stack.Screen name="Event_Search_Events_01" component={Event_Search_Events_01} options={{
            headerTitle: 'Tous les évènements',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Event_Search_Events_02" component={Event_Search_Events_02} options={{
            headerTitle: 'Tous les évènements',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Event_Search_Events_03" component={Event_Search_Events_03} options={{
            headerTitle: 'Tous les évènements',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Event_Search_Events_04" component={Event_Search_Events_04} options={{
            headerTitle: 'Tous les évènements',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Event_Search_Events_05" component={Event_Search_Events_05} options={{
            headerTitle: 'Tous les évènements',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Event_Search_Events_7" component={Event_Search_Events_7} options={{ headerShown: false, }} />

          <Stack.Screen name="Partners_Search_Partners_01" component={Partners_Search_Partners_01} options={{
            headerTitle: 'Tous les évènements',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Partners_Search_Partners_02" component={Partners_Search_Partners_02} options={{
            headerTitle: 'Tous les évènements',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Partners_Search_Partners_03" component={Partners_Search_Partners_03} options={{ headerShown: false, }} />

          <Stack.Screen name="Partners_Search_Partners_04" component={Partners_Search_Partners_04} options={{ headerShown: false, }} />
          <Stack.Screen name="Profil" component={Profil} options={{ headerShown: false, }} />

          <Stack.Screen name="Partners_Send_Message_01" component={Partners_Send_Message_01} options={{ headerShown: false, }} />
          <Stack.Screen name="Partners_Send_Message_02" component={Partners_Send_Message_02} options={{ headerShown: false, }} />
          <Stack.Screen name="Partners_Send_Message_03" component={Partners_Send_Message_03} options={{ headerShown: false, }} />
          <Stack.Screen name="Partners_Send_Message_04" component={Partners_Send_Message_04} options={{ headerShown: false, }} />

          <Stack.Screen name="Abonnement" component={Abonnement} options={{ headerShown: false, }} />

          <Stack.Screen name="Statistiques_01" component={Statistiques_01} options={{
            headerTitle: 'Statistiques',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Statistiques_02" component={Statistiques_02} options={{
            headerTitle: 'Statistiques',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Statistiques_03" component={Statistiques_03} options={{
            headerTitle: 'Statistiques',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Statistiques_04" component={Statistiques_04} options={{
            headerTitle: 'Statistiques',
            headerStyle: {
              backgroundColor: '#041578',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Statistiques_05" component={Statistiques_05} options={{ headerShown: false, }} />

          <Stack.Screen name="Nouveautés" component={Nouveautés} options={{
            headerTitle: 'Nouveautés',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
              color: '#041578'
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerRight: () => (
              <View style={styles.Right}>
                <View style={styles.fleche}>
                  <Search />
                </View>
                <View>
                  <Image
                    source={require('./assets/png/5.png')}
                    style={styles.image} />
                  <View style={{
                    backgroundColor: '#219653',
                    width: 15,
                    height: 15,
                    borderRadius: 20,
                    borderWidth: 4,
                    borderColor: '#fff',
                    position: 'absolute',
                    right: 0
                  }}></View>
                </View>
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Tous_les_evenements" component={Tous_les_evenements} options={{ headerShown: false, }} />
          <Stack.Screen name="Homepage" component={Homepage} options={{
            headerTitle: 'Nouveautés',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
              color: '#041578'
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerRight: () => (
              <View style={styles.Right}>
                <View style={styles.fleche}>
                  <Search />
                </View>
                <View>
                  <Image
                    source={require('./assets/png/5.png')}
                    style={styles.image} />
                  <View style={{
                    backgroundColor: '#219653',
                    width: 15,
                    height: 15,
                    borderRadius: 20,
                    borderWidth: 4,
                    borderColor: '#fff',
                    position: 'absolute',
                    right: 0
                  }}></View>
                </View>
              </View>
            ),
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false, }} />
          <Stack.Screen name="Signaler_Event" component={Signaler_Event} options={{ headerShown: false, }} />
          <Stack.Screen name="Signaler_Event_Réussite" component={Signaler_Event_Réussite} options={{ headerShown: false, }} />
          <Stack.Screen name="Partager_Event" component={Partager_Event} options={{ headerShown: false, }} />
          <Stack.Screen name="Supprimer_Event" component={Supprimer_Event} options={{ headerShown: false, }} />
          <Stack.Screen name="Events_Statistiques_For_author" component={Events_Statistiques_For_author} options={{
            headerTitle: 'Statistiques',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
              color: '#041578',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#041578',
            }
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />

          <Stack.Screen name="live" component={live} options={{ headerShown: false, }} />
          <Stack.Screen name="Recherche" component={Recherche} options={{ headerShown: false, }} />
          <Stack.Screen name="Resultat_recherche_Evenement" component={Resultat_recherche_Evenement} options={{ headerShown: false, }} />
          <Stack.Screen name="Resultat_recherche_Evenement_Filtre" component={Resultat_recherche_Evenement_Filtre} options={{ headerShown: false, }} />
          <Stack.Screen name="Resultat_recherche_Partenaires" component={Resultat_recherche_Partenaires} options={{ headerShown: false, }} />
          <Stack.Screen name="Resultat_recherche_Personne" component={Resultat_recherche_Personne} options={{ headerShown: false, }} />
          <Stack.Screen name="Resultat_recherche_Partenaires1" component={Resultat_recherche_Partenaires1} options={{ headerShown: false, }} />

          <Stack.Screen name="Profil_Utilisateurs" component={Profil_Utilisateurs} options={{ headerShown: false, }} />
          <Stack.Screen name="Amis" component={Amis} options={{
            headerTitle: 'Amis de Eric Fotso ',
            headerTintColor: '#041578',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#041578',
            }
            //   <TouchableOpacity onPress={() => navigation.goBack()}>
            //   <Image source={back} style={styles.back} />
            // </TouchableOpacity>

          }} />
          <Stack.Screen name="Partenaires_card" component={Partenaires_card} options={{
            headerTitle: 'Partenaires suivis par de Eric F... ',
            headerTintColor: '#041578',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#041578',
            }
          }} />
          <Stack.Screen name="Partenaires_List" component={Partenaires_List} options={{
            headerTitle: 'Partenaires suivis par de Eric F... ',
            headerTintColor: '#041578',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#041578',
            }
          }} />

          <Stack.Screen name="Resultat_recherche_Personne1" component={Resultat_recherche_Personne1} options={{ headerShown: false, }} />
          <Stack.Screen name="Mes_invitations" component={Mes_invitations} options={{
            headerTitle: 'Mes invitations',
            headerTintColor: '#041578',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#041578',
            }
          }} />
          <Stack.Screen name="Notifications" component={Notifications} options={{
            headerTitle: 'Notifications',
            headerTintColor: '#041578',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#041578',
            }
          }} />

          <Stack.Screen name="Create_Event_01" component={Create_Event_01} options={{
            headerTitle: 'Créer un évènement',
            headerTintColor: '#041578',
            headerTitleStyle: {
              fontFamily: 'TitilliumWeb-Regular',
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={styles.fleche}>
                <Arrow_left />
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 1,
              borderColor: '#041578',
            }
          }} />
          {/* <Stack.Screen name="Create_Event_02" component={Create_Event_02} options={{ headerShown: false, }} />
        <Stack.Screen name="Create_Event_Paid" component={Create_Event_Paid} options={{ headerShown: false, }} />
        <Stack.Screen name="Create_Event_date" component={Create_Event_date} options={{ headerShown: false, }} />
        <Stack.Screen name="Create_Event_filled_hour" component={Create_Event_filled_hour} options={{ headerShown: false, }} />
        <Stack.Screen name="Create_Event_success" component={Create_Event_success} options={{ headerShown: false, }} />
        <Stack.Screen name="Create_Event_success" component={Create_Event_success} options={{ headerShown: false, }} />
        <Stack.Screen name="Events_Details1" component={Events_Details1} options={{ headerShown: false, }} />
        <Stack.Screen name="Events_Details_For_author" component={Events_Details_For_author} options={{ headerShown: false, }} /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView >
  );
}

const styles = StyleSheet.create({
  fleche: {
    width: 40,
    height: 40,
    backgroundColor: '#E6E8F2',
    marginLeft: 20,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    position: 'relative'
  },
  Right: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    marginRight: 20
  }
});