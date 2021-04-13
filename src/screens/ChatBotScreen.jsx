import React from 'reacr';
import {
  Text, View, StyleSheet, TextInput, TouchableOpacity, Alert,
} from 'react-native';

import defaultDataset from '../../dataset';

export default function ChatBotScreen() {

  return (
    <View style={styles.cSection}>
      <View style={styles.container}>
        <Chats />
        <AnswersList />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

});
