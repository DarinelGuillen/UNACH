import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion2Pag10() {
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

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.17 Referencias </p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                        <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5 mt-5 mb-5'>Indicar las referencias en estilo de citación de la American Psychological Association, APA 7º edición</p>
                    </div>

                    <div className='flex flex-col w-full'>
                        <simple-textarea class="ml-[30px] w-[330px] lg:ml-[90px] lg:w-[880px]" height="150px" type="text" placeholder="Especifique" id="textareaInput1"></simple-textarea>
                    </div>

                    <div className='text-center mt-16'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Declaración de cesión de derechos, de originalidad y autoría</p>
                    </div>

                    <div className='text-center w-5/6 ml-10 mt-2 lg:ml-[85px]'>
                        <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5'>Manifiesto bajo protesta de decir verdad que esta propuesta es original y soy el autor intelectual y la inclusión de material de terceros en esta propuesta está debidamente referenciada y cuento con la autorización respecto de los derechos de Claro que la propuesta no presenta plagios parciales o totales ni controversiales legales a la vez que el desarrollo de la investigación adoptaré las medidas éticas y consideraciones legales pertinentes a sí mismo se darán los créditos a la Universidad Autónoma de Chiapas de los productos académicos que de esta propuesta emanen al participar en este proceso de registro acato los procedimientos lineamientos y políticas que la Universidad Autónoma de Chiapas establezca para tales efectos.</p>
                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-[170px]'>
                        <Link to="/seccion2Pag9">
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
                                    <Link to="/seccion2Pag10"><p className='text-2xl lg:text-3xl'>Enviar</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>10 - 10</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion2Pag10;