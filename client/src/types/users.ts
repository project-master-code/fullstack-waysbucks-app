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
