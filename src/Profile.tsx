import { makeStyles, Theme, Typography } from "@material-ui/core";
import firebase from "firebase";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import FormButtons from "./FormButtons";
import { UserContext } from "./UserProvider";

const useStyles = makeStyles<Theme, {}>({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  innerDiv: {
    height: "40%",
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    flexDirection: "column",
  },
});

export default function Profile() {
  const style = useStyles();
  const history = useHistory();
  const context = useContext(UserContext);
  const signOut = async () => {
    await firebase.auth().signOut();
    history.push("/");
  };
  return (
    <div className={style.container}>
      <div className={style.innerDiv}>
        <Typography variant="h3">{"Welcome to the Profile Page"}</Typography>
        {context?.email && (
          <Typography variant="h4">{context?.email} </Typography>
        )}
        {context?.displayName && (
          <Typography variant="h4">{context?.displayName} </Typography>
        )}
        {context?.uid && <Typography variant="h4">{context?.uid} </Typography>}
    
          <FormButtons
            primary={{
              label: "SignOut",
              onClick: () => signOut(),
            }}
            secondary={{
              label: "Home",
              onClick: () => history.push("/"),
            }}
            tertiary={{
              label: "Back",
              onClick: () => history.goBack(),
            }}
          />
        
      </div>
    </div>
  );
}
