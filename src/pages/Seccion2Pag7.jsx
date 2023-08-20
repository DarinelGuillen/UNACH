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

function Seccion2Pag7() {

    const [rowCount, setRowCount] = useState(1);
    const [rowData, setRowData] = useState([])  
  
    const handleAddRow = () => {
      if (rowCount < 10) {
        setRowCount(rowCount+1);
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
                            <p className='text-xl lg:text-3xl'>2.12 Etapa y actividades</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl'>(El proyecto deberá ajustarse a un año de vigencia)</p>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>*Inserte cuantas filas necesite*</p>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>Etapa 1</p>
                    </div>
                    <table class="table-auto ml-[30px] lg:ml-[90px] text-center w-full lg:w-10/12">
                        <thead className='bg-[#25313A] h-12 rounded text-white'>
                            <tr>
                                <th>Primer semestre de ejecución</th>
                            </tr>
                        </thead>
                        <tr>
                            <div className='flex flex-col w-full'>
                                <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Inicio(Fecha)" id=""></simple-input>
                                <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Fin(Fecha)" id=""></simple-input>
                            </div>
                        </tr>
                    </table>
                    <div className='flex items-center place-content-around text-center w-full mt-10 lg:mt-20'>
                        <table class="table-auto ml-[30px] lg:ml-[90px] text-center w-full lg:w-10/12">
                            <thead className='bg-[#25313A] h-12 rounded  ml-[30px] lg:ml-[90px] text-white'>
                                <tr>
                                    <th>Actividades a desarrollar</th>
                                    <th>Producto esperado</th>
                                </tr>
                            </thead>
                            <tbody>
                            {rowData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>
                                        <input type="text" className='text-center' placeholder="..." id={`no${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `no${rowIndex}`, e.target.value)} />
                                    </td>
                                    <td>
                                        <input type="text" className='text-center' placeholder="..." id={`grade${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `grade${rowIndex}`, e.target.value)} />
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='grid place-content-center ml-5 mr-5'>
                            <button onClick={handleAddRow}>
                                <img src={masIcono} alt="Agregar fila"></img>
                            </button>
                            <button onClick={handleRemoveRow}>
                                <img src={menosIcono} alt="Eliminar última fila"></img>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center mt-9'>
                        <button onClick={(e) => HandlerClickFetch(e)}><img src={logoSave} className=''></img></button>  
                    </div>
                    <div className='text-center mt-40'>
                        <p className='font-bold text-gray-500 text-base lg:text-xl mt-5 mb-5'>Etapa 2</p>
                    </div>

                    
                    <table class="table-auto ml-[30px] lg:ml-[90px] text-center w-full lg:w-10/12">
                        <thead className='bg-[#25313A] h-12 rounded text-white'>
                            <tr>
                                <th>Segundo semestre de ejecución</th>
                            </tr>
                        </thead>
                        <tr>
                            <div className='flex flex-col w-full'>
                                <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Inicio(Fecha)" id=""></simple-input>
                                <simple-input class="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Fin(Fecha)" id=""></simple-input>
                            </div>
                        </tr>
                    </table>
                    <div className='flex items-center place-content-around text-center w-full mt-10 lg:mt-20'>
                        <table class="table-auto ml-[30px] lg:ml-[90px] text-center w-full lg:w-10/12">
                            <thead className='bg-[#25313A] h-12 rounded text-white'>
                                <tr>
                                    <th>Actividades a desarrollar</th>
                                    <th>Producto esperado</th>
                                </tr>
                            </thead>
                            <tbody>
                            {rowData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>
                                        <input type="text" className='text-center' placeholder="..." id={`no${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `no${rowIndex}`, e.target.value)} />
                                    </td>
                                    <td>
                                        <input type="text" className='text-center' placeholder="..." id={`grade${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `grade${rowIndex}`, e.target.value)} />
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='grid place-content-center ml-5 mr-5'>
                            <button onClick={handleAddRow}>
                                <img src={masIcono} alt="Agregar fila"></img>
                            </button>
                            <button onClick={handleRemoveRow}>
                                <img src={menosIcono} alt="Eliminar última fila"></img>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center mt-9'>
                        <button onClick={(e) => HandlerClickFetch(e)}><img src={logoSave} className=''></img></button>  
                    </div>
                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion2Pag6">
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
                                    <Link to="/seccion2Pag8"><p className='text-2xl lg:text-3xl'>Siguiente</p></Link>
                                </div>
                            </div>
                        </button>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>7 - 10</p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
     );
}

export default Seccion2Pag7;