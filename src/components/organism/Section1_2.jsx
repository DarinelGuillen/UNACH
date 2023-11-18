import { useContext } from 'react';
import { Link } from 'react-router-dom';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import ButtonSections from '../molecules/ButtonSections';
import '../../assets/css/botoncito.css';

function Section1_2() {
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
                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>
                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.3 Persona responsable técnica</p>
                        </div>

                        <ButtonSaveInfo casefetch={2}/>
                    </div>

                    <div className='flex flex-col w-full items-center'>
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.full_name_technical_responsible || ''}
                            height="30px"
                            placeholder="Nombre completo"
                            id="full_name_technical_responsible"
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
                            value={isShareData.degree || ''}
                            height="30px"
                            placeholder="Grado"
                            id="degree"
                        ></simple-input>

                        {/*TODO CheckBOX */}
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.affiliation_center || ''}
                            height="30px"
                            placeholder="Centro de adscripción"
                            id="affiliation_center"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.cellphone || ''}
                            height="30px"
                            placeholder="Teléfono célular"
                            id="cellphone"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.office_phone || ''}
                            height="30px"
                            placeholder="Teléfono oficina"
                            id="office_phone"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.employment_status || ''}
                            height="30px"
                            placeholder="Situación laboral"
                            id="employment_status"
                        ></simple-input>

                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-10">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px]'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.4 Área de conocimiento</p>
                        </div>

                        {/* NO FUNCIONA EL ÚLTIMOS INPUT, GUARDA TODOS LOS DATOS, MENOS EL ÚLTIMO */}
                        <ButtonSaveInfo casefetch={2}/>
                    </div>

                    <div className='flex flex-col w-full items-center'>

                        {/*TODO CheckBOX */}
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.knowledge_area || ''}
                            height="30px"
                            placeholder="Selecione Area de conocimiento "
                            id="knowledge_area"
                        ></simple-input>
                        {/*TODO CheckBOX */}
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.discipline || ''}
                            height="30px"
                            placeholder="Diciplina"
                            id="discipline"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={isShareData.specify || ''}
                            height="30px"
                            placeholder="Especifique Diciplina"
                            id="specify"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            height="30px"
                            placeholder="Tema específico"
                            id="specific_topic"
                            value={isShareData.specific_topic || ''}
                        ></simple-input>
                    </div>

                    <ButtonSections caseValue={2}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section1_2;