import { useContext } from 'react';
import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../components/atoms/Header';
import VerticalText from '../components/atoms/VerticalText';
import ClaveDeAcceso from '../components/atoms/ClaveDeAcceso';
import Footer from '../components/atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import "../assets/css/botoncito.css";
import ButtonSaveInfo from '../components/atoms/ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';

function Seccion1Pag1() {
    const { isShareData } = useContext(SharedDataContext);
    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>
                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>
                    <div class="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>
                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.3 Persona responsable técnica</p>
                        </div>

                        <ButtonSaveInfo />
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.full_name || ''}
                            height="30px"
                            placeholder="Nombre completo"
                            id="full_name"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.email || ''}
                            height="30px"
                            placeholder="Correo electrónico"
                            id="email"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.academic_degree || ''}
                            height="30px"
                            placeholder="Grado"
                            id="academic_degree"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.affiliation_center_id || ''}
                            height="30px"
                            placeholder="Centro de adscripción"
                            id="affiliation_center_id"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.office_phone || ''}
                            height="30px"
                            placeholder="Teléfono célular"
                            id="office_phone"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.cellphone || ''}
                            height="30px"
                            placeholder="Teléfono oficina"
                            id="cellphone"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.employment_status || ''}
                            height="30px"
                            placeholder="Situación laboral"
                            id="employment_status"
                        ></simple-input>

                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-10">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.4 Área de conocimiento</p>
                        </div>

                        {/* NO FUNCIONA EL ÚLTIMOS INPUT, GUARDA TODOS LOS DATOS, MENOS EL ÚLTIMO */}
                        <ButtonSaveInfo />
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.other || ''}
                            height="30px"
                            placeholder="Elija un elemento checkBox"
                            id="other"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.end_date || ''}
                            height="30px"
                            placeholder="Vigencia:Conclusión"
                            id="end_date"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.specific_topic || ''}
                            height="30px"
                            placeholder="Tema específico"
                            id="specific_topic"
                        ></simple-input>

                        <simple-textarea
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            height="150px"
                            type="text"
                            placeholder="Especifique"
                            id="Specific_topic"
                            value={isShareData.Specific_topic || ''}
                        ></simple-textarea>
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