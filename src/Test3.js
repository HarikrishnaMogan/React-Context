import { Appcontext } from "./context";
export default function Test3(props)
{
    return(
        <>
        <Appcontext.Consumer>
        {(context)=>{
            return (
              <>
              <p>Test3 comment-{context.name}</p>
              </>
            );
        }
        }
        </Appcontext.Consumer>
        </>
    );
}