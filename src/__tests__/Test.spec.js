// Components
import Test from "@/components/Test.vue";

// Utilities
import { createVuetifyWrapper } from "@/utils/VuetifyJestUtils.js";

describe("CustomCard.vue", () => {
  it("should have a custom title and match snapshot", () => {
    const wrapper = createVuetifyWrapper(Test, {
      title: "Test",
    });

    const title = wrapper.find("#title");

    expect(title.text()).toBe("Test");
  });
});
