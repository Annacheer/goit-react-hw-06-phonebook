import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './store';
import ContactPerson from './ContactPerson';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  return (
    <ul>
      {contacts.map(contact => (
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
