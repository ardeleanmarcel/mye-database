export const ENV_NAME = {
  development: 'development',
  production: 'production',
} as const;

export const ENV_NAMES = Object.values(ENV_NAME);

type Keys = keyof typeof ENV_NAME;
export type EnvName = (typeof ENV_NAME)[Keys];
