import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion2Pag5() {
    return ( 
        <>
        <Header/>
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
                            <p className='text-xl lg:text-3xl'>2.9 Objetivos especificos</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Máximo 200 palabras</p>
                    </div>
                        <div className='text-center'>
                            <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>Desglosan y especifican el contenido del objetivo general.</p>
                        </div>
                    <div className='flex flex-col w-full'>
                        <simple-textarea class="ml-[30px] lg:ml-[90px]" width="89%" height="60px" type="text" placeholder="Especifique" id="textareaInput1"></simple-textarea>
                    </div>
                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.10 Hipótesis  o supuestos</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Máximo 100 palabras</p>
                    </div>
                        <div className='text-center'>
                            <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>Incluir en caso de que el tipo de investigación lo requiera (opcional)</p>
                        </div>
                    <div className='flex flex-col w-full'>
                        <simple-textarea class="ml-[30px] lg:ml-[90px]" width="89%" height="50px" type="text" placeholder="Especifique" id="textareaInput1"></simple-textarea>
                    </div>
                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion2Pag4">
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
                                    <Link to="/seccion2Pag6"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>5 - 10</p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
     );
}

export default Seccion2Pag5;