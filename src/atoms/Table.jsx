import React, { useState, useContext } from 'react';
import masIcono from "../assets/img/Icon/mas.svg";
import menosIcono from "../assets/img/Icon/menos.svg";
import ButtonSaveInfo from './ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';

const Table = ({ columns, ...otherProps }) => {
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
                                {columns.map(column => (
                                    <th key={column.id} className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>
                                        {column.title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        
                        {/* <th id="id" className='font-normal text-sm w-[50px] sm:text-base sm:font-medium	lg:text-base'>No°</th>  ?????
                        <th id="academic_degree" className='font-normal text-sm w-[70px] sm:text-base sm:font-medium lg:text-base'>Grado</th>
                        <th id="full_name" className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Nombre completo</th>
                        <th id="affiliation_center_id" className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Adscripción</th> ?????
                        <th id="specialization_area" className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Área de especialización</th>
                        <th id="tasks" className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Tareas específicas</th>
                        <th id="participation_level" className='font-normal text-sm w-[80px] sm:text-base sm:font-medium lg:text-base'>Nivel de participación</th> */}

                        <tbody>
                            {rowData.map((row, rowIndex) => (
                                <tr key={rowIndex} >
                                    {columns.map(column => (
                                        <td key={column.id}>
                                            <simple-input
                                                class="w-[50px]"
                                                value={isShareData[`${column.id}${rowIndex}`] || ''}
                                                placeholder={``} //props para pasar valores personalizados 
                                                id={`${column.id}${rowIndex}`}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='flex flex-col mr-1 sm:mr-[15px] w-[5%] mt-[50px]'>
                    <button onClick={handleAddRow}>
                        <img src={masIcono} className='h-14' alt="Agregar fila" />
                    </button>
                    <button onClick={handleRemoveRow}>
                        <img src={menosIcono} className='h-14' alt="Eliminar última fila" />
                    </button>
                </div>
            </div>

            <div className='flex justify-center mt-9'>
                <ButtonSaveInfo onClick={HandlerClickFetch} />
            </div>
        </>
    );
};

export default Table;
