import React from 'react';
import { Image } from 'react-native';

const MyImage = () => {
    return (
        <Image
            source={require('../../assets/png/Events Details_List of participants.png')}
            style={{ width: '100%' }} // Ajustez les dimensions selon vos besoins
            blurRadius={15} // Ajustez le niveau de flou (valeur supérieure à 5 pour iOS)
        />
    );
};

export default MyImage;