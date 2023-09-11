import React from "react";
import styles from "./index.module.scss";
import Container from "../../Container";

const arr = [
  {
    id: 1,
    name: "some name",
  },
];
const Applications = () => {
  return (
    <Container>
      <div className={styles.main__title}>
        <div className={styles.title}>Заявки</div>
        <div className={styles.buttons}>
          <button className={styles.button__export}>Экспорт</button>
          <button className={styles.button__add}>Добавить</button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.numbers}>Показаны записи 1-14 из 14.</div>
        <table className={styles.table}>
          <thead>
            <tr className={styles.spisok}>
              <th className={styles.spisok__list_number}>#</th>
              <th className={styles.spisok__list}>СИСТЕМА</th>
              <th className={styles.spisok__list}>КЛИЕНТ</th>
              <th className={styles.spisok__list}>ФИЛИАЛ/ОТДЕЛ</th>
              <th className={styles.spisok__list}>ГРУППА ПРОБЛЕМ</th>
              <th className={styles.spisok__list}>СРОЧНО</th>
              <th className={styles.spisok__list}>БРИГАДА</th>
              <th className={styles.spisok__list}>ДАТА ПОСТУПЛЕНИЯ</th>
              <th className={styles.spisok__list}>СТАТУС</th>
              <th className={styles.spisok__list}>ИЗМЕНИЛ</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.title}>
              <td className={styles.down__list_number}></td>
              <td className={styles.down__list}>
                <input className={styles.link} type="number" />
              </td>
              <td className={styles.down__list}>
                <input className={styles.link} type="text" />
              </td>
              <td className={styles.down__list}>
                <input className={styles.link} type="text" />
              </td>
              <td className={styles.down__list}>
                <select className={styles.down__list_select}>
                  <input className={styles.link} list="problems" />
                  <option value=" "> </option>
                  <option value="nothing test">nothing test</option>
                  <option value="Сантехника">Сантехника</option>
                  <option value="Электричество">Электричество</option>
                  <option value="Ремонт Мебели">Ремонт Мебели</option>
                  <option value="Холодильник">Холодильник</option>
                  <option value="Ремонт оборудования">
                    Ремонт оборудования
                  </option>
                </select>
              </td>
              <td className={styles.down__list}>
                <select className={styles.down__list_select}>
                  <input className={styles.link} list="speed" />
                  <option value=""></option>
                  <option value="Срочный">Срочный</option>
                  <option value="Несрочный">Несрочный</option>
                </select>
              </td>
              <td className={styles.down__list}>
                <input className={styles.link} type="text" />
              </td>
              <td className={styles.down__list}>
                <input className={styles.link} type="date" />
              </td>
              <td className={styles.down__list}>
                <select className={styles.down__list_select}>
                  <input className={styles.link} list="status" />
                  <option value=" "> </option>
                  <option value="Принят">Принят</option>
                  <option value="Новый">Новый</option>
                  <option value="Отправлен">Отправлен</option>
                  <option value="Закончен">Закончен</option>
                  <option value="Отклонён">Отклонён</option>
                </select>
              </td>
              <td className={styles.down__list}>
                <input className={styles.link} type="text" />
              </td>
            </tr>
            {[...Array(14)].map((item, index) => {
              return (
                <tr>
                  <th className={styles.spisok__list_number}>{index}</th>
                  <th className={styles.down__list}>108773</th>
                  <th className={styles.down__list}>Islom</th>
                  <th className={styles.down__list}> Burger Зенит</th>
                  <th className={styles.down__list}>Электричество</th>
                  <th className={styles.down__list}>Несрочный</th>
                  <th className={styles.down__list}>
                    Арс-Команда №1 (01 | 536 REA)
                  </th>
                  <th className={styles.down__list}>01.09.2023 16:32</th>
                  <th className={styles.down__list}>Закончен</th>
                  <th className={styles.down__list}>Dilshod</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Applications;
