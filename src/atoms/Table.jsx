import React, { useState, useContext } from 'react';
import masIcono from "../assets/img/Icon/mas.svg";
import menosIcono from "../assets/img/Icon/menos.svg";
import ButtonSaveInfo from './ButtonSaveInfo';
import SharedDataContext from '../contexts/SharedDataContext';
import "../assets/css/inputTable.css"

// ! Alert: Error handling if the user does not fill any input where index 1 has been filled
// ? Query: What happens if index 2 has not been filled? (Index 2 gets assigned 'undefined' and it breaks)
// ~~ Important to Read: Note that index 3 has been filled.

const Table = ({ columns, savedInfo, keyIsShareData}) => {
    const { isShareData, setIsShareData } = useContext(SharedDataContext);
    const [rowCount, setRowCount] = useState(savedInfo.length || 1);
    const [rowData, setRowData] = useState(savedInfo.length ? savedInfo : [{}]);

    // * Highlight: Function to add a new row if the row count is less than 7
    const handleAddRow = () => {
        if (rowCount < 7) {
            setRowCount(rowCount + 1);
            setRowData([...rowData, {}]);
        }
    };

    // * Highlight: Function to remove the last row if the row count is greater than 1
    const handleRemoveRow = () => {
        if (rowCount > 1) {
            setRowCount(rowCount - 1);
            setRowData(rowData.slice(0, -1));
        }
    };

    // ! Alert: Function to handle input changes and update the shared data context
    const handleInputC = (index, key, value, localKey) => {
        console.log("🚀 ~ file: Table.jsx:28 ~ handleInputC ~ LocalKey:", localKey);
    
        // ? Query: What happens if 'localKey' doesn't exist in 'isShareData'?
        if (!isShareData.hasOwnProperty(localKey)) {
            setIsShareData({ ...isShareData, [localKey]: [] });
        }
    
        const updatedRowData = [...rowData];
        updatedRowData[index][key] = value;
    
        const updatedArray = [...isShareData[localKey]];
        updatedArray[index] = { ...updatedArray[index], [key]: value };
    
        // ! Alert: Update the shared data context
        setIsShareData({ ...isShareData, [localKey]: updatedArray });
    
        setRowData(updatedRowData);
    };
    
    // ? Query: What happens when this button is clicked?
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
