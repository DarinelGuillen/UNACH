import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion1Pag3() {
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
                        <p className='text-3xl'>1.5 Redes y grupos de investigación</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div className='flex flex-col w-full'>
                    <simple-input class="ml-20 mt-5" width="87.5%" height="30px" placeholder="Nombre del Cuerpo Académico (CA)" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Estatus del (CA)" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Nombre del grupo colegiado de investigación" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Instancia donde está formalizado el grupo o CA (Ej. PRODEP, DGIP-UNACH...)" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Redes de colaboración" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Indicar nombre de la red" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Línea de investigación a desarrollar en el proyecto" id=""></simple-input>
                </div>
                <div class="flex items-center place-content-around text-center w-full mt-20">
                    <img src={logoSinNadita}></img> 
                    <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                        <p className='text-3xl'>1.6 Tipo de financiamiento</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-500'>Escriba “No aplica”, donde corresponda</p>
                </div>
                <div className='flex flex-col w-full'>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Tipo de financiamiento" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Institución/fuente" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Convocatoria/programa" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Enlace de la convocatoria" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Año de la convocatoria" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Instancia dictaminadora" id=""></simple-input>
                    
                </div>
                <div className='flex place-content-around mt-24 mb-24'>
                    <Link to="/seccion1Pag2">
                        <button>
                            <div className='estiloBotonSecciones grid'>
                                <div className='grid place-content-center'>
                                    <img src={arrowselector}></img>
                                </div>
                            </div>
                        </button>
                    </Link>
                    <Link to="/seccion1Pag4">
                        <button>
                            <div className='estiloBotonSiguienteSecciones grid'>
                                <div className='grid place-content-center'>
                                    <p className='text-3xl'>Siguiente</p>
                                </div>
                            </div>
                        </button>
                    </Link>
                    <div className='flex'>
                        <p className='pieDePagina grid place-content-center text-white text-3xl'>3 de 5</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}

export default Seccion1Pag3;