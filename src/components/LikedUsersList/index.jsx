import React from 'react';

function LikedUsersList(props) {
  const { users } = props;
  const likedUsers = users.filter(user => user.isLiked);

  const mapUsers = ({ id, firstName, lastName }) => (
    <li key={id}>
      {firstName} {lastName} was liked by you.
    </li>
  );

  return <ol>{likedUsers.map(mapUsers)}</ol>;
}

export default LikedUsersList;
