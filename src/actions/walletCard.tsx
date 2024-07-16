import React, { useCallback } from 'react'
import axios, { AxiosResponse } from 'axios';


interface UserResponse {
    data: {
      id: number;
      name: string;
      // Add other properties as needed
    };
  }

  const apiClient = axios.create({
    baseURL: process.env.API_URL,
  });
  
export const walletCard = () => {
    const getUser = async (): Promise<AxiosResponse<UserResponse>> => {
      try {
        const response = await axios.get(`https://666ab640-8d6a-491b-be32-e06642d051cf.mock.pstmn.io/v1/customers`);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

    return {
      getUser
    };
  };