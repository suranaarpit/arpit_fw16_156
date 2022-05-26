import { useState } from "react";
import { User } from "../MergeState/MergeHook";

const useMergeState = (data: User) => {
  const [state, setMergeState] = useState<User>(data);

  const setState = (newState: any) => {
    setMergeState({ ...state, ...newState });
  };

  return { state, setState };
};

export default useMergeState;
