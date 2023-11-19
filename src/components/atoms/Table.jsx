import React, { useState, useContext, useEffect } from 'react';
import masIcono from "../../assets/img/Icon/mas.svg";
import menosIcono from "../../assets/img/Icon/menos.svg";
import ButtonSaveInfo from './ButtonSaveInfo';
import SharedDataContext from '../../contexts/SharedDataContext';
import "../../assets/css/inputTable.css";
import { getItem, setItem } from '../../utils/storage';


const Table = ({ columns, savedInfo, keyCurrent }) => {
    // console.log("🚀 ~ file: Table.jsx:11 ~ Table ~  savedInfo, keyCurrent:", savedInfo, "=", keyCurrent)
    const Current = getItem('currentProyect') || {};
    const { isShareData, setIsShareData } = useContext(SharedDataContext);
    const [rowCount, setRowCount] = useState(savedInfo.length || 1);
    const [rowData, setRowData] = useState(savedInfo.length ? savedInfo : [{}]);
    const [storageChange, setstorageChange] = useState(false);
    
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
        const updatedRowData = [...rowData];
        updatedRowData[index][key] = value;
    
        // Initialize the key with an empty array if it doesn't exist
        if (!Current.hasOwnProperty(localKey)) {
            Current[localKey] = [];
        }
    
        const updatedArray = [...Current[localKey]];
        if (updatedArray[index] === undefined) {
            updatedArray[index] = {};
        }
        updatedArray[index] = { ...updatedArray[index], [key]: value };
    
        // Update the storage with the modified data
        setstorageChange({[localKey]: updatedArray })
        setRowData(updatedRowData);
    };

    useEffect(() => {
    const updatedCurrent = { ...Current, ...storageChange };
    console.log("🚀 ~ file: Table.jsx:54 ~ useEffect ~ updatedCurrent:", updatedCurrent)
    setItem('currentProyect', updatedCurrent);
    setstorageChange(false);
}, [storageChange]);

    


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
                                <tr key={rowIndex}>
                                    {columns.map(column => (
                                        <td key={column.id}>
                                            <input
                                                className="Input_Table"
                                                value={row[column.id] || ''}
                                                placeholder={``}
                                                id={`${column.id}${rowIndex}`}
                                                onChange={(e) => handleInputC(rowIndex, column.id, e.target.value, keyCurrent)}
                                                title={column.hover}  // Aquí se agrega la propiedad title
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
        </>
    );
};

export default Table;