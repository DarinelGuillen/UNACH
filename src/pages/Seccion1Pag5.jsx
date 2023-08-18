import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import masIcono from "../assets/img/Icon/mas.svg";
import menosIcono from "../assets/img/Icon/menos.svg";
import "../assets/css/botoncito.css";

function Seccion1Pag5() {

   
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
                        <p className='text-3xl'>1.9 Formación de personas en investigación</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-500'>Indicara las personas que formará el proyecto</p>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-500'>*Puede agregar cuantas celdas necesite*</p>
                </div>
                <button>
                <img src={masIcono}></img>
               </button>
               <button>
                <img src={menosIcono}></img>
               </button>
                <div>
               
                <table class="table-auto text-center w-10/12">
                    <thead className='bg-[#25313A] h-12 rounded text-white'>
                        <tr>
                            <th>Nombre del participante</th>
                            <th>Tipo de participante</th>
                            <th>Producto esperado</th>
                            <th>Especifique</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                        </tr>
                        <tr>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                        </tr>
                        <tr>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div class="flex items-center place-content-around text-center w-full mt-20">
                    <img src={logoSinNadita}></img> 
                    <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                        <p className='text-3xl'>1.10 Entidades (instrucciones, organizaciones, grupos, etc.) participantes o beneficiarias</p>
                    </div>
                    <button><img src={logoSave}></img></button>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-500'>*Puede agregar cuantas celdas necesite*</p>
                </div>
                <div>
                ffffffff
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-400'> Grado, nombre y firma <b className='font-bold text-xl text-gray-600'>Persona responsable técnica</b> Adscripción</p>
                </div>
                
               <button>
                <img src={masIcono}></img>
               </button>
               <button>
                <img src={menosIcono}></img>
               </button>
               
                <table class="table-auto text-center w-10/12">
                    <thead className='bg-[#25313A] h-12 rounded text-white'>
                        <tr>
                            <th>Nombre del participante</th>
                            <th>Tipo de participante</th>
                            <th>Producto esperado</th>
                            <th>Especifique</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                        </tr>
                        <tr>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                        </tr>
                        <tr>
                           <td>...</td>
                           <td>...</td>
                           <td>...</td>
                        </tr>
                    </tbody>
                </table>

                <div className='flex place-content-around mt-24 mb-24'>
                    <Link to="/seccion1Pag4">
                        <button>
                            <div className='estiloBotonSecciones grid'>
                                <div className='grid place-content-center'>
                                    <img src={arrowselector}></img>
                                </div>
                            </div>
                        </button>
                    </Link>
                    <Link to="/seccion2Pag1">
                        <button>
                            <div className='estiloBotonSiguienteSecciones grid'>
                                <div className='grid place-content-center'>
                                    <p className='text-3xl'>Siguiente</p>
                                </div>
                            </div>
                        </button>
                    </Link>
                    <div className='flex'>
                        <p className='pieDePagina grid place-content-center text-white text-3xl'>5 de 5</p>
                    </div>
                </div>

            </div>
        </div>
        <Footer />

        </>
     );
}

export default Seccion1Pag5;