import { useState } from "react";

function useHook() {
  const [value, setValue] = useState();
  return { value };
}
