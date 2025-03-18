import { double } from "./example";

describe("그룹1", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });
  afterAll(() => {
    console.log("afterAll");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  afterEach(() => {
    console.log("afterEach");
  });

  test("첫 테스트", () => {
    console.log("첫 테스트");
    expect(123).toBe(123);
    // expect(123).toBe("123"); 에러코드
  });

  test("인수가 숫자 데이터 입니다", () => {
    console.log("인수가 숫자 데이터 입니다");
    expect(double(3)).toBe(6);
    // expect(double(3)).toBe(7); num *2 6이므로 에러코드

    expect(double(10)).toBe(20);
  });

  test("인수가 없습니다.", () => {
    console.log("인수가 없습니다.");
    // expect(double()).toBe(123); 에러코드
    expect(double()).toBe(0);
  });
});

describe("그룹2", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });
  afterAll(() => {
    console.log("afterAll");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  afterEach(() => {
    console.log("afterEach");
  });

  test("첫 테스트", () => {
    console.log("첫 테스트");
    expect(123).toBe(123);
    // expect(123).toBe("123"); 에러코드
  });

  test("인수가 숫자 데이터 입니다", () => {
    console.log("인수가 숫자 데이터 입니다");
    expect(double(3)).toBe(6);
    // expect(double(3)).toBe(7); num *2 6이므로 에러코드

    expect(double(10)).toBe(20);
  });

  test("인수가 없습니다.", () => {
    console.log("인수가 없습니다.");
    // expect(double()).toBe(123); 에러코드
    expect(double()).toBe(0);
  });
});
