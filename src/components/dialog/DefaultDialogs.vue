<template>
  <v-app>
    <alert-dialog ref="alert"></alert-dialog>
    <confirm-dialog ref="confirm"></confirm-dialog>
    <progress-dialog v-if="progressVisible"></progress-dialog>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AlertDialog, { AlertCallback } from "./AlertDialog.vue";
import ConfirmDialog, { ConfirmCallback } from "./ConfirmDialog.vue";
import ProgressDialog from "./ProgressDialog.vue";

@Component({
  components: {
    AlertDialog,
    ConfirmDialog,
    ProgressDialog,
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

  public showProgress() {
    this.progressVisible = true;
  }

  public hideProgress() {
    this.progressVisible = false;
  }
}
</script>
