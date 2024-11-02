export interface ICustomResponse<T> {
  success: boolean;
  data?: T | null;
  message?: string | null;
  error?: T | null;
}
