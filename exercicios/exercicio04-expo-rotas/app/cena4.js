// FEITO POR: JULIANA MURAKAMI && RAÍNE JARDIM

import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import {
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';

const QuintaCena = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black', alignItens: 'center' }}>

      <View style={styles.container}>

        <Text style={styles.texto1}>
          Curioso para descobrir o que há no castelo, você decide explorá-lo...
        </Text>

        <Text style={styles.texto2}>
          Mas... Oh não! Você encontrou a bruxa má e ela te transformou em um sapo!
        </Text>

        <Image style={styles.sapo}
          source={{
            uri: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/11/bayonetta-3-umbran-tears-ichor-toad-1.jpg',
          }}
        />

        <Image style={styles.youDied}
          source={{
            uri: 'https://i.imgflip.com/293jt3.jpg?a470880',
          }}
        />


        <Link href="/cena0" style={styles.reiniciar}>Reiniciar</Link>

      </View>

    </ScrollView>
  );
};

export default QuintaCena;

const styles = StyleSheet.create({
  container: {
    width: 417,
    height: 800,
  },

  texto1: {
    fontSize: 17,
    margin: 10,
    textAlign: 'center',
    color: 'white',
    marginLeft: 15,
    backgroundColor: '#1f1f1f',
    borderRadius: 5,
    height: 60,
    paddingTop: 10,
  },

  texto2: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
    color: 'white',
    marginLeft: 15,
    backgroundColor: '#1f1f1f',
    borderRadius: 5,
    height: 60,
    paddingTop: 10,
  },

  sapo: {
    width: 350,
    height: 215,
    margin: 0,
    top: 350,
    left: '10%',
    position: 'absolute'
  },

  youDied: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    margin: 0,
    marginTop: 200,
    position: 'absolute'
  },

  reiniciar: { 
    position: 'absolute',
    width: '40%', 
    textAlign: 'center',
    fontSize: 23,
    color: '#F5FFFA',
    margin: 0, 
    top: 620, 
    left: '30%',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
 },
});