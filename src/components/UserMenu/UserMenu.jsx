import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from '../UserMenu/UserMenu.module.css';
import { AiOutlineLogout } from "react-icons/ai";

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={s.userMenu}>
      <span className={s.email}>{email}</span>

      <button type="button" className={s.logOutButton} onClick={() => dispatch(authOperations.logOut())}>

        <div className={s.icon}><AiOutlineLogout /></div>
        <p className={s.link}>Log out</p>
      </button>
    </div>
  )
};

export default UserMenu;