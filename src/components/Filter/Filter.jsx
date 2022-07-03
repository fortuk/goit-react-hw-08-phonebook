import React from 'react';
import s from './Filter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ContactsSelectors, ContactsActions } from '../../redux/phonebook';

export default function Filter() {
    const filter = useSelector(ContactsSelectors.getFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event => {
        dispatch(ContactsActions.changeFilter(event.currentTarget.value))
    };
    return (
        <form className={s.form}>
            <label className={s.label}>
                Find contacts by name
                <input type="text" value={filter} required onChange={onChangeFilter} className={s.input} />
            </label>
        </form>
    );
}

