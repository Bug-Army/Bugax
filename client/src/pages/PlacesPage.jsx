import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../Perks";
import axios from "axios";

export default function PlacesPage() {
    const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);

    //los titulos en funcion
    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }
    //Las descripciones en funcion
    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }
    //Funcion que adjunta las dos funciones de arriba
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }


    return (
        <div>
            {action !== 'new' && (
                //BOTON DE AÑADIR LUGAR DENTRO ALOJAMIENTO
                <div className="text-center">
                    <Link className="inline-flex gap-1 bg-indigo-600 text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Añadir lugar
                    </Link>
                </div>
            )}
            {action === 'new' && (
                <div>
                    <form>
                        {preInput('Titulo', 'Titulo para tu publicacion')}
                        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="Ej: Cabañas en San Rafael" />
                        {preInput('Direccion', 'Direccion de tu alojamiento')}
                        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="Ej: Calle 4444 Barrio " />
                        {preInput('Fotos', 'Añade algunas fotos del lugar que vas a publicar')}
                        {preInput('Descripcion', 'Descripcion del alojamiento')}
                        <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
                        {preInput('Caracteristicas', 'Seleccione los beneficios que incluye el alojamiento')}
                        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-clos-6">
                            <Perks selected={perks} onChange={setPerks} />
                        </div>
                        {preInput('Informacion adicional', 'Agregue una descripcion detallada')}
                        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
                        {preInput('Horarios de Entrada/Salida', 'Agregue un horario de entrada y salida del alojamiento')}
                        <div className="grid gap-2 sm:grid-col-3">
                            <p className="text-gray-500 text-sm">Use el formato de horario 24h para evitar confusiones</p>
                            <div>
                                <h3 className="mt-2 -mb-1">Horario de entrada</h3>
                                <input type="text"
                                    value={checkIn}
                                    onChange={ev => setCheckIn(ev.target.value)}
                                    placeholder="04" />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-1">Horario de salida</h3>
                                <input type="text"
                                    value={checkOut}
                                    onChange={ev => setCheckOut(ev.target.value)}
                                    placeholder="11" />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-1">Maxima cantidad de huespedes</h3>
                                <input type="number"
                                    value={maxGuests}
                                    onChange={ev => setMaxGuests(ev.target.value)} />
                            </div>
                        </div>
                        <button className="primary my-4">Guardar</button>
                    </form>
                </div>
            )}
        </div >
    );
}