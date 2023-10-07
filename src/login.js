const Login = () => {
    return (
        <div className="login-page">
            <h1>Login</h1>
             <textarea rows="1" placeholder="Email"/>
            <textarea  className="password" rows="1" placeholder="Password"/>
            <button>Login</button>
        </div>
    );
}
 
export default Login;