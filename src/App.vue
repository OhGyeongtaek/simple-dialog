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

    // this.$alert("테스트", { title: "타이틀을 변경해보아요." });
    this.$confirm("테스트", {});
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $dialog: typeof DefaultDialogs;
  }
}
</script>
