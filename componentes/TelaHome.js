import React from 'react';
import { Text, View, Button } from 'react-native';

import estilo from './estilo';

export default function TelaJavaScript (props) {
  return (
    <View style={estilo.container}>
        
        <Text style={estilo.titulo}>
          Stack Navigation
        </Text>

        <Text style={estilo.texto}>
          Toque no botão abaixo para navegar para a rota descrição.
        </Text>

        <View style = { estilo.boxBotoes }>
          <Button 
            title="TELA DESCRIÇÃO" 
            onPress = { ()=>props.navigation.navigate('Descrição') } 
          />
        </View>

    </View>
  );
}