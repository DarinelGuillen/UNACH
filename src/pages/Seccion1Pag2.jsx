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
                        <p className='text-3xl'>1.3 Persona responsable técnica</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div>
                    <simple-input width="90%" placeholder="Nombre completo" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Correo electrónico" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Grado" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Teléfono célular" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Teléfono oficina" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Situación laboral" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Centro de adscripción" id="" height="auto"></simple-input>
                </div>
                <div class="flex items-center place-content-around text-center w-full mt-20">
                    <img src={logoSinNadita}></img> 
                    <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                        <p className='text-3xl'>1.4 Área de conocimiento</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div>
                    <simple-input width="90%" placeholder="Elija un elemento" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Vigencia:Conclusión" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Tema específico" id="" height="auto"></simple-input>
                    <simple-textarea type="text" placeholder="Especifique" id="textareaInput1" width="90%" height="20%"></simple-textarea>
                </div>
                <div className='flex place-content-around mt-24 mb-24'>
                    <Link to="/seccion1Pag1">
                        <button>
                            <div className='estiloBotonSecciones grid'>
                                <div className='grid place-content-center'>
                                    <img src={arrowselector}></img>
                                </div>
                            </div>
                        </button>
                    </Link>
                    <Link to="/seccion1Pag3">
                        <button>
                            <div className='estiloBotonSiguienteSecciones grid'>
                                <div className='grid place-content-center'>
                                    <p className='text-3xl'>Siguiente</p>
                                </div>
                            </div>
                        </button>
                    </Link>
                    <div className='flex'>
                        <p className='pieDePagina grid place-content-center text-white text-3xl'>2 de 5</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}

export default Seccion1Pag1;