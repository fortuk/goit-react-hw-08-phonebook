import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from "../../redux/auth";
import s from '../AppBar/AppBar.module.css'

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={s.header}>
            <Navigation />
            <div className={s.nav}>
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>

        </header>
    )
}