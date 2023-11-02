import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../redux/utils/types";
import {
  updateHandler,
  appSelector,
  appHandler,
} from "../../../redux/reducers/AddApp";
import { useForm } from "react-hook-form";
import Button from "../../Button";

const AddApplications: React.FC = () => {
  const { id } = useParams();

  const appItems = useAppSelector(appSelector);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/ars");
  };
  const dispatch = useAppDispatch();

  const handleApp = () => {
    if (!!id) {
      dispatch(
        updateHandler({
          index: +id,
          filial: getValues("filial"),
          id: getValues("id"),
          system: getValues("system"),
          client: getValues("client"),
          problem: getValues("problem"),
          speed: getValues("speed"),
          brigades: getValues("brigades"),
          status: getValues("status"),
          changed: getValues("changed"),
          time: getValues("time"),
        })
      );

      reset({ filial: "" });
      handleNavigate();
    } else {
      dispatch(
        appHandler({
          index: 32,
          filial: getValues("filial"),
          id: getValues("id"),
          system: getValues("system"),
          client: getValues("client"),
          problem: getValues("problem"),
          speed: getValues("speed"),
          brigades: getValues("brigades"),
          status: getValues("status"),
          changed: getValues("changed"),
          time: getValues("time"),
        })
      );

      reset({ filial: "" });
      handleNavigate();
    }
  };

  useEffect(() => {
    if (!!id)
      reset({
        filial: appItems[+id]?.filial,
        id: appItems[+id]?.id,
        system: appItems[+id]?.system,
        client: appItems[+id]?.client,
        problem: appItems[+id]?.problem,
        speed: appItems[+id]?.speed,
        brigades: appItems[+id]?.brigades,
        status: appItems[+id]?.status,
        changed: appItems[+id]?.changed,
        time: appItems[+id]?.time,
      });
  }, [id]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleApp)}>
        <div className={styles.title}>
          Создать заказ
          <Button
            className={styles.button__prev}
            onClick={handleNavigate}
            text={"Назад"}
          />
        </div>
        <InputGroup className={styles.input__block}>
          <div className={styles.input__block}>
            <p className={styles.input__title}>Система</p>
            <select
              className={styles.input}
              {...register("system", { required: "required field" })}
            >
              <FormControl className={styles.input} autoComplete="off" />
              <option value="system">web sayt</option>
              <option value="system">bot</option>
            </select>
          </div>
          <div className={styles.input__box}>
            <p className={styles.input__title}>Клиент</p>
            <FormControl
              className={styles.input}
              autoComplete="off"
              {...register("name", { required: "required field" })}
            />
          </div>
          <div className={styles.input__box}>
            <p className={styles.input__title}>Филиал</p>
            <FormControl
              className={styles.input}
              autoComplete="off"
              {...register("filial", { required: "required field" })}
            />
          </div>

          <div className={styles.input__box}>
            <p className={styles.input__title}>Категория</p>

            <FormControl
              className={styles.input}
              autoComplete="off"
              {...register("problem", { required: "required field" })}
            />
          </div>
          <div className={styles.input__box}>
            <p className={styles.input__title}>Срочно/Несрочно</p>
            <FormControl
              className={styles.input}
              autoComplete="off"
              {...register("speed", { required: "required field" })}
            />
          </div>
          <div className={styles.input__box}>
            <p className={styles.input__title}>Бригада</p>
            <FormControl
              className={styles.input}
              autoComplete="off"
              {...register("brigades", { required: "required field" })}
            />
          </div>
          <div className={styles.input__box}>
            <p className={styles.input__title}>Статус</p>
            <FormControl
              className={styles.input}
              autoComplete="off"
              {...register("status", { required: "required field" })}
            />
          </div>
          <div className={styles.input__box}>
            <p className={styles.input__title}>Изменил</p>
            <FormControl
              className={styles.input}
              autoComplete="off"
              {...register("changed", { required: "required field" })}
            />
          </div>

          <InputGroup>
            <Button
              text={"Добавить"}
              type="submit"
              className={styles.button__add}
            />
          </InputGroup>
        </InputGroup>
      </form>
    </div>
  );
};

export default AddApplications;
