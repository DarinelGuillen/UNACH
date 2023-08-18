import Header from '../atoms/Header';
import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import Footer from '../atoms/Footer';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";

function Seccion1Pag1() {
    return ( 
        <>
        <Header/>
        <div className="flex font-sans">
            <div className="flex w-1/6 justify-center mt-20 mb-20">
                <VerticalText/>
            </div>
            <div className='flex flex-col w-5/6 bg-white rounded-tl-lg'>
                <div>
                    <ClaveDeAcceso/>
                </div>
                <div class="flex items-center text-center w-full mt-20">
                    <img src={logoSinNadita}></img> 
                    <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                        <p className='text-3xl'>1.3 Persona responsable técnica</p>
                    </div>
                </div>
                <div className='text-center'>
                    <p className='font-bold text-xl text-gray-500'>Rellene los siguientes campos según como se requiera</p>
                </div>
                <div>
                    <simple-input width="90%" placeholder="Título" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Fecha de elaboración de propuesta" id="" height="auto"></simple-input>
                    <simple-input width="90%" placeholder="Lugar de realización" id="" height="auto"></simple-input>
                </div>
                <div class="flex items-center text-center w-full mt-20">
                    <img src={logoSinNadita}></img> 
                    <div className="bg-[#BCB785] w-5/6 text-white p-5 rounded-md">
                        <p className='text-3xl'>1.4 Área de conocimiento</p>
                    </div>
                    <div>
                        <simple-input width="90%" placeholder="Título" id="" height="auto"></simple-input>
                        <simple-input width="90%" placeholder="Fecha de elaboración de propuesta" id="" height="auto"></simple-input>
                        <simple-input width="90%" placeholder="Lugar de realización" id="" height="auto"></simple-input>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
     );
}

export default Seccion1Pag1;