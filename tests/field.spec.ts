import { describe, test, expect } from "vitest";

import { mount,flushPromises } from "@vue/test-utils";
import InputField from "@/components/base/field.vue";

const theInputValue = "xxxxx";
const name = "namexxx";
const label = "labelxxx";

describe("InputField", () => {
  test("renders properly", async () => {
    const wrapper = mount(InputField);
    expect(wrapper.html()).toContain("<input");
  });

  test("props working properly", async () => {
    const wrapper = mount(InputField, {
      props: { 
        modelValue: theInputValue, 
        name: name,
        label: label,
        type: "email" 
      },
    });
    const el = wrapper.find('input').element as HTMLInputElement;
    await flushPromises();

    expect(el.value).toEqual(theInputValue);
    expect(el.getAttribute("type")).toEqual("email");
  });

  test("should emit update:value on input", async () => {
    const wrapper = mount(InputField, {
      props: { 
        modelValue: theInputValue, 
        name: name,
        label: label,
        type: "email" 
      },
    });
    await wrapper.setValue(theInputValue);
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
    expect(wrapper.emitted()["update:modelValue"]).toHaveLength(1);
    expect((wrapper.emitted()["update:modelValue"][0] as string[])[0]).toEqual(
      theInputValue
    );
  });
});
