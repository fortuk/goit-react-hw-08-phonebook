import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../AuthNav/AuthNav.module.css';
import { AiOutlineUserAdd, AiOutlineUserSwitch } from "react-icons/ai";

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact className={s.link} activeStyle={s.activeLink}>
        <div className={s.icon}><AiOutlineUserAdd /></div>
        <span className={s.pageName}>
          Registration page
        </span>
      </NavLink>
      <NavLink to="/login" exact className={s.link} activeStyle={s.activeLink}>
        <div className={s.icon}><AiOutlineUserSwitch /></div>
        <span className={s.pageName}>
          Login page</span>
      </NavLink>
    </div>
  );
}