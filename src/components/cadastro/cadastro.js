import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Image, Alert, Button ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';

import CadastroForm from './cadastroForm';

export  default class Cadastro extends Component {
    render() {
      return  (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.loginContainer}>
            <Image style={styles.logo} source={require('../../components/images/login.png')} />
          </View>
          <View>
            <CadastroForm />
          </View>
        </KeyboardAvoidingView>
      );
    }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF',
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logo: {
      position: 'absolute',
      width: '100%',
      height: '100%',
  },
  title:{
      color: "#FFF",
      marginTop: 120,
      width: 180,
      textAlign: 'center',
      opacity: 0.9
  }
});
