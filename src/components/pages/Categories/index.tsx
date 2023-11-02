import React from "react";
import styles from "./index.module.scss";
import Container from "../../Container";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/utils/types";
import { categorySelector } from "../../../redux/reducers/addCategories";
import Button from "../../Button";

function Categories() {
  const categoryItems = useAppSelector(categorySelector);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/categories/addcategories");
  };
  return (
    <div>
      <div className={styles.title}>
        Категории
        <div className={styles.buttons}>
          <Button
            text="Добавить"
            onClick={handleNavigate}
            className={styles.button__add}
          />
        </div>
      </div>
      <Container className={styles.container}>
        <div className={styles.numbers}>Показаны записи 1 из 1.</div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.spisok}>
              <th className={styles.spisok__list_number}>#</th>
              <th className={styles.spisok__list}>НАИМЕНОВАНИЕ</th>
              <th className={styles.spisok__list}>ОТДЕЛ </th>
              <th className={styles.spisok__list}>СТАТУС</th>
            </tr>
          </thead>
          {categoryItems.map((category, index) => {
            return (
              <tr>
                <th className={styles.spisok__list_number}>{index + 1} </th>
                <th className={styles.down__list}>{category.name}</th>
                <th className={styles.down__list}>Арс </th>
                <th className={styles.down__list}>Активный</th>
              </tr>
            );
          })}
        </table>
      </Container>
    </div>
  );
}

export default Categories;
