import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import { ContactsSelectors } from '../../redux/phonebook';
import s from '../ContactsView/ContactsView.module.css';

function ContactsView() {
  const totalContacts = useSelector(ContactsSelectors.getTotalContacts);
  return (
    <div className={s.contacts}>
      <h2>Expand your contacts </h2>
      <ContactForm />
      <h2>Your contacts (total: {totalContacts}) </h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsView;