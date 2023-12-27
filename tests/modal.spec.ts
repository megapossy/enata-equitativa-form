import { describe, expect, test, vi } from "vitest";
import { computed, ref } from "vue";

import { mount } from "@vue/test-utils";
import Component from "@/components/base/modal.vue";

describe("ModalBox", () => {
  vi.stubGlobal("ref", ref);
  vi.stubGlobal("useHead", vi.fn())
  vi.stubGlobal("computed", computed);

  test("renders properly if ", async () => {
    const wrapper = mount(Component, {
      global: {
        renderStubDefaultSlot: true,
        stubs: ["teleport", "fade-up", "BaseFadeUp"],
      },
    });

    // .modal should not exist
    expect(wrapper.find(".modal").exists()).toBe(false);

    // .modal should exist
    await wrapper.setProps({ show: true });
    expect(wrapper.find(".modal").exists()).toBe(true);
  });
});
