import React from 'react';
import { Image, Text, View } from 'react-native';

import estilo from './estilo';

export default function TelaNode () {
  return (
    <View style = { estilo.container } >
        <Text style = { estilo.titulo }>
          Voltando para a Home
        </Text>
        
        <Text style = { estilo.texto }>
          Toque na seta ao lado do título da rota para voltar para a Home.
        </Text>
    </View>
  );
}

