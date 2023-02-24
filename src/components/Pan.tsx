import { YutCombination } from "@/classes/YutSet";
import usePan from "@/hooks/usePan";
import { useState } from "react";

const Pan: React.FC = () => {
  const [yutCombination, setYutCombination] = useState<YutCombination>();
  const [yutFlipped, setYutFlipped] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const { panRef } = usePan();

  const rollYut = () => {
    const result = panRef.current.rollYut();
    setYutCombination(result);
  };
  return (
    <div>
      <div>
        <label>결과</label>
        <input readOnly value={yutCombination} />
      </div>
      <div>
        {panRef.current.yutSet.yuts.map((yut) => (
          <input
            readOnly
            value={yut.isFlipped ? "뒤" + (yut.backDo ? " 백도" : "") : "앞"}
          />
        ))}
      </div>
      <button onClick={() => rollYut()}>윷 던지기</button>
    </div>
  );
};

export default Pan;
