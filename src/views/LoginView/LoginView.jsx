import LoginForm from '../../components/LoginForm';
import s from '../LoginView/LoginView.module.css';

export default function LoginView() {
  return (
    <>
      <h2 className={s.heading}>Log in to your account</h2>
      <LoginForm />
    </>
  );
}