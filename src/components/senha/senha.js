import React, {Component} from 'react';
import {  View, Text, TextInput, TouchableOpacity, Image, Alert ,StyleSheet ,StatusBar, Container, KeyboardAvoidingView } from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements'

export  default class Senha extends Component {
    render() {
      const { goBack } = this.props.navigation;
      return  (
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>


          <View style={styles.containerInputs}>
            <Text style={styles.labelText}>Enter your e-mail address below and receive your password by e-mail.</Text>
            <TextInput style = {styles.input}
                           autoCapitalize="none"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCorrect={false}
                           keyboardType='email-address'
                           returnKeyType="next"
                           placeholder='email'
                           placeholderTextColor="#000"/>

          </View>
          <View style={styles.bottom}>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.buttonContainer}
                                   onPress={() => navigate('Cadastro')}>
                           <Text  style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.labelText}>Did you remember your password??</Text>
            <TouchableOpacity style={styles.labelButton} onPress={() => goBack()}>
                <Text style={styles.labelBoldText}> Click here to return to login.</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      );
    }

}

const styles = StyleSheet.create({
  bottom: {
    flex: 2,
   paddingTop: 50,
  },
  buttonView: {
   padding: 20,
  },
  container: {
      flex: 1,
      backgroundColor: '#FFF',
  },
  loginContainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
      paddingBottom: 50
  },
  containerInputs: {
   padding: 20,
   paddingTop: 70,
   flex: 2
  },
  logo: {
      position: 'relative',
      width: '100%',
  },
  title:{
      color: "#FFF",
      marginTop: 120,
      width: 180,
      textAlign: 'center',
      opacity: 0.9
  },
  buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15,
      borderRadius: 25
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  },
  labelText:{
      color: '#000',
      textAlign: 'center',
  },
  labelBoldText:{
      color: '#000',
      textAlign: 'center',
      fontWeight: '700',
      paddingBottom: 20
  },
  labelButton:{
      paddingTop: 10,
  },
});
