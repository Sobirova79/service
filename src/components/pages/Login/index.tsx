import React from "react";
import styles from "./index.module.scss";
import { useForm } from "react-hook-form";
import loginMutation from "../../../hooks/mutations/login";
import { useAppDispatch, useAppSelector } from "../../../redux/utils/types";
import { loginHandler, tokenSelector } from "../../../redux/reducers/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { mutate } = loginMutation();
  const dispatch = useAppDispatch();
  const token = useAppSelector(tokenSelector);

  console.log(token, "token");

  const onSubmit = () => {
    const { first_name, password } = getValues();
    console.log(first_name, "first_name");
    console.log(password, "password");
    mutate(
      { username: first_name, password },
      {
        onSuccess: (data) => {
          console.log(data, "data");
          dispatch(loginHandler("data"));
        },
      }
    );
  };

  return (
    <div>
      <div>Логин</div>
      <div className={styles.login__block}>
        <p className={styles.login__title}>Авторизация</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.login__inputs}
        >
          <input className={styles.login__name} {...register("first_name")} />
          <input
            className={styles.login__password}
            {...register("password", { required: "Last name required" })}
          />
          {errors.lastName && <p>{errors.lastName.message?.toString()}</p>}
          {errors.age && <p>please enter number for age!</p>}
          <button className={styles.login__button} type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
