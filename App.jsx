import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';

import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MenoCreateScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDitailScreen from './src/screens/MemoDetailScreen';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyDgED6oNTLznHC_U0ZCVMtG3ibc83ZYs4A',
  authDomain: 'resq-de025.firebaseapp.com',
  projectId: 'resq-de025',
  storageBucket: 'resq-de025.appspot.com',
  messagingSenderId: '459325654645',
  appId: '1:459325654645:web:274ff7e33c43ffc6981a3c',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#467df3' },
          headerTitleStyle: { color: '#fff' },
          headerTitle: 'ResQ',
          headerTintColor: '#fff',
          headerBackTitle: 'Back',
          // Andoroidのページ遷移をiosと統一にする
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            // Androidの様にフェードアウトさせる
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            // Androidの様にフェードアウトさせる
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDitail" component={MemoDitailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
