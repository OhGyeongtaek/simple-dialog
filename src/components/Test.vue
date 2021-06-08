<!-- Vue Component -->

<template>
  <v-card>
    <v-card-title>
      <span v-text="title" id="title" />

      <v-spacer></v-spacer>

      <v-btn @click="$emit('action-btn:clicked')"> Action </v-btn>
    </v-card-title>

    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class Test extends Vue {
  @Prop({ default: "Test" })
  title!: string;
}
</script>
