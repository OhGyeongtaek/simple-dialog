import { SnackbarConfigs } from "@/models/ComponentUI";
import _Vue from "vue";

interface ConfirmCallback {
  (result: boolean): void;
}

interface AlertCallback {
  (): void;
}

export class SimpleDialog {
  public static showSnack(msg: string, config?: SnackbarConfigs) {
    return new Promise(() => {
      _Vue.prototype.$dialog.showSnack(msg, config);
    });
  }

  public static alert(
    title?: string,
    message?: string,
    callback?: AlertCallback
  ) {
    _Vue.prototype.$dialog.showAlert(title, message, callback);
  }

  public static confirm(
    title?: string,
    message?: string,
    callback?: ConfirmCallback
  ) {
    _Vue.prototype.$dialog.showConfirm(title, message, callback);
  }

  public static showProgress() {
    _Vue.prototype.$dialog.showProgress();
  }

  public static hideProgress() {
    _Vue.prototype.$dialog.hideProgress();
  }

  static install(Vue: typeof _Vue): void {
    Vue.alert = SimpleDialog.alert;
    Vue.confirm = SimpleDialog.confirm;
    Vue.showProgress = SimpleDialog.showProgress;
    Vue.hideProgress = SimpleDialog.hideProgress;

    const prototype = Vue.prototype;

    if (!Object.prototype.hasOwnProperty.call(prototype, "$showSnack")) {
      prototype.$showSnack = SimpleDialog.showSnack;
    }

    if (!Object.prototype.hasOwnProperty.call(prototype, "$alert")) {
      prototype.$alert = SimpleDialog.alert;
    }

    if (!Object.prototype.hasOwnProperty.call(prototype, "$confirm")) {
      prototype.$confirm = SimpleDialog.confirm;
    }

    if (!Object.prototype.hasOwnProperty.call(prototype, "$showProgress")) {
      prototype.$showProgress = SimpleDialog.showProgress;
    }

    if (!Object.prototype.hasOwnProperty.call(prototype, "$hideProgress")) {
      prototype.$hideProgress = SimpleDialog.hideProgress;
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $showSnack: typeof SimpleDialog.showSnack;
    $alert: typeof SimpleDialog.alert;
    $confirm: typeof SimpleDialog.confirm;
    $showProgress: typeof SimpleDialog.showProgress;
    $hideProgress: typeof SimpleDialog.hideProgress;
  }

  interface VueConstructor {
    showSnack: typeof SimpleDialog.showSnack;
    alert: typeof SimpleDialog.alert;
    confirm: typeof SimpleDialog.confirm;
    showProgress: typeof SimpleDialog.showProgress;
    hideProgress: typeof SimpleDialog.hideProgress;
  }
}

_Vue.use(SimpleDialog);
