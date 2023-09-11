import React from "react";
import styles from "./index.module.scss";
import Container from "../../Container";

const Role = () => {
  return (
    <Container className={styles.container}>
      <div>
        <div className={styles.role}>Роли</div>
      </div>
    </Container>
  );
};

export default Role;
