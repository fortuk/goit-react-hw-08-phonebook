import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import s from '../LoginForm/LoginForm.module.css';
import { Card } from 'react-bootstrap';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const authError = useSelector(authSelectors.getAuthError);

  return (
    <div className={s.loginPage}>
      <form className={s.form} method="post" onSubmit={handleSubmit}>
        <label className={s.label}>
          Email address
          <input className={s.input} type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
        </label>
        <label className={s.label}>
          Password
          <input className={s.input} type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
        </label>
        <button type="submit" className={s.loginButton}>
          Login
        </button>
      </form>

      {authError && (
        <Card
          bg="warning"
          text="light"
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title> Error </Card.Title>
            <Card.Text>Email or password wrong. Try again!</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}