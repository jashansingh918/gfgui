import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

const UsersSlice = createSlice({
    name: 'UsersSlice',
    initialState: new Array<IUser>(),//[] it does not know what data type it is
    reducers: {//reducers accepet state and action as an argument
        completed(_state: IUser[], action: PayloadAction<IUser[]>){//  the _ in starting of the variable means if we do not use that variable in our code do not highlight it as a warning
            //_state.attributeName = value ---- if we jjust want to modify just one attribute of state
            return action.payload;//if we want to modify whole state
        },
        started(_state: IUser[]) {
           return [];
        }
    },
});

export const {completed, started} = UsersSlice.actions;//we need to export these methods so that other components can use it

//it can be used in appState in combineReducers
export default UsersSlice.reducer;