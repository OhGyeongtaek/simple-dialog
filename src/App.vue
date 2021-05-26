<template>
  <div id="app">
    <default-dialogs ref="defaultDialogs"></default-dialogs>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DefaultDialogs from "@/components/dialog/DefaultDialogs.vue";

@Component({
  components: {
    DefaultDialogs,
  },
})
export default class App extends Vue {
  public mounted() {
    if (!Object.prototype.hasOwnProperty.call(Vue.prototype, "$dialog")) {
      Vue.prototype.$dialog = this.$refs.defaultDialogs;
    }

    this.$showSnack("테스트", {
      color: "error",
      timeout: 3000,
    });
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $dialog: typeof DefaultDialogs;
  }
}
</script>
