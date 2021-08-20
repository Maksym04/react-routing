import React, { Component } from 'react';
import styles from './Calendar.module.scss';
import Day from './Day';
import Month from './Month';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  render() {
    const { date } = this.state;

    return (
      <section className={styles.mainContainer}>
        <article className={styles.container}>
          <Day />
          <Month date={date} />
        </article>
      </section>
    );
  }
}

export default Calendar;
