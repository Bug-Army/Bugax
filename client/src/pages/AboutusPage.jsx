export default function AboutusPage() {
    return (
        // FONDO DE ABOUTUS
        <div className="grow bg-slate-200">
            <header className="px-16 py-10">
                {/* TEXTO */}
                <div className="font-bold font-sans subpixel-antialiased text-2xl">
                    Grupo: 
                    <p className="text-3xl py-2 px-10">BugArmy</p>
                    <p className="text-2xl py-2">Integrantes:</p>
                    <ul className="text-lg list-disc px-8">
                        <li>Adriel Mezzabotta</li>
                        <li>Agustín Pinillos</li>
                        <li>Cristian Benegas</li>
                        <li>Facundo Gervasi</li>
                        <li>Ivo Rossi</li>
                        <li>Jesus Chavez</li>
                        <li>Jose Guajardo</li>
                        <li>Kevin Baez</li>
                        <li>Luciano Bugarin</li>
                        <li>Martin Velazquez</li>
                        <li>Rodrigo Amoros</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}