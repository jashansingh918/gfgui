import { useParams } from "react-router-dom";

export default function ComponentB(){
    const params = useParams<{name: string}>();
    return <div>{`hello ${params.name}`}</div>
}

//if we want to read anything from the url we need to use a react hook and it's called params