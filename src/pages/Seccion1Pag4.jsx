import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import { stringify } from 'postcss';

function Seccion1Pag4() {
    
    const [rowCount, setRowCount] = useState(1);
    const [rowData, setRowData] = useState([])  
    const handleAddRow = () => {
      if (rowCount < 6) {
        setRowCount(rowCount);
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
        console.log("🚀 ~ file: Seccion1Pag4.jsx:36 ~ handleInputC ~ inputElement:", inputElement)
        const updatedRowData = [...rowData];
        updatedRowData[index][key] = inputElement;
        setRowData(updatedRowData);
        console.log("🚀 ~ file: Seccion1Pag4.jsx:37 ~ handleInputC ~ rowData:", rowData)
    };
    const HandlerClickFetch=()=>{
        alert("Data fetch success",rowData)
        console.log("🚀 ~ file: Seccion1Pag4.jsx:43 ~ HandlerClickFetch ~ JSON.stringify(rowData):", JSON.stringify(rowData))
    }
  
    return (
        <>
            <Header />
            <div className="flex font-sans">
                <div className="flex flex hidden lg:block lg:w-1/6 justify-center mt-20 mb-20">
                    <VerticalText />
                </div>

                <div className='flex flex-col w-full lg:w-5/6 bg-white rounded-tl-lg'>
                    <div>
                        <ClaveDeAcceso />
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>1.7 Tipo de investigación</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='flex flex-col w-full'>
                        <simple-input className="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Elija un elemento" id=""></simple-input>
                        <simple-input className="ml-[30px] lg:ml-[90px]" width="89%" height="30px" placeholder="Elija un elemento" id=""></simple-input>
                        <simple-textarea className="ml-[30px] lg:ml-[90px]" width="89%" height="30px" type="text" placeholder="Alcance" id="textareaInput1"></simple-textarea>
                    </div>

                    <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
                        <img src={logoSinNadita} className='h-10 lg:h-20'></img>
                        <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
                            <p className='text-xl lg:text-3xl'>1.8 Grupo de trabajo</p>
                        </div>
                        <button><img src={logoSave} className='h-10 lg:h-20'></img></button>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-xl text-gray-500'>No incluir a la Persona responsable técnica en el listado y anotar un máximo de 6 personas colaboradoras</p>
                    </div>
                    <div className='text-center p-10'>
                        <p className='font-bold text-xl text-gray-400'>Solo se considerá la participación de seis personas colaboradoras ecadémicas por proyecto de investigación con financiamiento propio. Si anotan más, estos no serán mensionados en constancias de registro, conclusión o estatus. Esto No aplica para proyectos con financiamiento externo.</p>
                    </div>
                    <div>

                    </div>
                    <button onClick={handleAddRow}>
              <img src={masIcono} alt="Agregar fila"></img>
            </button>
            <button onClick={handleRemoveRow}>
              <img src={menosIcono} alt="Eliminar última fila"></img>
            </button>

            <table className="table-auto text-center w-full lg:w-10/12">
          <thead className='bg-[#25313A] h-12 rounded text-white'>
            <tr>
              <th className='text-sm lg:text-base'>No°</th>
              <th className='text-sm lg:text-base'>Grado</th>
              <th className='text-sm lg:text-base'>Nombre completo</th>
              <th className='text-sm lg:text-base'>Adscripción</th>
              <th className='text-sm lg:text-base'>Área de especialización</th>
              <th className='text-sm lg:text-base'>Tareas específicas</th>
              <th className='text-sm lg:text-base'>Nivel de participación</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>
                <input type="text" placeholder={`No° ${rowIndex + 1}`} id={`no${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `no${rowIndex}`, e.target.value)} />
                </td>
                <td>
                <input   type="text" placeholder="Grado"  id={`grade${rowIndex}`}  onInput={(e) => handleInputC(rowIndex, `grade${rowIndex}`, e.target.value)} />
                </td>
                <td>
                <input   type="text" placeholder="Nombre completo"  id={`fullName${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `fullName${rowIndex}`, e.target.value)} />
                </td>
                <td>
                <input   type="text" placeholder="Adscripción"  id={`adscription${rowIndex}`}  onInput={(e) => handleInputC(rowIndex, `adscription${rowIndex}`, e.target.value)} />
                </td>
                <td>
                <input   type="text" placeholder="Área de especialización"  id={`specialization${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `specialization${rowIndex}`, e.target.value)} />
                </td>
                <td>
                <input   type="text" placeholder="Tareas específicas"    id={`specificTasks${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `specificTasks${rowIndex}`, e.target.value)} />
                </td>
                <td>
                <input   type="text" placeholder="Nivel de participación"   id={`participationLevel${rowIndex}`}   onInput={(e) => handleInputC(rowIndex, `participationLevel${rowIndex}`, e.target.value)} />
                </td>

                 
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={(e) =>HandlerClickFetch(e)}>HandlerClickFetch</button>

                    <div className='flex place-content-around mt-10 mb-10 lg:mt-24'>
                        <Link to="/seccion1Pag3">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] w-[3rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[6rem]'>
                                        <img src={arrowselector}></img>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/seccion1Pag5">
                            <button>
                                <div className='grid'>
                                    <div className='grid place-content-center bg-[#BCB785] text-white w-[10rem] h-[3rem] rounded-md lg:h-[4rem] lg:w-[16rem]'>
                                        <p className='text-2xl lg:text-3xl'>Siguiente</p>
                                    </div>
                                </div>
                            </button>
                        </Link>
                        <div className='flex'>
                            <p className='grid bg-[#BCB785] w-[4rem] h-[3rem] place-content-center text-white text-xl rounded-md lg:text-3xl lg:h-[4rem] lg:w-[6rem]'>4 - 5</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Seccion1Pag4;