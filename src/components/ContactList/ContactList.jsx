import React from 'react';
import { useEffect } from 'react';
import s from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ContactsSelectors, ContactsOperations } from '../../redux/phonebook';

export default function ContactList() {
    const error = useSelector(ContactsSelectors.getError);
    const loading = useSelector(ContactsSelectors.getLoadingStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ContactsOperations.fetchContact());
    }, [dispatch]);
    const contacts = useSelector(ContactsSelectors.getFiltredContacts);

    return (
        <>
            {loading && <h2 className={s.loading}>Loading...</h2>}
            {error && <h2 className={s.error}>{error}</h2>}
            <ul className={s.list}>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={s.item}>
                        <p className={s.name}>{name}: <span>{number}</span></p>
                        <button onClick={() => dispatch(ContactsOperations.deleteContact(id))} type="button" className={s.button}>DELETE</button>

                    </li>
                ))}
            </ul>
        </>
    )
};
