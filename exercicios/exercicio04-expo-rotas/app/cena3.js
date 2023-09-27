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

const QuartaCena = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black', alignItens: 'center' }}>

      <View style={styles.container}>

        <Text style={styles.texto1}>
          Arrependido de entrar no castelo, você decide voltar por onde veio...
        </Text>

        <Text style={styles.texto2}>
          Mas... Oh não! Você encontrou o rei amaldiçoado e ele jogou uma maldição em você!
        </Text>

        <Image style={styles.viego}
          source={{
            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bb5d277d-a5dd-4456-add9-5ef1d3697931/des9qr3-39fd6c80-2de1-4f53-abba-fa5a1341d2b2.png/v1/fill/w_1280,h_648/viego_the_ruined_king__1__render_by_sidekick_3_des9qr3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQ4IiwicGF0aCI6IlwvZlwvYmI1ZDI3N2QtYTVkZC00NDU2LWFkZDktNWVmMWQzNjk3OTMxXC9kZXM5cXIzLTM5ZmQ2YzgwLTJkZTEtNGY1My1hYmJhLWZhNWExMzQxZDJiMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2JXPlUy2tblOE6qB_fWg18HBBpwT1NdrIpXB2sP604o',
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

export default QuartaCena;

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
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
    color: 'white',
    marginLeft: 15,
    backgroundColor: '#1f1f1f',
    borderRadius: 5,
    height: 60,
    paddingTop: 13,
 },

  viego: {
    width: '100%',
    height: 260,
    margin: 0,
    marginTop: 350,
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