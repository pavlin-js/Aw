import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreens from './screens/OnboardingScreens';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode='none'
      >
        <AppStack.Screen name='Onboard Screen' component={ OnboardingScreens } />
        <AppStack.Screen name='Login Screen' component={ LoginScreen } />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
  