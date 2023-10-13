import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/store';
import ContactPerson from '../ContactPerson/ContactPerson';

const ContactList = props => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter); // Ensure you have this in your Redux state

  const filteredContacts = contacts.filter(contact =>
    contact?.name?.toLowerCase().includes(filter?.toLowerCase() || '')
  );
  console.log(filteredContacts);
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactPerson
          key={contact.id}
          contact={contact}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;
