import { roleYut } from "@/lib/yut";
import { useState } from "react";

const Game: React.FC = () => {
  const [rolledYut, setRolledYut] = useState<string>();
  const [rollCount, setRollCount] = useState<number>(0);
  const [yutCount, setYutCount] = useState<{
    모: number;
    도: number;
    개: number;
    걸: number;
    윷: number;
    뒷도: number;
  }>({
    모: 0,
    도: 0,
    개: 0,
    걸: 0,
    윷: 0,
    뒷도: 0,
  });

  const onClick = () => {
    const yut: keyof typeof yutCount = roleYut();
    setRolledYut(yut);
    setYutCount((s) => ({
      ...s,
      [yut]: s[yut] + 1,
    }));
    setRollCount((s) => s + 1);
  };

  return (
    <div>
      <h1>Game</h1>
      <label>결과</label>
      <input disabled value={rolledYut}></input>
      <button onClick={onClick}>윷 던지기</button>

      <div>
        <label>총 던진 횟수</label>
        <input disabled value={rollCount}></input>
      </div>
      <div>
        <label>윷 별 확률</label>
        {Object.entries(yutCount).map(([key, value]) => (
          <div key={key}>
            <label>{key}</label>
            <input
              disabled
              value={`${value}(${((value / (rollCount || 1)) * 100).toFixed(
                2
              )}%)`}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
