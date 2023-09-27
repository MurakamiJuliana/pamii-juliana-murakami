// FEITO POR: JULIANA MURAKAMI && RAÍNE JARDIM

import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import {
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';

const FinalBom = () => {
  return (
    <ScrollView style={{ backgroundColor: 'pink', alignItens: 'center' }}>

      <View style={styles.container}>

        <Text style={styles.texto1}>
	     Você não sente interesse em explorar o castelo e prefere ir explorar a floresta...
	</Text>

	<Text style={styles.texto2}>
	     Mas... OH SIM! Você se encontrou com a PrinSiles encantada e viveram felizes para sempre!
	</Text>

    <ImageBackground borderRadius= {20} source={require('./PrinSiles.png')}
     style={styles.prinSiles}>
   </ImageBackground>

          <Link href="/cena0" style={styles.reiniciar}>Reiniciar</Link>


     </View>

    </ScrollView>
  );
};

export default FinalBom;

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
  paddingTop: 8,
},

prinSiles: {
  width: '100%',
  height: 600,
  top: 160,
  position: 'absolute'
},

reiniciar: { 
  position: 'absolute',
  width: '100%', 
  height: 40,
  textAlign: 'center',
  fontSize: 23,
  color: '#F5FFFA',
  margin: 0, 
  top: 620, 
  backgroundColor: 'pink',
  fontWeight: 'bold',
},
});
