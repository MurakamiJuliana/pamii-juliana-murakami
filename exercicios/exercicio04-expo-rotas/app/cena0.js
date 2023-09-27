// FEITO POR: JULIANA MURAKAMI && RAÍNE JARDIM

import React from 'react';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import {
  View,
  Image,
  ScrollView,
} from 'react-native';

const PrimeiraCena = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black', alignItens: 'center' }}>

      <View style={styles.container}>

        <Image style={styles.castle}
          source={{
            uri: 'https://i.pinimg.com/originals/15/8e/f1/158ef1e1f1d8f81d37ef22c637aeb25e.jpg',
          }}
        />
   
          <Link href="/cena1" style={styles.acao1}>Entrar no castelo</Link>

          <Link href="/cena5" style={styles.acao2}>Ir para a floresta</Link>


     </View>

    </ScrollView>
  );
};

export default PrimeiraCena;

const styles = StyleSheet.create({
  container: {
    width: 417,
    height: 800,
  },
  castle: {
    width: '100%',
    height: 600,
    position: 'absolute',
    
  },
  acao1: {
    position: 'absolute',
    top: 200,
    left: 297,
    textAlign: 'center',
    width: 120,
    fontSize: 23,
    color: '#F5FFFA',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  acao2: {
    position: 'absolute',
    top: 570,
    left: 200,
    textAlign: 'center',
    width: 120,
    fontSize: 15,
    color: '#556B2F',
    backgroundColor: 'transparent',
  },
});



