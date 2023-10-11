import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/store';
import ContactForm from 'redux/ContactForm';
import ContactList from 'redux/ContactList';
import Filter from 'redux/Filter';
import { Container } from './App.styled';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formData;

  const addContactHandler = () => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
    setFormData({ name: '', number: '' });
  };

  const deleteContactHandler = contactId => {
    dispatch(deleteContact(contactId));
  };

  const [filter, setFilter] = useState('');

  const handleFilterChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        onNameChange={e => setFormData({ ...formData, name: e.target.value })}
        onNumberChange={e =>
          setFormData({ ...formData, number: e.target.value })
        }
        onAddContact={addContactHandler}
      />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContactHandler}
      />
    </Container>
  );
};

export default App;
