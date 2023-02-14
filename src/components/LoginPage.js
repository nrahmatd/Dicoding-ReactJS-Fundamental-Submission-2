import React, { useContext } from 'react';
import { AuthContext } from '../context/AppContext';
import { useInput } from '../hooks/AppHooks';
import { Link } from 'react-router-dom';
import { getUserLogged, login, putAccessToken } from '../utils/network-data';

function LoginPage() {
    const { setAuth } = useContext(AuthContext);
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');

    const onSubmitHandler = function(event) {
        event.preventDefault();

        login({ email, password }).then((data) => {
            if (!data.error) {
                putAccessToken(data.data.accessToken);
                getUserLogged().then((data) => {
                    if (!data.error) {
                        setAuth(data.data);
                    } else {
                        setAuth(null);
                    }
                })
                .catch(() => {
                    console.error("Error Login");
                })
            }
        })
    }

    return (
        <section className="login-page">
            <h2>Login</h2>
            <form className="input-login" onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={onEmailChange}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p className="login-page__footer">
                Belum punya akun? 
                <Link to="/register">Daftar disini</Link>
            </p>
        </section>
    );
}

export default LoginPage;