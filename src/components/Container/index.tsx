import React, { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./index.module.scss";
import cl from "classnames";

interface Props {
  className?: string;
  children: ReactNode;
}

const Container: FC<Props> = ({ children, className }) => {
  return <div className={cl(className, styles.container)}>{children}</div>;
};

export default Container;
