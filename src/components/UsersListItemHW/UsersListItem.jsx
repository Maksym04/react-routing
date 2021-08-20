import React from 'react';
import styles from './UsersListItemHW.module.css';

function UsersListItem(props) {
  const {
    user: { firstName, lastName, age, imgSrc, isLiked },
    onClickHandler,
    deleteUsers,
  } = props;

  const buttonStyle = { color: '#FF0000' };

  return (
    <div className={styles.mainContainer}>
      <li className={styles.container}>
        <div className={styles.userCard}>
          <div className={styles.userImage}>
            <img src={imgSrc} />
          </div>
          <div className={styles.userInfo}>
            <p className={styles.fullNameBlock}>
              {firstName} {lastName}
            </p>
            <p className={styles.ageInfoBlock}>{age} year old</p>
          </div>
          <div className={styles.buttonBlock}>
            <button
              style={isLiked ? buttonStyle : null}
              className={styles.likeButton}
              onClick={onClickHandler}
            >
              LIKE{' '}
              <svg
                style={{ width: '24px', height: '24px' }}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5,9V21H1V9H5M9,21A2,2 0 0,1 7,19V9C7,8.45 7.22,7.95 7.59,7.59L14.17,1L15.23,2.06C15.5,2.33 15.67,2.7 15.67,3.11L15.64,3.43L14.69,8H21C22.11,8 23,8.9 23,10V12C23,12.26 22.95,12.5 22.86,12.73L19.84,19.78C19.54,20.5 18.83,21 18,21H9M9,19H18.03L21,12V10H12.21L13.34,4.68L9,9.03V19Z"
                />
              </svg>
            </button>
            <button className={styles.deleteButton} onClick={deleteUsers}>
              DELETE
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default UsersListItem;
