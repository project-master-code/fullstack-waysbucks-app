import { z } from 'zod';

export interface Iuser {
  id: number;
  username: string;
  email: string;
  profile: IUserProfile;
  role: 'USER' | 'ADMIN';
  createdAt?: string;
}

export interface IUserProfile {
  id: number;
  fullname: string;
  avatarUrl?: string;
}

const regexPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const loginSchema = z
  .object({
    email: z.string().min(4).max(20),
    password: z
      .string()
      .min(6)
      .regex(
        regexPassword,
        'Password harus mengandung angka, huruf besar, kecil dan simbol'
      ),
  })
  .required();

export const registerSchema = z
  .object({
    fullname: z.string().min(4).max(20),
    email: z.string().email('ini mah bukan email atuh euy'),
    password: z
      .string()
      .min(6)
      .regex(
        regexPassword,
        'Password harus mengandung angka, huruf besar, kecil dan simbol'
      ),
  })
  .required();

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
