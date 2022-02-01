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
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles<Theme, {}>({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonItem: {
    margin: "0 10px",
  },
});

export interface IButtonItem{
  label: string;
  onClick: () => void;
}

interface IProps{
    primary: IButtonItem;
    secondary: IButtonItem;
    tertiary: IButtonItem;
}

export default function FormButtons(props: IProps){
  const styles = useStyles();
  const history = useHistory();
  return (
    <div className={styles.buttons}>
    <Fab
      type="submit"
      variant="extended"
      color="primary"
      className={styles.buttonItem}
      onClick={props.primary.onClick}
    >
      {props.primary.label}
    </Fab>
    <Fab
      onClick={props.secondary.onClick}
      variant="extended"
      color="secondary"
      className={styles.buttonItem}
    >
      {props.secondary.label}
    </Fab>
    <Fab
      onClick={props.tertiary.onClick}
      variant="extended"
      className={styles.buttonItem}
    >
      {props.tertiary.label}
    </Fab>
    <Fab
      onClick={() => history.push("/HotelsUI")}
      variant="extended"
      className={styles.buttonItem}
    >
      Home
    </Fab>
  </div>
  );
}