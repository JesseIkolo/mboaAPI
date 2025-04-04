import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategorieMenu = ({ BasketComponent, title, menuStyle, titleStyle }) => {
  return (
    <View style={[styles.categorie_menu, menuStyle]}>
      <BasketComponent />
      <Text style={[styles.categorie_menu_titre, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categorie_menu: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#E6E8F2',
    borderRadius: 20,
    gap: 8,
    alignItems: 'center',
    marginRight: 12,
  },
  categorie_menu_titre: {
    color: '#041578',
  },
});

export default CategorieMenu;
