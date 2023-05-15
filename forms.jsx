import { useState } from "react";
const Forms = () => {
    let [email,setEmail] = useState("")
    let[password,setPassword] = useState("")

    let handleSubmit =(e)=>{
        e.preventDefault() // To prevent Reloading
        let data = {email,password}
        console.log(data);

    }
    return (  
        <div className="forms">
            <form action="" onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                
                <button>Submit</button>
            </form>
            <h1>Email:{email}</h1>
            <h1>Password:{password}</h1>
        </div>
    );
}
 
export default Forms;