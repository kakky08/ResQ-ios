import React, { useState } from 'react';
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inner}>

        <Text style={styles.title}>Log In</Text>
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
          // 履歴を消して戻るボタンを表示されないようにコントロール
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });
          }}
        />

        <View style={styles.fotter}>
          <Text style={styles.fotterText}>Not registered?</Text>
          <TouchableOpacity onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'SignUp' }],
            });
          }}
          >
            <Text style={styles.fotterLink}> Sign up here!</Text>
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
