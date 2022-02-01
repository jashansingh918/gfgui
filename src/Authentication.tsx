import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Fab,
  makeStyles,
  TextField,
  Theme,
  Typography,
  Card,
  CardMedia,
  CardContent,
  AppBar,
} from "@material-ui/core";
import FormButtons, { IButtonItem } from "./FormButtons";
import { is } from "cypress/types/bluebird";
import { PropsWithChildren, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { red } from "@material-ui/core/colors";

/*  
login 
    top div
    email
    password
    buttons

signup
    top div
    name
    email
    password
    buttons

common ----  prop   {isUserNameVisible, onSubmitFn, TertiaryButton}
    top div
    name
    email
    password
    buttons


*/

const useStyles = makeStyles<Theme, IProps>({
  //usestyles is a hook
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: (props) => props.height - 60 + "px",
  },

  outerDiv: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },

  innerDiv: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: (props) => props.height + "px",
  },

  title: {
    textAlign: "center",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonItem: {
    margin: "0 10px",
  },

  errorMessage: {
    color: "red"
  }
});

export interface IAuthentication {
  userName: string;
  email: string;
  password: string;
}

interface IProps {
  isUserNameVisible: boolean;
  title: string;
  height: number;
  tertiary: IButtonItem;
  onSubmit: (data: IAuthentication) => void;
}

export default function Authentication(props: IProps) {
  const styles = useStyles(props);
  const history = useHistory();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthentication>();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSubmit = async (data: IAuthentication) => {
    try {
      setLoading(true);
      await props.onSubmit(data);
      reset();
      history.push("/");
      setLoading(false);
    } catch (e: any) {
        setLoading(false);
        setErrorMessage(e.message);
    }
  };

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <Typography variant="h3" className={styles.title}>
          {props.title}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
          {props.isUserNameVisible && (
            <TextField
              {...register("userName", {
                required: true,
                minLength: { value: 4, message: "4 is min length" },
              })}
              variant="outlined"
              label="User name"
              placeholder="User name"
              required={true}
              error={errors && errors.userName?.message ? true : false}
              helperText={errors.userName?.message}
            />
          )}
          <TextField
            type="email"
            {...register("email", {
              minLength: { value: 4, message: "4 is min length" },
              pattern: {
                value: /\w+@\w+\.\w+/,
                message: "email regex not matched",
              },
            })}
            variant="outlined"
            label="Email Address"
            placeholder="Email Address"
            required={true}
            error={errors && errors.email?.message ? true : false}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            {...register("password", {
              required: true,
              minLength: { value: 6, message: "6 is min length" },
            })}
            variant="outlined"
            label="password"
            placeholder="Password"
            error={errors && errors.password?.message ? true : false}
            required={true}
            helperText={errors.password?.message}
          />
          <FormButtons
            primary={{
              label: "Submit",
              onClick: () => console.log("submit"),
            }}
            secondary={{
              label: "Reset",
              onClick: () => reset(),
            }}
            tertiary={props.tertiary}
          />
          {errorMessage && <Typography variant="h4" className={styles.errorMessage}>{errorMessage}</Typography>}
        </form>
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
}
