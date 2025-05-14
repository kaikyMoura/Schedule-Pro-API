export type ResponseModel<T, E> = {
  message?: string;
  data?: T;
  token?: string;
  error?: E;
};
