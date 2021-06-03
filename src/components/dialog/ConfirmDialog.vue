<template>
  <v-dialog persistent v-model="visible" max-width="480">
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
          @click="confirm(false)"
          color="primary"
          large
          rounded
          depressed
          outlined
          min-width="200"
          >취소</v-btn
        >
        <v-btn
          @click="confirm(true)"
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
import { ConfirmCallback, DialogConfigs } from "@/models/ComponentUI";
import { Vue, Component, Emit } from "vue-property-decorator";

@Component
export default class ConfirmDialog extends Vue {
  @Emit()
  private confirm(result: boolean) {
    this.visible = false;
    this.callback?.(result);
  }

  private visible = false;

  private configs = { title: "알림" };
  private message = "메시지";
  private callback!: ConfirmCallback | undefined;

  public show(
    message: string,
    configs?: DialogConfigs,
    callback?: ConfirmCallback
  ) {
    this.configs = { ...this.configs, ...configs };
    this.message = message;
    this.callback = callback;
    this.visible = true;
  }
}
</script>
