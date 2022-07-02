import s from '../views/HomeView.module.css';
import image from '../images/phonebook.png';

export default function HomeView() {
    return (
        <section className={s.home}>
            <h2 className={s.heading}>Welcome to your most convenient phonebook</h2>
            <img src={image} alt="phonebook" width="300" />
        </section>)
}