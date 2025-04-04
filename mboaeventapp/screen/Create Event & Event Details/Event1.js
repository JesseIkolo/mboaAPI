import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const { width } = Dimensions.get('window');

const images = [
  require('../../assets/ressource/i1.png'),
  require('../../assets/ressource/i2.png'),
  require('../../assets/ressource/i3.png'),
];

const EVent1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(newIndex);
      scrollViewRef.current.scrollTo({
        x: newIndex * width,
        animated: true,
      });
    }, 3000); // Changez 3000 pour le temps (en ms) entre chaque changement

    return () => clearInterval(interval); // Nettoyage de l'intervalle à la désactivation du composant
  }, [currentIndex]);

  const [region] = useState({
    latitude: 3.8480, // Latitude pour le Cameroun
    longitude: 11.5021, // Longitude pour le Cameroun
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  return (
    <View style={styles.body}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <View style={styles.all}>
          <View style={styles.container}>
            <View style={styles.sliderContainer}>
              <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                scrollEnabled={false} // Désactive le défilement manuel
              >
                {images.map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => console.warn(`Image ${index + 1} pressed`)}
                  >
                    <Image source={image} style={styles.image} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View style={styles.paginationContainer}>
              {images.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    index === currentIndex ? styles.activePaginationDot : null,
                  ]}
                />
              ))}
            </View>
            <View style={styles.deux}>
              <TouchableOpacity>
                <Image style={styles.imd} source={require('../../assets/ressource/back.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.imd} source={require('../../assets/ressource/book.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sider}>
            <View style={styles.part1}>
              <View style={styles.az}>
                <Image style={styles.imp} source={require('../../assets/ressource/Oval.png')} />
              </View>
              <View style={styles.az}>
                <TouchableOpacity style={styles.bt1}>
                  <Image style={styles.ad} source={require('../../assets/ressource/add.png')} />
                  <Text style={styles.tbt}>Suivre</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.az1}>
              <Text style={styles.nam}>par <Text style={styles.coul}>Eric Fotso</Text></Text>
              <Text style={styles.nam}>Il y a 3min</Text>
            </View>
            <View style={styles.vide}></View>

            <View style={styles.part2}>
              {/* <ScrollView
                contentContainerStyle={styles.contentContainer}
                style={styles.container}
              > */}
              <View style={styles.tout}>
                <View style={styles.az1}>
                  <TouchableOpacity style={styles.bt2}>
                    <Image style={styles.ad} source={require('../../assets/ressource/music.png')} />
                    <Text style={styles.tbtm}>Musique</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.df1}>
                  <Text style={styles.mu}>Concert de Muriel Blanche au{'\n'} Paposy</Text>
                  <Text style={styles.lie}>250 places<Text style={styles.col}> .</Text><Text style={styles.col1}> Au PaPoSy de Yaoundé</Text></Text>
                </View>
                <View style={styles.df2}>
                  <View style={styles.reu}>
                    <View style={styles.ras}>
                      <Text style={styles.pop}>25,000 XAF</Text>
                    </View>
                  </View>
                  <View style={styles.reu1}>
                    <Image style={styles.add} source={require('../../assets/ressource/Oval2.png')} />
                    <Image style={styles.add1} source={require('../../assets/ressource/Oval1.png')} />
                    <Image style={styles.add2} source={require('../../assets/ressource/Oval0.png')} />
                  </View>
                </View>
                <Text style={styles.per}>+20 personnes participent</Text>
                <View style={styles.df3}>
                  <View style={styles.rus}>
                    <Text style={styles.tdes}>Description</Text>
                  </View>
                  <View style={styles.rus}>
                    <Text style={styles.tpdes}>Arcu in elit cursus volutpat massa vulputate. Nisl sollicitudin curabitur pharetra id porta sollicitudin aliquet. Rutrum amet volutpat adipiscing gravida a elementum aenean. Vitae sed convallis ...Voir Plus</Text>
                  </View>
                </View>
                <View style={styles.df4}>
                  <View style={styles.bel}>
                    <Image style={styles.impo} source={require('../../assets/ressource/cala.png')} />
                    <Text style={styles.timpo}>10 Juin 2023 - 12 Juillet 2023{'\n'}<Text style={styles.tim}>De 22h - 7h</Text></Text>
                  </View>
                  <View style={styles.bel}>
                    <Image style={styles.impo} source={require('../../assets/ressource/gale.png')} />
                    <Text style={styles.timpo}>Yaoundé Cameroun{'\n'}<Text style={styles.tim}>Au PaPoSy de Yaoundé</Text></Text>
                  </View>
                </View>
                <View style={styles.df5}>
                  <Text style={styles.cart}>Carte</Text>
                  <View style={styles.mp}>
                    <MapView
                      style={styles.map}
                      initialRegion={region}
                      showsUserLocation={true}
                    >
                      <Marker
                        coordinate={{
                          latitude: 3.8480, // Latitude du marqueur
                          longitude: 11.5021, // Longitude du marqueur
                        }}
                        title={"Mon Marqueur"}
                        description={"Description de mon marqueur"}
                      />
                    </MapView>
                  </View>
                </View>
                <View style={styles.df6}>
                  <Text style={styles.men}>Menu</Text>
                  <View style={styles.pimg}>
                    <Image style={styles.azi1} source={require('../../assets/ressource/z1.png')} />
                    <Image style={styles.azi1} source={require('../../assets/ressource/z2.png')} />
                    <Image style={styles.azi1} source={require('../../assets/ressource/z3.png')} />
                  </View>
                </View>
                <View style={styles.df7}>
                  <Text style={styles.men}>Historiques des Photos</Text>
                  <View style={styles.pimg1}>
                    <View style={styles.his}>
                      <Image style={styles.azi2} source={require('../../assets/ressource/h1.png')} />
                      <Image style={styles.azi2} source={require('../../assets/ressource/h2.png')} />
                    </View>
                    <View style={styles.his}>
                      <Image style={styles.azi2} source={require('../../assets/ressource/h3.png')} />
                      <Image style={styles.azi2} source={require('../../assets/ressource/h3.png')} />
                    </View>
                  </View>
                </View>
                <Text style={styles.nbr}>+22</Text>
                <View style={styles.df8}>
                  <Text style={styles.men}>Historiques des Lives</Text>
                  <View style={styles.pimg}>
                    <View style={styles.azd}>
                      <Image style={styles.azis1} source={require('../../assets/ressource/dfm.png')} />
                      <Image style={styles.play} source={require('../../assets/ressource/play.png')} />
                    </View>
                    <View style={styles.azd}>
                      <Image style={styles.azis1} source={require('../../assets/ressource/tenor.png')} />
                      <Image style={styles.play} source={require('../../assets/ressource/play.png')} />
                    </View>
                  </View>
                </View>
                <View style={styles.df9}>
                  <Text style={styles.men}>Interactions</Text>
                  <View style={styles.pimf}>
                    <View>
                      <Image style={styles.bz} source={require('../../assets/ressource/coe.png')} />
                      <Text style={styles.txtf}>+23 J’aime</Text>
                    </View>
                    <View>
                      <Image style={styles.bz} source={require('../../assets/ressource/mes.png')} />
                      <Text style={styles.txtf}>+58 Commentaires</Text>
                    </View>
                    <View>
                      <Image style={styles.bz} source={require('../../assets/ressource/tele.png')} />
                      <Text style={styles.txtf}>+54M Partages</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* </ScrollView> */}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.deco}>
        <TouchableOpacity style={styles.bot}>
          <Text style={styles.tbot}>Je veux participer</Text>
          <Image style={styles.bz1} source={require('../../assets/ressource/fel.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bot1}>
          <Text style={styles.tbot1}>LIVE</Text>
          <Image style={styles.bz2} source={require('../../assets/ressource/camera.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  contentContainer: {
    paddingVertical: 20,
    // flexGrow: 1,
    height: 2260,
  },
  container: {
    flex: 1,
  },
  sliderContainer: {
    width: width,
    height: 300,
    bottom: 20
  },
  image: {
    width: width,
    height: 339,
    resizeMode: 'cover',
  },
  paginationContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
    bottom: 75,
    left: 200
  },
  activePaginationDot: {
    backgroundColor: '#333',
    // bottom: 35
  },
  sider: {
    display: 'flex',
    width: 420,
    height: 1950,
    backgroundColor: '#fff',
    // bottom: 200,
    left: 14,
    borderRadius: 16,
    top: 250
  },
  deux: {
    display: 'flex',
    flexDirection: 'row',
    gap: 350,
    bottom: 260
  },
  part1: {
    display: 'flex',
    flexDirection: 'row',
    gap: 280,
    top: 10
  },
  bt1: {
    display: 'flex',
    width: 96,
    height: 40,
    backgroundColor: '#FEE9E9',
    right: 25,
    borderRadius: 16
  },
  tbt: {
    textAlign: 'center',
    color: '#F52424',
    bottom: 3
  },
  ad: {
    width: 15,
    height: 15,
    top: 15,
    left: 5
  },
  imp: {
    width: 45,
    height: 45,
    left: 15
  },
  az1: {
    display: 'flex',
    bottom: 35,
    left: 80
  },
  coul: {
    color: '#041578',
    fontWeight: 'bold'
  },
  vide: {
    display: 'flex',
    width: 380,
    height: 1,
    backgroundColor: '#DEDFE4',
    left: 15
  },
  part2: {
    width: 418,
    height: 634,
    // backgroundColor: 'red',
    top: 10
  },
  bt2: {
    display: 'flex',
    width: 96,
    height: 40,
    backgroundColor: '#041578',
    borderRadius: 16,
    top: 20,
    right: 70
  },
  tbtm: {
    textAlign: 'center',
    color: '#fff',
    bottom: 5,
    left: 8,
    fontWeight: 'bold',
    fontSize: 15
  },
  df1: {
    width: 418,
    height: 80,
  },
  mu: {
    display: 'flex',
    fontSize: 30,
    fontWeight: 'bold',
    left: 15,
    color: '#041578'
  },
  lie: {
    display: 'flex',
    left: 20,
    bottom: 25,
    fontSize: 18,
    color: '#3C4260'
  },
  col: {
    color: '#F52424',
    fontSize: 50
  },
  col1: {
    color: '#3C4260',
    fontSize: 15
  },
  df2: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    top: 50
  },
  ras: {
    display: 'flex',
    width: 100,
    height: 35,
    backgroundColor: 'yellow',
    left: 15
  },
  pop: {
    textAlign: 'center',
    top: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#020931'
  },
  reu1: {
    display: 'flex',
    flexDirection: 'row'
  },
  add: {
    display: 'flex',
    width: 40,
    height: 40
  },
  add1: {
    display: 'flex',
    width: 38,
    height: 38,
    right: 15
  },
  add2: {
    display: 'flex',
    width: 36,
    height: 36,
    right: 28
  },
  per: {
    display: 'flex',
    flexDirection: 'row',
    top: 20,
    left: 230,
    fontSize: 15,
    color: '#3C4260'
  },
  df3: {
    display: 'flex',
    flexDirection: 'colum',
    gap: 10,
    width: 418,
    height: 130,
    top: 40,
    left: 15
  },
  tdes: {
    display: 'flex',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#041578'
  },
  tpdes: {
    display: 'flex',
    fontSize: 16,
    color: '#3C4260'
  },
  df4: {
    display: 'flex',
    width: 418,
    height: 200,
    top: 40,
    flexDirection: 'column',
    gap: 20
  },
  bel: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
    top: 30,
    left: 15
  },
  impo: {
    width: 60,
    height: 60
  },
  timpo: {
    display: 'flex',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#020931'
  },
  tim: {
    fontSize: 15,
  },
  df5: {
    display: 'flex',
    width: 418,
    height: 200,
    top: 50,
    flexDirection: 'column',
    gap: 20,
    left: 15
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  mp: {
    display: 'flex',
    width: 400,
    height: 200
  },
  cart: {
    display: 'flex',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#041578'
  },
  df6: {
    display: 'flex',
    width: 400,
    height: 200,
    top: 120,
    left: 15
  },
  men: {
    fontSize: 25,
    fontWeight: 'bold',
    left: 15,
    top: 10,
    color: '#041578'
  },
  pimg: {
    display: 'flex',
    flexDirection: 'row',
    top: 20,
    gap: 10,
    left: 15
  },
  azi1: {
    width: 140,
    height: 140,
    borderRadius: 16
  },
  df7: {
    display: 'flex',
    width: 400,
    height: 200,
    top: 120,
    left: 15
  },
  pimg1: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    left: 15,
    top: 30
  },
  his: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  azi2: {
    width: 180,
    height: 180,
    borderRadius: 16
  },
  nbr: {
    display: 'flex',
    top: 240,
    left: 280,
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold'
  },
  df8: {
    display: 'flex',
    width: 400,
    height: 200,
    top: 320,
    left: 15,
    gap: 20
  },
  play: {
    display: 'flex',
    left: 50,
    bottom: 100
  },
  azis1: {
    width: 160,
    height: 160,
    borderRadius: 16
  },
  df9: {
    display: 'flex',
    width: 400,
    height: 200,
    top: 360,
    left: 15,
    gap: 20
  },
  pimf: {
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    left: 15,
    top: 30
  },
  txtf: {
    bottom: 16,
    left: 20,
    color: '#3C4260'
  },
  deco: {
    display: 'flex',
    flexDirection: 'row',
    gap: 70
  },
  bot: {
    display: 'flex',
    left: 15,
    width: 230,
    height: 70,
    backgroundColor: '#041578',
    bottom: 10,
    borderRadius: 8
  },
  tbot: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    top: 20,
  },
  bz1: {
    left: 200
  },
  bot1: {
    display: 'flex',
    left: 15,
    width: 100,
    height: 50,
    backgroundColor: '#F52424',
    bottom: 10,
    top: 0
  },
  tbot1: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    top: 10,
  },
  bz2: {
    left: 2,
    bottom: 12
  },
});

module.exports = EVent1;