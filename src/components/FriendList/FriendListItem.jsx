import PropTypes from 'prop-types';

import { Status, Item, Div } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Div>
      <Item>
        <Status isOnline={isOnline}>{isOnline}</Status>
        <img className={avatar} src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </Item>
    </Div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};