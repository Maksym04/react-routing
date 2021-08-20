import React, { Component } from 'react';
import LikedUsersList from '../LikedUsersList';
import UsersListItemHW from '../UsersListItemHW';

const dbUsers = [
  {
    id: 1,
    firstName: 'Mark',
    lastName: 'Stivens',
    age: 34,
    imgSrc:
      'https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg',
  },
  {
    id: 2,
    firstName: 'Stefania',
    lastName: 'Clark',
    age: 23,
    imgSrc:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: 3,
    firstName: 'Alexandr',
    lastName: 'Ivanov',
    age: 33,
    imgSrc:
      'https://images.squarespace-cdn.com/content/v1/57ea8c00440243b5777338d5/1571149842426-KS4IC78337LFDPAJTRO7/timothee+chalamet+portrait+no+logo.jpg?format=2500w',
  },
  {
    id: 4,
    firstName: 'Laura',
    lastName: 'Brown',
    age: 25,
    imgSrc:
      'https://www.adorama.com/alc/wp-content/uploads/2017/06/1-shutterstock_588634790.jpg',
  },
  {
    id: 5,
    firstName: 'Nickolas',
    lastName: 'Wood',
    age: 29,
    imgSrc:
      'http://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8fDB8fHx8MTYyODAxNTY5OA&ixlib=rb-1.2.1&q=80&w=1080',
  },
  {
    id: 6,
    firstName: 'Jennifer',
    lastName: 'Williams',
    age: 36,
    imgSrc:
      'https://myphotostorie.com/wp-content/uploads/2018/04/Katherine-NikonD7000-FrameDSC5663-2016-2-1000x1000.jpg',
  },
  {
    id: 7,
    firstName: 'Bill',
    lastName: 'Davis',
    age: 27,
    imgSrc:
      'https://www.anthropics.com/portraitpro/img/page-images/homepage/v21/clone-tool-B.jpg',
  },
  {
    id: 8,
    firstName: 'Gulia',
    lastName: 'Wilson',
    age: 33,
    imgSrc:
      'https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg&ga=GA1.2.1978120341.1627776000',
  },
];

class UsersListHW extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: dbUsers.map(user => ({ ...user, isLiked: false })),
    };
  }

  setUsers = newUsers => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <>
        <UsersListItemHW users={users} setUsers={this.setUsers} />
        <LikedUsersList users={users} />
      </>
    );
  }
}

export default UsersListHW;
