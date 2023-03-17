import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { supabase } from '../supabase';
import HomeScreen from './HomeScreen';

export default function LoginScreen( {navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      console.log('Success:', user);
    //   navigation.navigate('HomeScreen')
    } catch (error) {
      console.log('Error:', error);
    }
    navigation.navigate('HomeScreen')
  };

  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/logo.png')}
        style={{width: 200, height : 50}}
        resizeMode="contain"/>   
        <Text style={{marginBottom : 40}}>Chatroom for students</Text>     
        <Text style={styles.title}>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={{marginTop: 20, color : '#306FDB'}}> Not a member? Sign Up now {">"} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbfbfb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginVertical: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#337aff',
    borderRadius: 5,
    padding: 12,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});