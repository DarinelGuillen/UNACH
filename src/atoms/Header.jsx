import componentitoUnachLogo from '../assets/img/Icon/componenteUnachLogo.svg';
import codiguitoQRcito from "../assets/img/Icon/qr-Unach.svg";

function Header() {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 my-2 font-sans">
                <div className="m-1 grid place-items-center">
                    <img src={componentitoUnachLogo} alt="Componentito UNACH Logo" />
                </div>
                <div className="grid place-items-center">
                    <div className='bg-gray-200 text-xs md:text-base lg:text-lg text-center rounded sm:h-15 lg:h-16 xl:h-16 p-3'>
                        <p>Sello de Recibido. Coordinación de Investigación y Posgrado de la UA</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 place-items-center">
                    <div className='text-center text-xs md:text-base lg:text-lg text-white '>
                        {/* Aquí ira el número de Registro de Proyecto de Investigación*/}
                        <p>Registro de Proyecto de Investigación</p>
                    </div>
                    <div className='sm:p-6 md:p-8 lg:p-8 xl:p-10'>
                        <img src={codiguitoQRcito} alt="Código QR" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;