type Yut = "모" | "도" | "개" | "걸" | "윷" | "뒷도";

export const roleYut = (yutCount = 4): Yut => {
  const yutList = ["모", "도", "개", "걸", "윷"];
  const duitDoIndex = Math.floor(Math.random() * (yutCount + 1));
  const yutRoleResult = new Array(yutCount).fill(0).map((_, i) => {
    return Math.random() > 0.5; // 0.5이상이면 뒤집힌 윷
  });

  const flippedYutCount = yutRoleResult.filter((x) => x).length; // 뒤집힌 윷의 개수
  if (flippedYutCount === 1 && yutRoleResult[duitDoIndex]) {
    // 뒤집힌 윷이 1개이고, 뒤집힌 윷이 뒷도라면
    return "뒷도";
  }

  return yutList[flippedYutCount] as Yut;
};
