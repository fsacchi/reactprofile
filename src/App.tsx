/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import photo from './assets/eu.jpeg';
import Icon from 'react-native-vector-icons/Feather'
import Card from './components/Card'

function App(): JSX.Element {
  function handleRedeSocial(rede_social) {
    switch(rede_social) {
      case 'linkedin':
        Alert.alert('Meu linkedin', 'https://www.linkedin.com/in/fms-dev/');
        break;
      case 'github':
          Alert.alert('Meu Github', 'https://github.com/fsacchi');
          break;
      case 'facebook':
          Alert.alert('Meu facebook', 'Vou ficar devendo');
          break;
    }
  }

  return (
    <SafeAreaView style={css.page}>
      <View >
          <View style={css.header}>
            <Image source={photo} style={css.foto}/>
            <Text style={css.nome}>Felipe Meirelles Sacchi</Text>
            <Text style={css.funcao}>Desenvolvedor Mobile</Text>
            <View style={css.redes_sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name="github" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                <Icon name="facebook" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')} >
                <Icon name="linkedin" size={30}/>
              </TouchableOpacity>
           </View>
          </View>
      </View>

      

      <Card titulo="Experiência Profissional">
           <Text style={css.card_content_text}>Colégio Fereguetti</Text>
            <Text style={css.card_content_text}>Zarp System</Text>
            <Text style={css.card_content_text}>CAS Tecnologia</Text>
      </Card>
      <Card titulo="Formação Acadêmica">
           <Text style={css.card_content_text}>UNIFEB</Text>
            <Text style={css.card_content_text}>Centro Paula Souza</Text>
            <Text style={css.card_content_text}>Harvard</Text>
        </Card>

    </SafeAreaView>
  );
}

const css = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#000'
  },
})


export default App;
