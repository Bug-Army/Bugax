import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

export default function PhotosUploader({ addedPhotos, onChange }) {
    //funcion que recoge links
    const [photoLink, setPhotoLink] = useState('');
    async function addPhotoByLink(ev) {
        ev.preventDefault();
        const { data: filename } = await axios.post('/upload-by-link', { link: photoLink })
        onChange(prev => {
            return [...prev, filename];
        });
        setPhotoLink('');
    }
    function uploadPhoto(ev) {
        const files = ev.target.files;
        const data = new FormData();
        for (let i = 0; i < files.lenght; i++) {
            data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(response => {
            const { data: filenames } = response;
            onChange(prev => {
                return [...prev, ...filenames];
            });
        })
    }

    return (
        <>
            <div className="flex w-full gap-2">
                <input value={photoLink}
                    className="Places"
                    onChange={ev => setPhotoLink(ev.target.value)}
                    type="text"
                    placeholder={"Subir fotos por enlace"} />
                {/* BOTON AÑADIR FOTO */}
                <button onClick={addPhotoByLink} className="bg-indigo-500 h-full py-1 text-white px-4">Añadir&nbsp;foto</button>
            </div>
            <div className=" grid p-3 gap-3 rounded-none grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {addedPhotos.length > 0 && addedPhotos.map(link => (
                    <div className="h-32 flex relative" key={link}>
                        <img className="rounded-none border border-blue-300 w-full h-32 object-cover" src={`http://localhost:4000/uploads/` + link} alt="" placeholder="" />
                        <div className="absolute top-1 right-1 text-sb bg-indigo-600 bg-opacity-50 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                ))}
                <label className="cursor-pointer flex items-center  shadow shadow-blue-300 gap-1 h-32 justify-center border border-blue-300 p-3 bg-transparent rounded-none text-xl text-gray-600">
                    <input type="file" multiple className="hidden" onChange={uploadPhoto} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Subir fotos
                </label>

            </div>
        </>
    );
}

PhotosUploader.propTypes = {
    addedPhotos: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}