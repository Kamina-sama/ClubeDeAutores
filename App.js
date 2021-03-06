import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import MyBooks from './Screens/MyBooks';
import UploadBook from './Screens/UploadBook';
import EditBook from './Screens/EditBook';
import Store from './Screens/Store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={'SignUp'}>
        <Drawer.Screen name={'SignUp'} component={SignUp} options={{gestureEnabled:false}}/>
        <Drawer.Screen name={'Login'} component={Login} options={{gestureEnabled:false}}/>
        <Drawer.Screen name={'UploadBook'} component={UploadBook} options={{gestureEnabled:false}}/>
        <Drawer.Screen name={'MyBooks'} component={MyBooks}/>
        <Drawer.Screen name={'EditBook'} component={EditBook} options={{gestureEnabled:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
