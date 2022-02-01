import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStatusizedUser, IUser } from "./UsersReducer";
import { AppState } from "./AppState";
import "./App.css";

export default function ReduxBasics(){
    const dispatch = useDispatch(); //insert query        input argument state so surround it in brackets and we need to give datatype with it and i.e provided in AppState file as a rootreducer function
    //select table
    const statusizedUser: IStatusizedUser = useSelector((state:AppState) => state.UsersReducer);
    useEffect(() => {
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            //insert
            dispatch({type: "completed", payload:json.data});
        }
        //insert
        dispatch({type: "started"});
        api()
    }, [])
        //select column
    if(statusizedUser.loading){
        return<div>it is loading</div>
    }else {
        return <div className="grid-container">{statusizedUser.users.map(renderUser)}</div>;
    }   
}

function renderUser(user: IUser): JSX.Element{
    return (
        <div className="grid-item" key={user.id}>
        <img src={user.avatar} />
        <div>{user.email}</div>
        <div>{`${user.first_name}${user.last_name}`}</div>
        </div>
    );
}


/*
useEffect invokes api and if want to invoke once during lifecycle second argument should be empty array ..first argument is function

*/