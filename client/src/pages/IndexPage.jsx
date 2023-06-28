import { UserContext } from "../UserContext";
import { useContext } from "react";

export default function IndexPage() {
    const { user } = useContext(UserContext);
    return (
        // FONDO DE INDEX
        <div className="grow bg-gray-200">
            <header className="px-10 py-20">
                {/* TEXTO */}
                <div className="font-bold font-sans subpixel-antialiased text-5xl">
                    {!!user && (
                        <div className="">
                            ¿A dónde vas, {user.name}?
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}