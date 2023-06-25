import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

export default function Header() {
    const { user } = useContext(UserContext);
    return (
        <header className="w-screen z-[1] bg-gray-100">
            <div className="mainNav flex left-0 justify-between px-4 top-0 w-screen border-b border-transparent items-center">
                <Link to={'/'} className='flex self-center'>
                    <img src="/resources/images/Bugax_logo_v1.8.png" alt="logo" className="mainLogo logoHover self-start align-middle" />
                    <span className="font-bold text-xl self-center">Bugax</span>
                </Link>
                <div className="flex w-[25%] self-center justify-center gap-5 align-middle items-center pointer-events-auto">
                    <Link to={"/register"} className="text-black">Descubrir</Link>
                    <div className='border-l self-stretch border-blue-300'></div>
                    <Link to={"/register"} className="text-black">Mis reservas</Link>
                    <div className='border-l self-stretch border-blue-300'></div>
                    <Link to={"/register"} className="text-black">Mis alojamientos</Link>
                    {/* boton lupa */}
                    <button className='bg-transparent text-blue-300 p-1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
                {/* perfil */}
                <div className='flex items-center gap-1 justify-center align-middle border border-gray-300 rounded-full py-1 px-4 pointer-events-auto'>
                    <button className="border-none bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </button>
                    <Link to={user ? '/account' : '/login'} className=''>
                        <div className="bg-blue-200 text-black rounded-full border border-blue-300 overflow-hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative overflow-hidden top-1">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>

                        </div>
                        {!!user && (
                            <div>
                                {user.name}
                            </div>
                        )}
                    </Link>
                </div>
            </div>

        </header>
    );
}