export type ApiResponse<T> = {
  status?: number;
  message: string;
  data: T;
  errors?: string[];
};
