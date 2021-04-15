import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { string } from 'prop-types';
import NoProfile from '../../assets/favicon.png';
import Torahack from '../../assets/icon.png';

const TestChat = (props) => {
  const { type, text } = props;
  const isQuestion = (type === 'question');
  // レイアウトの向きの三項演算子
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    // 下2つはマテリアルui
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (<Avatar alt="icon" src={Torahack} />
        ) : (
          <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{text}</div>
    </ListItem>
  );
};

TestChat.propTypes = {
  type: string.isRequired,
  text: string.isRequired,
};

export default TestChat;
