import React from 'react';
import logoUnach from '../../assets/img/Icon/LOGO-UNACH.png';
import arrowBlack from '../../assets/img/Icon/arrowBlack.png';

const CardXl = ({ id, start_date, end_date, title_project, status, student_name, created_at }) => {
    const truncatedTitle = title_project.length > 20 ? title_project.substring(0, 15) + '...' : title_project;

    const handlerSections = async (id) => {
            console.log("🚀 ~ file: cardXl.jsx:9 ~ handlerSections ~ id:", id)
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/DataProject/${id}`);

                if (response.ok) {
                    const data = await response.json();
                    console.log("🚀 ~ file: cardXl.jsx:14 ~ handlerSections ~ response:", response)
                    console.log("🚀 ~ file: cardXl.jsx:15 ~ handlerSections ~ data:", JSON.stringify(data))
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            
    };

    const handlerPDF = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/DataProject/${id}`);

                if (response.ok) {
                    const data = await response.json();
                    console.log("🚀 ~ file: cardXl.jsx:14 ~ handlerSections ~ response:", response)
                    console.log("🚀 ~ file: cardXl.jsx:15 ~ handlerSections ~ data:", JSON.stringify(data))
                } else {
                    console.error('Failed to fetch data');
                }
        } catch (error) {
            console.error('Error handling PDF:', error);
            // Handle the error
        }
    };

    return (
        <div className='font-sans'>
            <div className='flex flex-col w-full max-w-3xl h-[150px] bg-white rounded-[12px] border-[1px] border-black mx-auto md:h-[208px] xl:w-[90%] xl:mx-[5%]'>

                <div className='flex items-center justify-between p-4 md:p-6'>
                    <div className="flex flex-col w-full md:w-2/3">
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>Empieza: {start_date}</p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl'>Termina: {end_date}</p>
                        <p className='text-xl font-bold md:text-2xl lg:text-3xl overflow-hidden whitespace-nowrap overflow-ellipsis hover:whitespace-normal hover:overflow-visible transition-colors' title={title_project}>
                            {truncatedTitle}
                        </p>
                        <p className='text-sm text-gray-600 md:text-lg lg:text-xl mt-1'>{status}</p>
                        <p className='text-blue-600 text-xs font-semibold mt-3 md:text-lg lg:text-xl'>{student_name}</p>
                    </div>

                    <img src={logoUnach} alt="" className='w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-28' />
                </div>

                {status !== 1400 ? (
                    <div className="flex justify-end grow items-center ">
                        <button onClick={() => handlerSections(id)} className='flex items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
                            <img src={arrowBlack} className='h-5' alt="next" />
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-end grow items-center">
                        <button onClick={() => handlerPDF(id)} className='flex items-center justify-center w-12 h-8 bg-gray-300 rounded-tl-[12px] rounded-br-[12px] hover:bg-gray-400'>
                            <span className="text">PDF</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardXl;
