import PropTypes from 'prop-types';

import {
  Avatar,
  Name,
  Tag,
  Location,
  Label,
  Quantity,
  None,
  Div,
} from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <Div>
      <div className="description">
        <Avatar src={avatar} alt={tag} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <None>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </None>
    </Div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
