export type SignInRequestType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type SignUpRequestType = {
  email: string;
  password: string;
  passwordConfirmation: string;
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

export type ProviderCallbackType = {
  provider: string | null;
  code: string | null;
};
