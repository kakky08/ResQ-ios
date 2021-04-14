import React from 'react';
import { StyleSheet, View } from 'react-native-gesture-handler';
import {
  arrayOf,
} from 'prop-types';

import { Chat } from './Chat';

export default function Chats(props) {
  const { chats } = props;
  return (
    <View style={styles.chats} id="scroll-area">
      {chats.map((chat, index) => <Chat text={chat.text} type={chat.type} key={index.toString()} />)}
    </View>
  );
}

Chats.propTypes = {
  chats: arrayOf(),
};

Chats.defaultProps = {
  chats: [],
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
