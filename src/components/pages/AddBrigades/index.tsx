import styles from "./index.module.scss";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, FormCheck, FormControl, InputGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../redux/utils/types";
import { updateHandler } from "../../../redux/reducers/AddBrigades";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addSelector } from "../../../redux/reducers/AddBrigades";
import { AddHandler } from "../../../redux/reducers/AddBrigades";
import Button from "../../Button";

const AddBrigades: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/brigades");
  };
  const AddItems = useAppSelector(addSelector);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    const { name, brigadir, info, status } = getValues();
    if (!!id) {
      dispatch(
        updateHandler({
          index: +id,
          name,
          brigadir,
          info,
          status,
        })
      );
      handleNavigate();
    } else {
      dispatch(
        AddHandler({
          index: 312,
          name,
          brigadir,
          info,
          status,
        })
      );
      reset({ name: "" });
      handleNavigate();
    }
  };

  useEffect(() => {
    if (!!id)
      reset({
        name: AddItems[+id]?.name,
        brigadir: AddItems[+id]?.brigadir,
        info: AddItems[+id]?.info,
        status: AddItems[+id]?.status,
      });
  }, [id]);
  return (
    <div>
      <form onSubmit={handleSubmit(handleAdd)}>
        <div className={styles.title}>
          Добавить
          <Button
            text={"Назад"}
            className={styles.button__prev}
            onClick={handleNavigate}
          />
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
          <p className={styles.input__title}>Клиент</p>
          <FormControl
            className={styles.input}
            autoComplete="off"
            {...register("brigadir", { required: "required field" })}
          />
        </div>

        {errors?.name && <span>{errors.name?.message?.toString()}</span>}
        <InputGroup>
          <Button
            text="Добавить"
            type="submit"
            className={styles.button__add}
          />
        </InputGroup>
      </form>
    </div>
  );
};

export default AddBrigades;
