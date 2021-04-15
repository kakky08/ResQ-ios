import { arrayOf } from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import TestAnswer from './TestAnswer';

const TestAnswersList = (props) => {
  const { answers } = props;
  return (
    <View className="c-grid__answer">
      {answers.map((value, index) => { <TestAnswer content={value.content} nextId={value.nextId} key={index.toString()} select={props.select}/> })}
    </View>
  );
};

TestAnswersList.propTypes = {
  answers: arrayOf,
};

TestAnswersList.defaultProps = {
  answers: [],
};

export default TestAnswersList;
