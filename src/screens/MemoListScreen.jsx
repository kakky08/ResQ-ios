import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    // ヘッダーに機能を追加
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  // リストの監視にuseEffectを使う
  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => { };
    // ユーザーのログイン情報が消えて実行されなかった時用の処理(if文)
    if (currentUser) {
      // ordrerByで順序の並び替え、descは降順のこと、ascは昇順
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      // snapshotに自分のメモ情報が入る
      unsubscribe = ref.onSnapshot((snapshot) => {
        // 仮の配列
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          // データを加工して格納
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        // memosにセットする
        setMemos(userMemos);
      }, (error) => {
        // データの読み込みに失敗した時の処理
        console.log(error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    // 削除、キャンセルされる時に監視から外れる処理
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

});
