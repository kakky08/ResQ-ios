import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';

import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handelePress() {
    // 現在のユーザーを抜き取る
    const { currentUser } = firebase.auth();
    // firebaseに接続
    const db = firebase.firestore();
    // firebaseにメモを保存
    // 下のようにすることでユーザーごとのファイルを作れる
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      // 入力された値を保持する キーとバリューが一緒ならバリューが省略される
      bodyText,
      // 現在の時刻を返す
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('Created!', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          // すぐに入力できる様にする
          autoFocus
        />
      </View>
      <CircleButton
        name="check"
        onPress={handelePress}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
});
