import RegistrationForm from '../../components/RegistrationForm';
import s from '../RegisterView/RegisterView.module.css';
export default function RegisterView() {
  return (
    <>
      <h2 className={s.heading}>Register your account</h2>
      <RegistrationForm />
    </>
  );
}