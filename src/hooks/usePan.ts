import Pan from "@/classes/Pan";
import YutSet from "@/classes/YutSet";
import { useRef } from "react";

const usePan = () => {
  const panRef = useRef<Pan>(
    new Pan({
      yutSet: new YutSet(),
    })
  );
  return {
    panRef,
  };
};
export default usePan;
