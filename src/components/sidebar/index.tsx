import React, { FC, ReactNode, useState } from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Sidebar: FC<Props> = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => setisOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Панель управления",
      icon: "assets/images/kusok.svg",
    },
    {
      path: "/ars",
      name: "АРС розница",
      icon: "assets/images/settings.svg",
    },
    {
      path: "/Brigades",
      name: "Бригады",
      icon: "assets/images/truck.svg",
    },
    {
      path: "/Categories",
      name: "Категории",
      icon: "assets/images/kvadrat.svg",
    },
    {
      path: "/marketing",
      name: "Маркетинг",
      icon: "assets/images/statistic.svg",
    },
    {
      path: "/role",
      name: "Роли",
      icon: "assets/images/share.svg",
    },
    {
      path: "/swiper",
      name: "Swiper",
    },
  ];
  return (
    <div className={styles.container}>
      <div
        style={{ width: isOpen ? "300px" : "65px" }}
        className={styles.sidebar}
      >
        <div className={styles.sidebar__top_section}>
          <div className={styles.sidebar__bars}></div>
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className={styles.sidebar__logo}
          >
            <p>Service</p>
          </h1>
          <h2
            className={styles.sidebar__service}
            style={{ display: isOpen ? "block" : "none" }}
          >
            АРС / Inventory / IT / Marketing
          </h2>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className={styles.sidebar__link}>
            <div className={styles.sidebar_icon}>
              <img src={item.icon} alt="icon" />
            </div>
            <div className={styles.sidebar__link_text}>{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main className={styles.main}>
        <img
          className={styles.main__button}
          src="/assets/images/menu.svg"
          alt="menu"
          onClick={toggle}
        />
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
