import React from 'react';
import logoUnach from '../assets/img/Icon/LOGO-UNACH.png'
import arrowBlack from '../assets/img/Icon/arrowBlack.png'

const CardXl = ({ date, projectName, school, studentName, buttonUrl }) => {
    const statusContex = "1401"
    return (
        <div className='font-sans'>
            <div className='flex flex-col w-[95%] h-[150px] bg-white rounded-[12px] rounded-3xl border-[1px] border-black ml-[2%] md:h-[208px] md:w-[90%] md:ml-[4%] xl:ml-[1%]'>

                <div className='flex ml-[16%] gap-2 h-full sm:justify-normal sm:ml-[45px] xl:ml-[10%]'>
                    <div className="flex flex-col justify-center mt-9 md:w-[60%] md:mt-[9%]">
                        <p className='text-base text-[#868686] md:text-lg lg:text-2xl'>{date}</p>
                        <p className='text-xl font-bold md:text-2xl lg:text-3xl'>{projectName}</p>
                        <p className='text-base text-[#868686] md:text-lg lg:text-xl lg:mt-1'>{school}</p>
                        <p className='text-[#5964E0] text-sm font-semibold mt-3 w-full md:text-lg lg:text-xl'>{studentName}</p>
                    </div>

                    <img src={logoUnach} alt="" className='flex w-[50px] h-[40px] mt-[6%] ml-[10%] sm:ml-[40%] md:ml-[30%] md:w-[70px] md:h-[60px] md:mr-[5%] lg:w-[80px] lg:h-[70px] xl:mr-[5%]' />
                </div>
                {
                    statusContex != "1400" ? (<>
                        <div className="flex justify-end">
                            <a href={buttonUrl} className='flex items-center justify-center w-[50px] h-[30px] bg-[#CACACA] rounded-tl-[12px] rounded-br-[12px] hover:bg-[#BABABA]'>
                                <img src={arrowBlack} className='h-[25px]' alt="" />
                            </a>
                        </div>
                    </>) : (<>
                        {/* // TODO: go to the PDF window and send the necessary parameters */}
                        <h1>pdf window please</h1>
                        {/* <button onClick={alert("PFD WINDOW PLEASE")}>PDF</button> */}
                    </>
                    )
                }

            </div>
        </div>
    );
}

export default CardXl;
