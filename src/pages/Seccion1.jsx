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
        <Header/>
        <div className="flex font-sans">
            <div className="flex w-1/6 justify-center mt-20 mb-20">
                <VerticalText/>
            </div>
            <div className='flex flex-col w-5/6 bg-white rounded-tl-lg'>
                <div>
                    <ClaveDeAcceso/>
                </div>
                <div class="flex items-center place-content-around text-center w-full mt-20">
                    <img src={logoSinNadita}></img> 
                    <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                        <p className='text-3xl'>1.1 Titulo del proyecto</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-500'>Rellene los siguientes campos según como se requiera</p>
                </div>
                <div>
                    <simple-input width="90%" placeholder="Título" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Fecha de elaboración de propuesta" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Lugar de realización" id="" height="auto"></simple-input>
                </div>
                <div class="flex items-center place-content-around text-center w-full mt-20">
                    <img src={logoSinNadita}></img> 
                    <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                        <p className='text-3xl'>1.2 Periodo de ejecición del proyecto </p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-500'>(proyectos con recursos de la persona investigadora, la vigencia es de un año)</p>
                </div>
                <div>
                    <simple-input width="90%" placeholder="Vigencia:Inicio" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Vigencia:Conclusión" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Horas dedicadas semanalmente al proyecto (HSM)" id="" height="auto"></simple-input>
                </div>
                <div className='flex place-content-around mt-24'>
                        <Link to="/">
                            <button>
                                <div className='estiloBotonSecciones grid'>
                                    <div className='grid place-content-center'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <button>
                            <div className='estiloBotonSiguienteSecciones grid'>
                                <div className='grid place-content-center'>
                                    <Link to="/seccion1Pag1"><p className='text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='pieDePagina grid place-content-center text-white text-3xl'>1 de 5</p>
                        </div>
                    </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Seccion1;
