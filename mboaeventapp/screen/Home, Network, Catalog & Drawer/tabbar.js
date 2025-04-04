import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import BynuitSvgComponent from '../../assets/component/SVG/Bynuit';
import CoeurbriseSvgComponent from '../../assets/component/SVG/coeurbrisé';
import SacSvgComponent from '../../assets/component/SVG/sac';
import CatalogueByNight from './cataloguebynight';
import CatalogueSante from './cataloguesante';
import CatalogueProffesionel from './catalogueProffesionel';
// Remplacez par votre composant SVG
// Remplacez par votre composant SVG
// import CatalogueByNight from './CatalogueByNight'; // Remplacez par votre composant
// import CatalogueSante from './CatalogueSante'; // Remplacez par votre composant
// import CatalogueProffesionel from './CatalogueProffesionel'; // Remplacez par votre composant

const initialLayout = { width: 300 }; // Définissez la largeur initiale

const TabViewExample = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'bynight', title: 'By Night' },
    { key: 'sante', title: 'Sante' },
    { key: 'professional', title: 'Professional' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'bynight':
        return <CatalogueByNight />;
      case 'sante':
        return <CatalogueSante />;
      case 'professional':
        return <CatalogueProffesionel />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor="#041578"
      inactiveColor="#3C4260"
      renderLabel={({ route, focused, color }) => (
        <View style={focused ? styles.activeTabStyle : styles.inactiveTabStyle}>
          {route.key === 'bynight' && <BynuitSvgComponent />}
          {route.key === 'sante' && <CoeurbriseSvgComponent />}
          {route.key === 'professional' && <SacSvgComponent />}
          <Text style={{ color, fontFamily: 'regular', fontSize: 16 }}>
            {route.title}
          </Text>
        </View>
      )}
      style={styles.tabBar}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
  activeTabStyle: {
    width: 118,
    height: 40,
    borderRadius: 20.96,
    backgroundColor: '#041578',
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inactiveTabStyle: {
    width: 120,
    height: 40,
    borderRadius: 20.96,
    backgroundColor: '#E6E8F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

module.exports = TabViewExample;
