
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from '../ContactForm/ContactForm.module.css'
import { ContactsSelectors, ContactsOperations } from '../../redux/phonebook';


export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(ContactsSelectors.getFiltredContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(ContactsOperations.addContact(contacts, name, number));
        setName('');
        setNumber('');
    }

    return (
        <form onSubmit={handleSubmit} className={s.form} method="post">
            <label className={s.label}>
                Name
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={s.label}>
                Phone Number
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit" className={s.button}>
                Add Contact
            </button>
        </form>
    );
}
