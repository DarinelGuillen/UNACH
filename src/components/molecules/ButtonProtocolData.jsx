import React from 'react';

function ButtonProtocolData(num) {
    return (
        <>
            <div className="w-full flex items-center justify-center my-7 ">
                <div className=" w-full lg:w-1/2 md:w-1/2 h-auto bg-white border-2 border-gray-800 rounded-full flex flex-row shadow-md ">
                    <label className="w-1/2">
                        <input className="hidden" type="radio" value="DATA"/>
                        <div className="w-full h-full bg-white hover:bg-gray-300 rounded-full flex justify-center items-center">
                            <span className="text-gray-800">DATOS DEL PROYECTO</span>
                        </div>
                    </label>
                    <label className="w-1/2">
                        <input className="hidden" type="radio" value="PROTOCOL"/>
                        <div className="w-full h-full bg-white hover:bg-gray-300 rounded-full flex justify-center items-center">
                            <span className="text-gray-800">Protocol</span>
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
}

export default ButtonProtocolData;
