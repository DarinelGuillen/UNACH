import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion1() {
    const [inputValues, setInputValues] = useState({
        password: '',
        email: '',
    });

    const handleInputChange = (id, value) => {
        setInputValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
        console.log("🚀 ~ file: Home.jsx:20 ~ handleInputChange ~ inputValues:", inputValues);
    };

    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>
                    <div className='text-center font-bold mt-12 mb-2'>
                        <p className='text-[#BCB785] text-4xl '>Sección 1 Datos del proyecto</p>
                    </div>
                    <div class="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>1.1 Titulo del proyecto</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-base lg:text-xl text-gray-500'>Rellene los siguientes campos según como se requiera</p>
                    </div>

                    <div className='flex flex-col w-full'>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Título" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Fecha de elaboración de propuesta" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Lugar de realización" id=""></simple-input>
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>1.2 Periodo de ejecición del proyecto </p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>(proyectos con recursos de la persona investigadora, la vigencia es de un año)</p>
                    </div>
                    <div className='flex flex-col w-full'>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Vigencia:Inicio" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Vigencia:Conclusión" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Horas dedicadas semanalmente al proyecto (HSM)" id=""></simple-input>
                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <button>
                            <div className='grid'>
                                <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                    <Link to="/seccion1Pag2"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>1 - 5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion1;
