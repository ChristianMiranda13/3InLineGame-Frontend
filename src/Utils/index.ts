const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const timeConverter = (timestamp: number) => {
  const a = new Date(timestamp);
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const amOrPm = hour >= 12 ? 'pm' : 'am';
  const hour12 = (hour % 12) || 12;

  const timeRes = hour12 + ':' + (min < 10 ? '0' + min : min) + ' ' + amOrPm;
  const dateRes = date + ' ' + month + ' ' + year;

  return { time: timeRes, date: dateRes };
};

export const validateEmail = (email: string) => {
  const validateExp = new RegExp(/^\w+\-?[a-zA-Z]+\_?\+?[a-zA-Z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  return validateExp.test(email);
};

export const toCamelCase = (value: string) => {
  if (!value) {
    return '';
  }

  value = value.toLowerCase();
  return value.substr(0, 1).toUpperCase() + value.substr(1);
};

/**
 * copyObject
 * @param obj
 */
export const copyObject = (obj: any) => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    return null;
  }
};
/**
 * compare two objects
 * @param obj1
 * @param obj2
 */
export const objectNotEquals = (obj1: object, obj2: object) => {
  return JSON.stringify(obj1) !== JSON.stringify(obj2);
};

/**
 * Save persisten info in session
 * @param key: Name of the session value
 */
//#region Session Storage
export const getSessionStorage = (key: string) => {
  const data = sessionStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
};

export const setSessionStorage = (key: string, data: any) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
//#endregion Session Storage
