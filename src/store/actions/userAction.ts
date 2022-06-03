import { IUser } from '#models/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkApi) => {
	try {
		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
		return response.data;
	} catch (e) {
		return thunkApi.rejectWithValue(e.message || 'Не удалось загрузить пользователей');
	}
});
