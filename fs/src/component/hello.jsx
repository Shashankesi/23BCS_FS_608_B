// import React, { useState } from "react";

// export const Hello = () => {

//     const [count, setCount] = useState(0);
//     const [user, setUser] = useState(10);

//     function increment() {
//         setUser(prev => prev + 1);
//         setUser(prev => prev + 1);
//         setUser(prev => prev + 1);
//         setUser(prev => prev + 1);
//     }

//     function decrement() {
//         if (user === 0) {
//             alert("User value is zero");
//         } else {
//             setUser(prev => prev - 1);
//             setUser(prev => prev - 1);
//             setUser(prev => prev - 1);
//             setUser(prev => prev - 1);
//         }
//     }

//     return (
//         <div>
//             <h1>Hello World</h1>

//             <h2>Count: {count}</h2>

//             <h2>User: {user}</h2>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     );
// };
import React, { useRef } from "react";

const Hello = () => {

  const submitCount = useRef(0);

  function Handler(e) {
    e.preventDefault();

    submitCount.current += 1;
    console.log("Form submitted times:", submitCount.current);

    const form = e.target;
    const formData = new FormData(form);

    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("mail"));
    console.log("Password:", formData.get("password"));
    console.log("Degree:", formData.get("degree"));
    console.log("College:", formData.get("college"));
    console.log("Stream:", formData.get("stream"));

    // Checkbox (multiple values)
    console.log("Skills:", formData.getAll("skills"));
  }

  return (
    <form onSubmit={Handler}>
      <h1>Hello Form</h1>

      {/* Name */}
      <label>Name:</label>
      <input type="text" name="name" />
      <br /><br />

      {/* Email */}
      <label>Email:</label>
      <input type="email" name="mail" />
      <br /><br />

      {/* Password */}
      <label>Password:</label>
      <input type="password" name="password" />
      <br /><br />

      {/* Degree */}
      <label>Degree:</label><br />
      <input type="radio" name="degree" value="B.Tech" /> B.Tech
      <input type="radio" name="degree" value="M.Tech" /> M.Tech
      <br /><br />

      {/* <label>Stream:</label><br />
      <select name="stream">
        <option value="CSE">Computer Science</option>
        <option value="IT">Information Technology</option>
        <option value="ECE">Electronics</option>
        <option value="ME">Mechanical</option>
      </select>
      <br /><br /> */}

      {/* College */}
      <label>College:</label><br />
      <input type="radio" name="college" value="Chandigarh University" /> Chandigarh University
      <br />
      <input type="radio" name="college" value="Chitkara University" /> Chitkara University
      <br />
      <input type="radio" name="college" value="LPU" /> LPU
      <br /><br />

      {/* Checkboxes */}
      <label>Skills:</label><br />
      <input type="checkbox" name="skills" value="HTML" /> HTML
      <input type="checkbox" name="skills" value="CSS" /> CSS
      <input type="checkbox" name="skills" value="JavaScript" /> JavaScript
      <input type="checkbox" name="skills" value="React" /> React
      <br /><br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Hello;

// import React from 'react';
// const Hello=()=>{
//     function Handler(fordata){
//         fordata.preventDefault();
//         // console.log("Form Submitted");
//         // const ref=fordata.target;
//         // const formdata=new Formdata{ref};
//         // const name=formdata.get{'name'};console.log{name};
//         // const mail=formdata.get{'mail'};console.log{mail};
//         // const pass=formdata.get{'pass'};console.log{pass};
        
//     }
//     return(
//         <form onSubmit={Handler}>
//             <h1>Hello Form</h1>
//             <label htmlFor="name">Name:</label>
//             <label>
//                 <input type="text" name='name' id='name'/>
//             </label>
//             <br />
//             <label htmlFor="mail">Email:</label>
//             <input type="email" name="mail" id="mail" />
//             <br />
//             <label htmlFor="password">Password</label>
//             <input type="text" name='password' id='password' />
//             <br />
//             <label htmlFor="Degree">Degree:</label>
//             <input type="radio" name='degree' id='B.tech' value='B.tech'/>
//             <label htmlFor="B.tech">B.tech</label>
//             <br />
//             <label htmlFor="College">College:</label>
//             <input type="radio"name='College' id='Chitakara University' value='Chitakara University' />
//             <label htmlFor="College">Chitakara University</label>
//             <input type="radio"name='College' id='Chandigarh University' value='Chandigarh university' />
//             <label htmlFor="College">Chandigarh Univeristy</label>
//             <input type="radio"name='College' id='LPU' value='LPU' />
//             <label htmlFor="College">LPU</label>
//             <br />
//             <input type="submit" value="Submit" />
//         </form>
//     )
// }
// export default Hello;

// export default function Hello() {
//     const [user, setUser] = React.useState('');
//     const [mail, setMail] = React.useState('');

//     console.log(user);
//     console.log(mail);

//     return (
//         <>  
//             <p>Name: {user}</p>
//             <p>Email: {mail}</p>
//             <p>Mobile No:{}</p>

//             <input 
//                 type="text" 
//                 value={user} 
//                 onChange={(e) => setUser(e.target.value)} 
//                 placeholder="Enter name"
//             />

//             <input 
//                 type="email" 
//                 value={mail} 
//                 onChange={(e) => setMail(e.target.value)} 
//                 placeholder="Enter email"
//             />
//         </>
//     );
// }
