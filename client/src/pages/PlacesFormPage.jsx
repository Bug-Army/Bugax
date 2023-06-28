import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import { useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";

export default function PlacesFormPage() {
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

    async function addNewPlace(ev) {
        ev.preventDefault();
        await axios.post('/places', {
            title, address, addedPhotos,
            description, perks, extraInfo,
            checkIn, checkOut, maxGuests
        });
    }
    return (
        <div className="p-2 bg-gray-200 w-screen left-0 right-0">
            <AccountNav />
            <form onSubmit={addNewPlace}>
                {preInput('Titulo', 'Titulo para tu publicacion')}
                <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="Ej: Cabañas en San Rafael" />
                {preInput('Direccion', 'Direccion de tu alojamiento')}
                <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="Ej: Calle 4444 Barrio " />
                {preInput('Fotos', 'Añade algunas fotos del lugar que vas a publicar')}
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                {preInput('Descripcion', 'Descripcion del alojamiento')}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
                {preInput('Caracteristicas', 'Seleccione los beneficios que incluye el alojamiento')}
                <div className="perkListContainer">
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
    );
}