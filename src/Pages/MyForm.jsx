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


// function Submit()
// {
//     const [name,setName]=useState("");
//     function Handle(e)
//     {
//         setName(e.target.value);
        
//     }

//  function Submits(e)
//     {
//         e.preventDefault();
//         alert(name)
//     }
//     return(

//         <>
//      <form onSubmit={Submits}>
//         <label >Name
// <input type="text" placeholder="Enter your Name" value={name} onChange={Handle}/>

//         </label>
//         <input type="submit" />
//  </form>
//         </>
//     )
// }
// export default Submit 


// function Submit()
// {

//     const [Name,setName]=useState("")
//     function Handle(e)
//     {
// setName(e.target.value);
//     }
//     function Submits(e)
//     {
//         e.preventDefault();
//         alert(Name)
//     }
// return(
// <>
// <form onSubmit={Submits}>
// <label>Name
// <input type="text" placeholder="Enter Your Name" onChange={Handle} value={Name}/>
// </label>
// <p>My Name is {Name}</p>
// <button >click</button>
// </form>
// </>
//  )
// }

// export default Submit


// function TextArea()
// {
//     const [text,setArea]=useState("");
//     function Handle(e)
//     {
// setArea(e.target.value);
//     }
//     return(
//      <>
//         <textarea value={text} onChange={Handle}/>
        
    
//         <p> This is Data={text}</p>
        
//         </>
//     )
// }

// export default TextArea


// function Drop()
// {
//     const[text,setText]=useState("");
//     function Handle(e)
//     {
//         setText(e.target.value)
//     }
//     function Submit(e)
//     {
// e.preventDefault();
// alert(text)
//     }
// return(
// <>
// <form onSubmit={Submit}>
// <select onChange={Handle}>
// <option value="Mango"style={{color:"red"}}>"Mango"</option>
// <option value="Apple">Apple</option>
// <option value="Mango">Orange</option>
// </select>
// <input type="button" value="Choose Frouite" onClick={Submit}/>
// </form>
// <p>this is submit value{text}</p>

// </>

// )


// }

// export default Drop



// function MyForm()
// {
//     const [Inputs,setInputs]=useState("");
//     const handleChange=(e)=>
//        {
//     const name=e.target.name;
//     const value=e.target.value;
//     setInputs(values=>
//     (
//         {
//             ...values,[name]:value
//         }
//      ))
//       }
//  return(
//      <form>
//      <label>First Name:
//     <input type="text"
//          name="firstname"
//        value={Inputs.firstname}
//  onChange={handleChange}
 
//  />
//             </label>

// <label>Last name:
// <input type="text"
// name="lastname"
// value={Inputs.lastname}
// onChange={handleChange}
// />
//  </label>
//  <p>Current value: {Inputs.firstname} {Inputs.lastname}</p>
//  </form>
//     )
// }

// export default MyForm


function Myform() {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: ""
  });

  function Handle(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs({
      ...value,
      [name]: value
    });
  }

  return (
    <>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={inputs.firstname}
            onChange={Handle}
          />
        </label>

        <br /><br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={inputs.lastname}
            onChange={Handle}
          />
        </label>
      </form>

      <p>
        Current values: {inputs.firstname} {inputs.lastname}
      </p>
    </>
  );
}

export default Myform;