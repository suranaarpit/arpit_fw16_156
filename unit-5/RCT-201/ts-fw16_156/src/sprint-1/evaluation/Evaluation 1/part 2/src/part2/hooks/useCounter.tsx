import { useState } from "react";

export const useCounter = (initalValue: number) => {
    const [value,setValue] = useState(initalValue)
    const inc = (payload:number) =>{
        setValue(value + payload)
    }
    const dec = (payload: number)=>{
        setValue(value-payload)
    }
    const set = () =>setValue(100)
    return { value, inc, dec, set }
};
export default useCounter