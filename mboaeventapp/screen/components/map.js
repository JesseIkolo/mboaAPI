import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapComponent = () => {
    const initialRegion = {
        latitude: 37.78825, // Latitude de départ
        longitude: -122.4324, // Longitude de départ
        latitudeDelta: 0.0922, // Zoom de la carte
        longitudeDelta: 0.0421,
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="Mon emplacement"
                    description="Ceci est une description"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: 150,
    },
});

export default MapComponent;
