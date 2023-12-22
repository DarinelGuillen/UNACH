import React, { useState, useEffect } from 'react';
import Footer2 from '../atoms/Footer2';
import CardEvaluator from '../molecules/CardEvaluator';
import Header2 from '../atoms/header2';
import { getItem } from '../../utils/storage';

const RegistroProyectosEvaluator = () => {
    const [cardXlData, setCardXlData] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const storedData = getItem('userData');
    const { idUnach } = storedData;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/ProjectAssignments/1`, {
                    method: 'GET',  
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                });

                console.log("🚀 ~ file: RegistroProyectosCommitte.jsx:19 ~ fetchData ~ response:", response)
                if (response.ok) {
                    const data = await response.json();
                    console.log("🚀 ~ file: RegistroProyectosCommitte.jsx:31 ~ fetchData ~ data.data.assignedProjects:", data.data.assignedProjects)
                    if (data.data.assignedProjects && data.data.assignedProjects.length === 0) {
                        // Si no hay proyectos, muestra el mensaje
                        setCardXlData(data.data.assignedProjects);
                    } else {
                        setCardXlData(data.data.assignedProjects);
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

    return (
        <>
        <div className="w-full min-h-screen  bg-white font-sans ">

                <Header2 ShowMore={false} />
                {cardXlData && cardXlData.length === 0 ? (
                    <div className=" h-[70%]">
                        <div className='h-[50%] flex flex-col justify-center items-center w-full '>
                            <h1 className="text-5xl  text-sky-400/100 text-center">
                                No tienes ningún proyecto aún. ¡Crea uno para verlo aquí!
                            </h1>
                        </div>
                    </div>
                ) : (
                    <>

                        <div className="grid   w-full p-10 gap-x-8 gap-y-10 bg-white xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ">
                            {/* <div className="flex flex-col justify-around  bg-white "> */}
                            {cardXlData && cardXlData.slice(currentPage * 6, (currentPage + 1) * 6).map((cardData, index) => (
                                <CardEvaluator
                                    key={index}
                                    id={cardData.id} 
                                    project_id={cardData.project_id} 
                                            start_date={cardData.start_date || ""}
                                            end_date={cardData.end_date || ""}
                                            title_project={cardData.title_project || ""}
                                            status={cardData.status || ""}
                                            student_name={cardData.student_name || ""}
                                            created_at={cardData.created_at || ""}
                                        />
                                    ))}
                            </div>

                        {cardXlData && cardXlData.length > 6 ? (<>

                            <div className="flex justify-center  w-full py-20">
                                <div className='flex justify-between  w-1/6'>
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
                )}
            <Footer2 />
        </div>

        </>
    );
}

export default RegistroProyectosEvaluator;
