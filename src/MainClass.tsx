import React from "react";
import Add from "./Add";
import Increment from "./Increment";
import Lifecycle from "./Lifecycle";

export default class MainClass extends React.Component{
    render(): React.ReactNode {
        return (
        <>
            <div>main class</div>
            <Add a={10} b={15} />
            <Increment init={5} />
            <Lifecycle />
        </>
        );
    }

}