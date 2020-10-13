import { Middleware } from 'redux';

const loggerMiddleware: Middleware = (state) => {
  return (next: ThunkDispatchType) => (action: any) => {
    return next(action);
  };
};

export default loggerMiddleware;
