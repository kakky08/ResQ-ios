import { func, string } from 'prop-types';
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native-gesture-handler';

export default function Answer(props) {
  const { select, content } = props;
  return (
    <TouchableOpacity style={styles.button} variant="outlined" onClick={select}>
      {content}
    </TouchableOpacity>
  );
}

Answer.propTypes = {
  select: func,
  content: string,
};

Answer.defaultProps = {
  select: null,
  content: '',
};

const styles = StyleSheet.create({
  button: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
