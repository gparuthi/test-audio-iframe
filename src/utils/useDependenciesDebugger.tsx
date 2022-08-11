import { useMemo, useRef } from "react";

const compareInputs = (inputKeys: any, oldInputs: any, newInputs: any) => {
  inputKeys.forEach((key: any) => {
    const oldInput = oldInputs[key];
    const newInput = newInputs[key];
    if (oldInput !== newInput) {
      console.log("change detected", key, "old:", oldInput, "new:", newInput);
    }
  });
};
const useDependenciesDebugger = (inputs: any) => {
  const oldInputsRef = useRef(inputs);
  const inputValuesArray = Object.values(inputs);
  const inputKeysArray = Object.keys(inputs);
  useMemo(() => {
    const oldInputs = oldInputsRef.current;

    compareInputs(inputKeysArray, oldInputs, inputs);

    oldInputsRef.current = inputs;
  }, inputValuesArray); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useDependenciesDebugger;
