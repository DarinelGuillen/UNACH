import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import "../assets/css/botoncito.css";

function Seccion2Pag1() {
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
                        <p className='text-3xl'>1.7 Tipo de investigación</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div className='flex flex-col w-full'>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Elija un elemento" id=""></simple-input>
                    <simple-input class="ml-20" width="87.5%" height="30px" placeholder="Elija un elemento" id=""></simple-input>
                    <simple-textarea class="ml-20" width="87.5%" height="30px" type="text" placeholder="Alcance" id="textareaInput1"></simple-textarea>
                </div>
                <div class="flex items-center place-content-around text-center w-full mt-20">
                    <img src={logoSinNadita}></img> 
                    <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                        <p className='text-3xl'>1.8 Grupo de trabajo</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-500'>No incluir a la Persona responsable técnica en el listado y anotar un máximo de 6 personas colaboradoras</p>
                </div>
                <div className='text-center p-10'>
                    <p className='font-bold text-xl text-gray-400'>Solo se considerá la participación de seis personas colaboradoras ecadémicas por proyecto de investigación con financiamiento propio. Si anotan más, estos no serán mensionados en constancias de registro, conclusión o estatus. Esto No aplica para proyectos con financiamiento externo.</p>
                </div>
                <div>
                    
                </div>
                <div className='flex place-content-around mt-24 mb-24'>
                    <Link to="/seccion1Pag5">
                        <button>
                            <div className='estiloBotonSecciones grid'>
                                <div className='grid place-content-center'>
                                    <img src={arrowselector}></img>
                                </div>
                            </div>
                        </button>
                    </Link>
                    <Link to="/seccion2Pag2">
                        <button>
                            <div className='estiloBotonSiguienteSecciones grid'>
                                <div className='grid place-content-center'>
                                    <p className='text-3xl'>Siguiente</p>
                                </div>
                            </div>
                        </button>
                    </Link>
                    <div className='flex'>
                        <p className='pieDePagina grid place-content-center text-white text-3xl'>1 de 10</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}

export default Seccion2Pag1;