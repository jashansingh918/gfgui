import { useEffect, useState } from "react";
import "./App.css";

interface IUser{
    id: string;
    email: string;
    first_name: string;
    last_name: string
    avatar: string;
}

export default function ComponentDidMount(){
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {//this function is called once during the lifecycle coz the second argyument is empty array
        async function api() {
            const response = await fetch("https://reqres.in/api/users");
            const json = await response.json();
            setUsers(json.data); //u cannot directly change the state it need to be changed using setter methods
            setLoading(false);
        }

        api();
    }, []);//empty array is an argument - it means it is not dependent on any variable and is only called once during the lifecycle

    if(isLoading){
        return<div>it is loading</div>
    }else {
        return <div className="grid-container">{users.map(renderUser)}</div>;
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
States are immutable like String in java


*/