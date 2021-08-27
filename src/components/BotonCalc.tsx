import * as React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {stylesMaster} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  action: ( actionBoton: string ) => void;
}

const BotonCalc = ({texto, color = '#2D2D2D', ancho = false, action}: Props) => {
  const windowWidth = Dimensions.get('window').width;
  let botonWidth = 0;
  let botonAnchoWidth = 0;
  if (windowWidth < 400 ) {
    botonWidth = 70;
    botonAnchoWidth = 165;
  } else {
    botonWidth = 80;
    botonAnchoWidth = 180;
  };


  return (
    <TouchableOpacity
      onPress={() => action(texto)}
    >
      <View
        style={{
          ...stylesMaster.botonContainer,
          backgroundColor: color,
          width: (ancho) ? botonAnchoWidth : botonWidth,
          height: botonWidth,
        }}>
        <Text
          style={{
            ...stylesMaster.botonTexto,
            color: color === '9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
