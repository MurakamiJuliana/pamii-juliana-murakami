// ATIVIDADE NETFLIX FEITO POR: JULIANA MURAKAMI OSHIKAWA & RAÍNE NERES TEIXEIRA JARDIM

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

const LoginNetflix = () => {
  return (
    <ScrollView style={{ backgroundColor: 'black', alignItens: 'center' }}>
      <View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
          }}
          style={{ width: 65, height: 16, alignSelf: 'left', margin: 5 }}
        />

        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            alignSelf: 'left',
            color: 'white',
            marginLeft: 15,
          }}>
          Entrar
        </Text>
      </View>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0,
          borderRadius: 5,
          padding: 5,
          margin: 15,
          topMargin: 1,
          color: 'white',
          background: '#5A5A5A',
        }}
        placeholder="Email ou número de telefone"
        placeholderTextColor="darkgray"
      />

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 0,
          borderRadius: 5,
          padding: 5,
          margin: 15,
          topMargin: 1,
          color: 'white',
          background: '#5A5A5A',
        }}
        placeholder="Senha"
        placeholderTextColor="darkgray"
      />

      <View style={[{ width: '90%', margin: 17, color: 'red' }]}>
        <Button
          title="Entrar"
          color="red"
          onPress={() => Alert.alert('Entrar Button pressed')}
        />
      </View>

      <View>











        
        <Text
          style={{
            fontSize: 9,
            textAlign: 'right',
            color: '#D3D3D3',
            marginRight: 20,
          }}>
          Precisa de Ajuda?
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: 9,
            textAlign: 'left',
            color: '#D3D3D3',
          }}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png',
            }}
            style={{
              width: 13,
              height: 13,
              alignSelf: 'left',
              marginLeft: 20,
              marginRight: 5,
            }}
          />
          Entrar com Facebook
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 10,
            textAlign: 'left',
            color: '#D3D3D3',
          }}>
          Novo por aqui?
        </Text>

        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            textAlign: 'left',
            color: 'white',
            marginLeft: 2,
          }}>
          Assine agora.
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          marginTop: 20,
        }}>
        <Text>
        <Text
          style={{
            fontSize: 9,
            textAlign: 'left',
            color: '#D3D3D3',
          }}>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô.
        </Text>

        <Text
          style={{
            fontSize: 9,
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#4666FF',
            marginLeft: 2,
          }}>
          Saiba mais.
        </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginNetflix;
