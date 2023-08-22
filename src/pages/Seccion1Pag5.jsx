import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import masIcono from "../assets/img/Icon/mas.svg";
import menosIcono from "../assets/img/Icon/menos.svg";
import "../assets/css/botoncito.css";
import ButtonSaveInfo from '../atoms/ButtonSaveInfo';

function Seccion1Pag5() {

    const [rowCount, setRowCount] = useState(1);
    const [rowData, setRowData] = useState([])

    const handleAddRow = () => {
        if (rowCount < 10) {
            setRowCount(rowCount + 1);
            setRowData([...rowData, {}]);
        }
    };

    const handleRemoveRow = () => {
        if (rowCount > 1) {
            setRowCount(rowCount - 1);
            setRowData(rowData.slice(0, -1));
        }
    };

    const handleInputC = (index, key, other) => {
        const inputElement = document.getElementById(key).value;
        const updatedRowData = [...rowData];
        updatedRowData[index][key] = inputElement;
        setRowData(updatedRowData);
    };

    const HandlerClickFetch = () => {
        alert("Datos guardaditos", rowData);
        console.log("JSON.stringify(rowData):", JSON.stringify(rowData));
    };


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
                            <p className='text-xl lg:text-3xl'>1.9 Formación de personas en investigación</p>
                        </div>

                        <ButtonSaveInfo />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-xl text-gray-500'>Indicara las personas que formará el proyecto</p>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-xl text-gray-500'>*Puede agregar cuantas celdas necesite*</p>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col items-center w-full'>
                            <table class="table-auto text-center ml-5 w-[95%] sm:ml-10 sm:w-[90%] lg:ml-14 lg:w-[85%] xl:ml-[60px]">
                                <thead className='bg-[#25313A] h-12 rounded text-white'>
                                    <tr>
                                        <th className='font-normal text-sm w-[50px] sm:text-base sm:font-medium	lg:text-base'>Nombre del participante</th>
                                        <th className='font-normal text-sm w-[50px] sm:text-base sm:font-medium	lg:text-base'>Tipo de participante</th>
                                        <th className='font-normal text-sm w-[50px] sm:text-base sm:font-medium	lg:text-base'>Producto esperado</th>
                                        <th className='font-normal text-sm w-[50px] sm:text-base sm:font-medium	lg:text-base'>Especifique</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowData.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`full_name${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `full_name${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`type${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `type${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`expected_research_product_id${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `expected_research_product_id${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`other${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `other${rowIndex}`, e.target.value)} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className='flex flex-col mr-1 sm:mr-[15px] w-[5%] mt-[50px]'>
                            <button onClick={handleAddRow}>
                                <img src={masIcono} alt="Agregar fila"></img>
                            </button>
                            <button onClick={handleRemoveRow}>
                                <img src={menosIcono} alt="Eliminar última fila"></img>
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center mt-9'>
                        {/* <button onClick={(e) => HandlerClickFetch(e)}><img src={logoSave} className=''></img></button> */}
                        <ButtonSaveInfo />
                        {/* NO GUARDA DATOS DE LAS TABLAS */}
                    </div>


                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

                        <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
                            <p className='text-xl lg:text-3xl'>1.10 Entidades (instrucciones, organizaciones, grupos, etc.) participantes o beneficiarias</p>
                        </div>

                        <ButtonSaveInfo />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-xl text-gray-500'>*Puede agregar cuantas celdas necesite*</p>
                    </div>

                    <div className='flex'>
                        <div className='flex flex-col items-center w-full'>
                            <table className="table-auto text-center ml-5 w-[95%] sm:ml-10 sm:w-[90%] lg:ml-14 lg:w-[85%] xl:ml-[60px]">
                                <thead className='bg-[#25313A] h-12 rounded text-white'>
                                    <tr>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Nombre de la entidad</th>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Describa el tipo de participación de forma breve</th>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Contacto (Número célular y correo eléctronico)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowData.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`name${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `name${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`description${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `description${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`contact_name${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `contact_name${rowIndex}`, e.target.value)} />
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className='flex flex-col mr-1 sm:mr-[15px] w-[5%] mt-[50px]'>
                            <button onClick={handleAddRow}>
                                <img src={masIcono} className='h-14' alt="Agregar fila"></img>
                            </button>
                            <button onClick={handleRemoveRow}>
                                <img src={menosIcono} className='h-14' alt="Eliminar última fila"></img>
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center mt-9'>
                        {/* <button onClick={(e) => HandlerClickFetch(e)}><img src={logoSave} className=''></img></button> */}
                        <ButtonSaveInfo />
                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-72'>
                        <Link to="/seccion1Pag4">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/seccion2Pag1">
                            <button>
                                <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                    <div className='grid place-content-center'>
                                        <p className='text-2xl lg:text-3xl'>Siguiente</p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>5 - 5</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    );
}

export default Seccion1Pag5;