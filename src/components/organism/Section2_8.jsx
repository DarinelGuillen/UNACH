import { Link } from 'react-router-dom';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import "../../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import ButtonSections from '../molecules/ButtonSections';
import { useContext } from 'react';
import { getItem, setItem } from '../../utils/storage';


function Section2_8() {
    const Current = getItem('currentProyect') || {};

    
    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center bg-[#25313A]">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white lg:rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>2.13 Infraestructura y recursos disponibles</p>
                        </div>

                        {/* TIENES QUE DARLE 2 VECES PARA QUE SE GUARDEN LOS DATOS */}
                        <ButtonSaveInfo casefetch={3} />
                    </div>

                    <div className="flex justify-center">
                        <div className='text-center w-5/6 '>
                            <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5'>Describa la infraestructura y los recursos institucionales que se considera utilizar para el desarrollo de la investigación</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="30px"
                          placeholder="Infraestructura"
                          id="infrastructure"
                          value={Current.infrastructure
                          ||
                          ''}></simple-input>
                          <simple-textarea
                          class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                          height="70px"
                          type="text"
                          placeholder="Recursos"
                          id="resources"
                          value={Current.resources
                          ||
                          ''}></simple-textarea>
                          
                          </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-[35px]">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>2.14 Consideraciones éticas</p>
                        </div>

                        <ButtonSaveInfo casefetch={3}/>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>Máximo 100 palabras</p>
                    </div>

                    <div className="flex justify-center">
                        <div className='text-center w-5/6 '>
                            <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5'>Describir los criterios éticos a tomar en cuenta para desarrollar la investigación</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                       <simple-textarea
                      class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                      height="100px"
                      type="text"
                      placeholder="Consideraciones éticas"
                      id="ethical_considerations"
                      value={Current.ethical_considerations
                      ||
                      ''}></simple-textarea>
                      </div>

                    <ButtonSections caseValue={3} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section2_8;