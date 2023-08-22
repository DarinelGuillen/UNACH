import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import logoListo from "../assets/img/Icon/checkVerificado.svg";
import logoSave from "../assets/img/Icon/Save.svg";
import masIcono from "../assets/img/Icon/mas.svg";
import menosIcono from "../assets/img/Icon/menos.svg";
import "../assets/css/botoncito.css";

function Seccion1Pag4() {

  const [isInfoComplete, setIsInfoComplete] = useState(false);
  const [isInfoCompleteGrupoTrabajo, setIsInfoCompleteGrupoTrabajo] = useState(false);
  const requiredFields = ['element1', 'element2', 'scope'];
  const initialState = {
    element1: '',
    element2: '',
    scope: '',
  };
  const [sectionValues, setSectionValues] = useState(initialState);

  const handleInputChange = (id, value) => {
    setSectionValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSave = () => {
    const areFieldsComplete = requiredFields.every(
      (field) => sectionValues[field].trim() !== ''
    );

    if (areFieldsComplete) {
      setIsInfoComplete(true);
    } else {
      setIsInfoComplete(false);
      alert('Por favor, complete todos los campos antes de guardar.');
    }
  };

  useEffect(() => {
    const jsonData = isInfoComplete ? sectionValues : null;
    console.log('JSON Data:', jsonData);
  }, [isInfoComplete, sectionValues]);

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
    setIsInfoCompleteGrupoTrabajo(true);
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
            <img src={isInfoComplete ? logoListo : logoSinNadita} className="h-10 lg:h-20" />
            <div className="bg-[#BCB785] w-full lg:w-5/6 text-white p-3 rounded-md">
              <p className="text-xl lg:text-3xl">1.7 Tipo de investigación</p>
            </div>
            <button onClick={handleSave}><img src={logoSave} className="h-10 lg:h-20"></img></button>
          </div>

          <div className='text-center'>
            <p className='font-bold text-base lg:text-xl text-gray-500'>Rellene los siguientes campos según como se requiera</p>
          </div>

          <div className='flex flex-col w-full'>
            <input
              className="input-style"
              type="text"
              placeholder="Elija un elemento"
              value={sectionValues.element1}
              onChange={(e) => handleInputChange('element1', e.target.value)}
            />
            <input
              className="input-style"
              type="text"
              placeholder="Elija un elemento"
              value={sectionValues.element2}
              onChange={(e) => handleInputChange('element2', e.target.value)}
            />
            <input
              className="input-style"
              placeholder="Alcance"
              value={sectionValues.scope}
              onChange={(e) => handleInputChange('scope', e.target.value)}
            />
          </div>

          <div className='flex items-center place-content-around text-center w-full mt-10 lg:mt-20'>
  <img
    src={isInfoCompleteGrupoTrabajo ? logoListo : logoSinNadita}
    className='h-[40px] lg:h-[50px] md:h-[40px] sm:h-[40px] xl:h-[40px] xl:ml-2'
  />
  <div className='bg-[#BCB785] w-[86%] sm:w-[87%] lg:w-[85%] md:w-[89%] xl:w-[83%] text-white p-3 rounded-md items-center'>
    <p className='text-xl lg:text-3xl'>1.8 Grupo de trabajo</p>
  </div>
  <button onClick={HandlerClickFetch}>
    <img
      src={logoSave}
      className='h-[40px] w-[30px] lg:w-[40px] lg:h-[50px] md:h-[30px] md:mr-[10px] sm:h-[30px] xl:mr-[10px]'
    />
  </button>
</div>

          <div className='text-center'>
            <p className='font-bold text-xl text-gray-500'>No incluir a la Persona responsable técnica en el listado y anotar un máximo de 6 personas colaboradoras</p>
          </div>
          <div className='text-center p-10'>
            <p className='font-bold text-xl text-gray-400'>Solo se considerará la participación de seis personas colaboradoras académicas por proyecto de investigación con financiamiento propio. Si anotan más, estos no serán mencionados en constancias de registro, conclusión o estatus. Esto no aplica para proyectos con financiamiento externo.</p>
          </div>
          <div></div>
          <div className='flex items-center place-content-around text-center w-full mt-10 lg:mt-20'>
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
                      <input type="text" className='text-center' placeholder={`No° ${rowIndex + 1}`} id={`no${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `no${rowIndex}`, e.target.value)} />
                    </td>
                    <td>
                      <input type="text" className='text-center' placeholder="..." id={`academic_degree${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `academic_degree${rowIndex}`, e.target.value)} />
                    </td>
                    <td>
                      <input type="text" className='text-center' placeholder="..." id={`full_name${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `full_name${rowIndex}`, e.target.value)} />
                    </td>
                    <td>
                      <input type="text" className='text-center' placeholder="..." id={`affiliation_center_id${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `affiliation_center_id${rowIndex}`, e.target.value)} />
                    </td>
                    <td>
                      <input type="text" className='text-center' placeholder="..." id={`specialization_area${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `specialization_area${rowIndex}`, e.target.value)} />
                    </td>
                    <td>
                      <input type="text" className='text-center' placeholder="..." id={`tasks${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `tasks${rowIndex}`, e.target.value)} />
                    </td>
                    <td>
                      <input type="text" className='text-center' placeholder="..." id={`participation_level${rowIndex}`} onInput={(e) => handleInputC(rowIndex, `participation_level${rowIndex}`, e.target.value)} />
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
