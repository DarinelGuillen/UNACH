import { Link } from 'react-router-dom';
import { useContext } from 'react';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import logoSave from "../../assets/img/Icon/Save.svg";
import "../../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import ButtonSections from '../molecules/ButtonSections';

import SharedDataContext from '../../contexts/SharedDataContext';
import { getItem, setItem } from '../../utils/storage';

function Section2_3() {
    const Current = getItem('currentProyect') || {};
    // const { Current } = useContext(SharedDataContext);
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

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.5 Marco teórico/conceptual</p>
                        </div>
                    
                        {/* NINGUN BOTÓN SALVA DATOS */}
                        <ButtonSaveInfo casefetch={3} />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Máximo 500 palabras</p>
                    </div>

                    <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                        <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5'>Escriba el marco teórico/conceptual pertinente, actualizado y coherente que da sustento a su propuesta</p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-textarea class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="150px" type="text" placeholder="Especifique" id="theoretical_marco" value={Current.theoretical_marco || ''}></simple-textarea>


                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-[35px]">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.6 Justificación de la investigación</p>
                        </div>

                        <ButtonSaveInfo casefetch={3} />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Máximo 300 palabras</p>
                    </div>

                    <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                        <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5'>Argumente la pertinencia cientifica, social, económica y ambiental de su propuesta.</p>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-textarea class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="150px" type="text" placeholder="Especifique" id="research_justification" value={Current.research_justification || ''}></simple-textarea>
                    </div>
                    <ButtonSections caseValue={3}/>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section2_3;