import React, { useState, useEffect, useContext } from 'react';
import Footer from '../atoms/Footer';
import CardXl from '../atoms/cardXl';
import Header2 from '../atoms/header2';
import UserContext from '../../contexts/UserContext';

const RegistroProyectosStudent = () => {
    const { isUser, setIsUser } = useContext(UserContext);
    const [cardXlData, setCardXlData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/projects/ABC123' );

                if (response.ok) {
                    const data = await response.json();
                    // Assuming the data structure is similar to cardXlData
                    setCardXlData(data.projects);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function when the component mounts
        fetchData();
    }, []); // The empty dependency array ensures this effect runs once when the component mounts

    return (
        <>
            <div className='bg-white font-sans'>
                <Header2 />
                {/* <SearchBar /> */}
                <div className="pb-5 mt-5">
                    <div className="grid grid-cols-2 grid-rows-3 gap-10 bg-white xl:grid-cols-3 xl:grid-rows-2 xl:ml-[3%] xl:mt-10 xl:mb-10">
                        {/* Mapea los datos de cardXlData para crear las tarjetas */}
                        {cardXlData.map((cardData, index) => (
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
                </div>

                <div className="flex justify-center pb-10">
                    <button>
                        <div className="flex w-[50px] h-[30px] w-full rounded-md justify-center items-center bg-[#BCB785] lg:w-[110px] h-[45px]">
                            {/*
                            //! next does not work properly
                            //~~FIx if possible
                            */}
                            <p className='text-base text-white w-full p-3 lg:text-xl'>Siguiente</p>
                        </div>
                    </button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default RegistroProyectosStudent;
