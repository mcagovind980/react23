import Dataall from "../Data/AllData"
import React from "react"



function Distruring(Prop)
{
    const {Name,Address}=Prop
    return (

        <>
        <h1>this is Bio {Prop.Name} ,{Prop.Address}</h1>
        <Event/>
        </>
    )
}

function Event()
{
    const al=(j)=>
    {
alert(j)        
    }
    return(
        <>
        <button onClick={()=>al("shoot")}>click</button>
        
        
        </>
    )
}
































function Parent()
{
    return(
        <>
    

   <Child/>
   <Distruring Name="Ram" Address="Delhi"/>
    </>
    )
}
function Child()
{
    return(
        <>
    <div className="container">
    <div className="card">
{ Dataall.map((data)=>(
 <div className="item" key={data.id}>
<img src={data.image} placeholder={data.title}/>
<h1>{data.title}</h1>
</div>
))}
</div>
    </div>
        
        </>
    )
}
export default Parent