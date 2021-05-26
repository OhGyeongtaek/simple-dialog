<template>
  <v-app>
    <alert-dialog ref="alert"></alert-dialog>
    <confirm-dialog ref="confirm"></confirm-dialog>
    <progress-dialog v-if="progressVisible"></progress-dialog>
    <snackbar ref="snack"></snackbar>
  </v-app>
</template>

<script lang="ts">
import { SnackbarConfigs } from "@/models/ComponentUI";
import { Vue, Component } from "vue-property-decorator";
import AlertDialog, { AlertCallback } from "./AlertDialog.vue";
import ConfirmDialog, { ConfirmCallback } from "./ConfirmDialog.vue";
import ProgressDialog from "./ProgressDialog.vue";
import Snackbar from "./Snackbar.vue";

@Component({
  components: {
    AlertDialog,
    ConfirmDialog,
    ProgressDialog,
    Snackbar,
  },
})
export default class DefaultDialogs extends Vue {
  protected progressVisible = false;

  public showAlert(title: string, message: string, callback?: AlertCallback) {
    const alert = this.$refs.alert as AlertDialog;

    alert.show(title, message, callback);
  }

  public showConfirm(
    title: string,
    message: string,
    callback: ConfirmCallback
  ) {
    const confirm = this.$refs.confirm as ConfirmDialog;
    confirm.show(title, message, callback);
  }

  public showSnack(message: string, config?: SnackbarConfigs) {
    const snack = this.$refs.snack as Snackbar;
    snack.showSnack(message, config);
  }

  public showProgress() {
    this.progressVisible = true;
  }

  public hideProgress() {
    this.progressVisible = false;
  }
}
</script>
