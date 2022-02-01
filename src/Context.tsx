import { useContext } from "react";
import { tokenContext } from "./Hooks"; //we have to use {} coz we didn't add default keyword before tokencontext in hooks

export default function Context() {
    const token = useContext(tokenContext);
    return <div>context example {token}</div>
}