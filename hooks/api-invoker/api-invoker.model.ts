import { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from "axios";

export interface ApiInvokerConfig {
  baseUrl?: string;
  headers?: AxiosRequestConfig;
}

export interface ApiInvokerHook {
  apiInvoker: AxiosInstance;
}
