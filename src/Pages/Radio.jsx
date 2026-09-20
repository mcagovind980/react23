import {useState} from "react"
function Radio()
{
    const [Audio,setAudio]=useState({})
    function Handle(e)
    {
        const target=e.target
        const name=target.name
        const value=target.type=="audio" ?target.checked:target.value
        setAudio(values=>({...values,[name]:value}))
    }
    function Submit(e)
{
    let  fill="";
    if(Audio.tamoto)fill+="tamoto";
    if(Audio.onion)
    {
        if(Audio.tamoto)fill+="and";
    
        fill+="onion";
    }
    if(fill==="") fill="not filling";
    {
    alert(`${Audio.FirstName} Wants To Burger to ${fill}`)
    e.preventDefault()
    }
}
return(

    <>
    <form onSubmit={Submit}>
        <label>Name
<input type="text" name="FirstName" value={Audio.FirstName} onChange={Handle}/> 
</label>
<label>Tamoto

<input type="Radio" name="tamoto" value={Audio.FirstName} onChange={Handle} />
</label>
<label>onion
<input type="Radio" name="onion" value={Audio.FirstName} onChange={Handle}/>

</label>
        <button type="submit">Click</button>
    </form>
    
    </>
)
}
export default Radio