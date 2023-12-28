import { describe, test, expect, vi, beforeEach } from "vitest";
import { computed, ref, nextTick } from "vue";
import { createTestingPinia } from "@pinia/testing";

import { mount, shallowMount, flushPromises } from "@vue/test-utils";
import Component from "@/components/form-modal.vue";
import Form from "@/components/form.vue";
import BaseModal from "@/components/base/modal.vue";
import helpers from "@/utils/helpers";

import { useCareerFormStore } from "@/stores/careerForm";

helpers.huwaits = vi.fn();


const setCsfStore = () => {
  const csf = useCareerFormStore();

  csf.fields = {
    firstName: "Rene Rowell",
    lastName: "de la Rama",
    mobile: "+971-0502947139",
    email: "rrsdr84@gmail.com",
    nationality: "Afghanistan",
    photo: "1703697770733_7079607_1703340301213_1575373_rocket 1.png",
    resume:
      "1703697767007_8870231_1703341022362_560424_Invoice_EUINAE22_313513.pdf",
    title: "mr",
    salary: "AED-11111",
    job_position: "cncoperator",
    aboutSelf: "Tell us more about yoursel",
    acknowledge: true,
  };

  csf.errors = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    nationality: "",
    photo: "",
    resume: "",
    title: "",
    salary: "",
    job_position: "",
    aboutSelf: "",
    acknowledge: "",
  };

  return csf;
};

describe("Form", () => {
  vi.stubGlobal("useCareerFormStore", useCareerFormStore);
  vi.stubGlobal("ref", ref);
  vi.stubGlobal("useHead", vi.fn());
  vi.stubGlobal("computed", computed);
  vi.stubGlobal("helpers", helpers);
  vi.stubGlobal("useFetch", vi.fn());

  test("renders properly", async () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [createTestingPinia()],
        renderStubDefaultSlot: true,
        stubs: {
          Form: Form,
          BaseModal: BaseModal,
          BaseFadeUp: true,
          teleport: true,
        },
      },
      props: {
        show: true,
      },
    });
    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  test("if acknowledge, button should enabled, if not be disabled", async () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [createTestingPinia()],
        renderStubDefaultSlot: true,
        stubs: {
          Form: Form,
          BaseModal: BaseModal,
          BaseFadeUp: true,
          teleport: true,
        },
      },
      props: {
        show: true,
      },
    });
    const csf = setCsfStore();

    csf.fields.acknowledge = false;
    await flushPromises();
    expect(
      wrapper
        .find('button[data-testid="submit-form"]')
        .element.hasAttribute("disabled")
    ).toBe(true);
    csf.fields.acknowledge = true;
    await flushPromises();
    expect(
      wrapper
        .find('button[data-testid="submit-form"]')
        .element.hasAttribute("disabled")
    ).toBe(false);
    console.log(wrapper.html());
  });

  test("if one required missing error should show", async () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
        renderStubDefaultSlot: true,
        stubs: {
          Form: Form,
          BaseModal: BaseModal,
          BaseFadeUp: true,
          teleport: true,
        },
      },
      props: {
        show: true,
      },
    });
    const csf = setCsfStore();

    csf.fields.email = "";
    csf.fields.acknowledge = true;
    await flushPromises();
    await wrapper.find('button[data-testid="submit-form"]').trigger("click");
    await flushPromises();
    await nextTick();
    expect(
      wrapper.find('[data-testid="email-error"]').attributes("message")
    ).toContain("Email is invalid");
  });

  test("should show Thank You", async () => {
    const wrapper = mount(Component, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
        renderStubDefaultSlot: true,
        stubs: {
          Form: Form,
          BaseModal: BaseModal,
          BaseFadeUp: true,
          teleport: true,
        },
      },
      props: {
        show: true,
      },
    });
    const csf = setCsfStore();
    csf.fields.acknowledge = true;
    await flushPromises();
    await wrapper.find('button[data-testid="submit-form"]').trigger("click");
    await flushPromises();
    expect(wrapper.emitted()["form-submitted"]).toHaveLength(1);
  });
});
