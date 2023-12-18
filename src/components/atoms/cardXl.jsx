import React, { useContext, useEffect } from 'react';

import logoUnach from '../../assets/img/Icon/LOGO-UNACH.png';
import arrowBlack from '../../assets/img/Icon/arrowBlack.png';
import { useNavigate } from 'react-router-dom';

import { setItem } from '../../utils/storage';
import UserContext from '../../contexts/UserContext';
import ProgressBar from './ProgressBar';
import ButtonPDF from './ButtonPDF';
const CardXl = ({ id, start_date, end_date, title_project, status, comments, student_name, created_at, }) => {
    console.log("🚀 ~ file: cardXl.jsx:12 ~ CardXl ~ id:", id)
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

    

    const handlerSend = async (id, comments) => {
        console.log("🚀 ~ file: cardXl.jsx:44 ~ handlerSend ~ comments:", comments)
        try {
            let status = "1400";
            
            if (comments && comments !== "") {
                const commentsArray = comments.split('#');
                
                if (commentsArray.length > 0) {
                    status = commentsArray[0];
                    console.log("🚀 ~ file: cardXl.jsx:46 ~ handlerSend ~ status:", status)
                }
            }
            console.log("🚀 ~ file: cardXl.jsx:55 ~ handlerSend ~ status:", status)
            
    
            const response = await fetch(`http://127.0.0.1:8000/api/projects`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    status: status,
                    id: id,
                    comments: comments,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                window.location.reload();
            } else {
                const errorData = await response.json();
                console.error('Failed to update project status. Server error:', errorData.error);
                alert(`Failed to update project status. Server error: ${errorData.error}`);
            }
        } catch (error) {
            console.error('Error updating project status:', error.message);
            alert(`Error updating project status. ${error.message}`);
        }
    };




    return (
        <div className='flex flex-col grow m-3  max-w-3xl  bg-white rounded-[12px] border-[1px] border-black relative   '>

            {comments !== "" && (
                <div className="absolute top-0 right-0 z-3 h-5 w-5 cursor-pointer animate-pulse" onClick={() => alert(comments)}>
                    <span class="absolute animate-ping absolute inline-flex h-5 w-5 rounded-full bg-red-400 opacity-75 "></span>
                    <span class="absolute inline-flex rounded-full h-5 w-5 bg-red-500 hover:text-white transition-colors animate-bounce" title={comments}>
                    </span>
                </div>
            )}


            {/* <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 rounded-full h-6 w-6 flex items-center justify-center hover:text-white transition-colors">
                <p>Texto de ejemplo</p>
            </div> */}

                <div className='flex items-center justify-between p-4 md:p-6'>
                    <div className="flex flex-col w-full md:w-2/3">
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>ID: {id}</p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>Empieza: {start_date}</p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>Termina: {end_date}</p>
                        <p className='text-xl font-bold md:text-2xl lg:text-3xl overflow-hidden whitespace-nowrap overflow-ellipsis hover:whitespace-normal hover:overflow-visible transition-colors' title={title_project}>
                        {truncatedTitle} 
                        </p>
                    {/* <ProgressBar StatusBar={status} /> */}
                        <p className='text-blue-600 text-xs font-semibold mt-3 md:text-lg lg:text-xl'>{student_name}</p>
                    </div>

                    <img src={logoUnach} alt="" className='w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-28' />
                </div>

                {status === 0 || comments !== "" ? (
                    <div className=" flex justify-end grow items-center ">
                    <button onClick={() => handlerSections(id)} className='flex items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
                        <p>Editar</p>
                    </button>
                    <button onClick={() => handlerSend(id, comments)} className='flex items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
                        <p>Enviar</p>
                    </button>
                </div>
                    
                    
                ) : (
                    <div className=" flex justify-end grow items-center">
                        <ButtonPDF idP={id}/>

                </div>
                )}
            </div>
    );
};

export default CardXl;
