import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg';
import logoMobile from '../assets/img/Icon/LOGO-UNACH.png'
import codiguitoQRcito from "../assets/img/Icon/qr-Unach.svg";

function Header() {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 my-2 font-sans">

                <div className="m-1 grid place-items-center ml-[20px]">
                    <img src={componentitoUnachLogo} className='hidden md:block md:ml-10' alt="Componentito UNACH Logo" />
                    <img src={logoMobile} className='h-24 md:hidden' alt="" />
                </div>

                <div className="grid place-items-center">
                    <div className='bg-gray-200 rounded sm:h-15 p-3'>
                        <p className='text-md md:text-base lg:text-lg text-center'>Sello de Recibido</p>
                        <p className='hidden lg:block'>Coordinación de Investigación y Posgrado de la UA</p>
                    </div>
                </div>
                
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-2 lg:place-items-center">
                    <div className=''>
                        {/* Aquí ira el número de Registro de Proyecto de Investigación*/}
                        <p className='text-center text-xs md:text-base lg:text-lg text-white'>Registro de Proyecto de Investigación</p>
                    </div>
                    <div className='flex justify-center p-3 sm:flex sm:p-5 lg:p-5 xl:p-7'>
                        <img src={codiguitoQRcito} className='h-[70px] w-[70px] md:w-[90px] md:h-[90px]' alt="Código QR" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;