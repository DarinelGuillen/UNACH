import React, { useContext, useEffect } from 'react';

import logoUnach from '../../assets/img/Icon/LOGO-UNACH.png';
import arrowBlack from '../../assets/img/Icon/arrowBlack.png';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';
import ButtonPDF from '../atoms/ButtonPDF';
import ButtonGrade from '../atoms/ButtonGrade';
const CardEvaluator = ({ id,project_id, start_date, end_date, title_project, status, student_name, created_at, }) => {
    const { isUser, setIsUser } = useContext(UserContext)

    const navigate = useNavigate();

    const truncatedTitle = title_project.length > 20 ? title_project.substring(0, 15) + '...' : title_project;
    


    return (
            <div className='flex flex-col   max-w-3xl  bg-white rounded-[12px] border-[1px] border-black   '>

                <div className='flex items-center justify-between p-4 md:p-6 '>
                    <div className="flex flex-col w-full md:w-2/3">
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>ID: {project_id}</p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>Empieza: {start_date}</p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>Termina: {end_date}</p>
                        <p className='text-xl font-bold md:text-2xl lg:text-3xl overflow-hidden whitespace-nowrap overflow-ellipsis hover:whitespace-normal hover:overflow-visible transition-colors' title={title_project}>
                        {truncatedTitle} 
                        </p>
                        <p className='text-blue-600 text-xs font-semibold mt-3 md:text-lg lg:text-xl'>{student_name}</p>
                    </div>

                    <img src={logoUnach} alt="" className='w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-28' />
                </div>

                    <>
                    <div className=" flex justify-end grow gap-2 items-center">
                    <ButtonGrade GradeIdProject={project_id} project_assignment_id={id}/>
                </div>
                    </>
                    
                
            </div>
    );
};

export default CardEvaluator;
