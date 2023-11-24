// FEITO POR: JULIANA MURAKAMI && RAÍNE JARDIM

import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { collection, doc, addDoc, deleteDoc, getDocs, where, query } from "firebase/firestore";
import { db } from './components/config';

export default function App() {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');


  // BOTÃO "ENVIAR": GRAVAR DADOS

  function create (){

    addDoc(collection(db, "users"), {
    username: username,
    email: email,
    }).then(() => {
      console.log('data submitted');

    }).catch((error) => {
      console.log(error);

    });;
  }

  // BOTÃO "CONSULTAR": LER DADOS E EXIBIR LEITURA
  function readQuery(){
    getDocs(query(collection(db, "users"), where('username', '==', username))).then(docSnap => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id:doc.id})
      });
        console.log("Document data", users[0].email);
        document.write(users[0].email);
        
    });

    getDocs(query(collection(db, "users"), where('email', '==', email))).then(docSnap => {
      let users = [];
      docSnap.forEach((doc) => {
        users.push({ ...doc.data(), id:doc.id})
      });
        console.log("Document data", users[0].username);
        document.write(users[0].username);
        
    });
  }

  // BOTÃO "EXCLUIR": DELETAR DADOS
  async function deleteData (){

      const usersQueryByMail = query(collection(db, "users"), where('email', '==', email))
      const usersQueryByUsername = query(collection(db, "users"), where('username', '==', username))

      const usersByMail = await getDocs(usersQueryByMail)
      const usersByUsername = await getDocs(usersQueryByUsername)
      
      usersByMail.forEach(async user => {
        await deleteDoc(doc(db, "users", user.id))
      })

      usersByUsername.forEach(async user => {
        await deleteDoc(doc(db, "users", user.id))
      })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text1}>EXERCÍCIO FINAL - CRUD</Text>
      <Text style={styles.text2}>INSERIDOR DE NOMES E EMAILS (PODE DELETAR) CRD</Text>

        <TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder="Nome" style={styles.textBoxes}></TextInput>
        <TextInput  value={email} onChangeText={(email) => {setEmail(email)}} placeholder="E-mail" style={styles.textBoxes}></TextInput>

        <button style={styles.btn1} onClick={create}>Enviar</button>
        <button style={styles.btn1}onClick={readQuery}>Consultar</button>
        <button style={styles.btn1} onClick={deleteData}>Excluir</button>
        
        <Text style={styles.lg}><strong style={styles.forte}>Botão "Enviar": </strong>Envia um Nome e um E-mail para o Banco de Dados;</Text>
        <Text style={styles.lg}><strong style={styles.forte}>Botão "Consultar": </strong>Insira o Nome ou o E-mail e a informação que falta será consultada <br></br>(Ex: Quando inserir o nome ele vai mostrar o email e vice-versa.);</Text>
        <Text style={styles.lg}><strong style={styles.forte}>Botão "Excluir": </strong> Insira o Nome ou o E-mail e ele será deletado do Banco de Dados <br></br>(Ex: Quando inserir o nome ou o e-mail (ou os dois) ele será deletado).</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE8E3',
    alignItems: 'center',
  },

  text1: {
    width: '50%',
    fontSize: 25,
    padding: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ED6141',
    margin: 10
  },

  text2: {
    width: '50%',
    fontSize: 18,
    padding: 12,
    textAlign: 'center',
    fontWeight: '550',
    color: '#EE4D28',
    margin: 10
  },

  btn1:{
    width: 120,
    height: 40,
    backgroundColor: '#FFAD9B',
    border: 'none',
    borderRadius: 13,
    fontSize: 16,
    margin: 8,
    color: 'white',
  },
  
  lg:{
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },

  forte:{
    color: '#ED8168',
  },

  textBoxes: {
    width: '30%',
    fontSize: 18,
    padding: 15,
    backgroundColor: '#fff',
    borderColor: '#FFAD9B',
    borderWidth: 2,
    borderRadius: 10,
    margin: 8
  },
  innerContainer:{
    alignItems: 'center',
    flexDirection: 'column',
  },
  itememail:{
    fontWeight: 'bold'
  }

});
