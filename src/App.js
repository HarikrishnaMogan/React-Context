import React from "react";
import Test1 from "./Test1";
import {Appcontext} from "./context";





class App extends React.Component{
       
    constructor(props)
    {
        super(props);
        this.state={
            count:0,
        }
    }
      
    increment=()=>{this.setState({count:this.state.count+1})}
    decrement=()=>{this.setState({count:this.state.count-1})}
    reset=()=>{this.setState({count:0})}
    render(){
       
        return(
            <>

            <p>Count:{this.state.count}</p>
            <button onClick={this.increment}>Inc</button>
            <button onClick={this.decrement}>dec</button>
            <button onClick={this.reset}>Reset</button>
            
            <Appcontext.Provider 
            value={
                {
                    count:this.state.count,
                    increment:this.increment,
                    decrement:this.decrement,
                    reset:this.reset,

                }
            }
            >
            <Test1 />
            </Appcontext.Provider>
           </>
        );
    }
}
export default App;








/*
class App extends React.Component{
    render(){
        console.log(this.props);
        return(
            <>
            <Appcontext.Provider 
            value={
                {
                    name:"Hari",
                }
            }
            > 
           <h1>Hari</h1>
            <Test1 />
            </Appcontext.Provider>
           </>
        );
    }
}

export default App;*/