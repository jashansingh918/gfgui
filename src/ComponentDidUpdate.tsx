import { useEffect, useState } from "react";

export default function ComponentDidUpdate(){
    const [todoId, setTodoId] = useState<number>(1);
    const [title, setTitle] = useState<String>("");
    useEffect(() => {
        async function api() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
            const json = await response.json();
            setTitle(json.title);
        }
        api();
    },[todoId]); //second argument is todoId it means whenever there is a change in it our api will be invoked
    return(
        <>
        <input type="text" onChange={(e) => setTodoId(parseInt(e.target.value))}  />
        <label>{title}</label>
        </>
    );
}