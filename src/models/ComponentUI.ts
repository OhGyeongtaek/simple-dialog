//필요한 설정이 있을때마다 추가해주세요.
export type SnackbarConfigs = {
  timeout?: number;
  color?: string;
};

export type DialogConfigs = {
  title?: string;
};

export type ConfirmCallback = {
  (result: boolean): void;
};

export type AlertCallback = {
  (): void;
};
