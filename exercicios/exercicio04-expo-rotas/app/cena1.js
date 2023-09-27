// FEITO POR: JULIANA MURAKAMI && RAÍNE JARDIM

import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import {
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';

const SegundaCena = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black', alignItens: 'center' }}>

      <View style={styles.container}>

        <Image style={styles.castle}
          source={{
            uri: 'https://img.freepik.com/fotos-premium/grandeza-da-arquitetura-gotica-uma-viagem-visual-atraves-dos-seculos_767466-12073.jpg?',
          }}
        />
   
          <Link href="/cena2" style={styles.acao1}>Olhar a janela</Link>

          <Link href="/cena4" style={styles.acao2}>Seguir no Corredor</Link>

	
	 <Link href="/cena3" style={styles.acao3}>Voltar</Link>
     </View>

    </ScrollView>
  );
};

export default SegundaCena;

const styles = StyleSheet.create({
  container: {
    width: 417,
    height: 800,
  },
  castle: {
    width: '100%',
    height: 650,
    position: 'absolute',
    
  },
  acao1: {
    position: 'absolute',
    top: 300,
    left: 10,
    textAlign: 'center',
    width: 120,
    fontSize: 23,
    color: 'darkred',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
   
  },
  acao2: {
    position: 'absolute',
    top: 420,
    left: 290,
    textAlign: 'center',
    width: 120,
    fontSize: 23,
    color: '#990000',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
  acao3: {
    position: 'absolute',
    top: 600,
    left: 150,
    textAlign: 'center',
    width: 120,
    fontSize: 23,
    color: '#990000',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
  },
});

