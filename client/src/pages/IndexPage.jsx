import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function IndexPage() {
    const { user } = useContext(UserContext);
    return (
    <div className="p-4 grow bg-slate-200 text-xl text-center font-serif font-bold"> 
        {!!user && (
            <div>
                Bienvenido {user.name}, uwu
            </div>
        )}
    </div>
    );
}