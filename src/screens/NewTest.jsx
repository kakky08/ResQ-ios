import React, { useEffect, useState } from 'react';
import { View, SectionList } from 'react-native';
import defaultDataset from '../data/dataset';
import TestChats from '../components/TestChats';
import TestAnswersList from '../components/TestAnswersList';

export default function NewTest() {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [detaset, setDataset] = useState(defaultDataset);

  useEffect(() => {
    const initAnswer = '';
    selectAnswer(initAnswer, currentId);
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollWidth;
    }
  });

  function displayNextQestion(nextQuestionId) {
    setChats.push({
      text: detaset[nextQuestionId].question,
      type: 'question',
    });

    setAnswers(detaset[nextQuestionId].answers);
    setChats(chats);
    setCurrentId(nextQuestionId);
  }

  function selectAnswer(selectedAnswer, nextQuestionId) {
    switch (true) {
      // 次の質問へ
      case (nextQuestionId === 'init'):
        setTimeout(() => displayNextQestion(nextQuestionId), 500);
        break;
      // それ以外
      default:
        setAnswers.push({
          // 次の質問のセット
          text: selectedAnswer,
          type: 'answer',
        });

        setChats(chats);

        setTimeout(() => displayNextQestion(nextQuestionId), 1000);
    }
  }

  return (
    <View>
      <SectionList>
        <TestChats chats={chats} />
        <TestAnswersList answers={answers} select={selectAnswer} />
      </SectionList>
    </View>
  );
}
