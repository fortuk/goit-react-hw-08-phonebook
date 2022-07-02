import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from '../Navigation/Navigation.module.css';
import { authSelectors } from "../../redux/auth";
import { AiOutlineRead, AiFillHome } from "react-icons/ai";

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.navigation}>
      <NavLink to="/" className={s.link} activeClassName={s.activeLink}>
        <div className={s.icon}><AiFillHome /></div>
        <span>Home page</span>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
          <div className={s.icon}><AiOutlineRead /></div>
          <span>Contacts page</span>
        </NavLink>)}
    </nav>
  )
};

export default Navigation;