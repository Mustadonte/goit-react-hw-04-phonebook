import { useState, useEffect } from 'react';
import { Container } from './Container/Container';

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

import { Filter } from './Filter/Filter';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState(() => {
    return JSON.parse(window.localStorage.getItem('filter')) ?? '';
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return alert(`Contact of ${data.name} is already exist`);
    }
    console.log(contacts);
    setContacts(prevState => [...prevState, data]);
    console.log(contacts);
  };

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedText = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedText)
    );
  };

  const deleteContact = deleteContactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== deleteContactId)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Search contact</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteBtn={deleteContact}
      />
    </Container>
  );
};
