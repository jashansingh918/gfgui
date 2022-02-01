import firebase from "firebase";
import { createContext, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

export const UserContext = createContext<firebase.User | null>(null);

interface IProps {
  children: React.ReactNode;
}

export default function UserProvider(props: IProps) {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      setLoading(true);
      setUser(firebaseUser);
      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={user}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && props.children}
    </UserContext.Provider>
  );
}

/*
global listener

event -signout,signup, login

signup, login
it needs to storer user details in the cookies

signout 
delete user details in the cookiesewes

*/
