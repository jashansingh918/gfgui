import { useHistory } from "react-router-dom";
import Authentication, { IAuthentication } from "./Authentication";
import firebase from "firebase";

export default function Login() {
  const history = useHistory();
  const onSubmit = async (details: IAuthentication) => {
    try{
    await firebase.auth().signInWithEmailAndPassword(details.email, details.password);
    }
    catch(e){
      throw e;//display this error
    }
  };
  return (
    <Authentication
      isUserNameVisible = {false}
      title={"Welcome to the Login page"}
      height={300}
      onSubmit = {onSubmit}
      tertiary={{
        label: "Sign Up",
        onClick: () => history.push("/SignUp"),
      }}
    />
  );
}
