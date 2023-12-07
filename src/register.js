
const Register = () => { 
    return (
        <div className="register-page">
            <h1>Register</h1>
            <textarea rows="1" placeholder="Name" required/>
            <textarea cols="30" rows="1" placeholder="Email" required/>
            <textarea className="password" cols="30" rows="1" placeholder="Password" required/>
           
            <button type='submit' onClick={()=>{
                
            }}>Submit</button>
            
        </div>
    );
}
 
export default Register;