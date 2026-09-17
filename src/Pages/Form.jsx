import { useState } from 'react'
// function Form()

// function Form()
// {
// return(

//     <>
//     <from>
//         <label>
//         Name    
//         </label>
//         <input type="text" placeholder="Enter Name "/>
  
  
//         </from>   

//     </>
// )
// }

// export default Form


function Form()
{
    const [name,setName]=useState("");
    return (
<>
<form>
    <label>Name
<input type="text" value={name} placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
</label>
<p> current Value={name}</p>
</form>

</>
    )
}

export default Form