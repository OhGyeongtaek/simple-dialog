<template>
  <v-snackbar :color="config.color" v-model="isShow" :timeout="config.timeout">
    {{ text }}
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SnackbarConfigs } from "@/models/ComponentUI";

@Component
export default class Snackbar extends Vue {
  private color = "success";

  private config: SnackbarConfigs = {
    color: "success",
    timeout: 1500,
  };

  private isShow = false;
  private text = "";

  public showSnack(text: string, config: SnackbarConfigs = {}) {
    this.config = { ...this.config, ...config };
    this.show(text);
  }

  public show(text: string) {
    if (this.isShow) {
      this.hide();
      setTimeout(() => this.show(text), this.config.timeout);
    } else {
      this.isShow = true;
      this.text = text;
    }
  }

  public hide() {
    this.isShow = false;
  }
}
</script>
