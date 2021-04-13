import React from 'react';

export default function Chat(props) {
  const isQuestion = (props.type === ' question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <Li
  )
}
