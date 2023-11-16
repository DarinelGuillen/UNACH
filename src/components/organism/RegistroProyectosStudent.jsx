import React, { useState, useEffect, useContext } from 'react';
import Footer from '../atoms/Footer';
import CardXl from '../atoms/cardXl';
import Header2 from '../atoms/header2';
import UserContext from '../../contexts/UserContext';

const RegistroProyectosStudent = () => {
    const { isUser, setIsUser } = useContext(UserContext);
    const [cardXlData, setCardXlData] = useState([]);
    const [projectsToShow, setProjectsToShow] = useState(6);
    const [rangeStart, setRangeStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/projects/A`);

                if (response.ok) {
                    const data = await response.json();
                    if (data.projects && data.projects.length === 0) {
                        setCardXlData([]);
                    } else {
                        setCardXlData(data.projects);
                    }
                } else {
                    console.error('Failed', "🚀 ~ file: RegistroProyectosStudent.jsx:17 ~ fetchData ~ response.ok:", response.ok);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                <div className="pb-5 mt-5 h-auto">
                    {cardXlData.length === 0 ? (
                        <div className='flex flex-col justify-center items-center w-full h-90 '>
                            <h1 className="text-xl text-center">
                                No tienes ningún proyecto aún. ¡Crea uno para verlo aquí!
                            </h1>
                        </div>
                    ) : (
                        <>
                                <div className="grid auto-rows-fr  gap-10 bg-white xl:grid-cols-3 xl:grid-rows-2 xl:ml-[3%] xl:mt-10 xl:mb-10">
                                    {cardXlData.slice(currentPage * 6, (currentPage + 1) * 6).map((cardData, index) => (
                                        <CardXl
                                            key={index}
                                            id={cardData.id}
                                            start_date={cardData.start_date}
                                            end_date={cardData.end_date}
                                            title_project={cardData.title_project}
                                            status={cardData.status}
                                            student_name={cardData.student_name}
                                            created_at={cardData.created_at}
                                        />
                                    ))}
                                </div>

                            <div className="flex justify-center pb-10">
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
                        </>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}

export default RegistroProyectosStudent;
