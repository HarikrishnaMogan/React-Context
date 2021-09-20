import Test3 from "./Test3";
import { Appcontext } from "./context";
export default function Test2(props)
{
    return(
        <>
        <Appcontext.Consumer>
        {(context)=>{
            return (
              <>
              <p>Test2 comment-{context.name}</p>
              <Test3 />
              </>
            );
        }
        }
        </Appcontext.Consumer>
        </>
    );
}