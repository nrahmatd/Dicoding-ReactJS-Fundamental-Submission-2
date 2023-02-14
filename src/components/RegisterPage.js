import React from 'react';
import { useInput } from '../hooks/AppHooks';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/network-data';

function RegisterPage() {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPassword, onConfirmPasswordChange] = useInput('');
    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (name.length < 6) {
            alert("Name must be more than 6 character");
            return;
        }

        if (!email.includes("@")) {
            alert("Email not valid");
            return;
        }

        if (password != confirmPassword) {
            alert("Confirm Password invalid");
            return;
        }

        register({ name, email, password }).then((data) => {
            if (!data.error) {
                navigate("/login");
            }
        })
        .catch(() => {
            alert("Error Register");
        })
    }

    return (
        <section className="register-page">
            <h2>Register</h2>
            <form className="input-register" onSubmit={onSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="name"
                    value={name}
                    onChange={onNameChange}
                    required
                />
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
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p className="register-page__footer">
                Sudah punya akun? 
                <Link to="/login">Login disini</Link>
            </p>
        </section>
    );
}

export default RegisterPage;