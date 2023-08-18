import componentitoUnachLogo from '../assets/img/Icon/Logo-Unach-negro.svg';
import { Link } from 'react-router-dom';
import arrowselector from '../assets/img/Icon/arrow.svg';
import "../assets/css/botoncito.css";

function Registro() {
    return ( 
        <>
        <div className='flex-col font-sans'>
            <div class="flex items-center justify-center min-h-screen">
                <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
                    <div className="m-1 flex justify-center mt-10 ">
                        <img src={componentitoUnachLogo} alt="Componentito UNACH Logo" />
                    </div>
                    <h3 class="text-2xl font-bold text-center mt-8">Inicio de sesión</h3>
                    <form action="">
                        <div class="mt-16">
                            <center><simple-input type="text" placeholder="Nombre completo" id="" width="90%" height="auto"></simple-input></center>
                        </div>
                        <div class="mt-16">
                            <center><simple-input type="text" placeholder="Nombre de usuario" id="" width="90%" height="auto"></simple-input></center>
                        </div>
                        <div className='mt-14 mb-10'>
                            <center><simple-input type="text" placeholder="Contraseña" id="" width="90%" height="auto"></simple-input></center> 
                        </div>
                        <div className='flex justify-between mt-24'>
                            <Link to="/login">
                                <button>
                                    <div className='estiloBoton grid'>
                                        <div className='grid place-content-center'>
                                            <img src={arrowselector}></img>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                            <button>
                                <div className='estiloBotonSiguiente grid'>
                                    <div className='grid place-content-center'>
                                        <p>Siguiente</p>
                                    </div>
                                </div>
                            </button>
                            <div className='flex'>
                                <button>
                                    <Link to="/login" className='estiloTextoRegistro items-center'>Inicia sesión</Link>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
     );
}

export default Registro;