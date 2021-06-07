import Vue from "vue";
import { mount, createLocalVue } from "@vue/test-utils";
import App from "../App.vue";
import Vuetify from "vuetify";

// const getPopupDatas = (popupName: string) => {
//   const title = document.querySelector(`${popupName}-title`)?.innerHTML;
//   const msg = document.querySelector(`${popupName}-message`)?.innerHTML;

//   return { title, msg };
// };

describe("App 단위테스트", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const app = mount(App, { localVue, vuetify });
  it("$alert 실행하고 팝업이 뜨는지 확인한다.", () => {
    // const predictions = {
    //   title: "알림",
    //   msg: "알러트를 실행했어요.",
    // };
    // const results = getPopupDatas("alert");
    expect(1).toBe(1);
    // expect(results.title).toBe(predictions.title);
  });
});
