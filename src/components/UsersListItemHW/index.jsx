import React from 'react';
import UsersListItem from './UsersListItem';

function UsersListItemHW(props) {
  const { users, setUsers } = props;

  const mapUser = (user, index) => {
    const onClickHandler = () => {
      const newUsers = [...users];
      newUsers[index].isLiked = !newUsers[index].isLiked;
      setUsers(newUsers);
    };

    const deleteUsers = () => {
      const newUsers = [...users];
      newUsers.splice([index], 1);
      setUsers(newUsers);
    };

    return (
      <UsersListItem
        key={user.id}
        user={user}
        onClickHandler={onClickHandler}
        deleteUsers={deleteUsers}
      />
    );
  };

  return <ul>{users.map(mapUser)}</ul>;
}

export default UsersListItemHW;
