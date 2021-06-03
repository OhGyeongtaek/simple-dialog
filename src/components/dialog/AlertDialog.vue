<template>
  <v-dialog persistent v-model="visible" max-width="500">
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        {{ configs.title }}
      </v-card-title>
      <v-card-text>
        <slot name="body">
          <div class="text-center title my-5">
            <pre class="text-center title">{{ message }}</pre>
          </div>
        </slot>
      </v-card-text>
      <v-divider class="mx-3"></v-divider>
      <v-card-actions>
        <v-spacer />
        <v-btn
          @click="confirm"
          color="primary"
          large
          rounded
          depressed
          min-width="200"
          >확인</v-btn
        >
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { AlertCallback, DialogConfigs } from "@/models/ComponentUI";
import { Vue, Component, Emit } from "vue-property-decorator";

@Component
export default class AlertDialog extends Vue {
  @Emit()
  private confirm() {
    this.visible = false;

    this.callback?.();
  }

  private configs: DialogConfigs = { title: "알림" };
  private message = "메시지";

  private visible = false;
  private callback!: AlertCallback | undefined;

  public show(
    message: string,
    configs?: DialogConfigs,
    callback?: AlertCallback
  ) {
    this.configs = { ...this.configs, ...configs };
    this.message = message;
    this.callback = callback;
    this.visible = true;
  }
}
</script>
