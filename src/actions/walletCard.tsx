import React, {useCallback} from 'react';
import axios, {AxiosResponse} from 'axios';
import {UserResponse} from '../interfaces/user.interface';

const apiClient = axios.create({
  baseURL: process.env.API_URL,
});


// Add a request interceptor
apiClient.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
}, error => {
  console.error('Request Error', error);
  return Promise.reject(error);
});

// Add a response interceptor
apiClient.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
}, error => {
  console.error('Response Error', error);
  return Promise.reject(error);
});


export const walletCard = () => {
  const getUser = async (): Promise<AxiosResponse<UserResponse>> => {
    try {
      const response = await axios.get(
        `https://666ab640-8d6a-491b-be32-e06642d051cf.mock.pstmn.io/v1/customers/accounts`,
      );
      return response;
      // Get User details
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getUserBalance = async (token: string): Promise<AxiosResponse<UserResponse>> => {
    try {
      // Use apiClient with token in headers
      const response = await apiClient.get('https://api.stripe.com/v1/balance', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
      // Get User balance
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    getUser,
    getUserBalance
  };
};
