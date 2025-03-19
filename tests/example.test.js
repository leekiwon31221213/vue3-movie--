import { asyncFn } from "./example";

describe("비동기 테스트", () => {
  //test 함수는 최대 5초까지만 기다림
  test("done", (done) => {
    asyncFn().then((response) => {
      expect(response).toBe("Done!");
      done();
    });
  });

  test("then", () => {
    return asyncFn().then((response) => {
      expect(response).toBe("Done!");
    });
  });

  test("resolves", () => {
    // return expect(asyncFn()).resolves.toBe("Done?"); // 실패
    return expect(asyncFn()).resolves.toBe("Done!");
  });

  test("async/await", async () => {
    const response = await asyncFn();
    // expect(respons).toBe("Done?"); // 실패
    expect(response).toBe("Done!");
  }),
    7000;
});
