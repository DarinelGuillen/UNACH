import React, { useState, useContext } from 'react';
import masIcono from "../assets/img/Icon/mas.svg";
import menosIcono from "../assets/img/Icon/menos.svg";
import ButtonSaveInfo from './ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';

const Table = () => {
    const { isShareData } = useContext(SharedDataContext);
    const [rowCount, setRowCount] = useState(1);
    const [rowData, setRowData] = useState([]);

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
        alert("Datos guardados: " + JSON.stringify(rowData));
        console.log("JSON.stringify(rowData):", JSON.stringify(rowData));
    };

    return (
        <>
            <div className='flex'>
                <div className='flex flex-col items-center w-full'>
                    <table className="table-auto text-center ml-5 w-[95%] sm:ml-10 sm:w-[90%] lg:ml-14 lg:w-[85%] xl:ml-[60px]">
                        <thead className='bg-[#25313A] h-12 rounded text-white'>
                            <tr>
                                <th className='font-normal text-sm w-[50px] sm:text-base sm:font-medium	lg:text-base'>No°</th>  {/* id="id" -> ¿ES ESTE ID? */}
                                <th className='font-normal text-sm w-[70px] sm:text-base sm:font-medium lg:text-base'>Grado</th> {/* id="academic_degree" */}
                                <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Nombre completo</th> {/* id="full_name" */}
                                <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Adscripción</th> {/* id="affiliation_center_id" -> ¿ES ESTE ID? */}
                                <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Área de especialización</th> {/* id="specialization_area" */}
                                <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Tareas específicas</th> {/* id="tasks" */}
                                <th className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Nivel de participación</th> {/* id="participation_level" */}
                            </tr>
                        </thead>
                        <tbody>
                            {rowData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>
                                        <simple-input class="text-center w-[95%]" value={isShareData[`no${rowIndex}`] || ''} placeholder={`No° ${rowIndex + 1}`} id={`no${rowIndex}`}></simple-input>
                                    </td>
                                    <td>
                                        <simple-input class="text-center w-[95%]" value={isShareData[`academic_degree${rowIndex}`] || ''} placeholder="..." id={`academic_degree${rowIndex}`}></simple-input>
                                    </td>
                                    <td>
                                        <simple-input class="text-center w-[95%]" value={isShareData[`full_name${rowIndex}`] || ''} placeholder="..." id={`full_name${rowIndex}`}></simple-input>
                                    </td>
                                    <td>
                                        <simple-input class="text-center w-[95%]" value={isShareData[`affiliation_center_id${rowIndex}`] || ''} placeholder="..." id={`affiliation_center_id${rowIndex}`}></simple-input>
                                    </td>
                                    <td>
                                        <simple-input class="text-center w-[95%]" value={isShareData[`specialization_area${rowIndex}`] || ''} placeholder="..." id={`specialization_area${rowIndex}`}></simple-input>
                                    </td>
                                    <td>
                                        <simple-input class="text-center w-[95%]" value={isShareData[`tasks${rowIndex}`] || ''} placeholder="..." id={`tasks${rowIndex}`}></simple-input>
                                    </td>
                                    <td>
                                        <simple-input class="text-center w-[95%]" value={isShareData[`participation_level${rowIndex}`] || ''} placeholder="..." id={`participation_level${rowIndex}`}></simple-input>
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
                <ButtonSaveInfo onClick={HandlerClickFetch} />
            </div>

        </>
    )
}

export default Table