import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg';
import logoMobile from '../assets/img/Icon/LOGO-UNACH.png'
import codiguitoQRcito from "../assets/img/Icon/qr-Unach.svg";

function Header() {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 my-2 font-sans">

                <div className="m-1 grid place-items-center ml-[20px]">
                    <img src={componentitoUnachLogo} className='hidden lg:block' alt="Componentito UNACH Logo" />
                    <img src={logoMobile} className='h-20 lg:hidden' alt="" />
                </div>

                <div className="grid place-items-center">
                    <div className='bg-gray-200 rounded sm:h-15 lg:h-16 xl:h-20 p-3'>
                        <p className='text-md md:text-base lg:text-lg text-center'>Sello de Recibido</p>
                        <p className='hidden lg:block'>Coordinación de Investigación y Posgrado de la UA</p>
                    </div>
                </div>
                
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-2 lg:place-items-center">
                    <div className=''>
                        {/* Aquí ira el número de Registro de Proyecto de Investigación*/}
                        <p className='text-center text-xs md:text-base lg:text-lg text-white'>Registro de Proyecto de Investigación</p>
                    </div>
                    <div className='sm:p-6 md:p-8 lg:p-8 xl:p-10'>
                        <img src={codiguitoQRcito} className='h-[60px] w-[60px] ml-10' alt="Código QR" />
                    </div>
                </div>

            </div>
        </>
    );
}

export default Header;