import _Vue from "vue";

interface ConfirmCallback {
  (result: boolean): void;
}

interface AlertCallback {
  (): void;
}

export class SimpleAlert {
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
    Vue.alert = SimpleAlert.alert;
    Vue.confirm = SimpleAlert.confirm;
    Vue.showProgress = SimpleAlert.showProgress;
    Vue.hideProgress = SimpleAlert.hideProgress;

    const prototype = Vue.prototype;

    if (!Object.prototype.hasOwnProperty.call(prototype, "$alert")) {
      prototype.$alert = SimpleAlert.alert;
    }

    if (!Object.prototype.hasOwnProperty.call(prototype, "$confirm")) {
      prototype.$confirm = SimpleAlert.confirm;
    }

    if (!Object.prototype.hasOwnProperty.call(prototype, "$showProgress")) {
      prototype.$showProgress = SimpleAlert.showProgress;
    }

    if (!Object.prototype.hasOwnProperty.call(prototype, "$hideProgress")) {
      prototype.$hideProgress = SimpleAlert.hideProgress;
    }
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $alert: typeof SimpleAlert.alert;
    $confirm: typeof SimpleAlert.confirm;
    $showProgress: typeof SimpleAlert.showProgress;
    $hideProgress: typeof SimpleAlert.hideProgress;
  }

  interface VueConstructor {
    alert: typeof SimpleAlert.alert;
    confirm: typeof SimpleAlert.confirm;
    showProgress: typeof SimpleAlert.showProgress;
    hideProgress: typeof SimpleAlert.hideProgress;
  }
}

_Vue.use(SimpleAlert);
