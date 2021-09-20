import Test2 from "./Test2";
import { Appcontext } from "./context";
import React from "react";


class Test1 extends React.Component
{
     static contextType = Appcontext;//it can be accessed using this.context
     render()
     {
        return(
            <>
             <p>Count:{this.context.count}</p>
             <button onClick={this.context.increment}>Inc</button>
             <button onClick={this.context.decrement}>dec</button>
             <button onClick={this.context.reset}>Reset</button>
             <Test2 />                            
            </>                  
        );
     }
   
}
export default Test1;

/*
export default function Test1()
{
     const context = React.useContext(Appcontext);
     
    return(
        <>
         <p>Count:{context.count}</p>
         <button onClick={context.increment}>Inc</button>
         <button onClick={context.decrement}>dec</button>
         <button onClick={context.reset}>Reset</button>
         <Test2 />                            
        </>                  
    );
}*/



/*export default function Test1()
{
    return(
        <>
       
        <Appcontext.Consumer>
            {
                (context)=>{
                    return(
                        <>
                          <p>Count:{context.count}</p>
                         <button onClick={context.increment}>Inc</button>
                         <button onClick={context.decrement}>dec</button>
                        <button onClick={context.reset}>Reset</button>
                        <Test2 />
                        </>
                    );
                }
            }
        </Appcontext.Consumer>
        
        </>
    );
}
*/



/*export default function Test1()
{
    return(
        <>
        <Appcontext.Consumer>
        {(context)=>{
            return (
              <>
              <p>Test1 comment-{context.name}</p>
              <Test2 />
              </>
            );
        }
        }
        </Appcontext.Consumer>
        
        </>
    );
}*/