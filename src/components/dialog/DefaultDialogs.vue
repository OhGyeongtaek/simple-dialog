<template>
  <div>
    <alert-dialog
      ref="alert"
      v-if="alertVisible"
      @confirm="alertVisible = false"
    ></alert-dialog>
    <confirm-dialog
      ref="confirm"
      v-if="confirmVisible"
      @confirm="confirmVisible = false"
    ></confirm-dialog>
    <progress-dialog v-if="progressVisible"></progress-dialog>
  </div>
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
  protected alertVisible = false;
  protected confirmVisible = false;
  protected progressVisible = false;

  public showAlert(title: string, message: string, callback?: AlertCallback) {
    this.alertVisible = true;
    this.$nextTick(() => {
      const dialog = this.$refs.alert as AlertDialog;

      dialog.show(title, message, callback);
    });
  }

  public showConfirm(
    title: string,
    message: string,
    callback: ConfirmCallback
  ) {
    this.confirmVisible = true;
    this.$nextTick(() => {
      const dialog: ConfirmDialog = this.$refs.confirm as ConfirmDialog;
      dialog.show(title, message, callback);
    });
  }

  public showProgress() {
    this.progressVisible = true;
  }

  public hideProgress() {
    this.progressVisible = false;
  }
}
</script>
