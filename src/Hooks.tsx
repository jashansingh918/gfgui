import { createContext, useRef, useState } from "react";
import Context from "./Context";
import FuncProps from "./FuncProps";

// interface ILogin {
//     token: string;
// }
//export const context = createContext<string>(""); //empty string is our initial value n we can also pass ILogin instead of string

export const tokenContext = createContext<string>("");

export default function Hooks(){
    const[name, setName] = useState<string>(""); //useState returns an array
    const[num, setNum] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const ButtonRef = useRef<HTMLButtonElement>(null);
    return(
        <>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <label>{`hello ${name}`}</label>
            <button ref={ButtonRef} onClick={e => setNum(num + 1)}>increment by 1</button>
           <label>{num}</label>
           <FuncProps init={5} />
           <input type="text" ref={inputRef} onChange={e => alert(inputRef.current?.value)}  /> {/* ? is optional chaining if current is undefined code should shtop also called nullish coalescing*/}
            <tokenContext.Provider value={name}>
                <Context />
            </tokenContext.Provider>
        </>
    )

}

//useEffect --we make api calls
//usecontext --used to sign up signin 
//useReference

//suppose we are using a button at 5 different places and only thing that change is color then we need to pass color as prop
//funcprops is used for code flexibility
//props gets passed from parent to child
//to trfr data from child to parent we use reducer but implementing reducer is difficult so we use useReference -- parent should pass the reference and child should use that reference
