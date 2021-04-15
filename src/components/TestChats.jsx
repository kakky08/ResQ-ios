import React from 'react';
import List from '@material-ui/core/List';
import { arrayOf } from 'prop-types';
import TestChat from './TestChat';

const TestChats = (props) => {
  const { chats } = props;
  return (
    <List style={styles.chats} id="scroll-area">
      {/* mapでchats配列を出力 */}
      {chats.map((chat, index) => { <TestChat text={chat.text} type={chat.type} key={index.toString()} /> })}
    </List>
  );
};

TestChats.propTypes = {
  chats: arrayOf(),
};

TestChats.defaultProps = {
  chats: [],
};

const styles = StyleSheet.create({
  chats: {
    height: 280,
    padding: 0,
    overflow: 'auto',
  },
});

export default TestChats;
