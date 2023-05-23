export type SignInRequestType = {
  email: string;
  password: string;
};

export type SignUpRequestType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type AuthType = {
  token: string | null;
  expiresAt: number;
  isAuth: boolean;
};

export type SignErrorsType = {
  message: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
};
