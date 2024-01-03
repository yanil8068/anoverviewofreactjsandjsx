import { useState } from "react";

export function CounterFunctionComponent(){
    let [counter, setCounter] = useState(0);

    // const increment = () => {
    //     setCounter(counter + 1);
    // };
    const increment = () => {
        setCounter((prev)=>{
            console.log(prev);
            return prev + 1;
        })
    }

    return (
        <div>
            <h1>
                {counter}
            </h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}