import Vue from "vue";
import Vuetify from "vuetify";
import { mount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);

const localVue = createLocalVue();

const vuetify = new Vuetify();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createVuetifyWrapper = (component, propsData = {}) => {
  return mount(component, {
    localVue,
    vuetify,
    propsData,
  });
};
