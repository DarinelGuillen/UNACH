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
    const idUnach = storedData ? storedData.idUnach : "A";

    console.log("🚀 ~ file: RegistroProyectosStudent.jsx:13 ~ RegistroProyectosStudent ~ idUnach:", idUnach)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/projects/idUnach/${idUnach}`);

                console.log("🚀 ~ file: RegistroProyectosStudent.jsx:19 ~ fetchData ~ response:", response)
                if (response.ok) {
                    const data = await response.json();
                    console.log("🚀 ~ file: RegistroProyectosStudent.jsx:22 ~ fetchData ~ data:", data)
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
    }, [idUnach]); 



    return (
        <>
            <div className='bg-white font-sans h-screen w-full '>
                <Header2 ShowMore={true} />
                {cardXlData && cardXlData.length === 0 ? (
                    <div className='h-52  flex flex-col justify-center items-center w-full '>
                            <h1 className="text-5xl  text-sky-400/100 text-center">
                                No tienes ningún proyecto aún. ¡Crea uno para verlo aquí!
                            </h1>
                    </div>
                ) : (
                    <>
                            <div className="flex flex-wrap justify-center  items-center  w-full h-auto p-9">
                                {/* <div className="flex flex-col justify-around  bg-white "> */}
                                {cardXlData && cardXlData.map((cardData, index) => (
                                        <CardXl
                                            key={index}
                                            id={cardData.id}
                                            start_date={cardData.start_date || ""}
                                            end_date={cardData.end_date || ""}
                                            title_project={cardData.title_project || ""}
                                            status={cardData.status || 0}
                                            comments={cardData.comments || ""}
                                            student_name={cardData.student_name || ""}
                                            created_at={cardData.created_at || ""}
                                        />
                                    ))}
                            </div>
                    </>
                )}
                <Footer />
            </div>
        </>
    );
}

export default RegistroProyectosStudent;
