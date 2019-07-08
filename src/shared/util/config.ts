export interface IConfig {
  API_URL: string;
  BASE_URL: string;
  SENTY_URL: string;
}

export const isDevelopment = () => true;

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    appConfig: any;
  }
}

// window.appConfig = window.appConfig || {};

export const getConfig = (): IConfig => ({
  API_URL: process.env.NODE_ENV !== "production" ? "http://localhost:5000" : "https://viper.webbio.dev:5000",
  BASE_URL: "https://viper.com",
  SENTY_URL: "https://8c44bbeee82d48ac8730fdc7bf77ecdf@sentry.io/1460077"
});
