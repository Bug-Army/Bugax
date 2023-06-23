/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', {
                name: name,
                email: email,
                password: password,
            });
            alert('Registration Successful');
        } catch (err) {
            alert('Registration Failed');
        }
    }
    //################################################################
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-7">Registrarse</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text"
                        placeholder="nombre"
                        value={name}
                        onChange={ev => setName(ev.target.value)} />
                    <input type="email"
                        placeholder="bugax@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password"
                        placeholder="contraseña"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Registrarse</button>
                    <div className="text-center py-2 text-gray-500">
                        ¿Ya tenes una cuenta? <Link className="underline text-l text-black" to={'/login'}> Iniciar sesion</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}