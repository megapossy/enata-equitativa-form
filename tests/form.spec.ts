import { describe, test, expect } from "vitest";

import { mount,flushPromises } from "@vue/test-utils";
import Component from "@/components/form.vue";

const theInputValue = "xxxxx";
const name = "namexxx";
const label = "labelxxx";



describe.skip("Form", () => {
  test("renders properly", async () => {
    const wrapper = mount(Component);
    expect(wrapper.exists()).toBe(true);
  });

});
