import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './ContactsInitialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialState,
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.unshift(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, deleteContact } = contactSlice.actions;

// Selectors
export const getContacts = state => state.contacts.contacts;
