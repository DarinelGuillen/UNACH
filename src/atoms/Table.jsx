import React, { useState, useContext } from 'react';
import masIcono from "../assets/img/Icon/mas.svg";
import menosIcono from "../assets/img/Icon/menos.svg";
import ButtonSaveInfo from './ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';
import "../assets/css/inputTable.css"

//Error handling if user does not fill any input where index 1 has been filled
//but index 2 has not been filled (Index 2 get ass undefine and it breaks) 
//index 3 has been filled

const Table = ({ columns, savedInfo, keyIsShareData}) => {
    const { isShareData, setIsShareData } = useContext(SharedDataContext);
    const [rowCount, setRowCount] = useState(savedInfo.length || 1);
    const [rowData, setRowData] = useState(savedInfo.length ? savedInfo : [{}]);

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

    const handleInputC = (index, key, value, localKey) => {
        console.log("🚀 ~ file: Table.jsx:28 ~ handleInputC ~ LocalKey:", localKey);
    
        // Verifica si el localKey no existe en isShareData
        if (!isShareData.hasOwnProperty(localKey)) {
            // Si no existe, crea un nuevo key con un array vacío
            setIsShareData({ ...isShareData, [localKey]: [] });
        }
    
        const updatedRowData = [...rowData];
        updatedRowData[index][key] = value;
    
        // Actualiza el elemento específico en el array correspondiente a localKey
        const updatedArray = [...isShareData[localKey]];
        updatedArray[index] = { ...updatedArray[index], [key]: value };
    
        // Actualiza isShareData con el nuevo valor
        setIsShareData({ ...isShareData, [localKey]: updatedArray });
    
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
                        <tbody>
                            {rowData.map((row, rowIndex) => (
                                <tr key={rowIndex} >
                                    {columns.map(column => (
                                        <td key={column.id}>
                                            <div>
                                                <div>
                                                    <input
                                                        className="Input_Table"
                                                        value={row[column.id] || ''}
                                                        placeholder={``}
                                                        id={`${column.id}${rowIndex}`}
                                                        onChange={(e) => handleInputC(rowIndex, column.id, e.target.value, keyIsShareData)}
                                                    />
                                                </div>
                                            </div>
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
