import { Link } from 'react-router-dom';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import logoSave from "../../assets/img/Icon/Save.svg";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import { useContext } from 'react';
import ButtonSections from '../molecules/ButtonSections';
import "../../assets/css/botoncito.css";
import {  useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../../utils/storage';

function Section2_0() {
    const Current = getItem('currentProyect') || {};
    const navigate = useNavigate();
    const handlerEnd=()=>{
        navigate('/');
    }
    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className='flex flex-col text-center w-full  mt-3 mb-3'>
                        <p className='font-bold text-gray-700 text-4xl mt-9 lg:text-xl'>PROTOCOLO DEL PROYECTO <br /> </p>
                        <p className=' text-2xl text-gray-700 w-[90%] ml-[6%]'>Si el proyecto tiene financiamiento externo, para 
                        realizar su trámite de registro NO es necesario llenar esta sección 2, solo adjunte copia del protocolo 
                        aprobado por la instancia financiadora, la notificación de aprobación y copia del convenio o carta de asignación de curso 
                        que indique el monto de financiamiento y la vigencia. </p>
                    </div>

                    <div className='text-center font-bold mt-5 mb-2 lg:mb-0'>
                        <p className='text-[#BCB785] text-4xl '>Sección 2: <br />Protocolo del proyecto</p>
                    </div>

                    <div className="flex items-center place-content-around text-center w-full lg:mt-5">

                        <div className='flex flex-col w-full items-center'>
                            <simple-input class="w-[80%] lg:w-[90%] xl:w-[90%] md:w-[87%] sm:w-[90%] mr-[30px]" height="30px" value={Current.title_project || ''} placeholder="Título del proyecto" id="title_project"></simple-input>
                        </div>

                        {/* NINGUN BOTÓN SALVA DATOS DE LOS INPUTS */}
                        <ButtonSaveInfo casefetch={1} />
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-[35px]">
                        <div className='h-[40px] ml-2 lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[50px] xl:ml-2 lg:ml-4'></div>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>Link the drive o dropbox compartido</p>
                        </div>

                        <ButtonSaveInfo casefetch={1} />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Si usted tiene un  financiamiento externo, asegurece de subir la carpeta en donde cuente con los documentos
                            donde adjunte copia del protocolo aprobado
                        </p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input class="w-[80%] mr-[2%] lg:w-[80%] lg:mr-[2%] xl:w-[81%] md:w-[85%] md:mr-[3%] sm:ml-[1%] sm:w-[84%]" height="30px" type="text" placeholder="link_drive" id="link_drive" value={Current.link_drive || ''}></simple-input>

                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Si a adguntado el link de donde se encuentra su documeto para el protocolo
                            guarde cambios para que no tenga que rellenar las casillas de protocolo del proyecto
                        </p>
                    </div>
                    {!Current.link_drive || Current.link_drive === '' ? (
                        <ButtonSections caseValue={2}/>
                    ) : (
                        <div className='flex place-content-around ml-2 mt-10 mb-10 lg:mt-24'>
                            <button className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'
                            onClick={handlerEnd}
                            >Finalizar Propuesta </button>
                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section2_0;