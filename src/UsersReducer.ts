export interface IUser{
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

//data will be stored in reducer
export interface IStatusizedUser {
    users: IUser[];
    loading: boolean;//it will tell us whether api has happened or not
}

//issue1
interface IUsersAction {
    payload: IUser[];//when we are passing data from component to reducer we term it as payload we can also write users over there
    type: string; //type is nothing but which column we need to update in reducer
}
//reducer function---whatever data we are storing in the reducer that should also be passed an argument to the function and also as an return type
                                                                    //return type
export const UsersReducer = (state: IStatusizedUser, action: IUsersAction): IStatusizedUser => {//first argument should be state and second should be an action and reducer should return that state
    switch(action.type) {
        //hardcode action type --issue2
        case "started": return {...state, loading: true};//states are immutable just like String in java so we first need to clone the state using ...
        //clone state -- issue3
        case "completed": return {...state, users: action.payload, loading: false};
    }
    //return initial value  --issue4
    return {loading: true, users:[]}//initial value of database...in case the action name is incorrect we need to pass the default one
}

/*
if the file type is tsx it's a react component if it's just ts then it's not

*/