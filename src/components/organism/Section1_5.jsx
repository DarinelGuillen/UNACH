import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import masIcono from "../../assets/img/Icon/mas.svg";
import menosIcono from "../../assets/img/Icon/menos.svg";
import "../../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import Table from '../atoms/Table';
import ButtonSections from '../molecules/ButtonSections';
import { useContext } from 'react';
import { getItem, setItem } from '../../utils/storage';


function Section1_5() {
    const Current = getItem('currentProyect') || {};
    // const { Current } = useContext(SharedDataContext);

    const ColumnsTable = [
        { id: "id", title: "Nombre del participante" },
        { id: "type", title: "Tipo de participante", hover:'opciones, Estudiante interno, Estudiante Externo, Asistente de Investigación, Persona investigadora, Persona productora, Otro'},
        { id: "expected_product", title: "Producto esperado" , hover:'opciones, Tesis de pregrado, Tesis de grado, Artículo, Capítulo de Libro, Libro, Ponencia, Producción Artística, Producción Literaria, Estancia de Investigación, Parque Tecnológico, Otro'},
        { id: "Especifique", title: "Especifique" },
    ];

    const ColumnsTable2 = [
        { id: "name", title: "Nombre de la entidad" },
        { id: "description", title: "Describa el tipo de participación de forma breve" },
        { id: "contact_name", title: "Contacto (Número célular y correo eléctronico)" },
    ];

    const HandlerClickFetch = () => {
        alert("Datos guardados: " + JSON.stringify(rowData));
        console.log("JSON.stringify(rowData):", JSON.stringify(rowData));
    };

    return (
        <>
            <Header />
            <div className="flex font-sans">

                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center  bg-[#25313A]">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.9 Formación de personas en investigación</p>
                        </div>
                        <ButtonSaveInfo casefetch={2}/>
                    </div>

                    <div className='text-center mt-3'>
                        <p className='font-bold text-xl text-gray-500'>Indicara las personas que formará el proyecto</p>
                    </div>

                    <div className='text-center mb-3'>
                        <p className='font-bold text-xl text-gray-500'>*Puede agregar cuantas celdas necesite*</p>
                    </div>

                    <Table columns={ColumnsTable} savedInfo={Current.research_training_students || ''} keyCurrent={"research_training_students"} />


                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.10 Entidades (instrucciones, organizaciones, grupos, etc.) participantes o beneficiarias</p>
                        </div>
                        <ButtonSaveInfo casefetch={2}/>
                    </div>

                    <div className='text-center mt-3 mb-3'>
                        <p className='font-bold text-xl text-gray-500'>*Puede agregar cuantas celdas necesite*</p>
                    </div>

                    <Table columns={ColumnsTable2} savedInfo={Current.participating_entities || ''} keyCurrent={"participating_entities"} />

                    <ButtonSections caseValue={2}/>

                </div>
            </div>
            <Footer />





        </>
    );
}

export default Section1_5;