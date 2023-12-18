import React, { useState } from 'react';
import Printer from '../../assets/img/Icon/printer.png';
import { getItem } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';

function BottonsRAP() {
    const ID = getItem('currentProyectID') || {}; // Obtener el ID actual
    const [comment, setComment] = useState('');
    const navigate = useNavigate();


    const handleAccept = async () => {
        try {
            // Lógica para aceptar
            await fetch(`http://127.0.0.1:8000/api/projects`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: '1140',
                    id: ID,
                }),
            });
            alert('Proyecto aceptado');
            navigate('/Committe')
        } catch (error) {
            console.error('Error al aceptar el proyecto:', error);
        }
    };

    const handleReject = async () => {
        try {
            // Preguntar al usuario por un comentario
            const userComment = window.prompt('¿Quieres agregar algún comentario?');

            if (userComment !== null) {
                // Lógica para rechazar con comentario
                await fetch(`http://127.0.0.1:8000/api/projects/data/${ID}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        comments: '1400 # '+userComment,
                        status: '1300',
                    }),
                });
                alert('Proyecto rechazado con comentario');
                navigate('/Committe')

            } else {
                // Lógica para rechazar sin comentario
                await fetch(`http://127.0.0.1:8000/api/projects`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        status: '1200',
                        id: ID,
                    }),
                });
                alert('Proyecto rechazado sin comentario');
            }
        } catch (error) {
            console.error('Error al rechazar el proyecto:', error);
        }
    };

    const handleGeneratePDF = () => {
        // Lógica para generar PDF
        console.log('Generando PDF');
    };

    return (
        <>
            <div className="flex flex-row gap-4 items-center justify-center lg:w-auto drop-shadow-lg p-3 bg-white rounded-full">
                <button
                    className="bg-green-500 drop-shadow-lg hover:bg-green-700 text-white rounded-full px-4 py-2 my-2 transition hover:-translate-y-1 ease-in-out delay-120 hover:scale-110 duration-500"
                    onClick={handleAccept}
                >
                    Aceptar
                </button>
                <button
                    className="bg-red-500 drop-shadow-lg shadow-current hover:bg-red-700 text-white rounded-full px-4 py-2 my-2 transition hover:-translate-y-1 ease-in-out delay-120 hover:scale-110 duration-500"
                    onClick={handleReject}
                >
                    Rechazar
                </button>
                <button
                    className="bg-blue-500 drop-shadow-lg shadow-current hover:bg-blue-700 text-white rounded-full px-4 py-2 my-2 transition hover:-translate-y-1 ease-in-out delay-120 hover:scale-110 duration-500"
                    onClick={handleGeneratePDF}
                >
                    <img src={Printer} alt="PDF" className="w-6 h-6" />
                </button>
            </div>
        </>
    );
}

export default BottonsRAP;
