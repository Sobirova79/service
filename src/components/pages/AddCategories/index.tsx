import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../redux/utils/types";
import {
  categoryHandler,
  categorySelector,
} from "../../../redux/reducers/addCategories";
import { useForm } from "react-hook-form";
import { updateHandler } from "../../../redux/reducers/addCategories";
import Button from "../../Button";

const AddCategories: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/categories");
  };

  const categoryItems = useAppSelector(categorySelector);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();

  const handleCategory = () => {
    const { name, group, status } = getValues();
    if (!!id) {
      dispatch(
        updateHandler({
          index: +id,
          name,
          group,
          status,
        })
      );
      handleNavigate();
    } else {
      dispatch(
        categoryHandler({
          index: 312,
          name,
          group,
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
        name: categoryItems[+id]?.name,
        group: categoryItems[+id]?.group,
        status: categoryItems[+id]?.status,
      });
  }, [id]);
  return (
    <div>
      <form onSubmit={handleSubmit(handleCategory)}>
        <div className={styles.title}>
          Добавить
          <button className={styles.button__prev} onClick={handleNavigate}>
            Назад
          </button>
        </div>
        <div className={styles.input__box}>
          <p className={styles.input__title}>Клиент</p>
          <FormControl
            className={styles.input}
            autoComplete="off"
            {...register("name", { required: "required field" })}
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

export default AddCategories;
