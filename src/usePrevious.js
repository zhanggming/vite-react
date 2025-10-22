import { useRef,useEffect,} from "react";
//
export const usePrevious = (value) =>{
  const oldState = useRef();
  useEffect(() => {
    oldState.current = value;
  }, [value]);
  return oldState.current;
}
export default usePrevious;