import React, { useState, useEffect } from 'react';
import Footer from '../atoms/Footer';
import CardDireccion from '../molecules/CardDireccion';
import CardDireccionAlreadyAssigned from '../molecules/CardDireccionAlreadyAssigned';
import Header2 from '../atoms/header2';
import { getItem } from '../../utils/storage';

const RegistroProyectosDireccion = () => {
    const [cardXlData, setCardXlData] = useState(false);
    const [projectsAlreadyAssigned, setprojectsAlreadyAssigned] = useState([]);
    const [gradedProjects, setgradedProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const storedData = getItem('userData');
    const { idUnach } = storedData;
    const [viewType, setViewType] = useState(2);


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("fETCH ");
                const response = await fetch(`http://127.0.0.1:8000/api/projects/ID/Status`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.projects && data.projects.length === 0 || data.projects === null) {
                        // Si no hay proyectos, muestra el mensaje
                        setCardXlData([]);
                    } else {
                        // Si existen proyectos muestra las card.map
                        setCardXlData(data.projects);
                        setprojectsAlreadyAssigned(data.projectsAlreadyAssigned);
                        setgradedProjects(data.gradedProjects);
                    }
                } else {
                    console.error('Failed', "🚀 ~ file: RegistroProyectosCommitte.jsx:17 ~ fetchData ~ response.ok:", response.ok);
                    setCardXlData([])
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [idUnach]); // Agregamos idUnach como dependencia

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevClick = () => {
        setCurrentPage(Math.max(currentPage - 1, 0));
    };
    const handlerChangeView = (type) => {
        console.log("🚀 ~ handlerChangeView ~ type:", type)
        setViewType(type);
    };

    return (
        <>
            <div className='bg-white font-sans w-full min-h-screen md:min-h-0'>
                <Header2 ShowMore={false} />
                
                    <>
                            <>
                                <div className="w-full  flex items-center justify-center my-7 ">
                                    <div className='w-full  text-sm lg:text-lg md:text-lg lg:w-1/2 md:w-1/2 h-auto bg-white border-2 border-gray-800 rounded-full flex flex-row shadow-lg'>
                                        <label className="w-1/2">
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="PROTOCOL"
                                                checked={viewType === 2}
                                                onChange={() => handlerChangeView(2)}
                                            />
                                            <div className={`w-full h-full  rounded-full flex justify-center items-center ${viewType === 2 ? ' bg-gray-300':'bg-white'} ${viewType === 2 ? 'cursor-default' : 'cursor-pointer'}`}>
                                                <span className="text-gray-800">Asignar a profesores</span>
                                            </div>
                                        </label>
                                        <label className={`w-1/2 `}>
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="DATA"
                                                checked={viewType === 1}
                                                onChange={() => handlerChangeView(1)}
                                            />
                                            <div className={`w-full h-full  hover:bg-gray-300 rounded-full flex justify-center items-center ${viewType === 1 ? ' bg-gray-300':'bg-white'}  ${viewType === 1 ? 'cursor-default' : 'cursor-pointer'}`}>
                                                <span className="text-gray-800">Proyectos asignados</span>
                                            </div>
                                        </label>
                                        <label className="w-1/2">
                                            <input
                                                className="hidden"
                                                type="radio"
                                                value="PROTOCOL"
                                                checked={viewType === 3}
                                                onChange={() => handlerChangeView(3)}
                                            />
                                            <div className={`w-full h-full  rounded-full flex justify-center items-center ${viewType === 3 ? ' bg-gray-300':'bg-white'} ${viewType === 3 ? 'cursor-default' : 'cursor-pointer'}`}>
                                                <span className="text-gray-800">Calificados</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </>

                            <div className="grid w-full gap-x-8 gap-y-10 bg-white xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 md:w-full grid-cols-1 p-10">
                {viewType === 2 && (
                    cardXlData &&
                    cardXlData.slice(currentPage * 6, (currentPage + 1) * 6).map((cardData, index) => (
                        <React.Fragment key={index}>
                            <CardDireccion
                                id={cardData.id}
                                start_date={cardData.start_date || ""}
                                end_date={cardData.end_date || ""}
                                title_project={cardData.title_project || ""}
                                status={cardData.status || ""}
                                student_name={cardData.student_name || ""}
                                created_at={cardData.created_at || ""}
                                professor_ids={cardData.professor_ids || []}
                            />
                        </React.Fragment>
                    ))
                )}

                {viewType === 1 && (
                    projectsAlreadyAssigned &&
                    projectsAlreadyAssigned.slice(currentPage * 6, (currentPage + 1) * 6).map((assignedData, index) => (
                        <React.Fragment key={index}>
                            <CardDireccionAlreadyAssigned
                                id={assignedData.id}
                                start_date={assignedData.start_date || ""}
                                end_date={assignedData.end_date || ""}
                                title_project={assignedData.title_project || ""}
                                status={assignedData.status || ""}
                                student_name={assignedData.student_name || ""}
                                created_at={assignedData.created_at || ""}
                                professor_ids={assignedData.professor_ids || []}
                            />
                        </React.Fragment>
                    ))
                )}
                {viewType === 3 && (
                    gradedProjects &&
                    gradedProjects.slice(currentPage * 6, (currentPage + 1) * 6).map((assignedData, index) => (
                        <React.Fragment key={index}>
                            <CardDireccionAlreadyAssigned
                                id={assignedData.id}
                                start_date={assignedData.start_date || ""}
                                end_date={assignedData.end_date || ""}
                                title_project={assignedData.title_project || ""}
                                status={assignedData.status || ""}
                                student_name={assignedData.student_name || ""}
                                created_at={assignedData.created_at || ""}
                                professor_ids={assignedData.professor_ids || []}
                            />
                        </React.Fragment>
                    ))
                )}
            </div>

                        {cardXlData && cardXlData.length > 6 || projectsAlreadyAssigned && projectsAlreadyAssigned.length > 6  ? (<>
                            <div className="flex justify-center  w-full mb-20">
                                <div className='flex justify-around items-center gap-x-9  w-1/6'>
                                    <button onClick={handlePrevClick}>
                                        <div className="flex w-[50px] h-[30px] w-full rounded-md justify-center items-center bg-[#BCB785] lg:w-[110px] h-[45px]">
                                            <p className='text-base text-white w-full p-3 lg:text-xl'>Retroceder</p>
                                        </div>
                                    </button>
                                    <button onClick={handleNextClick}>
                                        <div className="flex w-[50px] h-[30px] w-full rounded-md justify-center items-center bg-[#BCB785] lg:w-[110px] h-[45px]">
                                            <p className='text-base text-white w-full p-3 lg:text-xl'>Siguiente</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </>) : (<>

                        </>)

                        }



                    </>
                <Footer />
            </div>
        </>
    );
}

export default RegistroProyectosDireccion;
