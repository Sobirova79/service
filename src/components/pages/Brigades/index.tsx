import React from "react";
import styles from "./index.module.scss";
import Container from "../../Container";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/utils/types";
import { AddHandler, addSelector } from "../../../redux/reducers/AddBrigades";
import Button from "../../Button";

const Brigades = () => {
  const AddItem = useAppSelector(addSelector);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/brigades/addbrigade");
  };
  console.log(AddItem);
  return (
    <div>
      <div className={styles.title}>
        Бригады
        <div className={styles.buttons}>
          <Button
            className={styles.button__add}
            onClick={handleNavigate}
            text={"Добавить"}
          />
        </div>
      </div>
      <Container className={styles.container}>
        <div className={styles.numbers}>Показаны записи 1 из 1.</div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.spisok}>
              <th className={styles.spisok__list_number}>#</th>
              <th className={styles.spisok__list}>НАЗВАНИЕ</th>
              <th className={styles.spisok__list}>БРИГАДИР </th>
              <th className={styles.spisok__list}> ОПИСАНИЕ </th>
              <th className={styles.spisok__list}>СТАТУС</th>
            </tr>
          </thead>
          {AddItem.map((app, index) => {
            return (
              <tr>
                <th className={styles.spisok__list_number}>{index + 1} </th>
                <th className={styles.down__list}>{app.name}</th>
                <th className={styles.down__list}>{app.brigadir}</th>
                <th className={styles.down__list}>{app.info}</th>
                <th className={styles.down__list}>{app.status}</th>
              </tr>
            );
          })}
        </table>
      </Container>
    </div>
  );
};

export default Brigades;
