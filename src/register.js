const Register = () => {
    return (
        <div className="register-page">
            <h1>Register</h1>
            <textarea rows="1" placeholder="Name"/>
            <textarea cols="30" rows="1" placeholder="Email"/>
            <textarea className="password" cols="30" rows="1" placeholder="Password"/>
            <button type='submit'>Submit</button>
        </div>
    );
}
 
export default Register;