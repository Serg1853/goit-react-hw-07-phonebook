import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const URL = 'https://655bb5d1ab37729791a98148.mockapi.io/contacts';

const getContacts = async (_, thunkApi) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
};

const postContacts = async (newContact, thunkApi) => {
  try {
    const response = await axios.post(URL, newContact);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
};
const delContacts = async (contactId, thunkApi) => {
  try {
    const response = await axios.delete(`${URL}/${contactId}`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
};

export const getContactsThunk = createAsyncThunk(
  'phoneBook/getContacts',
  getContacts
);
export const postContactsThunk = createAsyncThunk(
  'phoneBook/postContact',
  postContacts
);
export const delContactsThunk = createAsyncThunk(
  'phoneBook/delContact',
  delContacts
);
