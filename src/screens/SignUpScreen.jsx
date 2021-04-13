import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    // 会員登録の実装
    // emailとpasswordを渡し、成功したら(then) 関数を実行
    //  失敗した場合(catch)の処理が走る
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        Alert.alert(error.code);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        <Text style={styles.title}>Sing Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          // 先頭が大文字にならないように設定
          autoCapitalize="none"
          // キーボードを変更
          keyboardType="email-address"
          // 何を入力するべきかを表示
          placeholder="email-address"
          // iosでキーチェーンで保存できる
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          // 先頭が大文字にならないように設定
          autoCapitalize="none"
          // 何を入力するべきかを表示
          placeholder="Password"
          // パスワードを伏字にしてくれる
          secureTextEntry
          // iosでキーチェーンで保存できる
          textContentType="password"
        />

        <Button
          label="Submit"
          onPress={handlePress}
        />

        <View style={styles.fotter}>
          <Text style={styles.fotterText}>Already registerd?</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'LogIn' }],
            });
          }}
          >
            <Text style={styles.fotterLink}>Log In.</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  fotterText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  fotterLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },
  fotter: {
    flexDirection: 'row',
  },
});
