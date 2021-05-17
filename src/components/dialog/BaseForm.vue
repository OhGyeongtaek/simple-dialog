<template>
  <v-dialog persistent v-model="visible" :max-width="maxWidth">
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <slot name="body">
          <!-- 바디영역 -->
        </slot>
        <slot name="comment"> * 항목은 필수입니다. </slot>
      </v-card-text>
      <v-divider class="mx-2"></v-divider>
      <v-card-actions class="py-5">
        <v-spacer />
        <v-btn
          @click="cancel"
          color="primary"
          large
          rounded
          depressed
          outlined
          min-width="200"
          >취소</v-btn
        >
        <v-btn
          @click="submit"
          color="primary"
          large
          rounded
          depressed
          min-width="200"
          >저장</v-btn
        >
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class BaseForm extends Vue {
  @Prop({ type: String })
  maxWidth!: string;

  @Prop({ type: String, default: "타이틀" })
  title!: string;

  @Emit()
  private cancel() {
    return null;
  }

  @Emit()
  private submit() {
    return null;
  }

  private visible = true;
}
</script>
