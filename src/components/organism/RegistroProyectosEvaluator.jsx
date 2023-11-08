import React, { useState, useContext } from 'react';
import Footer from '../atoms/Footer';
import CardXl from '../atoms/cardXl';
import Header2 from '../atoms/header2';
import SearchBar from '../atoms/SearchBar';
import UserContext from '../../contexts/UserContext';
const RegistroProyectosEvaluator = () => {
    const { isUser, setIsUser } = useContext(UserContext)

    const [cardXlData, setCardXlData] = useState([
        {
            date: "Fecha 1",
            projectName: "Evaluator",
            school: "Escuela 1",
            studentName: "Alumno 1",
            buttonUrl: "/seccion1Pag1"
        },
        {
            date: "Fecha 2",
            projectName: "Proyecto 2",
            school: "Escuela 2",
            studentName: "Alumno 2",
            buttonUrl: "/seccion1Pag2"
        },
        {
            date: "Fecha 2",
            projectName: "Proyecto 2",
            school: "Escuela 2",
            studentName: "Alumno 2",
            buttonUrl: "/seccion1Pag2"
        },
        {
            date: "Fecha 2",
            projectName: "Proyecto 2",
            school: "Escuela 2",
            studentName: "Alumno 2",
            buttonUrl: "/seccion1Pag2"
        },
        {
            date: "Fecha 2",
            projectName: "Proyecto 2",
            school: "Escuela 2",
            studentName: "Alumno 2",
            buttonUrl: "/seccion1Pag2"
        },
        {
            date: "Fecha 2",
            projectName: "Proyecto 2",
            school: "Escuela 2",
            studentName: "Alumno 2",
            buttonUrl: "/seccion1Pag2"
        },
    ]);

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
                                date={cardData.date}
                                projectName={cardData.projectName}
                                school={cardData.school}
                                studentName={cardData.studentName}
                                buttonUrl={cardData.buttonUrl}
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

export default RegistroProyectosEvaluator;
