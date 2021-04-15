import React from 'react';
import { View } from 'react-native';
import { ChangeHistorySharp } from '@material-ui/icons';
import defaultDataset from '../data/dataset';
import TestChats from '../components/TestChats';
import TestAnswersList from '../components/TestAnswersList';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: 'init',
      dataset: defaultDataset,
    };
  }

  componentDidMount() {
    const { currentId } = this.state;
    const initAnswer = '';
    this.selectAnswer(initAnswer, currentId);
  }

  componentDidUpdate() {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollWidth;
    }
  }

  displayNextQuestion(nextQuestionId) {
    const { chats } = this.state;
    const { dataset } = this.state;
    ChangeHistorySharp.push({
      text: dataset[nextQuestionId].question,
      type: 'question',
    });

    this.setState({
      answers: dataset[nextQuestionId].answers,
      chats: { chats },
      currentId: nextQuestionId,
    });
  }

  selectAnswer(selectedAnswer, nextQuestionId) {
    const { chats } = this.state;
    // nextIdによって状態の変化
    switch (true) {
      // 次の質問へ
      case (nextQuestionId === 'init'):
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;
      // それ以外
      default:
        chats.push({
          // 次の質問のセット
          text: selectedAnswer,
          type: 'answer',
        });

        this.setState({
          chats: { chats },
        });

        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000);
    }
  }

  render() {
    const { chats, answers } = this.state;
    return (
      <View>
        <View>
          <TestChats chats={chats} />
          <TestAnswersList answers={answers} select={this.selectAnswer} />
        </View>
      </View>
    );
  }
}
