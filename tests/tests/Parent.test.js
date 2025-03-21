import { shallowMountmount } from "@vue/test-utils";
import Parent from "./Parent";

test("Mount", () => {
  const wrapper = shallowMountmount(Parent);
  expect(wrapper.html()).toBe("");
});
