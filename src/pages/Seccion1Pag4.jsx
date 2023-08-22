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


function Seccion1Pag4() {
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
        <div className="flex flex hidden lg:block lg:w-1/6 justify-center mt-20 mb-20">
          <VerticalText />
        </div>

        <div className='flex flex-col w-full lg:w-5/6 bg-white rounded-tl-lg'>
          <div>
            <ClaveDeAcceso />
          </div>

          <div className="flex items-center place-content-around text-center w-full mt-5 lg:mt-20">

            <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

            <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
              <p className='text-xl lg:text-3xl'>1.7 Tipo de investigación</p>
            </div>

            <button><img src={logoSave} className='h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]'></img></button>
          </div>

          <div className='flex flex-col w-full items-center'>
            <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Elija un elemento" id="perspective"></simple-input> {/*checkboxito*/}
            <simple-input class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" placeholder="Elija un elemento" id="scope"></simple-input>  {/*checkboxito*/}
            <simple-textarea class="w-[80%] mr-[2%] lg:w-[81%] xl:w-[81%] md:w-[87%] sm:w-[84%]" height="30px" type="text" placeholder="Alcance" id="textareaInput1"></simple-textarea>
          </div>

          <div className="flex items-center place-content-around text-center w-full mt-10 lg:mt-20">
            <img src={logoSinNadita} className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'></img>

            <div className="bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center">
              <p className='text-xl lg:text-3xl'>1.8 Grupo de trabajo</p>
            </div>

            <button><img src={logoSave} className='h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]'></img></button>
          </div>

          <div className='text-center'>
            <p className='font-bold text-xl text-gray-500'>No incluir a la Persona responsable técnica en el listado y anotar un máximo de 6 personas colaboradoras</p>
          </div>
          <div className='text-center p-10'>
            <p className='font-bold text-xl text-gray-400'>Solo se considerará la participación de seis personas colaboradoras académicas por proyecto de investigación con financiamiento propio. Si anotan más, estos no serán mencionados en constancias de registro, conclusión o estatus. Esto no aplica para proyectos con financiamiento externo.</p>
          </div>

          <div className='flex'>
            <div className='flex flex-col items-center w-full'>
              <table className="table-auto text-center ml-5 w-[95%] sm:ml-10 sm:w-[90%] lg:ml-14 lg:w-[85%] xl:ml-[60px]">
                <thead className='bg-[#25313A] h-12 rounded text-white'>
                  <tr>
                    <th className='font-normal text-sm w-[50px] sm:text-base sm:font-medium	lg:text-base'>No°</th>
                    <th className='font-normal text-sm w-[70px] sm:text-base sm:font-medium lg:text-base'>Grado</th>
                    <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Nombre completo</th>
                    <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Adscripción</th>
                    <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Área de especialización</th>
                    <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Tareas específicas</th>
                    <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Nivel de participación</th>
                  </tr>
                </thead>
                <tbody>
                  {rowData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>
                        <input type="text" className='text-center w-[95%]' placeholder={`No° ${rowIndex + 1}`} id={`no${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `no${rowIndex}`, e.target.value)} />
                      </td>
                      <td>
                        <input type="text" className='text-center w-[95%]' placeholder="..." id={`academic_degree${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `academic_degree${rowIndex}`, e.target.value)} />
                      </td>
                      <td>
                        <input type="text" className='text-center w-[95%]' placeholder="..." id={`full_name${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `full_name${rowIndex}`, e.target.value)} />
                      </td>
                      <td>
                        <input type="text" className='text-center w-[95%]' placeholder="..." id={`affiliation_center_id${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `affiliation_center_id${rowIndex}`, e.target.value)} />
                      </td>
                      <td>
                        <input type="text" className='text-center w-[95%]' placeholder="..." id={`specialization_area${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `specialization_area${rowIndex}`, e.target.value)} />
                      </td>
                      <td>
                        <input type="text" className='text-center w-[95%]' placeholder="..." id={`tasks${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `tasks${rowIndex}`, e.target.value)} />
                      </td>
                      <td>
                        <input type="text" className='text-center w-[95%]' placeholder="..." id={`participation_level${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `participation_level${rowIndex}`, e.target.value)} />
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
