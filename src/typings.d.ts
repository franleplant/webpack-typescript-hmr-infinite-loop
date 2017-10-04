declare var __DEV__: any;


declare module NodeJS  {
  interface Global {
    navigator: any
  }
}

// This enables import a from 'file.json'
declare module "*.json" {
  const value: any;
  export default value;
}
