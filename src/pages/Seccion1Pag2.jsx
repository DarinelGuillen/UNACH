import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoListo from "../assets/img/Icon/checkVerificado.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion1Pag2() {
    const [isInfoComplete, setIsInfoComplete] = useState({
        seccion1: false,
        seccion2: false,
    });

    const requiredFields = {
        seccion1: ['full_name', 'email', 'academic_degree', 'affiliation_center_id', 'office_phone', 'cellphone', 'employment_status'],
        seccion2: ['other', 'end_date', 'specific_topic', 'specify'],
    };

    const seccion1InitialState = {
        full_name: '',
        email: '',
        academic_degree: '',
        affiliation_center_id: '',
        office_phone: '',
        cellphone: '',
        employment_status: '',
    };

    const seccion2InitialState = {
        other: '',
        end_date: '',
        specific_topic: '',
        specify: '',
    };

    const [seccion1Values, setSeccion1Values] = useState(seccion1InitialState);
    const [seccion2Values, setSeccion2Values] = useState(seccion2InitialState);

    const handleInputChange = (section, id, value) => {
        if (section === 'seccion1') {
            setSeccion1Values((prevValues) => ({
                ...prevValues,
                [id]: value,
            }));
        } else if (section === 'seccion2') {
            setSeccion2Values((prevValues) => ({
                ...prevValues,
                [id]: value,
            }));
        }
    };

    const handleSave = (section) => {
        const areFieldsComplete = requiredFields[section].every(
            (field) => (section === 'seccion1' ? seccion1Values[field] : seccion2Values[field]).trim() !== ''
        );

        if (areFieldsComplete) {
            setIsInfoComplete((prevInfo) => ({
                ...prevInfo,
                [section]: true,
            }));
        } else {
            setIsInfoComplete((prevInfo) => ({
                ...prevInfo,
                [section]: false,
            }));
            alert('Por favor, complete todos los campos antes de guardar.');
        }
    };

    useEffect(() => {
        const jsonData = {
            seccion1: isInfoComplete.seccion1 ? seccion1Values : null,
            seccion2: isInfoComplete.seccion2 ? seccion2Values : null,
        };

        console.log('JSON Data:', jsonData);
    }, [isInfoComplete, seccion1Values, seccion2Values]);


    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>
                <div className='flex flex-col w-full lg:w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>
                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img
                            src={isInfoComplete.seccion1 ? logoListo : logoSinNadita}
                            className="h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2"
                            alt="Logo"
                        />
                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className="text-xl lg:text-3xl">
                                1.3 Persona responsable técnica
                            </p>
                        </div>
                        <button onClick={() => handleSave('seccion1')}>
                            <img
                                src={logoSave}
                                className="h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]"
                                alt="Save"
                            />
                        </button>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Nombre completo"
                            value={seccion1Values.full_name}
                            onChange={(e) =>
                                handleInputChange('seccion1', 'full_name', e.target.value)
                            }
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Correo electrónico"
                            value={seccion1Values.email}
                            onChange={(e) =>
                                handleInputChange('seccion1', 'email', e.target.value)
                            }
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Grado"
                            value={seccion1Values.academic_degree}
                            onChange={(e) =>
                                handleInputChange('seccion1', 'academic_degree', e.target.value)
                            }
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Centro de adscripción"
                            value={seccion1Values.affiliation_center_id}
                            onChange={(e) =>
                                handleInputChange('seccion1', 'affiliation_center_id', e.target.value)
                            }
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Teléfono célular"
                            value={seccion1Values.office_phone}
                            onChange={(e) =>
                                handleInputChange('seccion1', 'office_phone', e.target.value)
                            }
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Teléfono oficina"
                            value={seccion1Values.cellphone}
                            onChange={(e) =>
                                handleInputChange('seccion1', 'cellphone', e.target.value)
                            }
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Situación laboral"
                            value={seccion1Values.employment_status}
                            onChange={(e) =>
                                handleInputChange('seccion1', 'employment_status', e.target.value)
                            }
                        />
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-10">
                        <img src={isInfoComplete.seccion2 ? logoListo : logoSinNadita} className="h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]" alt="Logo" />
                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className="text-xl lg:text-3xl">1.4 Área de conocimiento</p>
                        </div>
                        <button onClick={() => handleSave('seccion2')}>
                            <img src={logoSave} className="h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]" alt="Save" />
                        </button>
                    </div>
                    <div className="flex flex-col w-full items-center">
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Elija un elemento"
                            value={seccion2Values.other}
                            onChange={(e) => handleInputChange('seccion2', 'other', e.target.value)}
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Vigencia: Conclusión"
                            value={seccion2Values.end_date}
                            onChange={(e) => handleInputChange('seccion2', 'end_date', e.target.value)}
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Tema específico"
                            value={seccion2Values.specific_topic}
                            onChange={(e) => handleInputChange('seccion2', 'specific_topic', e.target.value)}
                        />
                        <input
                            className="input-style"
                            type="text"
                            placeholder="Especifique"
                            value={seccion2Values.specify}
                            onChange={(e) => handleInputChange('seccion2', 'specify', e.target.value)}
                        />
                    </div>


                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion1Pag1">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/seccion1Pag3">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                        <p className='text-2xl lg:text-3xl'>Siguiente</p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>2 - 5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion1Pag2;