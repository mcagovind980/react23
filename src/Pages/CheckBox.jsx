import React from "react";
import {useState} from "react"
function Check()
{
    const [check,setCheck]=useState({});
    function Handle(e)
    {
        const target=e.target
        const value=target.type==="checkbox"?target.checked:target.value
        const name=target.name;
    setCheck(values=>({...values ,[name]:value}))
    }
    function Submit(e)
    {

        let fillings='';
        if(check.tamoto) fillings+='tomato'
        if(check.onion)
        {
            if(check.tamoto)fillings+="  and   "
            fillings+="onion";
        }
        if(fillings=="") fillings="no filling"
        alert(`${check.firstname} wants to burger to ${ fillings}`)
        e.preventDefault()
    }
    return(
        <>
        <form onSubmit={Submit}>
 <label>Name:
 <input type="text"  name="firstname" onChange={Handle} value={check.firstname}
 />
 </label>
 <p> I want a burger with</p>
 <label>Tamoto:

 <input type="checkbox" name="tamoto" checked={check.tamoto} onChange={Handle}/>
 </label>
 <label>Onion
 <input type="checkbox" name="onion"  checked={check.onion} onChange={Handle}/>
 </label>
 <button type="submit" onSubmit={Submit}>Submit </button>
 </form>
        </>
    )   
}
export default Check