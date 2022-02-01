import React from "react";

interface IProps{
    init: number;
}

interface IState{
    value: number;
}

export default class Increment extends React.Component<IProps, IState>{
    constructor(props: IProps){ {/* to initialise the state value we need to use a constructor to set the initial value and it should have props */}
        super(props);
        this.state ={
            value: props.init
        }
    }

    render(){
        return(
            <>
                <button onClick={() => this.setState({value: this.state.value+1})}>Increment by 1</button>
                <div>{this.state.value}</div>
            </>
        )
    }
}

//if we want to create a variable or a datastructure we use state in react
//state can be updated inside the class whereas props cannot
