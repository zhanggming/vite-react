import { useRef, useState } from 'react'
export const useInterval = (total) => {
    const iterval = useRef();
    const [number, setNumber] = useState(total / 1000);
    const handleStart = () => {
        console.log('start')
        iterval.current = setInterval(() => {
            console.log(number, 'number')
            setNumber((number) => {
                if (number === 0) {
                    clearInterval(iterval.current)
                    return;
                }
                return number - 1
            })
        }, 1000);
    }


    return {
        number,
        handleStart,
    }
}
export default useInterval;