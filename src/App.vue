<template>
  <v-app>
    <default-dialogs ref="defaultDialogs"></default-dialogs>
  </v-app>
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
  }

  public onClickAlert() {
    this.$alert("알러트를 실행했어요.");
  }

  public onClickConfirm() {
    this.$confirm("confirm 실행했어요.");
  }

  public onClickSnackbar() {
    this.$showSnack("snackbar 실행");
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $dialog: typeof DefaultDialogs;
  }
}
</script>
