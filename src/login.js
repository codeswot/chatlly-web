import { Link } from 'react-router-dom';
import { post } from "./service/api_service";

const Login = () => {

    return (
        <div className="login-page">
            <h1>Login</h1>
            <textarea rows="1" className="email" placeholder="Email" required />
            <textarea rows="1" className="password" placeholder="Password" required />
            <Link className="register-link" to={'/register'}>
                <p>Register</p>
            </Link>
            <button className="link" onClick={async () => {
                const email = document.getElementsByClassName("email")[0].value;
                const password = document.getElementsByClassName("password")[0].value;
                const value = await post('https://short-moth-33.telebit.io/auth/login', {
                    email,
                    password
                })
                if (value !== null) {
                    console.log('WELCOME ', value.data.email);
                } else {
                    console.log('FAILED')
                }
            }
            }>
                Login
            </button>
        </div>
    );
};

export default Login;