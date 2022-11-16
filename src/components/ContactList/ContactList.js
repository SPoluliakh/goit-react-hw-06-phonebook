import React, { useMemo } from 'react';
import { List } from './ContactList.styled';
import ContactListItem from '../ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts } from '../../Redux/contactSlice';
import { getFilter } from '../../Redux/filterSlice';

const ContactList = () => {
  const contactList = useSelector(getContacts);
  const filterItem = useSelector(getFilter);

  //Responsible for rendering the requested/all contacts
  const findContactbyName = useMemo(() => {
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filterItem)
    );
  }, [contactList, filterItem]);

  return (
    <>
      <h2>Contacts : {findContactbyName.length}</h2>
      <List>
        {findContactbyName.map(({ name, number, id }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
      </List>
    </>
  );
};

export default ContactList;
