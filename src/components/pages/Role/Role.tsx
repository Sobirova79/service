import React from "react";
import styles from "./index.module.scss";
import Container from "../../Container";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/utils/types";
import { removeHandler, todoSelector } from "../../../redux/reducers/todo";
import Button from "../../Button";

const Role = () => {
  const dispatch = useAppDispatch();
  const todoItem = useAppSelector(todoSelector);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/role/add");
  };
  console.log(todoItem);
  return (
    <div>
      <div className={styles.title}>
        Роли
        <div className={styles.buttons}>
          <Button
            text="Добавить"
            className={styles.button__add}
            onClick={handleNavigate}
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
              <th className={styles.spisok__list}>Счет</th>
              <th className={styles.spisok__list}>Цена</th>
              <th className={styles.spisok__list}>Статус</th>
              <th className={styles.spisok__list}>action</th>
            </tr>
          </thead>
          <tbody>
            {todoItem.map((todo, idx) => (
              <tr className={styles.down__list} key={todo.id}>
                <td width={30}>{idx + 1}</td>
                <td>{todo.name}</td>
                <td>{todo.count}</td>
                <td>{todo.price}</td>
                <td>{todo.status ? "Активный" : "Неактивный"}</td>
                <td width={30}>
                  <div className={styles.buttons}>
                    <button
                      className={styles.button__change}
                      onClick={() => navigate(`/role/${idx}`)}
                    >
                      <img src="assets/images/change_icon.svg" alt="change" />
                    </button>
                    <button
                      className={styles.button__x}
                      onClick={() => dispatch(removeHandler(idx))}
                    >
                      X
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default Role;
