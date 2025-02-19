export interface ApiError<T = unknown> {
  code?: number;
  status_code?: number;
  message?: string;
  data?: T;
  summary?: string;
}

export type IActionCallback<T = unknown> = {
  onSuccess?: (data?: T, identify?: string) => void;
  onFail?: (error?: ApiError) => void;
};
