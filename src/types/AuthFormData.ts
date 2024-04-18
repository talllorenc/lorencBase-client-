export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}
