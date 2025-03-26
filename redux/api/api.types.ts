import { RootState } from "@reduxjs/toolkit/query";

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  id: string;
  username: string;
  email: string;
  token: string;
}

export interface AuthState {
  token: string | null;
}

export const prepareHeaders = (headers: Headers, { getState }: any) => {
  const token = (getState() as RootState).auth.token;
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return headers;
};
