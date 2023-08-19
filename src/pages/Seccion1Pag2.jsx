import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion1Pag1() {
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

                    <div class="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>1.3 Persona responsable técnica</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='flex flex-col w-full'>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Nombre completo" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Correo electrónico" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Grado" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Centro de adscripción" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Teléfono célular" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Teléfono oficina" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Situación laboral" id=""></simple-input>
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>1.4 Área de conocimiento</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='flex flex-col w-full'>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Elija un elemento" id="" ></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Vigencia:Conclusión" id=""></simple-input>
                        <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Tema específico" id=""></simple-input>
                        <simple-textarea class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" type="text" placeholder="Especifique" id="textareaInput1"></simple-textarea>
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

export default Seccion1Pag1;