import YutSet from "@/classes/YutSet";
import { describe, expect, it } from "vitest";

describe("YutSet 테스트", () => {
  const yutSet = new YutSet();
  it("YutSet의 기본 윳 모음이 4개인지 확인", () => {
    expect(yutSet.yuts.length).toBe(4);
  });
  it("YutSet의 기본 윳 모음에 백도가 포함되어있는지 확인", () => {
    expect(yutSet.yuts.some((yut) => yut.backDo)).toBe(true);
  });

  it("Flipped Yut 1개 일때 도인지 확인", () => {
    yutSet.getResultByFlippedYutsCount(1, false);
  });
  it("Flipped Yut 1개고 그 1개가 빽도일때 결과도 빽도인지 확인", () => {
    yutSet.getResultByFlippedYutsCount(1, true);
  });
  it("Flipped Yut 2개 일때 개인지 확인", () => {
    yutSet.getResultByFlippedYutsCount(2, false);
  });
  it("Flipped Yut 3개 일때 걸인지 확인", () => {
    yutSet.getResultByFlippedYutsCount(3, false);
  });
  it("Flipped Yut 4개 일때 윷인지 확인", () => {
    yutSet.getResultByFlippedYutsCount(4, false);
  });
  it("Flipped Yut 0개 일때 모인지 확인", () => {
    yutSet.getResultByFlippedYutsCount(0, false);
  });
  it("Flipped Yut 5개 일때 에러가 나는지", () => {
    expect(() => {
      yutSet.getResultByFlippedYutsCount(5, false);
    }).toThrow();
  });
});
