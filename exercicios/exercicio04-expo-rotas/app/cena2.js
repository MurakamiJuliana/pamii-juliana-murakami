// FEITO POR: JULIANA MURAKAMI && RAÍNE JARDIM

import React from 'react';
import { Link, Stack } from 'expo-router';
import { Text, StyleSheet } from 'react-native';
import {
  View,
  Image,
  ScrollView,
  Button,
} from 'react-native';

const JanelaCena = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black', alignItens: 'center' }}>

      <View style={styles.container}>

        <Text style={styles.texto1}>
	     Curioso para olhar o que tinha na janela, você se aproximou...
	</Text>

	<Text style={styles.texto2}>
	     Mas... Oh não! Você escorregou e caiu da janela!
	</Text>

          
	<Image style={styles.youDied}
          source={{
            uri: 'https://i.imgflip.com/293jt3.jpg?a470880',
          }}
        />

<Image style={styles.janela}
          source={{
            uri: 'https://media.istockphoto.com/photos/broken-glass-lying-on-the-floor-picture-id1094578974?k=6&m=1094578974&s=612x612&w=0&h=wUsxGTd59SWesT9JqNZUeF8zYV7CaFImn3gkrrX499Q=',
          }}
        />


          <Link href="/cena0" style={styles.reiniciar}>Reiniciar</Link>


     </View>

    </ScrollView>
  );
};

export default JanelaCena;

const styles = StyleSheet.create({
  container: {
    width: 417,
    height: 800,
  },
  youDied: { 
    width: 200, 
    height: 100, 
    alignSelf: 'center', 
    margin: 0, 
    marginTop: 200, 
    position: 'absolute'
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
  paddingTop: 17,
},

janela: {
  width: '100%',
  height: 260,
  margin: 0,
  top: 320,
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
