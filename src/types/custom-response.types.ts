export interface ICustomResponse<T> {
  success: boolean;
  data: T;
  message: string;
  error: string;
}
