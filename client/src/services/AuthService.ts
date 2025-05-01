import api from './api';

export const loginUser = async (credentials: {username: string, password: string}) => {
    const response = await api.post('/auth/login', credentials);
    return response.data; // Contains token and user info
};