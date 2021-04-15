import React from 'react';
import Button from '@material-ui/core/Button';
import { StyleSheet } from 'react-native';
import { string, func } from 'prop-types';

const TestAnswer = (props) => {
  const { select, content, nextId } = props;
  return (
    <Button style={styles.button} variant="outlined" onClick={() => select(content, nextId)}>
      {content}
    </Button>
  );
};

TestAnswer.propTypes = {
  select: func,
  content: string.isRequired,
  nextId: string.isRequired,
};

TestAnswer.defaultProps = {
  select: null,
};

const styles = StyleSheet.create({
  button: {
    borderColor: '#FFB549',
    color: '#333',
    /* fontWeight: 'bold', */
    marginBottom: 15,
    padding: 8,
    /* '&:hover': {
      backgroundColor: '#FFB549',
      color: '#FFF',
    }, */
  },
});

export default TestAnswer;
