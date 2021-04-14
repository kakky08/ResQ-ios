import React, { Component, useState } from 'react';
import { arrayOf, string } from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import defaultDataset from '../data/dataset';

export default function ChatBotScreen() {
  const [curentId, setCurentId] = useState('init');
  /* const currentId = 'init'; * */
  // const { curentId/* , db */ } = props;
  const db = defaultDataset;
  return (
    <View>
      <Text>こんにちは</Text>
      {/* console.log(defaultDataset[1]); */}
      <Text>{db[curentId].answers[0].nextId}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setCurentId('neck_pain')}>
        <Text>submit</Text>
      </TouchableOpacity>
    </View>
  );
}

ChatBotScreen.propTypes = {
  // curentId: arrayOf(),
  // db: arrayOf(),
};

ChatBotScreen.defaultProps = {
  // curentId: ['init'],
  // db: defaultDataset,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ddd',
    padding: 10,
  },
});
