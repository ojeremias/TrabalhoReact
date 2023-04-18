import React, {useState} from 'react';
import TelaLogin from './components/tela-login/tela-login'
import telaCadastro from './components/tela-cadastro/tela-cadastro'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name= "Tela de Login"
            component={TelaLogin}
            options={{title: "Olá, estranho!"}}
          />
          <Stack.Screen
            name='Tela de Cadastro'
            component={telaCadastro}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App  