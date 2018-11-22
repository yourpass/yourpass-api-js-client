export enum Enviroment {
  PRODUCTION = "production",
  PLAY = "play",
  BETA = "beta",
  DEVELOPMENT = "development",
}

export enum API_URL {
  CORE = "CORE_API_URL",
  AUTH = "AUTH_API_URL",
}

export interface Profile {
  [API_URL.AUTH]: string;
  [API_URL.CORE]: string;
}

export interface Profiles {
  [Enviroment.PRODUCTION]: Profile;
  [Enviroment.PLAY]: Profile;
  [Enviroment.BETA]: Profile;
  [Enviroment.DEVELOPMENT]: Profile;
}

export const profiles: Profiles = {
  production: {
    [API_URL.AUTH]: "https://login.yourpass.eu",
    [API_URL.CORE]: "https://api.yourpass.eu",
  },
  play: {
    [API_URL.AUTH]: "https://pass.ysplay.cz/login",
    [API_URL.CORE]: "https://pass.ysplay.cz/api",
  },
  beta: {
    [API_URL.AUTH]: "https://pass.ys-beta.cz/login",
    [API_URL.CORE]: "https://pass.ys-beta.cz/api",
  },
  development: {
    [API_URL.AUTH]: "https://pass.ys-dev.cz/login",
    [API_URL.CORE]: "https://pass.ys-dev.cz/api",
  },

};
