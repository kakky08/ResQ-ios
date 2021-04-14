import React from 'react';
import { string } from 'prop-types';
import {
  Image, View, Text, StyleSheet,
} from 'react-native';

export default function Chat(props) {
  const { type, text } = props;
  const isQuestion = (type === 'question');
  // レイアウトの向き用の三項演算子
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <View styles={classes}>
      <View>
        <Image />
      </View>
      <Text style={styles.pChatBubble}>{text}</Text>
    </View>
  );
}

Chat.propTypes = {
  type: string.isRequired,
  text: string.isRequired,
};

const styles = StyleSheet.create({
  pChatBubble: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
