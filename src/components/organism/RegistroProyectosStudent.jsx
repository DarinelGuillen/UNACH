// Importa los módulos necesarios
import React, { useState, useEffect } from 'react';
import Footer from '../atoms/Footer';
import CardXl from '../atoms/cardXl';
import Header2 from '../atoms/header2';
import { getItem } from '../../utils/storage';

const RegistroProyectosStudent = () => {
    const [cardXlData, setCardXlData] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const storedData = getItem('userData');
    const { idUnach } = storedData;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/projects/${idUnach}`);

                console.log("🚀 ~ file: RegistroProyectosStudent.jsx:19 ~ fetchData ~ response:", response)
                if (response.ok) {
                    const data = await response.json();
                    if (data.projects && data.projects.length === 0) {
                  // Si no hay proyectos, muestra el mensaje
                  setCardXlData(data.projects);
              } else {
                  setCardXlData(data.projects);
              }
          } else {
              console.error('Failed', "🚀 ~ file: RegistroProyectosStudent.jsx:17 ~ fetchData ~ response.ok:", response.ok);
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
            <div className='bg-white font-sans h-screen'>
                <Header2 />
                {cardXlData && cardXlData.length === 0 ? (
                    <div className="pb-5 mt-5 h-[70%]">
                        <div className='h-[50%] flex flex-col justify-center items-center w-full '>
                            <h1 className="text-5xl  text-sky-400/100 text-center">
                                No tienes ningún proyecto aún. ¡Crea uno para verlo aquí!
                            </h1>
                        </div>
                    </div>
                ) : (
                    <>
                            <div className="pb-5 mt-5 h-auto">
                                <div className="grid auto-rows-fr  gap-10 bg-white xl:grid-cols-3 xl:grid-rows-2 xl:ml-[3%] xl:mt-10 xl:mb-10">
                                    {cardXlData && cardXlData.slice(currentPage * 6, (currentPage + 1) * 6).map((cardData, index) => (
                                        <CardXl
                                            key={index}
                                            id={cardData.id}
                                          start_date={cardData.start_date || ""}
                                          end_date={cardData.end_date || ""}
                                          title_project={cardData.title_project || ""}
                                          status={cardData.status || ""}
                                          student_name={cardData.student_name || ""}
                                          created_at={cardData.created_at || ""}
                                      />
                                  ))}
                                </div>

                                <div className="flex justify-center pb-10  w-full">
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
                            </div>
                    </>
                )}
                <Footer />
            </div>
        </>
    );
}

export default RegistroProyectosStudent;
