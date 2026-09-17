function List()
{
const k=["ram","mohan"]
    return(
            <>
    <ul >
        { k.map((item)=>
        (

<li >I have a {item}</li>
        )
        )   }
       
        
        </ul>    
        
        </>
    )
}
 
function Car()
{

    return(

<>
<Hello Brand="iphone"color="Red" Number="476" />
</>

    )
}

function Hello ({Brand,color})
{
    return (
  <>
    <h1>Hello world </h1>    

            <h1>color{Brand}</h1>
            <h1>color{color}</h1>
            <h1>color{color}</h1>
        
<List/>

    </>    
    )
}

export default Hello





// function List() {
//   const k = ["ram", "mohan"];

//   return (
//     <>
//       <ul>
//         {k.map((item, index) => (
//           <li key={index}>I have a {item}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// function Car() {
//   return (
//     <>
//       <Hello Brand="iphone" color="Red" Number="476" />
//       <List />
//     </>
//   );
// }

// function Hello({ Brand, color, Number }) {
//   return (
//     <>
//       <h1>Hello world</h1>

//       <h1>Brand: {Brand}</h1>
//       <h1>Color: {color}</h1>
//       <h1>Number: {Number}</h1>
//     </>
//   );
// }

// export default Car;