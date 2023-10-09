import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-page">
            <h1>Login</h1>
             <textarea rows="1" placeholder="Email" required/>
            <textarea  className="password" rows="1" placeholder="Password" required/>
            <Link className="register-link" to={'/register'}><p>Register</p></Link>
            <Link className="link" to={'/home'}><button>Login</button></Link>
        </div>
    );
}
 
export default Login;