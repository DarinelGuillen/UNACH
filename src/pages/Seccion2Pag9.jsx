import { Link } from 'react-router-dom';
import React, { useState } from 'react';
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

function Seccion2Pag9() {

    const [rowCount, setRowCount] = useState(1);
    const [rowData, setRowData] = useState([])

    const handleAddRow = () => {
        if (rowCount < 7) {
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
                <div className="flex hidden lg:block lg:w-1/6 lg:justify-center lg:mt-20 lg:mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.15 Desglose Financiero (Opcional)</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                        <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5'>Este apartado es con el fin de prever y ministrar los gastos, es opcional requisarlo en proyectos con financiamiento de la propia persona investigadora.</p>
                    </div>

                    <div className='text-center w-5/6 ml-10 lg:ml-[85px]'>
                        <p className='text-gray-700 text-base mt-1 lg:text-xl lg:mb-5 mt-5 mb-5'>*Inserte o borre cuantas filas necesite*</p>
                    </div>

                    <div className="flex">
                        <div className='flex flex-col items-center w-full'>
                            <table className="table-auto text-center ml-5 w-[95%] sm:ml-10 sm:w-[90%] lg:ml-14 lg:w-[85%] xl:ml-[60px]">
                                <thead className='bg-[#25313A] h-12 rounded text-white'>
                                    <tr>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Rubros</th>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Tipo de gasto</th>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Monto</th>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Etapa</th>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Justificación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowData.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`no${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `no${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`grade${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `grade${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`no${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `no${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`grade${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `grade${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`grade${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `grade${rowIndex}`, e.target.value)} />
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className='bg-[#25313A] h-12 rounded text-white'>
                                        <td></td>
                                        <td className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Monto total en pesos</td>
                                        <td>$
                                            <input type="text" className='text-center bg-[#25313A]' placeholder="..." />
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='grid place-content-center ml-5 mr-5'>
                            <button onClick={handleAddRow}>
                                <img src={masIcono} className='h-14' alt="Agregar fila"></img>
                            </button>
                            <button onClick={handleRemoveRow}>
                                <img src={menosIcono} className='h-14' alt="Eliminar última fila"></img>
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-center mt-9'>
                        <button onClick={(e) => HandlerClickFetch(e)}><img src={logoSave} className=''></img></button>
                    </div>

                    <div class="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>2.16 Productos de la investigación comprometidos </p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>*Inserte o borre cuantas filas necesite*</p>
                    </div>

                    <div className="flex">
                        <div className='flex flex-col items-center w-full'>
                            <table className="table-auto text-center ml-5 w-[95%] sm:ml-10 sm:w-[90%] lg:ml-14 lg:w-[85%] xl:ml-[60px]">
                                <thead className='bg-[#25313A] h-12 rounded text-white'>
                                    <tr>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Tipo del producto</th>
                                        <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rowData.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`no${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `no${rowIndex}`, e.target.value)} />
                                            </td>
                                            <td>
                                                <input type="text" className='text-center w-[95%]' placeholder="..." id={`grade${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `grade${rowIndex}`, e.target.value)} />
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
                        <button onClick={(e) => HandlerClickFetch(e)}><img src={logoSave} className=''></img></button>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-10 mb-5'>Nota: para emitir la constancia de conclusión estos productos deben ser entregados y cubiertos satisfactoriamente, y dictaminados favorablemente.</p>
                    </div>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-[60px] lg:mt-[81px]'>
                        <Link to="/seccion2Pag8">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <button>
                            <div className='grid'>
                                <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                    <Link to="/seccion2Pag10"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>9 - 10</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion2Pag9;