import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button } from 'react-native-paper';
import React, { useState } from 'react';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header } from '../components/Header';

export default function App() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
  useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Header title="SPACECRAFT"/>
      <View style={styles.content}>
        <TextInput label="Email" style={styles.input}></TextInput>
        <View style={styles.inputContainer}>
          <TextInput label="Password" style={styles.input} secureTextEntry={passwordVisibility} value={password} enablesReturnKeyAutomatically onChangeText={text => setPassword(text)}></TextInput>
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" style={styles.icon} />
          </Pressable>
        </View>
        <Button style={styles.login} color="white">Login</Button>
        <Text style={styles.readTerms}>Read terms and conditions.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
    width: 300,
  },
  login: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#3498DB',
    width: 100,
    marginBottom: 20,
  },
  readTerms: {
    color: 'grey',
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: '5%',
    right: '50%',
    marginRight: 10,
  }
});
