import Pan from "@/classes/Pan";
import YutSet from "@/classes/YutSet";
import { useState } from "react";

const usePan = () => {
  const [pan, setPan] = useState(new Pan({ yutSet: new YutSet() }));
  return {
    pan,
    setPan,
  };
};
export default usePan;
