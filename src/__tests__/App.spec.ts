import { mount } from "@vue/test-utils";
// import App from "../App.vue";

const getPopupDatas = (popupName: string) => {
  const title = document.querySelector(`${popupName}-title`)?.innerHTML;
  const msg = document.querySelector(`${popupName}-message`)?.innerHTML;

  return { title, msg };
};

describe("App 단위테스트", () => {
  // const app = mount(App);
  // const vm = app.vm;
  // it("$alert 실행하고 팝업이 뜨는지 확인한다.", () => {
  //   const predictions = {
  //     title: "알림",
  //     msg: "알러트를 실행했어요.",
  //   };
  //   vm.$alert(predictions.msg);
  //   const results = getPopupDatas("alert");
  //   expect(results.msg).toBe(predictions.msg);
  //   expect(results.title).toBe(predictions.title);
  // });
});
