// Libraries
import { each } from 'lodash';

export const COPORTAL_TOKEN_KEY = 'x-coportal-token';

export const createCookie = (name: string, value: string, expDays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
};

export const getCookie = (cname: string) => {
  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  let value = '';

  each(ca, (c) => {
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      value = c.substring(name.length, c.length);
      return true;
    }
  });

  return value;
};

export const deleteCookie = (key: string) => {
  document.cookie = key + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
