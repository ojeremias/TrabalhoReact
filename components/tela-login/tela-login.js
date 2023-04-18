import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Image, Pressable, NavigationContainer, Keyboard} from 'react-native';


const TelaLogin = ({navigation}) =>{
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return(
    <View style={styles.container}>
      <View style={
        {
          flexDirection: 'row',
          backgroundColor: '#313131', 
          alignItems: 'center', 
          paddingTop: 5, 
          paddingBottom: 5, 
          justifyContent: 'space-around'}
        }>
          <Button
            title='Sing up'
            onPress={() =>
                navigation.navigate('Sing Up', {name: 'cadastro'})
            }
            />
        <Image style={{width: 120, height: 30}} source={{
            uri: 'https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg'
          }}/>
        <Pressable>
          <Text style={{color: '#fff', fontWeight: 600}}>&lsaquo; Help</Text>
        </Pressable>
      </View>
      <View style={styles.inputTexts}>
          <TextInput
            style={styles.textInput}
            placeholder = "Informe o seu email"
            onChangeText={(texto) => setLogin(texto)} 
            defaultValue={login}
            keyBoardType='email'
          />

          <TextInput
            style={styles.textInput}
            placeholder = "Informe sua senha"
            onChangeText={(texto) => setSenha(texto)} 
            defaultValue={senha}
            secureTextEntry={true}
          />
          <Button color = 'red' title = "Sing in"/>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#000',
      color: 'white',
      },
    inputTexts:{  
      justifyContent: 'center',
      flex: '1',
      marginLeft: 10,
      marginRight: 10, 
      gap: 10,
      borderRadius: 100,
    },
    textInput:{
      padding: 15,
      color:'white',
      border:'none',
      borderRadius: 5,
      backgroundColor: '#302E2E'
    }
})
export default TelaLogin  