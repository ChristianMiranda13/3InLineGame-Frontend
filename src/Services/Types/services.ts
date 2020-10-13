type ExecuteRequestFuncType = (
  endpoint: string,
  params: any,
  method?: MethodType,
  isExternalRequest?: boolean,
  timeout?: number,
  formDataFile?: any,
) => any;

interface IResultErrors {
  extensions: {
    code: string,
  };
  message: string;
}

type MethodType = 'put' | 'delete' | 'get' | 'post';
