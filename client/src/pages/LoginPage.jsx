/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
//#################################################################
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            const { data } = await axios.post('/login', { email, password });
            setUser(data);
            alert("Iniciaste sesion exitosamente");
            setRedirect(true);
        } catch (e) {
            alert('Error al iniciar sesion');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    //#################################################################
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-7">Iniciar sesion</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input type="email"
                        placeholder="bugax@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <input type="password"
                        placeholder="contraseña"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <button className="primary">Iniciar sesion</button>
                    <div className="text-center py-2 text-gray-500">
                        ¿Sin cuenta? <Link className="underline text-l text-black" to={'/register'}> Crear cuenta</Link>
                    </div>
                </form>
            </div>
        </div>
    );

}