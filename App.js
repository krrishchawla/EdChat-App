import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text, Icon, Button } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Math104 from './screens/math104';
import Cs107 from './screens/cs107';
import Cs231n from './screens/cs231n';
import Posts from './screens/PostsPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);

export const LoginButton = () => (
  <Button accessoryLeft={FacebookIcon}>Login with Facebook</Button>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="MATH 104" component={Math104} options={{headerShown: false}}/>
        <Stack.Screen name="CS 231N" component={Cs231n} options={{headerShown: false}}/>
        <Stack.Screen name="CS 107" component={Cs107} options={{headerShown: false}}/>
        <Stack.Screen name="PostsPage" component={Posts} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
  
  
    

  // <ApplicationProvider {...eva} theme={eva.light}>
  //   <SignupScreen/>
  // </ApplicationProvider>
  
  );
};