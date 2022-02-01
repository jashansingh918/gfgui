import { combineReducers, createStore } from "redux";
import { UsersReducer } from "./UsersReducer";
import {devToolsEnhancer} from "redux-devtools-extension";
import { type } from "os";
import { WebsiteReducer } from "./WebsiteReducer";
import UsersSlice from "./UsersSlice";
import HotelsSlice from "./HotelsSlice";

//this is our database
/*
    rootReducer: {
        UserReducer:{
            loading: false
            users: [
                {
                    id:
                    firstName:
                    lastName:
                    avtar:
                    email:
                },
                {
                    id:
                    firstName:
                    lastName:
                    avtar:
                    email:
                }
            ]
        }
    }

*/
const rootReducer = combineReducers({//root reducer is the database
    //this is our table
    UsersReducer: UsersReducer,
    WebsiteReducer: WebsiteReducer,
    UsersSlice: UsersSlice,
    HotelsSlice: HotelsSlice
    //tableName: tableFunc
})

export type AppState = ReturnType<typeof rootReducer>;
                                                                        //initial value empty object
export const configureStore = createStore(rootReducer, {}, devToolsEnhancer({}));//initially it is an empty array {}..devToolsEnhancer is a middleware which helps us connect with chrome extension
// //during select query
// const AppState = typeof rootReducer;

// export const configureStore = () => {
//     return createStore(rootReducer);
// }