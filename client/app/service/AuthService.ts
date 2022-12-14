import { AuthResponse } from "@/types/interfaces";
import { AxiosResponse } from "axios";
import $api from "../http";

export default class AuthService {
  static async login (email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', {email, password})
  }

  static async registration (email: string, password: string, firstName: string, lastName: string, avatarPath: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', {email, password, firstName, lastName, avatarPath})
  }

  static async logout (): Promise<void> {
    return $api.post('/logout')
  }
}