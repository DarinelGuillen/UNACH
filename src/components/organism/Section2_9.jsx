import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import arrowselector from '../../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../../assets/img/Icon/checkSinNada.svg";
import masIcono from "../../assets/img/Icon/mas.svg";
import menosIcono from "../../assets/img/Icon/menos.svg";
import "../../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import ButtonSections from '../molecules/ButtonSections';
import Table from '../atoms/Table';
import { getItem, setItem } from '../../utils/storage';


function Section2_9() {
    const Current = getItem('currentProyect') || {};
    const [FillOut, SetFillAout] = useState(false);
    const ColumnsTable = [
        { id: "type_id", title: "Tipo del producto" },
        { id: "description", title: "Descripcion" },
    ];

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
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.15 Desglose Financiero (Opcional)</p>
                        </div>
                        <ButtonSaveInfo casefetch={3} />
                    </div>

                    <div className="flex justify-center">
                        <div className='text-center w-5/6 '>
                            <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5'>Este apartado es con el fin de prever y ministrar los gastos, es opcional requisarlo en proyectos con financiamiento de la propia persona investigadora.</p>
                        </div>
                    </div>

                    <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                        <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5 mt-5 mb-5'>*Inserte o borre cuantas filas necesite*</p>
                    </div>
                    {!Current.financial_breakdown && !Current.financial_breakdown === '' || FillOut ? (
                        <>
                            <Table
                                columns={ColumnsTable}
                                savedInfo={Current.financial_breakdown || ''}
                                keyCurrent={"financial_breakdown"}
                            />
                        </>
                    ) : (
                        <>
                            <div className='w-full flex items-center justify-center'>

                                    <button onClick={() => SetFillAout(true)}>
                                        <div className='flex'>
                                            <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                                <p className='text-2xl lg:text-3xl'>Rellenar</p>
                                            </div>
                                        </div>
                            </button>
                        </div>
                        </>
                    )}

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.16 Productos de la investigación comprometidos </p>
                        </div>
                        <ButtonSaveInfo casefetch={3}/>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>*Inserte o borre cuantas filas necesite*</p>
                    </div>

                    <Table columns={ColumnsTable} savedInfo={Current.stages_and_activities || ''} keyCurrent={"stages_and_activities"}/>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-10 mb-5'>Nota: para emitir la constancia de conclusión estos productos deben ser entregados y cubiertos satisfactoriamente, y dictaminados favorablemente.</p>
                    </div>

                    <ButtonSections caseValue={3}/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Section2_9;