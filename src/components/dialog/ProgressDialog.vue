<template>
  <v-overlay value="true">
    <v-btn icon>
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-btn>
  </v-overlay>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ProgressDialog extends Vue {}
</script>
