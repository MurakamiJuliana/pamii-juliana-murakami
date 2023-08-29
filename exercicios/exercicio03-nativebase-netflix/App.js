// FEITO POR: JULIANA MURAKAMI OSHIKAWA && RAÍNE NERES TEIXEIRA JARDIM

import React from "react";
import { Image, NativeBaseProvider } from "native-base";
import { Text, VStack, Box, Input, Button, HStack, Checkbox } from 'native-base';

function NetflixLogo() {

  return <Image source={{

    uri: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"

  }}

    width={105}

    height={30}

    marginTop={7}

    marginLeft={4}

    marginBottom={2}

    alt="Netflix Logo" />

}



const Entrar = () => {

  return <VStack space={1} alignItems="center">

    <Text color="black" bold fontSize="3xl" isTruncated maxW="5000" w="90%">Entrar</Text>

  </VStack>;

};



const Email = () => {

  return <Box alignItems="center">

    <Input mx="3" placeholder="Email ou número de telefone" w="90%" />

  </Box>;

};



const Senha = () => {

  const [show, setShow] = React.useState(false);



  const handleClick = () => setShow(!show);



  return <Box alignItems="center">

    <Input type={show ? "text" : "password"} m="8" w="90%" py="2" InputRightElement={<Button background="#FFFFFF" size="xs" rounded="none" w="2/6" h="full" onPress={handleClick}>

      {show ? "Ocultar" : "Mostrar"}

    </Button>} placeholder="Senha" />

  </Box>;

};



const Butao = () => {

  return <VStack space={4} alignItems="center">

    {["lg"].map(size => <Button key={size} size={size} p="3" w="90%" background="#dc2626">

      ENTRAR

    </Button>)}

  </VStack>;

};



// const Lembre = () => {

//   return <HStack space={6}>

//       <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />Lembre-se de mim</Checkbox>

//     </HStack>;

// };



const Lembre = () => {

  return <Checkbox.Group accessibilityLabel="choose values">

    <Checkbox value="lembre" marginLeft={4} marginTop={3}>

      Lembre-se de mim

    </Checkbox>

  </Checkbox.Group>;

};



const AJUDA = () => {

  return <VStack space={1} marginLeft={290}>

    <Text fontSize="sm">Precisa de Ajuda?</Text>

  </VStack>;

};



function FacebookLogo() {

  return <Image marginLeft={4} marginBottom={3} source={{

    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"

  }}

    width={15}

    height={15}



    alt="Facebook Logo" />





}



const Novo = () => {

  return <VStack space={1} marginLeft={4} marginBottom={3}>

    <Text fontSize="sm">Novo por aqui? <Text fontSize="sm" bold>Assine agora.</Text> </Text>

  </VStack>;

};



const Robo = () => {

  return <VStack space={1} marginLeft={4}>

    <Text fontSize="sm">Esta página é protegida pelo Google reCAPTCHA para garantir que você

      não é um robô.<Text fontSize="sm" bold color={"blue.700"}> Saiba mais.</Text></Text>

  </VStack>;

};

export default () => {

  return (

    <NativeBaseProvider>



      <NetflixLogo />

      <Entrar />

      <Email />

      <Senha />

      <Butao />

      <Lembre />

      <AJUDA />

      <FacebookLogo />

      <Novo />

      <Robo />

    </NativeBaseProvider>

  );

};

