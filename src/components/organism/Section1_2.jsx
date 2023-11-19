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
import * as Section1_2Data from '../organism/Section1_2Data';
import { getItem, setItem } from '../../utils/storage';

// import {getOptionCheckBoxAffiliationCenter,getEmploymentStatusOptions,getKnowledgeAreaOptions,getDisciplineOptions} from '../organism/Section1_2Data';
import '../../assets/css/botoncito.css';

function Section1_2() {
    const Current = getItem('currentProyect') || {};

    // const { Current } = useContext(SharedDataContext);
    let affiliation_center = Section1_2Data.AC();
    let employment_status = Section1_2Data.ES();
    let knowledge_area = Section1_2Data.KA();
    let discipline = Section1_2Data.D();

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
                            value={Current.full_name_technical_responsible || ''}
                            height="30px"
                            placeholder="Nombre completo"
                            id="full_name_technical_responsible"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={Current.email || ''}
                            height="30px"
                            type="email"
                            placeholder="Correo electrónico"
                            id="email"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={Current.degree || ''}
                            height="40px"
                            type="combo-box"
                            options="Lic.,Ing.,Mtro., Mtra.,Dra., Dr."
                            placeholder="Grado"
                            id="degree"
                        ></simple-input>


                        {/*TODO CheckBOX */}
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={Current.affiliation_center || ''}
                            height="40px"
                            type="combo-box"
                            options={affiliation_center}
                            placeholder="Centro de adscripción"
                            id="affiliation_center"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={Current.cellphone || ''}
                            height="30px"
                            type="number"
                            placeholder="Teléfono célular"
                            id="cellphone"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={Current.office_phone || ''}
                            height="30px"
                            type="number"
                            placeholder="Teléfono oficina"
                            id="office_phone"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={Current.employment_status || ''}
                            height="40px"
                            type="combo-box"

                            options={employment_status}
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
                            value={Current.knowledge_area || ''}
                            options={knowledge_area}
                            height="40px"
                            type="combo-box"
                            placeholder="Selecione Area de conocimiento "
                            id="knowledge_area"
                        ></simple-input>
                        {/*TODO CheckBOX */}
                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={Current.discipline || ''}
                            placeholder="Diciplina"
                            options={discipline}
                            height="40px"
                            type="combo-box"
                            id="discipline"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            value={Current.specify || ''}
                            height="30px"
                            placeholder="Especifique Diciplina"
                            id="specify"
                        ></simple-input>

                        <simple-input
                            class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]"
                            height="30px"
                            placeholder="Tema específico"
                            id="specific_topic"
                            value={Current.specific_topic || ''}
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