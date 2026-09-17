import {useState} from "react"
// function MyForm()
// {
//     const [name,setName]=useState("");
//     return(
// <>
// <form>
// <label>Name
// <input type="text" value={name} placeholder="name" onChange={(e)=>{e.target.value}}/>
// </label>
// </form>
// <p>my name is {name}</p>
// </>

//  )
// }


function Submit()
{
    const [name,setName]=useState("");
    function Handle(e)
    {
        setName(e.target.value);
        
    }

 function Submits(e)
    {
        e.preventDefault();
        alert(name)
    }
    return(

        <>
     <form onSubmit={Submits}>
        <label >Name
<input type="text" placeholder="Enter your Name" value={name} onChange={Handle}/>

        </label>
        <input type="submit" />
 </form>
        </>
    )
}
export default Submit 