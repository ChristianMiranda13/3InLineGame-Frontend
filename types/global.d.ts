// Global definitions for developement
declare module 'enzyme-adapter-react-16';
declare module 'redux-subscriber';
declare module 's8-client';

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

declare var module: any;

declare interface IObj {
  [key: string]: any;
}
