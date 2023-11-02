import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import useRequests from "../../../hooks/useRequests";
import { useAppDispatch, useAppSelector } from "../../../redux/utils/types";
import { tokenSelector } from "../../../redux/reducers/auth";
import Container from "../../Container";
import { appSelector } from "../../../redux/reducers/AddApp";
import Button from "../../Button";

const Ars = () => {
  const dispatch = useAppDispatch();
  const appItem = useAppSelector(appSelector);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/ars/app");
  };

  const {
    data: requests,
    refetch,
    isLoading: orderLoading,
  } = useRequests({
    enabled: true,
    size: 10,
    department: 1,
    page: 1,
    sphere_status: 1,
  });
  console.log(appItem);

  return (
    <div>
      <div>
        <Container>
          <div className={styles.main__title}>
            <div className={styles.title}>Заявки</div>
            <div className={styles.buttons}>
              <button className={styles.button__export}>Экспорт</button>
              <Button
                className={styles.button__add}
                text={"Добавить"}
                onClick={handleNavigate}
              />
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.numbers}>Показаны записи 1-14 из 14.</div>
            <table className={styles.table}>
              <thead>
                <tr className={styles.spisok}>
                  <th className={styles.spisok__list_number}>#</th>
                  <th className={styles.spisok__list}>НОМЕР ЗАЯВКИ </th>
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
                {appItem.map((app, index) => {
                  return (
                    <tr>
                      <th className={styles.spisok__list_number}>
                        {index + 1}
                      </th>
                      <th className={styles.down__list}>{app.id}</th>
                      <th className={styles.down__list}>{app.system}</th>
                      <th className={styles.down__list}>{app.client}</th>
                      <th className={styles.down__list}>{app.filial}</th>
                      <th className={styles.down__list}>{app.problem}</th>
                      <th className={styles.down__list}>{app.speed}</th>
                      <th className={styles.down__list}>{app.brigades}</th>
                      <th className={styles.down__list}>{app.time}</th>
                      <th className={styles.down__list}>{app.status}</th>
                      <th className={styles.down__list}>{app.changed}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Ars;
