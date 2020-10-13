// Libraries
import to from 'await-to-js';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { mapKeys } from 'lodash';

const URL_BASE = process.env.BACKEND_URL;

type methodType = 'post' | 'get' | 'delete' | 'put';

const headers: any = {
  'Accept': 'application/json,',
  'Content-Type': 'application/json;charset=UTF-8',
};

/**
 * This function build your request. Support external and formData request too.
 * @param endpoint: Route to the request
 * @param params: Request params
 * @param method: post | get | put | delete
 * @param isExternalRequest: validate if is external route o internal
 * @param timeout: Time in Seconds
 */
const executeRequest = async (
  endpoint: string, params: IObj, method: methodType = 'post', isExternalRequest: boolean = false, timeout: number = 10) => {
  const options: AxiosRequestConfig = {
    method,
    timeout: timeout * 6000,
  };

  let url: string = isExternalRequest ? endpoint : `${URL_BASE}/${endpoint}`;

  options.headers = headers;

  if (params && params.token) {
    options.headers['ext-authorization'] = params.token;
    delete params.token;
  }

  if (method.toLowerCase() !== 'get') {
    options.data = JSON.stringify(params);
  }
  else if (params) {
    url += '?';
    url += concateGetParamsToUrl(params);
  }

  options.url = url;
  const [err, response] = await to<AxiosResponse, AxiosError>(axios(options));

  if (err) {
    throw err;
  }

  return response;
};

const concateGetParamsToUrl = (params: any): string => {
  const str: string[] = [];
  mapKeys(params, (value, key) => {
    return str.push(`${key}=${value}`);
  });
  return str.join('&');
};

export default executeRequest;
