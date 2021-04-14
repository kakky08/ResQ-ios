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
import ChatBotScreen from './src/screens/ChatBotScreen';

import { firebaseConfig } from './env';

// firebaseのデータベースを使うための準備
require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ChatBot"
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
        <Stack.Screen name="ChatBot" component={ChatBotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
