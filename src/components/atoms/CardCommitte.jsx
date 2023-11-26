import React, { useContext, useEffect } from 'react';

import logoUnach from '../../assets/img/Icon/LOGO-UNACH.png';
import arrowBlack from '../../assets/img/Icon/arrowBlack.png';
import { useNavigate } from 'react-router-dom';

import { getItem, setItem } from '../../utils/storage';
import UserContext from '../../contexts/UserContext';
const CardCommitte = ({ id, start_date, end_date, title_project, status, student_name, created_at, }) => {
    const { isUser, setIsUser } = useContext(UserContext)

    const navigate = useNavigate();

    const truncatedTitle = title_project.length > 20 ? title_project.substring(0, 15) + '...' : title_project;

    const handlerSections = async (id) => {
        setIsUser((prevState) => ({ ...prevState, page: 1 }));

            try {

                const response = await fetch(`http://127.0.0.1:8000/api/projects/PDF/${id}`);

                if (response.ok) {
                    const data = await response.json();
                    setItem('currentProyect', data.ALL)
                    setItem('currentProyectID', id)
                    navigate('/Sections');
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            
    };

    const handlerPDF = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/projects/PDF/${id}`);

                if (response.ok) {
                    const data = await response.json();
                    setItem('currentProyect', data.ALL)
                    setItem('currentProyectID', id)
                    PDF();
                    // here send to the pdf route or prin the pdf od the route C:\Users\darin\Documents\UNACH\UNACH\src\pages\react-pdf.jsx
                } else {
                    console.error('Failed to fetch data');
                }
        } catch (error) {
            console.error('Error handling PDF:', error);
            // Handle the error
        }
    };

const PDF=()=>{

    if (getItem('currentProyect') && getItem('currentProyectID')) {
        navigate('/PreviewPDF');
    }
}

    const handlerSend = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/projects`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: '1400',
                    id: id,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                window.location.reload();
            } else {
                console.error('Failed to update project status');
                alert('Failed to update project status');
            }
        } catch (error) {
            console.error('Error updating project status:', error);
            alert('Error updating project status');
        }
    };




    return (
            <div className='flex flex-col   max-w-3xl  bg-white rounded-[12px] border-[1px] border-black   '>

                <div className='flex items-center justify-between p-4 md:p-6'>
                    <div className="flex flex-col w-full md:w-2/3">
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>ID: {id}</p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>Empieza: {start_date}</p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>Termina: {end_date}</p>
                        <p className='text-xl font-bold md:text-2xl lg:text-3xl overflow-hidden whitespace-nowrap overflow-ellipsis hover:whitespace-normal hover:overflow-visible transition-colors' title={title_project}>
                        {truncatedTitle} 
                        </p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl mt-1'>{status}</p>
                        <p className='text-blue-600 text-xs font-semibold mt-3 md:text-lg lg:text-xl'>{student_name}</p>
                    </div>

                    <img src={logoUnach} alt="" className='w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-28' />
                </div>

                {status === 1400  ? (
                    <>
                    <div className=" flex justify-end grow gap-2 items-center">
                    <button onClick={() => handlerPDF(id)} className='flex items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
                        <span className="text">PDF</span>
                    </button>
                    <button onClick={console.log("Hola")} className='flex w-auto items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
                        <span className="text">Calificar</span>
                    </button>
                </div>
                    </>
                    
                ) : (
                    <>
                    </>
                )}
            </div>
    );
};

export default CardCommitte;
