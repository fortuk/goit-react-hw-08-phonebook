import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import s from '../RegistrationForm/RegistrationForm.module.css';
import { Card } from 'react-bootstrap';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  const regError = useSelector(authSelectors.getRegError);

  return (
    <div className={s.registrationPage}>
      <form className={s.form} method="post" onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input className={s.input} type="text" placeholder="Enter name" name="name" value={name} onChange={handleChange} />
        </label>
        <label className={s.label}>
          Email address
          <input className={s.input} type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
        </label>
        <label className={s.label}>
          Password
          <input className={s.input} type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
        </label>
        <button type="submit" className={s.registerButton}>
          Registration
        </button>
      </form>

      {regError && (
        <Card
          bg="warning"
          text="light"
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title> Error </Card.Title>
            <Card.Text>
              Wrong registration data. Try again with another data!
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}