import React from "react";
import styles from "./index.module.scss";
import Container from "../../Container";
const Main = () => {
  return (
    <Container>
      <div>
        <div className={styles.main}>Главная</div>
        <div className={styles.meeting}>
          <div className={styles.meeting__title}>Добро пожаловать ...</div>
          <div className={styles.meeting__role}>some role</div>
        </div>
      </div>
    </Container>
  );
};

export default Main;
