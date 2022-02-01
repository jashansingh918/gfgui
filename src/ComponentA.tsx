import { useHistory } from "react-router-dom"

export default function ComponentA(){  //with default u don't need to wrap component a with {} brackets
    const history = useHistory();
    return (
        <>
        <div>component a</div>
        <button onClick={() =>history.goBack()}>go back</button>
        </>
    );
}