import { mount } from "@vue/test-utils";
import Example from "./Example.vue";

test("메세지를 변경합니다", async () => {
  const wrapper = mount(Example);
  // wrapper.vm === this
  expect(wrapper.vm.msg).toBe("Hello VUE");

  // wrapper.vm.msg = "Hello Kiwon";
  await wrapper.setData({ msg: "Hello Kiwon" });
  expect(wrapper.vm.msg).toBe("Hello Kiwon");

  expect(wrapper.find("h1").text()).toBe("Hello Kiwon");
});
