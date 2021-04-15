import React from 'react';
// import { StyleSheet, View } from 'react-native-gesture-handler';
import {
  arrayOf, View,
} from 'prop-types';
import Answer from './Answer';

export default function AnswersList(props) {
  const { answers } = props;
  return (
    <View style={styles.gridAnswer}>
      {answers.map((value, index) => <Answer content={value.content} nextId={value.nextId} key={index.toString()} select={props.select}/>)}
    </View>
  );
}

AnswersList.propTypes = {
  answers: arrayOf(),
};

AnswersList.defaultProps = {
  answers: [],
};

const styles = StyleSheet.create({
  gridAnswer: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
