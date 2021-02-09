import React from "react";
import styles from './about.module.css';
import Header from '../../components/layout'

export default () => {

  return (
    <Header>
      <h1 className={styles.header}>about page</h1>
    </Header>
  );
}