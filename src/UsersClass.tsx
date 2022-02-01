import { Grid } from "@material-ui/core";
import React from "react";
import "./App.css";

interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IState {
  users: IUser[];
  isLoading: boolean;
  searchString: string; //to implement search functionality
}

export default class UserClass extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      searchString: "", //this means initially our string will be empty
    };
  }
  public async componentDidMount() {
    const response = await fetch("https://reqres.in/api/users");
    const json = await response.json();
    this.setState({ users: json.data, isLoading: false });
  }
  public render(): JSX.Element {
    if (this.state.isLoading) {
      return <div>loading</div>;
    }
    return (
      <>
        <input
          type="text"
          onChange={(e) => this.setState({ searchString: e.target.value })} //onchange is an event listener
        />
        <Grid container spacing={2}>
          {/*<div className="grid-container"> */}
          {this.state.users
            .filter(
              (x) =>
                x.first_name
                  .toLowerCase()
                  .includes(this.state.searchString.toLowerCase()) ||
                x.last_name
                  .toLowerCase()
                  .includes(this.state.searchString.toLowerCase())
            )
            .map(this.renderUser)}
        </Grid>{" "}
        {/*</div>  */}
      </>
    );
  }
  private renderUser(user: IUser): JSX.Element {
    //jsx just mean that return type of this method is going to be the mixture of html and javascript
    return (
      <Grid item key={user.id} xs={4}>
        {" "}
        {/* <div className="grid-item" key={user.id}> ---in react there is no class attribute, it's called className */}
        <img src={user.avatar} />
        <div>{user.email}</div>
        <div>{`${user.first_name}${user.last_name}`}</div>
      </Grid>
    );
  }
}

//if we need to create the table we need to use grid and the parent class have the grid

//map is a function of an array it converts array into another type
//tsx means mixture of typescript n html

//whenever there is a state change render fucntion will be invoked

/*
3 problems with class based components:
---   Inheritance makes difficult to debug
---   there are too many lifecycle methods...in function based there is only one method i.e useEffect
---   there is no direct way of sharing code b/w two class based components..we'll have to make a parent class and then make those two inherit it...but in function based this problem has been solved using hooks
   function based componenets provide custom hooks --which makes sharing of code easier
*/

//map means converting one object into another
//