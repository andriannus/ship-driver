import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";
import { useState } from "react";

import { ApiInvokerConfig, ApiInvokerHook } from "./api-invoker.model";

import { API } from "@/constants/api.constant";

export function useApiInvoker({
  baseUrl = "",
  headers = {},
}: ApiInvokerConfig): ApiInvokerHook {
  const [cancelSource, setCancelSource] = useState<CancelTokenSource | null>(
    null,
  );

  const apiInvoker = axios.create({
    baseURL: baseUrl || API.baseUrl,
    timeout: API.timeout,
    ...headers,
  });

  apiInvoker.interceptors.request.use(interceptRequest);
  apiInvoker.interceptors.response.use(
    interceptSuccessResponse,
    interceptErrorResponse,
  );

  function createCancelToken(config: AxiosRequestConfig): void {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    setCancelSource(source);

    config.cancelToken = source.token;
  }

  function cancelRequest(): void {
    if (cancelSource) {
      return cancelSource.cancel();
    }
  }

  function interceptRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    cancelRequest();
    createCancelToken(config);

    return config;
  }

  function interceptSuccessResponse(res: AxiosResponse): AxiosResponse {
    return res;
  }

  function interceptErrorResponse(err: any): Promise<never> {
    return Promise.reject(err);
  }

  return { apiInvoker };
}
