import { useHistory } from "react-router-dom";
import Authentication, { IAuthentication } from "./Authentication";
import firebase from "firebase";

export default function SignUp() {
  const history = useHistory();
  const onSubmit = async (userDetails: IAuthentication) => {
    try{    
        const userData = await firebase.auth().createUserWithEmailAndPassword(userDetails.email, userDetails.password);  
        await userData.user?.updateProfile({displayName: userDetails.userName}); 
    }
    catch(e){
      throw e;//display error message to the user
    }
  };
  return (
    <Authentication
      isUserNameVisible
      title={"Welcome to the SignUp page"}
      height={400}
      onSubmit={onSubmit}
      tertiary={{
        label: "Login",
        onClick: () => history.push("/Login"),
      }}
    />
  );
}
