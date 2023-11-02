import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Container, FormCheck, FormControl, InputGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../redux/utils/types";
import {
  todoHandler,
  todoSelector,
  updateHandler,
} from "../../../redux/reducers/todo";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../Button";

const AddRole: React.FC = () => {
  const { id } = useParams();

  const todoItems = useAppSelector(todoSelector);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  console.log(getValues("status"));
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/role");
  };
  const dispatch = useAppDispatch();

  const handleTodo = () => {
    if (!!id) {
      dispatch(
        updateHandler({
          index: +id,
          name: getValues("role"),
          count: +getValues("count"),
          price: getValues("price"),
          status: getValues("status"),
        })
      );
      handleNavigate();
    } else {
      dispatch(
        todoHandler({
          name: getValues("role"),
          count: getValues("count"),
          price: getValues("price"),
          status: getValues("status"),
        })
      );

      reset({ role: "" });
      handleNavigate();
    }
  };

  useEffect(() => {
    if (!!id)
      reset({
        role: todoItems[+id]?.name,
        count: todoItems[+id]?.count,
        price: todoItems[+id]?.price,
        status: todoItems[+id]?.status,
      });
  }, [id]);
  return (
    <Container>
      <form onSubmit={handleSubmit(handleTodo)}>
        <div className={styles.title}>
          Добавить
          <div className={styles.buttons}>
            <Button
              text="Назад"
              onClick={handleNavigate}
              className={styles.button__prev}
            />
          </div>
        </div>
        <InputGroup className={styles.input__block}>
          <FormControl
            className={styles.input}
            placeholder="Роль:"
            autoComplete="off"
            {...register("role", { required: "required field" })}
          />
          <FormControl
            className={styles.input}
            placeholder="Count"
            autoComplete="off"
            {...register("count", { required: "required field" })}
          />
          <FormControl
            className={styles.input}
            placeholder="Цена:"
            autoComplete="off"
            {...register("price", { required: "required field" })}
          />

          <div className={styles.checkbox}>
            <p>Status:</p>
            <FormCheck
              className={styles.squad}
              autoComplete="off"
              {...register("status")}
            />
          </div>
          {errors.role && <span>{errors.role?.message?.toString()}</span>}
          <InputGroup>
            <Button
              text="Добавить"
              type="submit"
              className={styles.button__add}
            />
          </InputGroup>
        </InputGroup>
      </form>
    </Container>
  );
};

export default AddRole;
